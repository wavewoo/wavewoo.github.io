import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface MinistryModalProps {
  title: string;
  description: string;
  icon: string;
  children: React.ReactNode;
  detailedContent: string;
  responsibilities: string[];
}

const MinistryModal = ({ title, description, icon, children, detailedContent, responsibilities }: MinistryModalProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-4 text-2xl text-festival-blue">
            <span className="text-4xl">{icon}</span>
            {title}
          </DialogTitle>
        </DialogHeader>
        <div className="mt-6">
          <p className="text-muted-foreground mb-6 text-lg">{description}</p>
          
          <div className="bg-muted p-6 rounded-lg mb-6">
            <h4 className="text-xl font-bold text-festival-blue mb-4">Детальний опис:</h4>
            <p className="leading-relaxed mb-4">{detailedContent}</p>
          </div>

          <div className="bg-white border-2 border-festival-blue/10 p-6 rounded-lg">
            <h4 className="text-xl font-bold text-festival-blue mb-4">Основні обов'язки:</h4>
            <ul className="space-y-2">
              {responsibilities.map((responsibility, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-festival-yellow">•</span>
                  <span className="text-muted-foreground">{responsibility}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default MinistryModal;