import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const Skills = () => {
  const lineupDays = [
    {
      title: "Friday - Main Stage",
      artists: [
        { name: "Arctic Monkeys", time: "10:00 PM" },
        { name: "Tame Impala", time: "8:30 PM" },
        { name: "Glass Animals", time: "7:00 PM" },
        { name: "HAIM", time: "5:30 PM" }
      ]
    },
    {
      title: "Saturday - Electronic Tent",
      artists: [
        { name: "Disclosure", time: "11:00 PM" },
        { name: "Flume", time: "9:30 PM" },
        { name: "ODESZA", time: "8:00 PM" },
        { name: "Bonobo", time: "6:30 PM" }
      ]
    },
    {
      title: "Sunday - Acoustic Stage",
      artists: [
        { name: "Bon Iver", time: "9:00 PM" },
        { name: "Phoebe Bridgers", time: "7:30 PM" },
        { name: "Fleet Foxes", time: "6:00 PM" },
        { name: "Iron & Wine", time: "4:30 PM" }
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
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Festival Lineup
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Three days of incredible music across multiple stages featuring world-renowned artists and emerging talents.
            </p>
          </div>

          {/* Lineup Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {lineupDays.map((day, index) => (
              <Card key={index} className="group hover:shadow-medium transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl text-primary group-hover:text-accent transition-colors duration-300">
                    {day.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {day.artists.map((artist, artistIndex) => (
                      <div key={artistIndex} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium text-foreground">
                            {artist.name}
                          </span>
                          <span className="text-sm text-muted-foreground">
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
              <CardTitle className="text-xl text-primary text-center">
                More Featured Acts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap justify-center gap-3">
                {featuredActs.map((act, index) => (
                  <div
                    key={index}
                    className="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium hover:bg-accent/20 transition-colors duration-300 cursor-default"
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