import FestivalNavigation from "@/components/FestivalNavigation";
import FestivalHero from "@/components/FestivalHero";
import FestivalSection from "@/components/FestivalSection";
import MinistryModal from "@/components/MinistryModal";
import SymbolModal from "@/components/SymbolModal";
import GalleryModal from "@/components/GalleryModal";
import ConstitutionModal from "@/components/ConstitutionModal";
import CitizenshipModal from "@/components/CitizenshipModal";
import FirstVisitLanding from "@/components/FirstVisitLanding";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "sonner";
import { useState, useEffect } from "react";
import passportImage from "@/assets/festival-passport.png";
import coatOfArms from "@/assets/coat-of-arms.png";
import flagWeywu from "@/assets/flag-weywu.png";
import { getUserDetails } from '@/lib/supabase';

type ViewState = 'loading' | 'firstVisit' | 'transitioning' | 'main';

const Index = () => {
  const navigate = useNavigate();
  const { isAuthenticated, userProfile, signOut } = useAuth();
  const [showUserMenu, setShowUserMenu] = useState(true);
  const [isAtTop, setIsAtTop] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [viewState, setViewState] = useState<ViewState>('loading');
  
  // Get additional user details
  const additionalUserInfo = userProfile ? 
    getUserDetails(userProfile?.surname, userProfile?.passport) : null;

  // Check if it's first visit on component mount
  useEffect(() => {
    const hasVisited = localStorage.getItem('hasVisitedWeywu');
    if (!hasVisited && !isAuthenticated) {
      setViewState('firstVisit');
    } else {
      setViewState('main');
    }
  }, [isAuthenticated]);

  const handleFirstVisitComplete = () => {
    setViewState('transitioning');
    
    setTimeout(() => {
      localStorage.setItem('hasVisitedWeywu', 'true');
      setViewState('main');
    }, 1000); // Match transition duration
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Track if we're at the very top
      setIsAtTop(currentScrollY < 110);
      
      // Show menu when at top of page or when scrolling up
      if (currentScrollY < 10 || currentScrollY < lastScrollY) {
        setShowUserMenu(true);
      } else {
        // Hide when scrolling down
        setShowUserMenu(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const handleSignOut = async () => {
    await signOut();
    toast.success("Ви вийшли з системи");
  };
  
  const ministries = [
    {
      title: "Міністерство Фінансів",
      description: "Відповідає за складання бюджету Республіки на кожен поточний звітний рік та збір податків.",
      icon: "💵",
      detailedContent: "Міністерство Фінансів курує фінансові аспекти фестивалю, включаючи бюджетування, звітність та контроль витрат. Для забезпечення функціонування держави, необхідним є збір податків з населення Вейву.",
      responsibilities: [
        "Складання чорновика бюджету Республіки",
        "Розподіл фінансових потоків для державних закупівель", 
        "Збір податків з населення",
        "Розподіл надлишку бюджетних надходжень",
        "Добір податків у випадку кризових ситуацій"
      ]
    },
    {
      title: "Міністерство Культури",
      description: "Координує культурні заходи та творчі майданчики для відвідувачів.",
      icon: "🎭",
      detailedContent: "Міністерство Культури розвиває освітню та просвітницьку складову фестивалю. Організовує інтерактивні заходи, що дозволяють відвідувачам не лише споглядати, а й брати активну участь у культурному житті.",
      responsibilities: [
        "Організація розважальних та освітніх заходів",
        "Координація музичних та театральних виступів",
        "Створення інтерактивних культурних зон",
        "Проведення лекцій та дискусій про мистецтво",
        "Організація виставок та інсталяцій"
      ]
    },
    {
      title: "Міністерство Юстиції",
      description: "Забезпечує правову ефективність функціонування держави.",
      icon: "⚖️",
      detailedContent: "Міністерство Юстиції відповідає за правову базу фестивалю, забезпечуючи тлумачення та дотримання законодавства, а також захист прав жителів.",
      responsibilities: [
        "Складання чорновиків нормативно-правових актів",
        "Тлумачення законодавства Республіки",
        "Організація виборів Президента Республіки",
        "Проведення соціологічних досліджень серед населення",
        "Забезпечення правової допомоги та консультацій",
      ]
    },
    {
      title: "Міністерство Охорони Здоров'я",
      description: "Забезпечує запобігання випадкам смерті у Республіці.",
      icon: "👨‍⚕️",
      detailedContent: "Міністерство Охорони Здоров'я відповідає за медичне обслуговування жителів Республіки, організовуючи роботу медичних пунктів та забезпечуючи доступ до вакцинації.",
      responsibilities: [
        "Надання невідкладної медичної допомоги",
        "Забезпечення вакцинації населення",
        "Координація роботи пунктів першої допомоги",
        "Організація профілактичних оглядів",
        "Видалення кліщакуні"
      ]
    },
    {
      title: "Міністерство Енергетики",
      description: "Забезпечує енергією жителів Республіки у будь-яких її формах .",
      icon: "⚡",
      detailedContent: "Міністерство Енергетики відповідає за енергетичну безпеку Республіки, забезпечуючи стабільні постачання дров та інших енергоресурсів, таких як алкоголь.",
      responsibilities: [
        "Забезпечення дров для населення",
        "Організація локальних зборів алкогольних напоїв",
        "Розливання алкогольних напоїв у випадку нездатності населення зробити це самостійно",
        "Вирішення кризових ситуацій з постачанням алкоголю",
        "Контроль якості алкогольних напоїв"
      ]
    },
    {
      title: "Міністерство Господарства",
      description: "Відповідає за продовольче забезпечення Республіки до та під час проведення Фестивалю.",
      icon: "🍲",
      detailedContent: "Міністерство Господарства забезпечує стабільне постачання продуктів харчування та напоїв для жителів Республіки під час фестивалю.",
      responsibilities: [
        "Організація постачання продуктів харчування",
        "Координація роботи місцевих виробників продовольства",
        "Надання рецептів та кулінарних порад",
        "Проведення гастрономічних майстер-класів",
        "Приготування традиційних страв Республіки"
      ]
    },
    {
      title: "Міністерство Благоустрою та Охорони Довкілля",
      description: "Відповідальне за забезпечення екологічної сталості проведення Фестивалю та благоустрій території Республіки",
      icon: "🏞️",
      detailedContent: "Міністерство Благоустрою та Охорони Довкілля забезпечує екологічну безпеку та чистоту території Республіки.",
      responsibilities: [
        "Організація прибирання території Республіки",
        "Забезпечення екологічної безпеки під час фестивалю",
        "Збір унікального сміття з метою його подальшої утилізації",
        "Організація туалетів",
        "Проведення екологічних акцій та заходів",
      ]
    },
    {
      title: "Міністерство Брендингу",
      description: "Відповідальне за творчу гармонію у Республіці, дизайн державної продукції та промоцію Республіки",
      icon: "🔙",
      detailedContent: "Міністерство Брендингу формує імідж Республіки у медійному просторі, розробляє дизайн державної продукції.",
      responsibilities: [
        "Дизайн державних символів та продукції",
        "Надання державної символіки для особистого використання",
        "Координація роботи з журналістами та блогерами",
        "Створення промо-матеріалів та рекламних кампаній",
        "Організація партнерських відносин та спонсорства"
      ]
    }
  ];

  const symbols = [
    {
      title: "Герб Республіки",
      description: "Шість жовтих пластикових стаканчиків, нанизаних один на одного",
      icon: "🛡️",
      detailedContent: "Герб Республіки Вейву являє собою унікальну композицію, що поєднує в собі символізм вживання алкоголю у простій та чіловій атмосфері. Жовті стаканчики були наявні ще під час першого Фестивалю проголошення Республіки у 2014-му році, а їх число - шість - символізує шість перших громадян-засновників Республіки.",
      image: coatOfArms,
      downloadFiles: [
        {
          url: "/coat-of-arms.jpg",
          label: "Завантажити JPG",
          filename: "герб-республіки.jpg"
        },
        {
          url: "/coat-of-arms.pdf",
          label: "Завантажити PDF",
          filename: "герб-республіки.pdf"
        }
      ]
    },
    {
      title: "Прапор Вейву",
      description: "Біле полотно із зображенням та двома вертикальними смугами: жовтою та темно-синьою",
      icon: "🏴",
      detailedContent: "Державний прапор Республіки Вейву являє собою біле полотно із зображенням на ньому та написом \"WAVEWOO\". Зображення символізує древній втрачений прапор Республіки, вперше піднятий ще в 2014-му році. Жовта смуга символізує колір гербу, темно-синя - колір паспорта Республіки Вейву. За свою історію прапор Республіки був змінений двічі. Сучасний дизайн затверджений у 2025-му році.",
      image: flagWeywu,
      downloadFiles: [
        {
          url: "/flag-weywu.jpg",
          label: "Завантажити JPG",
          filename: "прапор-вейву.jpg"
        },
        {
          url: "/flag-weywu.pdf",
          label: "Завантажити PDF",
          filename: "прапор-вейву.pdf"
        }
      ]
    },
    {
      title: "Гімн Республіки",
      description: "Офіційний гімн Республіки Вейву, що виконується на відкритті фестивалю та при офіційних церемоніях",
      icon: "🎶",
      detailedContent: `Текст гімну Республіки Вейву:

Куплет
Серед гір могутніх чиста тече ріка
Поміж дерев високих держава розцвіла!

Приспів
Вейву! Вейву! Край сонця й свободи!
Під прапором нашим єднаймось навік!
Усім наливайте, забудем незгоди,
Збиратися будем довік кожен рік!`,
      audio: "/anthem.mp3"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* User Menu - appears/disappears based on scroll direction */}
      <div className={`fixed top-4 right-4 z-[60] pointer-events-auto transition-all duration-500 ease-in-out ${
        showUserMenu && viewState !== 'firstVisit' && viewState !== 'transitioning'
          ? 'translate-y-0 opacity-100' 
          : '-translate-y-full opacity-0'
      }`}>
        <div className={`${isAtTop ? 'bg-white/10 border-white/20' : 'bg-white border-gray-200'} backdrop-blur-sm rounded-lg p-3 shadow-lg transition-colors duration-300`}>
          {isAuthenticated ? (
            <div className="flex items-center gap-3">
              <div className={`${isAtTop ? 'text-white' : 'text-gray-800'} text-sm transition-colors duration-300`}>
                Вітаємо, <span className="font-semibold">{additionalUserInfo?.firstName || userProfile?.surname}</span>!
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => navigate('/cabinet')}
                className={`${isAtTop ? 'bg-white/10 border-white/30 text-white hover:bg-white/20' : 'bg-gray-100 border-gray-300 text-gray-800 hover:bg-gray-200'} transition-all duration-300 pointer-events-auto cursor-pointer`}
              >
                Кабінет
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={handleSignOut}
                className={`${isAtTop ? 'bg-red-500/20 border-red-300/50 text-white hover:bg-red-500/30' : 'bg-red-100 border-red-300 text-red-700 hover:bg-red-200'} transition-all duration-300 pointer-events-auto cursor-pointer`}
              >
                <LogOut className="w-4 h-4" />
              </Button>
            </div>
          ) : (
            <Button
              variant="outline"
              size="sm"
              onClick={() => navigate('/auth')}
              className={`${isAtTop ? 'bg-white/10 border-white/30 text-white hover:bg-white/20' : 'bg-gray-100 border-gray-300 text-gray-800 hover:bg-gray-200'} transition-all duration-300 pointer-events-auto cursor-pointer`}
            >
              Вхід для громадян
            </Button>
          )}
        </div>
      </div>

      {/* Hero Section - Always present but controlled visibility */}
      <div className={`transition-all duration-500 ease-in-out ${
        viewState === 'firstVisit' 
          ? 'invisible absolute inset-0 opacity-0 pointer-events-none' 
          : 'visible relative opacity-100'
      }`}>
        <FestivalNavigation />
        <FestivalHero />
      </div>

      {/* First Visit Landing */}
      {(viewState === 'firstVisit' || viewState === 'transitioning') && (
        <div className={`fixed inset-0 z-50 transition-all duration-500 ease-in-out ${
          viewState === 'transitioning' ? 'opacity-0' : 'opacity-100'
        }`}>
          <FirstVisitLanding onComplete={handleFirstVisitComplete} />
        </div>
      )}

      {/* Main content - shows after transition */}
      {(viewState === 'main' || viewState === 'transitioning') && (
        <div className={`transition-all duration-1000 ease-in-out ${
          viewState === 'main' ? 'opacity-100' : 'opacity-0'
        }`}>
          {/* About Section */}
          <FestivalSection id="about" title="Про Республіку Вейву" backgroundColor="muted">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                <strong className="text-festival-blue">Республіка Вейву</strong> – це не просто країна, 
                це цілий світ, де чіл, атмосфера та гори об'єднуються в неймовірну симфонію. 
                Тут кожен може знайти щось особливе для себе.
              </p>
              
              <div className="grid md:grid-cols-3 gap-8 mt-12">
                <div className="text-center">
                  <div className="text-6xl text-festival-yellow mb-4">🌲</div>
                  <h3 className="text-xl font-bold text-festival-blue mb-2">Унікальна атмосфера</h3>
                  <p className="text-muted-foreground">Гори, локальне державотворення та алкоголь надають
                     відпочинку неповторного колориту</p>
                </div>
                
                <div className="text-center">
                  <div className="text-6xl text-festival-yellow mb-4">🌟</div>
                  <h3 className="text-xl font-bold text-festival-blue mb-2">Свобода самовираження</h3>
                  <p className="text-muted-foreground">Будьте тими, ким хочете бути. На території 
                    Республіки Вейву немає обмежень</p>
                </div>
                
                <div className="text-center">
                  <div className="text-6xl text-festival-yellow mb-4">🤝</div>
                  <h3 className="text-xl font-bold text-festival-blue mb-2">Спільнота</h3>
                  <p className="text-muted-foreground">Нові знайомства та дружні зв'язки з мінімумом токсичності</p>
                </div>
              </div>
              
              <div className="mt-12 text-center">
                <Button 
                  variant="hero" 
                  size="lg"
                  onClick={() => navigate("/festival-details")}
                >
                  Більше інформації
                </Button>
              </div>
            </div>
          </FestivalSection>

          {/* Next Festival Section */}
          <FestivalSection id="next-festival" title="Наступний фестиваль">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Готуйтесь до наступного фестивалю! Детальна інформація для громадян Республіки доступна 
                за посиланням нижче.
              </p>
              
              <div className="bg-white p-8 rounded-lg border-2 border-festival-blue/10 mb-8">
                <div className="text-6xl text-festival-blue mb-6">🌲🍖🍻</div>
                <h3 className="text-2xl font-bold text-festival-blue mb-4">
                  Республіка Вейву 2026
                </h3>
                <p className="text-muted-foreground mb-6">
                  Інформація про дати, локацію та інші важливі оголошення тут:
                </p>
                
                <Button 
                  variant="hero" 
                  size="lg"
                  onClick={() => navigate("/next-festival")}
                >
                  Детальна інформація
                </Button>
              </div>
            </div>
          </FestivalSection>

          {/* Constitution Section */}
          <FestivalSection id="constitution" title="Конституція" backgroundColor="muted">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Конституція Республіки Вейву - документ, що встановлює принципи та правила 
                нашої держави. Тут закріплені права та обов'язки жителів Республіки.
              </p>
              
              <div className="bg-white p-8 rounded-lg border-2 border-festival-blue/10 mb-8">
                <div className="text-6xl text-festival-blue mb-6">📜</div>
                <h3 className="text-2xl font-bold text-festival-blue mb-4">
                  Конституція Республіки Вейву
                </h3>
                <p className="text-muted-foreground mb-6">
                  Прийнята 23 липня 2021 року Верховною Лігою Джекесу Республіки Вейву
                </p>
                
                <ConstitutionModal>
                  <Button variant="hero" size="lg">
                    Читати Конституцію
                  </Button>
                </ConstitutionModal>
              </div>
            </div>
          </FestivalSection>

          {/* Passport Section */}
          <FestivalSection id="passport" title="Паспорт громадянина">
            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <img 
                    src={passportImage}
                    alt="Паспорт громадянина Республіки Вейву"
                    className="w-full max-w-md mx-auto rounded-lg shadow-lg border-4 border-festival-yellow"
                  />
                </div>
                
                <div>
                  <h3 className="text-3xl font-bold text-festival-blue mb-6">
                    Громадянство Вейву
                  </h3>
                  
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    Громадянство Республіки Вейву посвідчується паспортом Республіки Вейву. 
                    Це не просто символічний жест - це ваш пропуск до унікального досвіду.
                  </p>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">🎫</span>
                      <div>
                        <h4 className="font-bold text-festival-blue">Право вільного в'їзду</h4>
                        <p className="text-muted-foreground">Тільки громадяни мають право на в'їзд до 
                          Республіки Вейву у будь-який час
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">🏆</span>
                      <div>
                        <h4 className="font-bold text-festival-blue">Право обиратися та бути обраним</h4>
                        <p className="text-muted-foreground">Тільки громадяни можуть стати міністрами чи Президентом</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">1️⃣</span>
                      <div>
                        <h4 className="font-bold text-festival-blue">Вищість</h4>
                        <p className="text-muted-foreground">Громадяни Вейву є кращими та вищими за будь-яких інших
                          людей на світі
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <CitizenshipModal>
                    <Button variant="hero" size="lg">
                      Порядок отримання громадянства
                    </Button>
                  </CitizenshipModal>
                </div>
              </div>
            </div>
          </FestivalSection>

          {/* Ministries Section */}
          <FestivalSection id="ministries" title="Міністерства" backgroundColor="muted">
            <p className="text-lg text-muted-foreground text-center mb-6 leading-relaxed">
                    Життя у Республіці - це не тільки права, а й обов'язки. 
                    На щастя, тут кожен може знайти своє місце.<br />
                    Зверніть увагу, що перелік міністерств не є вичерпним. Зверніться до органів влади у випадку наявності питань.
                  </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {ministries.map((ministry, index) => (
                <MinistryModal
                  key={index}
                  title={ministry.title}
                  description={ministry.description}
                  icon={ministry.icon}
                  detailedContent={ministry.detailedContent}
                  responsibilities={ministry.responsibilities}
                >
                  <div className="bg-white border-2 border-festival-blue/10 hover:border-festival-yellow hover:shadow-lg transition-all duration-300 transform hover:scale-105 p-6 rounded-lg cursor-pointer">
                    <div className="text-center">
                      <div className="text-4xl mb-4">{ministry.icon}</div>
                      <h3 className="text-lg font-bold text-festival-blue mb-3">
                        {ministry.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                        {ministry.description}
                      </p>
                      <div className="text-festival-yellow font-medium text-sm">
                        Клікніть для деталей →
                      </div>
                    </div>
                  </div>
                </MinistryModal>
              ))}
            </div>
          </FestivalSection>

          {/* State Symbols Section */}
          <FestivalSection id="symbols" title="Державні символи">
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {symbols.map((symbol, index) => (
                <SymbolModal
                  key={index}
                  title={symbol.title}
                  description={symbol.description}
                  icon={symbol.icon}
                  detailedContent={symbol.detailedContent}
                  image={symbol.image}
                  audio={symbol.audio}
                  downloadFiles={symbol.downloadFiles}
                >
                  <div className="text-center cursor-pointer hover:scale-105 transition-transform duration-300 p-6 bg-white rounded-lg border-2 border-transparent hover:border-festival-yellow">
                    <div className="text-6xl mb-6">{symbol.icon}</div>
                    <h3 className="text-xl font-bold text-festival-blue mb-4">{symbol.title}</h3>
                    <p className="text-muted-foreground">{symbol.description}</p>
                    <div className="mt-4 text-festival-yellow font-medium">Клікніть для деталей →</div>
                  </div>
                </SymbolModal>
              ))}
            </div>
          </FestivalSection>

          {/* Gallery Section */}
          <FestivalSection id="gallery" title="Галерея" backgroundColor="muted">
            <div className="max-w-6xl mx-auto">
              <p className="text-center text-lg text-muted-foreground mb-12">
                Перегляньте фотографії з різних років проведення фестивалю.
                <br />
                Увага! Повна галерея (що доступна за посиланням для громадян Республіки) все ще поповнюється і поки включає тільки фото (не відео), які були публічно поширені 
                у організаційних групах. Якщо ви хочете поповнити галерею, зверніться до адміністрації
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-8">
                {Array.from({ length: 12 }, (_, i) => {
                  const year = 2014 + i;
                  return (
                    <GalleryModal key={year} year={year}>
                      <Button
                        variant="outline"
                        className="h-20 text-lg font-bold border-2 border-festival-blue text-festival-blue hover:bg-festival-blue hover:text-white transition-all duration-300 transform hover:scale-105"
                      >
                        {year}
                      </Button>
                    </GalleryModal>
                  );
                })}
              </div>
              
              <div className="text-center">
                <p className="text-muted-foreground mb-6">
                  Клікніть на рік, щоб переглянути фотографії з того фестивалю
                </p>
              </div>
            </div>
          </FestivalSection>

          {/* Festival Statistics Section */}
          <FestivalSection id="festival-stats" title="Детальна статистика Фестивалів" backgroundColor="muted">
            <div className="max-w-3xl mx-auto text-center">
              <div className="bg-white p-8 rounded-lg border-2 border-festival-blue/10 mb-8">
                <h3 className="text-2xl font-bold text-festival-blue mb-4">
                  Населення, дати, місця, вибори
                </h3>
                <Button 
                  variant="hero" 
                  size="lg"
                  onClick={() => navigate("/festival-stats")}
                >
                  Переглянути статистику
                </Button>
              </div>
            </div>
          </FestivalSection>

          {/* Footer */}
          <footer className="bg-festival-blue text-white py-12">
            <div className="container mx-auto px-4 text-center">
              <h3 className="text-2xl font-bold mb-4">Республіка Вейву</h3>
              <p className="text-festival-yellow mb-6">
                Територія твоєї свободи
              </p>

              <div className="flex justify-center space-x-6 text-2xl">
                <span className="cursor-pointer hover:text-festival-yellow transition-colors">📧</span>
                <span className="cursor-pointer hover:text-festival-yellow transition-colors">📱</span>
                <span className="cursor-pointer hover:text-festival-yellow transition-colors">🌐</span>
              </div>
              <p className="text-xs text-gray-300 mb-2 mt-4">
                Версія 2.5
              </p>
            </div>
          </footer>
        </div>
      )}
    </div>
  );
};

export default Index;