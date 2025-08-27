import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, MapPin, Users, Star, ArrowLeft, MessageCircle} from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import AuthModal from "@/components/AuthModal";

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
          <div className="text-center mb-12">
            <div className="text-8xl mb-6">🌲🍖🍻</div>
            <h1 className="text-4xl md:text-5xl font-bold text-festival-blue mb-4">
              Республіка Вейву 2026
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Інформації про Фестиваль-2026 поки немає. Тільки ж Фестиваль-2025 закінчився.
            </p>
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
                  Поки не узгоджено
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
                  Поки не узгоджено
                </p>
                <p className="text-muted-foreground">
                  Місце проведення Республіки Вейву
                </p>
                <div className="aspect-w-16 aspect-h-9">
                  <iframe
                    className="w-full h-full rounded-md border"
                    loading="lazy"
                    allowFullScreen
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d20794.270709954388!2d23.51009730764161!3d49.34677610635129!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sua!4v1753967277887!5m2!1sen!2sua&q=Карпати,Україна"
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
                  <h4 className="font-bold text-festival-blue mb-2">🎵 1</h4>
                  <p className="text-muted-foreground mb-4">
                    Буде музика. Детальніше потім
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-festival-blue mb-2">🏛️ 2</h4>
                  <p className="text-muted-foreground mb-4">
                    Будуть міністерства. Детальніше потім
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-festival-blue mb-2">🎪 3</h4>
                  <p className="text-muted-foreground mb-4">
                    Будуть розваги. Детальніше потім
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-festival-blue mb-2">🌱 4</h4>
                  <p className="text-muted-foreground mb-4">
                    Буде їжа. Детальніше потім
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
                <strong>Перелік майбутніх жителів буде поповнюватися тут</strong>
              </p>
              <p className="text-muted-foreground mb-6">
                Набір жителів ще не розпочався
              </p>
            </CardContent>
          </Card>

        </div>
      </div>
    </div>
  );
};

export default NextFestival;