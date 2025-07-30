import { Github, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Github className="h-8 w-8 text-accent" />
              <span className="text-xl font-bold">DevPortfolio</span>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Passionate developer creating innovative solutions with modern technologies. 
              Always learning, always building.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["Home", "About", "Projects", "Skills", "Contact"].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`}
                    className="text-primary-foreground/80 hover:text-accent transition-colors duration-300 text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="space-y-2">
              <a 
                href="mailto:hello@developer.com"
                className="block text-primary-foreground/80 hover:text-accent transition-colors duration-300 text-sm"
              >
                hello@developer.com
              </a>
              <a 
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-primary-foreground/80 hover:text-accent transition-colors duration-300 text-sm"
              >
                GitHub Profile
              </a>
              <a 
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-primary-foreground/80 hover:text-accent transition-colors duration-300 text-sm"
              >
                LinkedIn Profile
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <div className="flex items-center space-x-1 text-sm text-primary-foreground/80">
            <span>© {currentYear} DevPortfolio. Made with</span>
            <Heart className="h-4 w-4 text-accent fill-current" />
            <span>by a passionate developer.</span>
          </div>
          <div className="text-sm text-primary-foreground/60 mt-2 sm:mt-0">
            Built with React & Tailwind CSS
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;