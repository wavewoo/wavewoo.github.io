import { Card, CardContent } from "@/components/ui/card";
import { Code, Palette, Zap, Users } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and efficient code using best practices and modern patterns."
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Creating beautiful, intuitive interfaces that provide exceptional user experiences."
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimizing applications for speed, efficiency, and seamless user interactions."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working effectively in teams using Git, code reviews, and agile methodologies."
    }
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              About Me
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Passionate developer with a love for creating innovative digital solutions 
              and contributing to the open-source community.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Description */}
            <div className="animate-slide-in">
              <h3 className="text-2xl font-semibold text-primary mb-6">
                Building the Future with Code
              </h3>
              <div className="space-y-4 text-foreground">
                <p>
                  I'm a dedicated software developer with expertise in modern web technologies 
                  and a passion for creating impactful digital experiences. My journey started 
                  with curiosity about how things work, which led me to pursue computer science 
                  and eventually fall in love with programming.
                </p>
                <p>
                  I believe in writing clean, maintainable code and staying up-to-date with 
                  the latest industry trends. Whether it's building responsive web applications, 
                  contributing to open-source projects, or mentoring fellow developers, I'm 
                  always excited to take on new challenges.
                </p>
                <p>
                  When I'm not coding, you can find me exploring new technologies, contributing 
                  to the developer community, or working on personal projects that solve 
                  real-world problems.
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