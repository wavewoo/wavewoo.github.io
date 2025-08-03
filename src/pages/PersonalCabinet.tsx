import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useNavigate } from 'react-router-dom';
import { User, LogOut, Home, Shield, Calendar, FileText, Award, Camera } from 'lucide-react';
import { getUserDetails } from '@/lib/supabase';
// Import the passport photos data
import { getPassportPhoto } from '@/data/passportPhotos';

const PersonalCabinet = () => {
  const { user, userProfile, signOut, loading } = useAuth();
  const navigate = useNavigate();

    if (loading || !userProfile) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-festival-blue via-festival-blue/90 to-festival-yellow/20 flex items-center justify-center">
        <div className="text-white text-xl">Завантаження...</div>
      </div>
    );
  }

  // Get additional user details
  const additionalUserInfo = userProfile ? 
    getUserDetails(userProfile?.surname, userProfile?.passport) : null;

  // Get user's passport photo
  const passportPhoto = userProfile ? 
    getPassportPhoto(userProfile.passport) : null;

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-festival-blue via-festival-blue/90 to-festival-yellow/20">
      {/* Navigation - keeping the same */}
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
              Головна
            </Button>
            <Button 
              variant="outline" 
              onClick={handleSignOut}
              className="bg-red-500/20 border-red-300/50 text-white hover:bg-red-500/30"
            >
              <LogOut className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Welcome Card - keeping the same */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-white text-2xl">
                <User className="w-8 h-8" />
                Республіка вітає вас, {additionalUserInfo?.firstName || userProfile?.surname}!
              </CardTitle>
            </CardHeader>
            <CardContent className="text-white/90">
              <p className="text-lg mb-4">
                Ви увійшли та можете користуватися всіма можливостями сайту.
              </p>
              <div className="flex items-center gap-3">
                <Badge variant="secondary" className="bg-festival-yellow text-festival-blue font-semibold">
                  <Shield className="w-4 h-5 mr-2" />
                  Громадянин Республіки Вейву
                </Badge>
                <br />
                <br />
              </div>
              {/* Warning Message for Frozen Status */}
              {additionalUserInfo?.citStatus === 'Заморожене' && (
                 <div className="bg-red-500/30 border border-red-500/50 text-white text-md font-semibold p-4 rounded-lg text-center">
                  УВАГА! ВАШЕ ГРОМАДЯНСТВО ЗАМОРОЖЕНЕ!<br />
                  Швидше за все, так сталося, бо ви не були присутніми принаймні на трьох останніх фестивалях. Зверніть увагу, що якщо ви будете відсутні
                  на п'яти останніх фестивалях, ваше громадянство та ваш паспорт втратять силу.
                </div>
              )}
            </CardContent>
          </Card>

          {/* Enhanced Profile Information */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardHeader>
              <CardTitle className="text-white text-xl">Ваш електронний паспорт:</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">              

              {/* Photo Section */}
              <div className="flex justify-left mb-6">
                <div className="relative">
                  <div className="w-32 h-42 bg-white/10 border-2 border-white/30 rounded-lg overflow-hidden shadow-lg">
                    {passportPhoto ? (
                      <img 
                        src={passportPhoto} 
                        alt="Паспортне фото" 
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <Camera className="w-8 h-8 text-white/50" />
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Subsections Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Basic Information */}
                <div>
                  <label className="text-white/70 text-sm font-medium">Прізвище</label>
                  <p className="text-white text-lg font-semibold mt-1">{userProfile?.surname}</p>
                </div>
                {additionalUserInfo?.firstName && (
                  <div>
                    <label className="text-white/70 text-sm font-medium">Ім'я</label>
                    <p className="text-white text-lg font-semibold mt-1">{additionalUserInfo.firstName}</p>
                  </div>
                )}
                <div>
                  <label className="text-white/70 text-sm font-medium">Серія та номер паспорту</label>
                  <p className="text-white text-lg font-semibold mt-1">{userProfile?.passport}</p>
                </div>
                {additionalUserInfo?.status && (
                  <div>
                    <label className="text-white/70 text-sm font-medium flex items-center gap-2">
                      <Award className="w-4 h-4" />
                      Статус у республіці
                    </label>
                    <p className="text-festival-yellow text-lg font-semibold mt-1">{additionalUserInfo.status}</p>
                  </div>
                )}
                
                {/* Dates */}
                {additionalUserInfo?.birthDate && (
                  <div>
                    <label className="text-white/70 text-sm font-medium flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      Дата народження
                    </label>
                    <p className="text-white text-lg mt-1">
                      {new Date(additionalUserInfo.birthDate).toLocaleDateString('uk-UA')}
                    </p>
                  </div>
                )}
                {additionalUserInfo?.citizenshipDate && (
                  <div>
                    <label className="text-white/70 text-sm font-medium flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      Дата отримання громадянства
                    </label>
                    <p className="text-white text-lg mt-1">
                      {new Date(additionalUserInfo.citizenshipDate).toLocaleDateString('uk-UA')}
                    </p>
                  </div>
                )}
                {additionalUserInfo?.passportDate && (
                  <div>
                    <label className="text-white/70 text-sm font-medium flex items-center gap-2">
                      <FileText className="w-4 h-4" />
                      Дата видачі паспорту
                    </label>
                    <p className="text-white text-lg mt-1">
                      {new Date(additionalUserInfo.passportDate).toLocaleDateString('uk-UA')}
                    </p>
                  </div>
                )}
                <div>
                  <label className="text-white/70 text-sm font-medium">Сімейний стан</label>
                  <p className="text-white text-lg mt-1">
                    {additionalUserInfo?.maritalStatus ? (() => {
                      const [spousePassport, marriageDate] = additionalUserInfo.maritalStatus.split('; ');
                      const spouseInfo = getUserDetails('', spousePassport);
                      return `Шлюб з ${spouseInfo?.firstName || ''} ${spouseInfo?.surname || ''}, паспорт ${spousePassport} зареєстровано ${new Date(marriageDate).toLocaleDateString('uk-UA')}`;
                    })() : 'Вільний'}
                  </p>
                </div>
                <div>
                  <label className="text-white/70 text-sm font-medium">Статус громадянства</label>
                  <p className={`text-lg font-semibold mt-1 ${
                    additionalUserInfo?.citStatus === 'Заморожене' ? 'text-red-400' : 'text-green-300'
                  }`}>
                    {additionalUserInfo?.citStatus || 'Дійсне'}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Internship Section */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardHeader>
              <CardTitle className="text-white text-xl">Стажування</CardTitle>
            </CardHeader>
            <CardContent>
              <div>
                <p className="text-white text-lg">
                  {additionalUserInfo?.internship ? (() => {
                    if (additionalUserInfo.internship === 'Непотрібне') {
                      return 'Ви були присутні на першому фестивалі і отримали громадянство автоматично, тому вам не довелося проходити стажування. Пишайтесь цим!';
                    }
                    const [year, ministry, supervisorPassport] = additionalUserInfo.internship.split(', ');
                    const supervisorInfo = getUserDetails('', supervisorPassport);
                    return `Стажування пройдено: ${year}, міністерство: ${ministry}, поручитель: ${supervisorInfo?.firstName || ''} ${supervisorInfo?.surname || ''}`;
                  })() : 'Інформація відсутня'}
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Attendance */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardHeader>
              <CardTitle className="text-white text-xl">Відвідування фестивалів</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
                {Array.from({ length: new Date().getFullYear() - 2014 + 1 }, (_, i) => {
                  const year = 2014 + i;
                  const attendedYears = additionalUserInfo?.attendance?.split(',').map(y => y.trim()) || [];
                  const attended = attendedYears.includes(year.toString());

                  return (
                    <div
                      key={year}
                      onClick={() => navigate("/festival-stats")}
                      className={`
                        relative group
                        text-white text-center py-2 rounded-lg transition-all duration-200 ease-in-out cursor-pointer
                        ${attended ? 'bg-green-500/30 hover:bg-green-500/50' : 'bg-red-500/30 hover:bg-red-500/50'}
                        transform hover:scale-105
                      `}
            >
                      {year}
                      {/* Tooltip */}
                      <div className={`
                        absolute -bottom-10 left-1/2 -translate-x-1/2 w-max px-3 py-1 rounded-md text-sm
                        ${attended ? 'bg-green-500/30 text-white' : 'bg-red-500/30 text-white'}
                        opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200
                        backdrop-blur-sm border border-white/20 z-10
                      `}>
                        {attended ? 'Відвідав\\ла' : 'Не відвідав\\ла'}
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions - keeping the same */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardHeader>
              <CardTitle className="text-white text-xl">Швидкі дії</CardTitle>
            </CardHeader>
            <CardContent>
              {/* Existing Grid for Other Buttons */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                <Button 
                  variant="outline" 
                  onClick={() => window.open("https://drive.google.com/drive/folders/1ExoCiVnXA2f50CPw060moGFx7kC3sBJw?usp=drive_link")}
                  className="bg-white/10 border-white/30 text-white hover:bg-white/20 h-auto py-4 flex-col gap-2"
                >
                  <span className="font-semibold">Повна галерея</span>
                  <span className="text-sm opacity-80">Переглянути фото</span>
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => navigate('/next-festival')}
                  className="bg-white/10 border-white/30 text-white hover:bg-white/20 h-auto py-4 flex-col gap-2"
                >
                  <span className="font-semibold">Наступний фестиваль</span>
                  <span className="text-sm opacity-80">Інформація про подію</span>
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
              {/* New Full-Width Section for Whiteboard Button */}
              <div className="w-full">
                <Button 
                  variant="outline" 
                  onClick={() => navigate('/whiteboard')}
                  className="w-full bg-white/10 border-white/30 text-white hover:bg-white/20 h-auto py-4 flex-col gap-2"
                >
                  <span className="font-semibold">Спільна дошка</span>
                  <span className="text-sm opacity-80">Діліться ідеями і малюнками</span>
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