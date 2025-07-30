import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const Skills = () => {
  const lineupDays = [
    {
      title: "П'ятниця - Головна Сцена",
      artists: [
        { name: "Arctic Monkeys", time: "22:00" },
        { name: "Tame Impala", time: "20:30" },
        { name: "Glass Animals", time: "19:00" },
        { name: "HAIM", time: "17:30" }
      ]
    },
    {
      title: "Субота - Електронний Намет",
      artists: [
        { name: "Disclosure", time: "23:00" },
        { name: "Flume", time: "21:30" },
        { name: "ODESZA", time: "20:00" },
        { name: "Bonobo", time: "18:30" }
      ]
    },
    {
      title: "Неділя - Акустична Сцена",
      artists: [
        { name: "Bon Iver", time: "21:00" },
        { name: "Phoebe Bridgers", time: "19:30" },
        { name: "Fleet Foxes", time: "18:00" },
        { name: "Iron & Wine", time: "16:30" }
      ]
    }
  ];

  const featuredActs = [
    "The 1975", "Billie Eilish", "Tyler, The Creator", "FKA twigs", 
    "Mac DeMarco", "King Gizzard", "Beach House", "Vampire Weekend"
  ];

  return (
    <section id="lineup" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 font-montserrat">
              Лайн-ап Фестивалю
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-montserrat">
              Три дні неймовірної музики на кількох сценах з всесвітньо відомими артистами та новими талантами.
            </p>
          </div>

          {/* Lineup Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {lineupDays.map((day, index) => (
              <Card key={index} className="group hover:shadow-medium transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl text-primary group-hover:text-accent transition-colors duration-300 font-montserrat">
                    {day.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {day.artists.map((artist, artistIndex) => (
                      <div key={artistIndex} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium text-foreground font-montserrat">
                            {artist.name}
                          </span>
                          <span className="text-sm text-muted-foreground font-montserrat">
                            {artist.time}
                          </span>
                        </div>
                        <div className="h-0.5 bg-accent/20 rounded-full"></div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Featured Acts */}
          <Card className="hover:shadow-medium transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-xl text-primary text-center font-montserrat">
                Інші Рекомендовані Артисти
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap justify-center gap-3">
                {featuredActs.map((act, index) => (
                  <div
                    key={index}
                    className="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium hover:bg-accent/20 transition-colors duration-300 cursor-default font-montserrat"
                  >
                    {act}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;