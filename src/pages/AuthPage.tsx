import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Loader2, ArrowLeft } from 'lucide-react';

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
            <CardTitle className="text-2xl font-bold">Вхід до особистого кабінету</CardTitle>
            <CardDescription>
              Введіть ваші дані для доступу до закритих розділів сайту
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="surname" className="text-sm font-medium">
                  Прізвище (великими літерами)
                </label>
                <Input
                  id="surname"
                  type="text"
                  placeholder="ІВАНОВ"
                  value={surname}
                  onChange={(e) => setSurname(e.target.value.toUpperCase())}
                  disabled={loading}
                  className="w-full"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="passport" className="text-sm font-medium">
                  Номер паспорту
                </label>
                <Input
                  id="passport"
                  type="text"
                  placeholder="НС0001"
                  value={passport}
                  onChange={(e) => setPassport(e.target.value.toUpperCase())}
                  disabled={loading}
                  className="w-full"
                />
              </div>

              {error && (
                <Alert variant="destructive">
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}

              <Button
                type="submit"
                className="w-full"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Вхід...
                  </>
                ) : (
                  'Увійти'
                )}
              </Button>
            </form>

            <div className="mt-6 text-sm text-muted-foreground">
              <p className="font-medium mb-2">Інструкції:</p>
              <ul className="space-y-1 text-xs">
                <li>• Прізвище вводьте великими літерами українською мовою</li>
                <li>• Номер паспорту вводьте точно як вказано в документах</li>
                <li>• Доступ мають тільки авторизовані громадяни</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AuthPage;