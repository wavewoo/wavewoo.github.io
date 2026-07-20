import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import FestivalSection from "@/components/FestivalSection";

const FestivalDetails = () => {
  const navigate = useNavigate();

    useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
            ← Назад
          </Button>
          <h1 className="text-2xl font-bold">Детально про Вейву</h1>
        </div>
      </header>

      {/* Content */}
      <FestivalSection id="details" title="Республіка Вейву - історія">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="prose max-w-none">
            <h3 className="text-2xl font-bold text-festival-blue mb-4">Кульмінація підліткової креативності</h3>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Республіка Вейву (або, як тоді вона називалась, Народна Республіка Вейву) була проголошена 19 серпня 2014 року як протест проти рутинності, типовості
              та одноманітності. Частково проголошення Республіки було сатирою на ситуацію, яка  
              тоді панувала в Україні. Державобудування розпочалося фактично одразу, дозволило надати рутинній поїздці
              в гори особливого значення та сатисфакції, стало квінтесенцією локальної креативної самореалізації. 
            </p>

            <div className="bg-muted p-6 rounded-lg mb-8">
              <h4 className="text-xl font-bold text-festival-blue mb-4">Ключові віхи розвитку:</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><strong>2014-2016:</strong> Становлення Республіки, початки державобудування</li>
                <li><strong>2017-2020:</strong> Перше позалокальне розширення, становлення перших міністерств</li>
                <li><strong>2021:</strong> Впровадження паспортів громадян, прийняття Конституції, перші вибори Президента Республіки</li>
                <li><strong>2022:</strong> Теракт під час проведення Фестивалю знерухомив половину жителів Республіки</li>
                <li><strong>2024:</strong> Зміни до Конституції, що зміцнили владу Президента. Перехід з парламентської до змішаної форми правління. Друге позалокальне розширення Республіки</li>
                <li><strong>2025:</strong> Прихід до влади консерваторів та противників неконтрольованої імміграції. Часткова зміна політичного курсу Республіки</li>
              </ul>
            </div>
            <h3 className="text-2xl font-bold text-festival-blue mb-4">Сутність Республіки Вейву</h3>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Головна мета Республіки Вейву - надати бажаючим можливість унікального ретриту, що поєднує елементи відпочинку, спільної 
              праці та рольової гри. Головним елементом Республіки є Фестиваль Проголошення Республіки, який відбувається 
              щороку влітку, у гірському регіоні поряд з джерелом води та триває три дні.
            </p>
            <h3 className="text-2xl font-bold text-festival-blue mb-4">Особливості Фестивалю</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border-2 border-festival-blue/10 p-6 rounded-lg">
                <h4 className="text-xl font-bold text-festival-blue mb-3">🔞 Обмежений доступ</h4>
                <p className="text-muted-foreground">
                  У зв'язку з частково порочним характером Фестивалю, неповнолітнім особам заборонений в'їзд
                  до Республіки.
                </p>
              </div>
              
              <div className="bg-white border-2 border-festival-blue/10 p-6 rounded-lg">
                <h4 className="text-xl font-bold text-festival-blue mb-3">🎭 Культурна програма</h4>
                <p className="text-muted-foreground">
                  В Республіці всіляко заохочуються музика, танці та театралізовані постанови. 
                </p>
              </div>
              
              <div className="bg-white border-2 border-festival-blue/10 p-6 rounded-lg">
                <h4 className="text-xl font-bold text-festival-blue mb-3">🏕️ Природа</h4>
                <p className="text-muted-foreground">
                  Фестиваль покликаний стимулювати втечу від міської рутини, тому відбувається
                  в гірській місцевості, часто де відсутній мобільний зв'язок та інтернет.
                </p>
              </div>
              
              <div className="bg-white border-2 border-festival-blue/10 p-6 rounded-lg">
                <h4 className="text-xl font-bold text-festival-blue mb-3">🥂 Чіл</h4>
                <p className="text-muted-foreground">
                  Алкоголь завжди був важливою частиною Фестивалю і так продовжується до сьогодні. 
                  Противникам алкоголю пропонуються і інші засоби гарно провести час.
                </p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <div className="bg-festival-blue text-white p-8 rounded-lg">
                <h3 className="text-3xl font-bold mb-4">Впродовж Фестивалів</h3>
                <div className="grid md:grid-cols-4 gap-6">
                  <div>
                    <div className="text-4xl font-bold text-festival-yellow">50+</div>
                    <div className="text-lg">Унікальних відвідувачів</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-festival-yellow">12</div>
                    <div className="text-lg">Років</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-festival-yellow">20+</div>
                    <div className="text-lg">Активностей</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-festival-yellow">34</div>
                    <div className="text-lg">Дні чілу</div>
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