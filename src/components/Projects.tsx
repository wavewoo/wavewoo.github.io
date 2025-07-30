import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Star } from "lucide-react";

const Projects = () => {
  const photos = [
    {
      title: "Main Stage 2023",
      description: "Electric atmosphere as headliner The Arctic Monkeys performed to a crowd of 15,000 festival-goers under the sunset sky.",
      categories: ["Main Stage", "Headliners", "2023"],
      likes: 342,
      shares: 87,
      featured: true
    },
    {
      title: "Acoustic Sessions",
      description: "Intimate acoustic performances in our cozy woodland stage area, featuring emerging indie artists and singer-songwriters.",
      categories: ["Acoustic", "Indie", "Intimate"],
      likes: 156,
      shares: 43,
      featured: false
    },
    {
      title: "Dance Floor Magic",
      description: "The electronic tent came alive at midnight with pulsing beats and synchronized light shows that kept the crowd moving until dawn.",
      categories: ["Electronic", "Night", "Dance"],
      likes: 278,
      shares: 92,
      featured: true
    },
    {
      title: "Festival Vibes",
      description: "Colorful crowds enjoying the beautiful weather, food trucks, and the relaxed atmosphere that makes Summer Vibes special.",
      categories: ["Crowd", "Atmosphere", "Lifestyle"],
      likes: 198,
      shares: 64,
      featured: false
    },
    {
      title: "Sunset Sessions",
      description: "Golden hour performances with the backdrop of rolling hills created magical moments for both artists and audience.",
      categories: ["Sunset", "Nature", "Magic"],
      likes: 425,
      shares: 128,
      featured: true
    },
    {
      title: "Art Installations",
      description: "Interactive art pieces scattered throughout the festival grounds provided Instagram-worthy moments and creative inspiration.",
      categories: ["Art", "Interactive", "Creative"],
      likes: 167,
      shares: 55,
      featured: false
    }
  ];

  const featuredPhotos = photos.filter(photo => photo.featured);
  const otherPhotos = photos.filter(photo => !photo.featured);

  return (
    <section id="gallery" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Festival Memories
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Relive the magic through photos from our previous festivals and see what makes Summer Vibes unforgettable.
            </p>
          </div>

          {/* Featured Photos */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredPhotos.map((photo, index) => (
              <Card key={index} className="group hover:shadow-medium transition-all duration-300 hover:-translate-y-2">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-xl text-primary group-hover:text-accent transition-colors duration-300">
                      {photo.title}
                    </CardTitle>
                    <Badge variant="secondary" className="bg-accent/10 text-accent">
                      Featured
                    </Badge>
                  </div>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4" />
                      <span>{photo.likes}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <ExternalLink className="h-4 w-4" />
                      <span>{photo.shares}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {photo.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {photo.categories.map((category, categoryIndex) => (
                      <Badge key={categoryIndex} variant="outline" className="text-xs">
                        {category}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex space-x-2">
                    <Button size="sm" variant="outline" className="flex-1">
                      <Star className="h-4 w-4 mr-2" />
                      Like
                    </Button>
                    <Button size="sm" variant="default" className="flex-1">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Share
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Other Photos */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-primary mb-6">More Festival Moments</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {otherPhotos.map((photo, index) => (
                <Card key={index} className="group hover:shadow-soft transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h4 className="text-lg font-semibold text-primary group-hover:text-accent transition-colors duration-300">
                        {photo.title}
                      </h4>
                      <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <Star className="h-3 w-3" />
                          <span>{photo.likes}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <ExternalLink className="h-3 w-3" />
                          <span>{photo.shares}</span>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground text-sm mb-4">
                      {photo.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-1 mb-4">
                      {photo.categories.map((category, categoryIndex) => (
                        <Badge key={categoryIndex} variant="outline" className="text-xs">
                          {category}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex space-x-2">
                      <Button size="sm" variant="ghost">
                        <Star className="h-4 w-4 mr-1" />
                        Like
                      </Button>
                      <Button size="sm" variant="ghost">
                        <ExternalLink className="h-4 w-4 mr-1" />
                        Share
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* View More Button */}
          <div className="text-center">
            <Button variant="outline" size="lg">
              <Github className="mr-2" />
              View Full Photo Gallery
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
