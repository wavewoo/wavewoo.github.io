import FestivalNavigation from "@/components/FestivalNavigation";
import FestivalHero from "@/components/FestivalHero";
import FestivalSection from "@/components/FestivalSection";
import MinistryModal from "@/components/MinistryModal";
import SymbolModal from "@/components/SymbolModal";
import GalleryModal from "@/components/GalleryModal";
import ConstitutionModal from "@/components/ConstitutionModal";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import passportImage from "@/assets/festival-passport.png";

const Index = () => {
  const navigate = useNavigate();
  
  const ministries = [
    {
      title: "Міністерство Музики",
      description: "Відповідає за програму фестивалю, відбір виконавців та організацію концертів на всіх сценах.",
      icon: "🎵",
      detailedContent: "Міністерство Музики є серцем фестивалю, що забезпечує високу якість музичної програми. Відділ курує роботу з букінг-агентами, організовує технічне забезпечення концертів та контролює дотримання розкладу виступів.",
      responsibilities: [
        "Відбір та запрошення артистів різних жанрів",
        "Складання програми фестивалю та розкладу виступів", 
        "Координація роботи звукорежисерів та технічних служб",
        "Організація репетицій та саундчеків",
        "Контроль якості звуку на всіх сценах"
      ]
    },
    {
      title: "Міністерство Культури",
      description: "Координує культурні заходи, майстер-класи та творчі майданчики для відвідувачів.",
      icon: "🎭",
      detailedContent: "Міністерство Культури розвиває освітню та просвітницьку складову фестивалю. Організовує інтерактивні заходи, що дозволяють відвідувачам не лише споглядати, а й брати активну участь у культурному житті.",
      responsibilities: [
        "Організація майстер-класів з різних видів мистецтва",
        "Координація театральних та танцювальних виступів",
        "Створення інтерактивних культурних зон",
        "Проведення лекцій та дискусій про мистецтво",
        "Організація виставок та інсталяцій"
      ]
    },
    {
      title: "Міністерство Гастрономії",
      description: "Забезпечує різноманітність кулінарних смаків та контролює якість харчування.",
      icon: "🍴",
      detailedContent: "Міністерство Гастрономії створює унікальний кулінарний досвід фестивалю. Співпрацює з кращими шеф-кухарями України та світу для представлення різноманітних кухонь та смаків.",
      responsibilities: [
        "Відбір та координація роботи ресторанів і фуд-траків",
        "Контроль якості та безпеки харчових продуктів",
        "Організація кулінарних майстер-класів",
        "Створення тематичних гастрономічних зон",
        "Забезпечення вегетаріанських та дієтичних опцій"
      ]
    },
    {
      title: "Міністерство Комфорту",
      description: "Піклується про зручність відвідувачів, розміщення та інфраструктуру фестивалю.",
      icon: "🏕️",
      detailedContent: "Міністерство Комфорту забезпечує всі побутові потреби відвідувачів фестивалю. Від організації кемпінгів до санітарних послуг - все для максимального комфорту гостей.",
      responsibilities: [
        "Організація та обслуговування кемпінгових зон",
        "Забезпечення санітарних послуг та чистоти",
        "Координація роботи пунктів першої допомоги",
        "Управління транспортом та парковками",
        "Організація зон відпочинку та релаксації"
      ]
    },
    {
      title: "Міністерство Безпеки",
      description: "Забезпечує безпеку всіх учасників фестивалю та охорону правопорядку.",
      icon: "🛡️",
      detailedContent: "Міністерство Безпеки координує всі служби безпеки фестивалю, співпрацює з правоохоронними органами та забезпечує мирну атмосферу заходу.",
      responsibilities: [
        "Організація служби безпеки та охорони",
        "Контроль доступу та перевірка квитків",
        "Співпраця з поліцією та службами екстреного реагування",
        "Забезпечення пожежної безпеки",
        "Моніторинг та попередження конфліктних ситуацій"
      ]
    },
    {
      title: "Міністерство Екології",
      description: "Відповідає за екологічність фестивалю та захист довкілля.",
      icon: "🌱",
      detailedContent: "Міністерство Екології реалізує концепцію сталого розвитку на фестивалі, впроваджуючи екологічні ініціативи та програми переробки відходів.",
      responsibilities: [
        "Організація роздільного збору та переробки відходів",
        "Впровадження використання відновлюваних джерел енергії",
        "Контроль впливу на навколишнє середовище",
        "Проведення еко-освітніх програм",
        "Координація з екологічними організаціями"
      ]
    },
    {
      title: "Міністерство Технологій",
      description: "Управляє технічним забезпеченням та цифровими рішеннями фестивалю.",
      icon: "💻",
      detailedContent: "Міністерство Технологій забезпечує високотехнологічну складову фестивалю, від мобільних додатків до складних сценічних інсталяцій.",
      responsibilities: [
        "Розробка та підтримка мобільного додатку фестивалю",
        "Забезпечення Wi-Fi та телекомунікаційних послуг",
        "Координація відеотрансляцій та стрімінгу",
        "Управління світловими та мультимедійними інсталяціями",
        "Технічна підтримка касових та платіжних систем"
      ]
    },
    {
      title: "Міністерство Зв'язків",
      description: "Відповідає за комунікації, PR та взаємодію з ЗМІ.",
      icon: "📢",
      detailedContent: "Міністерство Зв'язків формує імідж фестивалю у медійному просторі, організовує прес-заходи та підтримує зв'язки з громадськістю.",
      responsibilities: [
        "Організація прес-конференцій та інтерв'ю",
        "Управління соціальними мережами фестивалю",
        "Координація роботи з журналістами та блогерами",
        "Створення промо-матеріалів та рекламних кампаній",
        "Організація партнерських відносин та спонсорства"
      ]
    }
  ];

  const symbols = [
    {
      title: "Герб Республіки",
      description: "Стилізовані музичні ноти на тлі українських мотивів",
      icon: "🎼",
      detailedContent: "Герб Республіки Вейву являє собою унікальну композицію, що поєднує в собі музичні символи та традиційні українські орнаменти. В центрі розміщено скрипковий ключ, обрамлений колосками пшениці та калиновими листями. Золоті та сині кольори символізують багатство культурної спадщини та незламність духу. Герб був створений у 2015 році командою українських дизайнерів та затверджений радою фестивалю."
    },
    {
      title: "Прапор Вейву",
      description: "Жовто-блакитне полотнище з фестивальною емблемою",
      icon: "🏳️",
      detailedContent: "Офіційний прапор Республіки Вейву складається з двох горизонтальних смуг: верхньої жовтої та нижньої блакитної, що символізують сонце та небо. В центрі розташована емблема фестивалю - стилізована музична нота у формі серця. Прапор вперше було піднято на відкритті фестивалю 2016 року і з тих пір він завжди урочисто встановлюється на головній сцені."
    },
    {
      title: "Гімн Республіки",
      description: "Мелодія, що об'єднує всі музичні напрями фестивалю",
      icon: "🎶",
      detailedContent: "Гімн Республіки Вейву - це унікальна музична композиція, створена спеціально для фестивалю. Вона поєднує в собі елементи різних музичних жанрів: від фолку до електронної музики. Мелодія була написана у 2017 році колективом українських композиторів під керівництвом лауреата премії \"Золота дзиґа\". Гімн виконується на відкритті та закритті кожного фестивального дня, створюючи атмосферу єдності серед відвідувачів."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <FestivalNavigation />
      <FestivalHero />
      
      {/* About Section */}
      <FestivalSection id="about" title="Про фестиваль">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            <strong className="text-festival-blue">Республіка Вейву</strong> — це не просто фестиваль, 
            це цілий світ, де музика, мистецтво та культура об'єднуються в неймовірну симфонію. 
            Тут кожен може знайти щось особливе для себе.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="text-6xl text-festival-yellow mb-4">🎪</div>
              <h3 className="text-xl font-bold text-festival-blue mb-2">Унікальна атмосфера</h3>
              <p className="text-muted-foreground">Тематичні локації та інтерактивні зони</p>
            </div>
            
            <div className="text-center">
              <div className="text-6xl text-festival-yellow mb-4">🌟</div>
              <h3 className="text-xl font-bold text-festival-blue mb-2">Зіркові виконавці</h3>
              <p className="text-muted-foreground">Найкращі артисти України та світу</p>
            </div>
            
            <div className="text-center">
              <div className="text-6xl text-festival-yellow mb-4">🤝</div>
              <h3 className="text-xl font-bold text-festival-blue mb-2">Спільнота</h3>
              <p className="text-muted-foreground">Знайомства та нові дружні зв'язки</p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Button 
              variant="hero" 
              size="lg"
              onClick={() => navigate("/festival-details")}
            >
              Дізнатися більше про фестиваль
            </Button>
          </div>
        </div>
      </FestivalSection>

      {/* Constitution Section */}
      <FestivalSection id="constitution" title="Конституція" backgroundColor="muted">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Основний закон Республіки Вейву - документ, що встановлює принципи та правила 
            нашої культурної держави. Тут закріплені права та обов'язки громадян фестивалю.
          </p>
          
          <div className="bg-white p-8 rounded-lg border-2 border-festival-blue/10 mb-8">
            <div className="text-6xl text-festival-blue mb-6">📜</div>
            <h3 className="text-2xl font-bold text-festival-blue mb-4">
              Конституція Республіки Вейву
            </h3>
            <p className="text-muted-foreground mb-6">
              Прийнята 15 червня 2015 року Радою Республіки Вейву
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
                Фестивальне громадянство
              </h3>
              
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Кожен відвідувач фестивалю автоматично отримує статус громадянина Республіки Вейву. 
                Це не просто символічний жест - це ваш пропуск до унікального культурного досвіду.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🎫</span>
                  <div>
                    <h4 className="font-bold text-festival-blue">Пільги громадян</h4>
                    <p className="text-muted-foreground">Знижки на їжу, сувеніри та додаткові заходи</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🏆</span>
                  <div>
                    <h4 className="font-bold text-festival-blue">Ексклюзивний доступ</h4>
                    <p className="text-muted-foreground">VIP зони та закриті виступи для громадян</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🎭</span>
                  <div>
                    <h4 className="font-bold text-festival-blue">Участь в управлінні</h4>
                    <p className="text-muted-foreground">Голосування за найкращих виконавців року</p>
                  </div>
                </div>
              </div>
              
              <Button variant="hero" size="lg">
                Отримати громадянство
              </Button>
            </div>
          </div>
        </div>
      </FestivalSection>

      {/* Ministries Section */}
      <FestivalSection id="ministries" title="Міністерства" backgroundColor="muted">
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
            Перегляньте фотографії з різних років проведення фестивалю
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

      {/* Footer */}
      <footer className="bg-festival-blue text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4">Республіка Вейву</h3>
          <p className="text-festival-yellow mb-6">
            Найбільший культурний фестиваль України
          </p>
          <div className="flex justify-center space-x-6 text-2xl">
            <span className="cursor-pointer hover:text-festival-yellow transition-colors">📧</span>
            <span className="cursor-pointer hover:text-festival-yellow transition-colors">📱</span>
            <span className="cursor-pointer hover:text-festival-yellow transition-colors">🌐</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;