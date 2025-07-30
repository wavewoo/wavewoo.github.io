import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import FestivalSection from "@/components/FestivalSection";

const FestivalDetails = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-festival-blue text-white py-6">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="text-white hover:text-festival-yellow"
          >
            ← Повернутися на головну
          </Button>
          <h1 className="text-2xl font-bold">Детально про фестиваль</h1>
        </div>
      </header>

      {/* Content */}
      <FestivalSection id="details" title="Республіка Вейву - Повна історія">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="prose max-w-none">
            <h3 className="text-2xl font-bold text-festival-blue mb-4">Історія фестивалю</h3>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Фестиваль "Республіка Вейву" розпочав свою історію у 2014 році як невеликий музичний захід 
              для молоді. Протягом років він виріс у найбільший культурний фестиваль України, 
              який об"єднує тисячі відвідувачів з усього світу.
            </p>

            <div className="bg-muted p-6 rounded-lg mb-8">
              <h4 className="text-xl font-bold text-festival-blue mb-4">Ключові віхи розвитку:</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><strong>2014-2016:</strong> Становлення як регіонального музичного фестивалю</li>
                <li><strong>2017-2019:</strong> Розширення програми, додавання культурних заходів</li>
                <li><strong>2020-2021:</strong> Адаптація до онлайн-формату під час пандемії</li>
                <li><strong>2022-2025:</strong> Міжнародне визнання та розвиток туристичного потенціалу</li>
              </ul>
            </div>

            <h3 className="text-2xl font-bold text-festival-blue mb-4">Унікальні особливості</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border-2 border-festival-blue/10 p-6 rounded-lg">
                <h4 className="text-xl font-bold text-festival-blue mb-3">🎵 Музична програма</h4>
                <p className="text-muted-foreground">
                  Понад 200 виконавців на 15 сценах. Від електронної музики до фолку, 
                  від рок-концертів до класичних виступів.
                </p>
              </div>
              
              <div className="bg-white border-2 border-festival-blue/10 p-6 rounded-lg">
                <h4 className="text-xl font-bold text-festival-blue mb-3">🎭 Культурна програма</h4>
                <p className="text-muted-foreground">
                  Театральні вистави, майстер-класи, виставки сучасного мистецтва 
                  та традиційних ремесел.
                </p>
              </div>
              
              <div className="bg-white border-2 border-festival-blue/10 p-6 rounded-lg">
                <h4 className="text-xl font-bold text-festival-blue mb-3">🏕️ Фестивальне містечко</h4>
                <p className="text-muted-foreground">
                  Повноцінна інфраструктура з кемпінгами, ресторанами, магазинами 
                  та зонами відпочинку.
                </p>
              </div>
              
              <div className="bg-white border-2 border-festival-blue/10 p-6 rounded-lg">
                <h4 className="text-xl font-bold text-festival-blue mb-3">🌱 Екологічність</h4>
                <p className="text-muted-foreground">
                  Використання відновлюваних джерел енергії, програми переробки 
                  та захисту довкілля.
                </p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <div className="bg-festival-blue text-white p-8 rounded-lg">
                <h3 className="text-3xl font-bold mb-4">Статистика 2024 року</h3>
                <div className="grid md:grid-cols-4 gap-6">
                  <div>
                    <div className="text-4xl font-bold text-festival-yellow">150K+</div>
                    <div className="text-lg">Відвідувачів</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-festival-yellow">200+</div>
                    <div className="text-lg">Артистів</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-festival-yellow">15</div>
                    <div className="text-lg">Сцен</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-festival-yellow">5</div>
                    <div className="text-lg">Днів</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </FestivalSection>
    </div>
  );
};

export default FestivalDetails;