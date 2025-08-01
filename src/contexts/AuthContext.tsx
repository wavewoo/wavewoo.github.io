import React, { createContext, useContext, useEffect, useState } from 'react';
import { User } from '@supabase/supabase-js';
import { supabase, isAuthorizedUser } from '@/lib/supabase';

interface AuthContextType {
  user: User | null;
  userProfile: UserProfile | null;
  loading: boolean;
  signIn: (surname: string, passport: string) => Promise<{ success: boolean; error?: string }>;
  signOut: () => Promise<void>;
  isAuthenticated: boolean;
}

interface UserProfile {
  id: string;
  user_id: string;
  surname: string;
  passport: string;
  created_at: string;
  updated_at: string;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Listen for auth changes FIRST
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (event, session) => {
      setUser(session?.user ?? null);
      if (session?.user) {
        // Defer profile loading to prevent deadlocks
        setTimeout(() => {
          loadUserProfile(session.user.id);
        }, 0);
      } else {
        setUserProfile(null);
      }
      setLoading(false);
    });

    // THEN get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      if (session?.user) {
        loadUserProfile(session.user.id);
      }
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  const loadUserProfile = async (userId: string) => {
    try {
      const { data, error } = await supabase
        .from('user_profiles')
        .select('*')
        .eq('user_id', userId)
        .single();

      if (error && error.code !== 'PGRST116') {
        console.error('Error loading user profile:', error);
        return;
      }

      setUserProfile(data);
    } catch (error) {
      console.error('Error in loadUserProfile:', error);
    }
  };

  const signIn = async (surname: string, passport: string): Promise<{ success: boolean; error?: string }> => {
    try {
      // Validate against authorized users
      if (!isAuthorizedUser(surname, passport)) {
        return { success: false, error: "Неправильні дані або паспорт недійсний." };
      }

      // Create a valid email format and secure password for Supabase
      const passportNum = passport.replace(/[^0-9]/g, ''); // Extract only numbers
      
      // Handle duplicate passport numbers by checking if email already exists
      let emailSuffix = '';
      let attemptCount = 0;
      let email = `user${passportNum}@gmail.com`;
      
      // If we've tried this passport number before and it failed, add a suffix
      const existingEmails = new Set();
      // We'll try up to 10 variations to handle duplicates
      while (attemptCount < 10) {
        const testEmail = attemptCount === 0 ? `user${passportNum}@gmail.com` : `user${passportNum}${attemptCount}@gmail.com`;
        
        // Try to sign in to see if this email exists
        const { error: testError } = await supabase.auth.signInWithPassword({
          email: testEmail,
          password: 'TestPassword123!', // Dummy password just to test existence
        });
        
        // If we get "Invalid login credentials", the email exists but password is wrong
        // If we get "User not found" or similar, the email is available
        if (testError && testError.message.includes('Invalid login credentials')) {
          attemptCount++;
          continue; // This email exists, try next variation
        } else {
          email = testEmail;
          break; // This email is available
        }
      }
      
      const password = `Password123!`; // Simple strong password
      
      console.log('Auth attempt:', { 
        originalSurname: surname, 
        originalPassport: passport, 
        generatedEmail: email, 
        passportNum 
      });

      // Try to sign in first
      const { data: signInData, error: signInError } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      // If sign in was successful, return success
      if (!signInError && signInData) {
        console.log('Sign in successful:', signInData);
        return { success: true };
      }

      // If user doesn't exist or any other error, try to create account
      console.log('Sign in failed, creating new account...');
      
      const { data: signUpData, error: signUpError } = await supabase.auth.signUp({
        email,
        password,
      });

      console.log('Sign up result:', { signUpData, signUpError });

      if (signUpError) {
        console.error('Sign up error:', signUpError);
        return { success: false, error: `Помилка створення акаунту: ${signUpError.message}` };
      }

      // Create user profile
      if (signUpData.user) {
        const { error: profileError } = await supabase
          .from('user_profiles')
          .insert([
            {
              user_id: signUpData.user.id,
              surname: surname.toUpperCase(),
              passport: passport.toUpperCase(),
            }
          ]);

        if (profileError) {
          console.error('Error creating profile:', profileError);
          // Don't fail the whole process if profile creation fails
        }
      }

      return { success: true };
    } catch (error) {
      console.error('Sign in error:', error);
      return { success: false, error: 'Помилка входу в систему' };
    }
  };

  const signOut = async () => {
    try {
      await supabase.auth.signOut();
    } catch (error) {
      console.error('Sign out error:', error);
    }
  };

  const value = {
    user,
    userProfile,
    loading,
    signIn,
    signOut,
    isAuthenticated: !!user,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};