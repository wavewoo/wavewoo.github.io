import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Send, Github, Linkedin, Twitter } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "info@republikaveyvu.com",
      link: "mailto:info@republikaveyvu.com"
    },
    {
      icon: Phone,
      title: "Телефон",
      value: "+380 (44) 123-4567",
      link: "tel:+380441234567"
    },
    {
      icon: MapPin,
      title: "Локація",
      value: "Київ, Україна",
      link: "#"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      name: "Instagram",
      url: "https://instagram.com",
      username: "@republikaveyvu"
    },
    {
      icon: Linkedin,
      name: "Facebook",
      url: "https://facebook.com",
      username: "@republikaveyvu"
    },
    {
      icon: Twitter,
      name: "Twitter",
      url: "https://twitter.com",
      username: "@republikaveyvu"
    }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 font-montserrat">
              Зв'яжіться з Нами
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-montserrat">
              Маєте питання про фестиваль? Хочете стати партнером? 
              Або просто хочете дізнатися більше про Республіку Вейву?
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="hover:shadow-medium transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl text-primary font-montserrat">
                  Надіслати Повідомлення
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block font-montserrat">
                        Ім'я
                      </label>
                      <Input placeholder="Олександр" className="font-montserrat" />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block font-montserrat">
                        Прізвище
                      </label>
                      <Input placeholder="Шевченко" className="font-montserrat" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block font-montserrat">
                      Email
                    </label>
                    <Input type="email" placeholder="oleksandr@example.com" className="font-montserrat" />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block font-montserrat">
                      Тема
                    </label>
                    <Input placeholder="Питання про фестиваль" className="font-montserrat" />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block font-montserrat">
                      Повідомлення
                    </label>
                    <Textarea 
                      placeholder="Розкажіть про ваше питання або просто привітайтеся!" 
                      rows={5}
                      className="font-montserrat"
                    />
                  </div>
                  
                  <Button variant="hero" size="lg" className="w-full font-montserrat">
                    <Send className="mr-2" />
                    Надіслати
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Details */}
              <Card className="hover:shadow-medium transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary font-montserrat">
                    Контактна Інформація
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {contactInfo.map((item, index) => (
                      <a
                        key={index}
                        href={item.link}
                        className="flex items-center space-x-4 p-3 rounded-lg hover:bg-secondary/50 transition-colors duration-300 group"
                      >
                        <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
                          <item.icon className="h-6 w-6 text-accent" />
                        </div>
                        <div>
                          <div className="text-sm text-muted-foreground font-montserrat">
                            {item.title}
                          </div>
                          <div className="font-medium text-foreground font-montserrat">
                            {item.value}
                          </div>
                        </div>
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Social Links */}
              <Card className="hover:shadow-medium transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary font-montserrat">
                    Слідкуйте за Нами
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-4 p-3 rounded-lg hover:bg-secondary/50 transition-colors duration-300 group"
                      >
                        <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
                          <social.icon className="h-5 w-5 text-accent" />
                        </div>
                        <div>
                          <div className="font-medium text-foreground font-montserrat">
                            {social.name}
                          </div>
                          <div className="text-sm text-muted-foreground font-montserrat">
                            {social.username}
                          </div>
                        </div>
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;