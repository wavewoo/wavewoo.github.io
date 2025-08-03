import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, ArrowLeft, Lock, AlertCircle, CheckCircle } from 'lucide-react';

const AuthPage = () => {
  const { signIn, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [surname, setSurname] = useState('');
  const [passport, setPassport] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Redirect if already authenticated
  useEffect(() => {
    if (isAuthenticated) {
      navigate('/cabinet');
    }
  }, [isAuthenticated, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!surname.trim() || !passport.trim()) {
      setError('Будь ласка, заповніть всі поля');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const result = await signIn(surname.trim(), passport.trim());
      
      if (result.success) {
        // Redirect will happen automatically via useEffect
      } else {
        setError(result.error || 'Помилка входу');
      }
    } catch (err) {
      setError('Помилка входу в систему');
    } finally {
      setLoading(false);
    }
  };

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-6">
        <Button
          variant="ghost"
          onClick={handleGoHome}
          className="mb-4 text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          На головну
        </Button>

        <Card className="w-full">
          <CardHeader className="text-center">
            <CardTitle className="flex items-center justify-center gap-3 text-xl text-festival-blue">
              <Lock className="w-6 h-6" />
              Автентифікація
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-festival-yellow/10 p-4 rounded-lg mb-6">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-festival-blue mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-muted-foreground">
                    Доступ до особистого кабінету та певних сторінок сайту є тільки у громадян Республіки.
                  </p>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="surname" className="text-festival-blue font-medium">
                  Прізвище
                </Label>
                <Input
                  id="surname"
                  type="text"
                  placeholder="ВЕЙВІВСЬКИЙ"
                  value={surname}
                  onChange={(e) => setSurname(e.target.value.toUpperCase())}
                  disabled={loading}
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="passport" className="text-festival-blue font-medium">
                  Серія та номер паспорту
                </Label>
                <Input
                  id="passport"
                  type="text"
                  placeholder="АБ0000"
                  value={passport}
                  onChange={(e) => setPassport(e.target.value.toUpperCase())}
                  disabled={loading}
                  className="mt-1"
                />
              </div>

              {error && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                  <div className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-red-700">{error}</p>
                  </div>
                </div>
              )}

              <div className="pt-2">
                <Button
                  type="submit"
                  variant="hero"
                  disabled={loading || !surname.trim() || !passport.trim()}
                  className="w-full"
                >
                  {loading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                      Вхід...
                    </>
                  ) : (
                    <>
                      <CheckCircle className="w-4 h-4 mr-2" />
                      Увійти
                    </>
                  )}
                </Button>
              </div>
            </form>

            <div className="mt-6 p-3 bg-gray-50 rounded-lg">
              <p className="text-xs text-muted-foreground text-center mb-2 font-medium">
                Увага! Доступ надається лише громадянам Республіки з дійсним паспортом нового зразка
                (не раніше ніж 2022-го року видачі).
              </p>
              <div className="text-xs text-muted-foreground">
                <p className="font-medium mb-2">Інструкції:</p>
                <ul className="space-y-1">
                  <li>• Прізвище вводьте великими літерами українською мовою</li>
                  <li>• Серію та номер паспорту вводьте без пробілу</li>
                  <li>• Для успішного входу в кабінет ваш паспорт має бути дійсним</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AuthPage;