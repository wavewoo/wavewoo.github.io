import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Star } from "lucide-react";

const Projects = () => {
  const photos = [
    {
      title: "Головна Сцена 2023",
      description: "Електрична атмосфера, коли хедлайнер Arctic Monkeys виступав перед натовпом з 15,000 відвідувачів під заходом сонця.",
      categories: ["Головна Сцена", "Хедлайнери", "2023"],
      likes: 342,
      shares: 87,
      featured: true
    },
    {
      title: "Акустичні Сесії",
      description: "Інтимні акустичні виступи на нашій затишній лісовій сцені з новими інді-артистами та авторами-виконавцями.",
      categories: ["Акустика", "Інді", "Інтимно"],
      likes: 156,
      shares: 43,
      featured: false
    },
    {
      title: "Магія Танцполу",
      description: "Електронний намет ожив опівночі з пульсуючими ритмами та синхронізованими світловими шоу до самого ранку.",
      categories: ["Електронна", "Ніч", "Танці"],
      likes: 278,
      shares: 92,
      featured: true
    },
    {
      title: "Атмосфера Фестивалю",
      description: "Барвисті натовпи насолоджуються прекрасною погодою, фуд-траками та розслабленою атмосферою, що робить Республіку Вейву особливою.",
      categories: ["Натовп", "Атмосфера", "Стиль життя"],
      likes: 198,
      shares: 64,
      featured: false
    },
    {
      title: "Сесії на Заході",
      description: "Виступи під час золотої години на тлі пагорбів створили магічні моменти як для артистів, так і для глядачів.",
      categories: ["Захід", "Природа", "Магія"],
      likes: 425,
      shares: 128,
      featured: true
    },
    {
      title: "Арт-Інсталяції",
      description: "Інтерактивні арт-об'єкти, розкидані по території фестивалю, дарували Instagram-моменти та творче натхнення.",
      categories: ["Мистецтво", "Інтерактивне", "Творчість"],
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
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 font-montserrat">
              Спогади Фестивалю
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-montserrat">
              Переживіть магію знову через фото з наших попередніх фестивалів та подивіться, що робить Республіку Вейву незабутньою.
            </p>
          </div>

          {/* Featured Photos */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredPhotos.map((photo, index) => (
              <Card key={index} className="group hover:shadow-medium transition-all duration-300 hover:-translate-y-2">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-xl text-primary group-hover:text-accent transition-colors duration-300 font-montserrat">
                      {photo.title}
                    </CardTitle>
                    <Badge variant="secondary" className="bg-accent/10 text-accent font-montserrat">
                      Рекомендовані
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
                  <p className="text-muted-foreground mb-4 leading-relaxed font-montserrat">
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
                    <Button size="sm" variant="outline" className="flex-1 font-montserrat">
                      <Star className="h-4 w-4 mr-2" />
                      Подобається
                    </Button>
                    <Button size="sm" variant="default" className="flex-1 font-montserrat">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Поділитися
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Other Photos */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-primary mb-6 font-montserrat">Більше Моментів Фестивалю</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {otherPhotos.map((photo, index) => (
                <Card key={index} className="group hover:shadow-soft transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h4 className="text-lg font-semibold text-primary group-hover:text-accent transition-colors duration-300 font-montserrat">
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
                    
                    <p className="text-muted-foreground text-sm mb-4 font-montserrat">
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
                      <Button size="sm" variant="ghost" className="font-montserrat">
                        <Star className="h-4 w-4 mr-1" />
                        Подобається
                      </Button>
                      <Button size="sm" variant="ghost" className="font-montserrat">
                        <ExternalLink className="h-4 w-4 mr-1" />
                        Поділитися
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* View More Button */}
          <div className="text-center">
            <Button variant="outline" size="lg" className="font-montserrat">
              <Github className="mr-2" />
              Переглянути Повну Галерею
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
