import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface SymbolModalProps {
  title: string;
  description: string;
  icon: string;
  children: React.ReactNode;
  detailedContent: string;
  image?: string;
  audio?: string;
}

const SymbolModal = ({ title, description, icon, children, detailedContent, image, audio }: SymbolModalProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-4 text-2xl text-festival-blue">
            <span className="text-4xl">{icon}</span>
            {title}
          </DialogTitle>
        </DialogHeader>
        <div className="mt-6">
          <p className="text-muted-foreground mb-4 text-lg">{description}</p>
          
          {image && (
            <div className="mb-6 text-center">
              <img src={image} alt={title} className="max-w-sm mx-auto rounded-lg shadow-lg" />
            </div>
          )}
          
          {audio && (
            <div className="mb-6">
              <audio controls className="w-full">
                <source src={audio} type="audio/mpeg" />
                Ваш браузер не підтримує відтворення аудіо.
              </audio>
            </div>
          )}
          
          <div className="bg-muted p-6 rounded-lg">
            <p className="leading-relaxed whitespace-pre-line">{detailedContent}</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SymbolModal;