import { Card, CardContent } from "@/components/ui/card";
import { Music, Users, Utensils, MapPin } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Music,
      title: "Неймовірний Лайн-ап",
      description: "Артисти світового рівня та нові таланти різних жанрів виступатимуть на кількох сценах."
    },
    {
      icon: Users,
      title: "Спільнота",
      description: "Приєднуйтесь до тисяч любителів музики у святкуванні мистецтва, культури та спільних переживань."
    },
    {
      icon: Utensils,
      title: "Їжа та Напої",
      description: "Різноманітні кулінарні враження з місцевими продавцями, фуд-траками та фірмовими коктейлями."
    },
    {
      icon: MapPin,
      title: "Чудове Місце",
      description: "Красива відкрита площадка з приголомшливим природним оточенням та сучасними зручностями."
    }
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 font-montserrat">
              Про Фестиваль
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-montserrat">
              Музичний фестиваль "Республіка Вейву" - це більше ніж просто музика. Це свято творчості, 
              спільноти та сили живого виконання.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Description */}
            <div className="animate-slide-in">
              <h3 className="text-2xl font-semibold text-primary mb-6 font-montserrat">
                Де Музика Оживає
              </h3>
              <div className="space-y-4 text-foreground font-montserrat">
                <p>
                  Вже понад 5 років "Республіка Вейву" об'єднує любителів музики з усього світу 
                  для незабутнього вікендного досвіду. Те, що почалося як невелике зібрання, 
                  виросло в один з найбільш очікуваних музичних фестивалів регіону.
                </p>
                <p>
                  Наша місія - створити простір, де музика долає кордони та об'єднує людей. 
                  Від інді-року до електронної танцювальної музики, від фолку до хіп-хопу - 
                  ми святкуємо різноманітність звучання та створюємо спогади на все життя.
                </p>
                <p>
                  Окрім музики, ми прагнемо сталого розвитку, підтримки місцевих артистів 
                  та повернення боргу нашій спільноті. Приєднуйтесь до нас на три дні чистої 
                  музичної магії в атмосфері, що відчувається як дім.
                </p>
              </div>
            </div>

            {/* Right Column - Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <Card key={index} className="group hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors duration-300">
                      <feature.icon className="h-6 w-6 text-accent" />
                    </div>
                    <h4 className="text-lg font-semibold text-primary mb-2 font-montserrat">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-muted-foreground font-montserrat">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;