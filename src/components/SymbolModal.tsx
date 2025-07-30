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
}

const SymbolModal = ({ title, description, icon, children, detailedContent }: SymbolModalProps) => {
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
          <div className="bg-muted p-6 rounded-lg">
            <p className="leading-relaxed">{detailedContent}</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SymbolModal;