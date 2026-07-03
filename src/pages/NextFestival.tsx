import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, MapPin, Users, Star, ArrowLeft, MessageCircle} from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import AuthModal from "@/components/AuthModal";
import FestivalCountdown from "@/components/FestivalCountdown";

const NextFestival = () => {
  const navigate = useNavigate();
  const { isAuthenticated, loading } = useAuth();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleAuthSuccess = () => {
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-festival-blue via-festival-blue/90 to-festival-yellow/20 flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-white/30 border-t-white rounded-full animate-spin" />
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="max-w-md w-full p-6">
          <Card>
            <CardHeader className="text-center">
              <div className="text-6xl mb-4">🌲🍖🍻</div>
              <CardTitle className="text-2xl text-festival-blue">
                Наступний фестиваль
              </CardTitle>
              <p className="text-muted-foreground">
                Доступ до інформації про наступний фестиваль надається лише громадянам Республіки
              </p>
            </CardHeader>
            <CardContent>
              <AuthModal onSuccess={handleAuthSuccess}>
                <Button variant="hero" className="w-full" size="lg">
                  Авторизуватися
                </Button>
              </AuthModal>
              
              <Button 
                variant="outline" 
                className="w-full mt-3"
                onClick={() => navigate("/")}
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Повернутися до головної
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="bg-white border-b border-festival-blue/10 sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Button 
              variant="ghost" 
              onClick={() => navigate("/")}
              className="text-festival-blue hover:text-festival-blue/80"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Назад до головної
            </Button>
            <h1 className="text-xl font-bold text-festival-blue">Наступний фестиваль</h1>
            <div className="w-20"></div> {/* Spacer for centering */}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          
          {/* Hero Section */}
          <div className="text-center mb-12 rounded-2xl p-8 md:p-12 bg-gradient-to-br from-festival-blue via-festival-blue/90 to-festival-blue-light shadow-hero">
            <div className="text-7xl md:text-8xl mb-6">🌲🍖🍻</div>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
              Республіка Вейву 2026
            </h1>
            <p className="text-xl text-primary-foreground/80 mb-10">
              Вейву-2026 вже близко! Вся актуальна інформація тут.
            </p>
            <FestivalCountdown />
          </div>

          {/* Key Information Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="border-festival-blue/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-festival-blue">
                  <Calendar className="w-6 h-6" />
                  Дата проведення
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-festival-yellow mb-2">
                  17-19 липня 2026-го року
                </p>
                <p className="text-muted-foreground">
                  Три дні незабутніх вражень у серці Карпат
                </p>
              </CardContent>
            </Card>

            <Card className="border-festival-blue/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-festival-blue">
                  <MapPin className="w-6 h-6" />
                  Локація
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-festival-yellow mb-2">
                  НПП "Сколівські Бескиди", в'їзд з сторони села Майдан
                </p>
                <p className="text-muted-foreground">
                  Клацніть на карту для її збільшення
                </p>
                <div className="aspect-w-16 aspect-h-9">
                  <iframe
                    className="w-full h-full rounded-md border"
                    loading="lazy"
                    allowFullScreen
                    src="https://maps.google.com/maps?q=49.1138573,23.2799233&z=15&output=embed"
                  ></iframe>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Communication Group */}
          <Card className="mb-8 bg-gradient-to-r from-blue-50 to-cyan-50 border-blue-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-festival-blue">
                <MessageCircle className="w-6 h-6" />
                Комунікаційна група
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-6">
                Приєднання до комунікаційної групи здійснюється після підтвердження участі у Фестивалі
              </p>
              <Button 
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg flex items-center gap-3 w-full md:w-auto"
                onClick={() => window.open('https://t.me/ratkonz', '_blank')}
              >
                <svg 
                  className="w-5 h-5" 
                  viewBox="0 0 24 24" 
                  fill="currentColor"
                >
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
                Зв'язок з міністерством юстиції
              </Button>
            </CardContent>
          </Card>

          {/* New Features */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-festival-blue">
                <Star className="w-6 h-6" />
                Важлива інформація для 2026 року
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-1 gap-6">
                <div>
                  <h4 className="font-bold text-festival-blue mb-2">🎵 Музика</h4>
                  <p className="text-muted-foreground mb-4">
                    Республіка заохочує чіл, в тому числі і музику. Буде забезпечено як активний музичний відпочинок (танці), так і 
                    більш чільний (гітара).
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-festival-blue mb-2">🏛️ Міністерства</h4>
                  <p className="text-muted-foreground mb-4">
                    Усі активні міністерства продовжують свою роботу. Не забувайте про обов'язок долучатися до життя Республіки 
                    та допомагати їй усіма активними методами.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-festival-blue mb-2">🌱 Харчування</h4>
                  <p className="text-muted-foreground mb-4">
                    Харчування жителів цього року забезпечується міністерством Господарства.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-festival-blue mb-2">💵 Податковий збір</h4>
                  <p className="text-muted-foreground mb-4">
                    Заради забезпечення функціонування Республіки, усі жителі зобов'язані заздалегідь сплатити податковий збір. 
                    Цього року його визначено на рівні 2000 грн. Збір покриває:
                    <br />
                    1. Харчування впродовж трьох днів проведення Фестивалю.
                    <br />
                    2. Оплату в'їзду на територію Нацпарку (150 гривень з людини за три дні та 30 гривень з автомобіля).
                    <br />
                    3. Організацію розважальних заходів на час проведення Фестивалю та забезпечення функціонування Республіки.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Registration Info */}
          <Card className="bg-festival-yellow/10 border-festival-yellow">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-festival-blue">
                <Users className="w-6 h-6" />
                Жителі Республіки
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg mb-4">
                <strong>Попередньо підтверджені жителі Республіки у 2026-му році:</strong>
              </p>
              <p className="text-muted-foreground mb-6">
                1. Назар Задорожний
                <br />
                2. Наталя Нижник
                <br />
                3. Юрій Кравцов
                <br />
                4. Юрій Бокало
                <br />
                5. Ірина Бокало
                <br />
                6. Назарій Вовків
                <br />
                7. Богдан Гнатків
                <br />
                8. Ольга Сопотницька
                <br />
                9. Марія Матківська
                <br />
                10. Богдан Пагута
                <br />
                11. Вероніка Микитин
                <br />
                12. Вікторія Рудик
                <br />
                13. Анна Лацина
                <br />
                14. Наталія Криванчик
                <br />
                15. Ігор Лютик
                <br />
                16. Юрій Демко
                <br />
                17. Ярина Демко
              </p>
            </CardContent>
          </Card>

        </div>
      </div>
    </div>
  );
};

export default NextFestival;