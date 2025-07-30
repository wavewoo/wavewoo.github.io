import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface GalleryModalProps {
  year: number;
  children: React.ReactNode;
}

const GalleryModal = ({ year, children }: GalleryModalProps) => {
  // Generate mock photos for each year
  const photos = Array.from({ length: 8 }, (_, i) => ({
    id: i + 1,
    alt: `Фото ${year} року #${i + 1}`,
  }));

  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl text-festival-blue">
            Галерея {year} року
          </DialogTitle>
        </DialogHeader>
        <div className="mt-6">
          <p className="text-muted-foreground mb-6">
            Найкращі моменти фестивалю "Республіка Вейву" {year} року
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {photos.map((photo) => (
              <div
                key={photo.id}
                className="aspect-square bg-gradient-to-br from-festival-blue to-festival-blue-light rounded-lg flex items-center justify-center text-white text-2xl font-bold cursor-pointer hover:scale-105 transition-transform duration-300"
              >
                📷
              </div>
            ))}
          </div>
          <div className="mt-6 text-center">
            <p className="text-sm text-muted-foreground">
              Клікніть на фото для перегляду у повному розмірі
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default GalleryModal;