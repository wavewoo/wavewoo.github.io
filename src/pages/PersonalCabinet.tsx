import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useNavigate } from 'react-router-dom';
import { User, LogOut, Home, Shield } from 'lucide-react';

const PersonalCabinet = () => {
  const { user, userProfile, signOut, loading } = useAuth();
  const navigate = useNavigate();

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-festival-blue via-festival-blue/90 to-festival-yellow/20 flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-white/30 border-t-white rounded-full animate-spin" />
      </div>
    );
  }

  if (!user || !userProfile) {
    navigate('/');
    return null;
  }

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-festival-blue via-festival-blue/90 to-festival-yellow/20">
      {/* Navigation */}
      <nav className="bg-white/10 backdrop-blur-sm border-b border-white/20">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white">Особистий кабінет</h1>
          <div className="flex gap-3">
            <Button 
              variant="outline" 
              onClick={() => navigate('/')}
              className="bg-white/10 border-white/30 text-white hover:bg-white/20"
            >
              <Home className="w-4 h-4 mr-2" />
              На головну
            </Button>
            <Button 
              variant="outline" 
              onClick={handleSignOut}
              className="bg-red-500/20 border-red-300/50 text-white hover:bg-red-500/30"
            >
              <LogOut className="w-4 h-4 mr-2" />
              Вийти
            </Button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Welcome Card */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-white text-2xl">
                <User className="w-8 h-8" />
                Вітаємо в особистому кабінеті!
              </CardTitle>
            </CardHeader>
            <CardContent className="text-white/90">
              <p className="text-lg mb-4">
                Ви увійшли як громадянин Республіки Вейву
              </p>
              <div className="flex items-center gap-3">
                <Badge variant="secondary" className="bg-festival-yellow text-festival-blue font-semibold">
                  <Shield className="w-4 h-4 mr-2" />
                  Авторизований користувач
                </Badge>
              </div>
            </CardContent>
          </Card>

          {/* Profile Information */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardHeader>
              <CardTitle className="text-white text-xl">Інформація профілю</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-white/70 text-sm font-medium">Прізвище</label>
                  <p className="text-white text-lg font-semibold mt-1">{userProfile.surname}</p>
                </div>
                <div>
                  <label className="text-white/70 text-sm font-medium">Серія та номер паспорту</label>
                  <p className="text-white text-lg font-semibold mt-1">{userProfile.passport}</p>
                </div>
                <div>
                  <label className="text-white/70 text-sm font-medium">Дата реєстрації</label>
                  <p className="text-white text-lg mt-1">
                    {new Date(userProfile.created_at).toLocaleDateString('uk-UA')}
                  </p>
                </div>
                <div>
                  <label className="text-white/70 text-sm font-medium">Статус</label>
                  <p className="text-green-300 text-lg font-semibold mt-1">Активний</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Access Rights */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardHeader>
              <CardTitle className="text-white text-xl">Права доступу</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-green-500/20 rounded-lg border border-green-300/30">
                  <span className="text-white">Галерея фестивалів</span>
                  <Badge variant="secondary" className="bg-green-500/30 text-green-100">
                    Доступ надано
                  </Badge>
                </div>
                <div className="flex items-center justify-between p-3 bg-green-500/20 rounded-lg border border-green-300/30">
                  <span className="text-white">Наступний фестиваль</span>
                  <Badge variant="secondary" className="bg-green-500/30 text-green-100">
                    Доступ надано
                  </Badge>
                </div>
                <div className="flex items-center justify-between p-3 bg-green-500/20 rounded-lg border border-green-300/30">
                  <span className="text-white">Детальна статистика фестивалів</span>
                  <Badge variant="secondary" className="bg-green-500/30 text-green-100">
                    Доступ надано
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardHeader>
              <CardTitle className="text-white text-xl">Швидкі дії</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Button 
                  variant="outline" 
                  onClick={() => navigate('/festival-details')}
                  className="bg-white/10 border-white/30 text-white hover:bg-white/20 h-auto py-4 flex-col gap-2"
                >
                  <span className="font-semibold">Галерея</span>
                  <span className="text-sm opacity-80">Переглянути фото</span>
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => navigate('/next-festival')}
                  className="bg-white/10 border-white/30 text-white hover:bg-white/20 h-auto py-4 flex-col gap-2"
                >
                  <span className="font-semibold">Наступний фестиваль</span>
                  <span className="text-sm opacity-80">Інформація про події</span>
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => navigate('/festival-stats')}
                  className="bg-white/10 border-white/30 text-white hover:bg-white/20 h-auto py-4 flex-col gap-2"
                >
                  <span className="font-semibold">Статистика</span>
                  <span className="text-sm opacity-80">Детальні дані</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PersonalCabinet;