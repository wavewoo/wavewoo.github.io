import { Card, CardContent } from "@/components/ui/card";
import { Music, Users, Utensils, MapPin } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Music,
      title: "Amazing Lineup",
      description: "World-class artists and emerging talents across multiple genres performing on multiple stages."
    },
    {
      icon: Users,
      title: "Community",
      description: "Join thousands of music lovers in a celebration of art, culture, and shared experiences."
    },
    {
      icon: Utensils,
      title: "Food & Drinks",
      description: "Diverse culinary experiences with local vendors, food trucks, and signature festival cocktails."
    },
    {
      icon: MapPin,
      title: "Prime Location",
      description: "Beautiful outdoor venue with stunning natural surroundings and state-of-the-art facilities."
    }
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              About the Festival
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Summer Vibes Music Festival is more than just music - it's a celebration of creativity, 
              community, and the power of live performance.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Description */}
            <div className="animate-slide-in">
              <h3 className="text-2xl font-semibold text-primary mb-6">
                Where Music Comes Alive
              </h3>
              <div className="space-y-4 text-foreground">
                <p>
                  For over 5 years, Summer Vibes has been bringing together music enthusiasts 
                  from around the world for an unforgettable weekend experience. What started 
                  as a small gathering has grown into one of the region's most anticipated 
                  music festivals.
                </p>
                <p>
                  Our mission is to create a space where music transcends boundaries and brings 
                  people together. From indie rock to electronic dance music, from folk to hip-hop, 
                  we celebrate diversity in sound and create memories that last a lifetime.
                </p>
                <p>
                  Beyond the music, we're committed to sustainability, supporting local artists, 
                  and giving back to our community. Join us for three days of pure musical magic 
                  in a setting that feels like home.
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
                    <h4 className="text-lg font-semibold text-primary mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
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