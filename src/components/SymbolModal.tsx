import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

interface SymbolModalProps {
  title: string;
  description: string;
  icon: string;
  children: React.ReactNode;
  detailedContent: string;
  image?: string;
  audio?: string;
  downloadFiles?: Array<{
    url: string;
    label: string;
    filename: string;
  }>;
}

const SymbolModal = ({ title, description, icon, children, detailedContent, image, audio, downloadFiles }: SymbolModalProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
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
          
          {downloadFiles && downloadFiles.length > 0 && (
            <div className="mt-6 flex justify-center gap-3 flex-wrap">
              {downloadFiles.map((file, index) => (
                <Button 
                  key={index}
                  variant="hero"
                  onClick={() => {
                    const link = document.createElement('a');
                    link.href = file.url;
                    link.download = file.filename;
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                  }}
                  className="flex items-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  {file.label}
                </Button>
              ))}
            </div>
          )}
          
          {!downloadFiles && (image || audio) && (
            <div className="mt-6 flex justify-center">
              <Button 
                variant="hero"
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = image || audio || '';
                  link.download = image ? `${title.toLowerCase().replace(/\s+/g, '-')}.png` : `${title.toLowerCase().replace(/\s+/g, '-')}.mp3`;
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
                className="flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                Завантажити файл
              </Button>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SymbolModal;