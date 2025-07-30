import { Music, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Music className="h-8 w-8 text-accent" />
              <span className="text-xl font-bold font-montserrat">Республіка Вейву</span>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed font-montserrat">
              Музичний фестиваль, що об'єднує людей через любов до музики. 
              Створюємо незабутні спогади разом.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 font-montserrat">Швидкі Посилання</h3>
            <ul className="space-y-2">
              {[
                { name: "Головна", href: "home" },
                { name: "Про фестиваль", href: "about" },
                { name: "Галерея", href: "gallery" },
                { name: "Лайн-ап", href: "lineup" },
                { name: "Контакти", href: "contact" }
              ].map((item) => (
                <li key={item.name}>
                  <a 
                    href={`#${item.href}`}
                    className="text-primary-foreground/80 hover:text-accent transition-colors duration-300 text-sm font-montserrat"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-lg font-semibold mb-4 font-montserrat">Зв'язок</h3>
            <div className="space-y-2">
              <a 
                href="mailto:info@republikaveyvu.com"
                className="block text-primary-foreground/80 hover:text-accent transition-colors duration-300 text-sm font-montserrat"
              >
                info@republikaveyvu.com
              </a>
              <a 
                href="https://instagram.com/republikaveyvu"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-primary-foreground/80 hover:text-accent transition-colors duration-300 text-sm font-montserrat"
              >
                Instagram
              </a>
              <a 
                href="https://facebook.com/republikaveyvu"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-primary-foreground/80 hover:text-accent transition-colors duration-300 text-sm font-montserrat"
              >
                Facebook
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <div className="flex items-center space-x-1 text-sm text-primary-foreground/80">
            <span className="font-montserrat">© {currentYear} Республіка Вейву. Створено з</span>
            <Heart className="h-4 w-4 text-accent fill-current" />
            <span className="font-montserrat">для музики та спільноти.</span>
          </div>
          <div className="text-sm text-primary-foreground/60 mt-2 sm:mt-0 font-montserrat">
            Створено на React & Tailwind CSS
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;