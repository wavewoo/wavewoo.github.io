import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { getPhotosForYear, hasPhotosForYear } from "@/data/galleryData";
import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface GalleryModalProps {
  year: number;
  children: React.ReactNode;
}

const GalleryModal = ({ year, children }: GalleryModalProps) => {
  const photos = getPhotosForYear(year);
  const hasPhotos = hasPhotosForYear(year);
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const openLightbox = (photoIndex: number) => {
    setSelectedPhoto(photoIndex);
  };

  const closeLightbox = () => {
    setSelectedPhoto(null);
  };

  const nextPhoto = () => {
    if (selectedPhoto !== null && selectedPhoto < photos.length - 1) {
      setIsTransitioning(true);
      setTimeout(() => {
        setSelectedPhoto(selectedPhoto + 1);
        setIsTransitioning(false);
      }, 150);
    }
  };

  const prevPhoto = () => {
    if (selectedPhoto !== null && selectedPhoto > 0) {
      setIsTransitioning(true);
      setTimeout(() => {
        setSelectedPhoto(selectedPhoto - 1);
        setIsTransitioning(false);
      }, 150);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') nextPhoto();
    if (e.key === 'ArrowLeft') prevPhoto();
  };

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
            Вибрані фото з Республіки {year} року
          </p>
          
          {hasPhotos ? (
            <>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {photos.map((photo, index) => (
                  <div
                    key={photo.id}
                    className="aspect-square rounded-lg overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300 shadow-lg"
                    onClick={() => openLightbox(index)}
                  >
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className="mt-6 text-center">
                <p className="text-sm text-muted-foreground">
                  Клікніть на фото для перегляду у повному розмірі
                </p>
              </div>
            </>
          ) : (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">📷</div>
              <p className="text-lg text-muted-foreground mb-4">
                Фотографії з {year} року будуть додані незабаром
              </p>
              <p className="text-sm text-muted-foreground">
                Щоб додати власні фото:
                <br />
                1. Створіть папку <code className="bg-muted px-1 rounded">src/assets/gallery/{year}/</code>
                <br />
                2. Додайте фото у форматі JPG/PNG
                <br />
                3. Оновіть файл <code className="bg-muted px-1 rounded">src/data/galleryData.ts</code>
              </p>
            </div>
          )}
        </div>
      </DialogContent>
      
      {/* Lightbox - Outside of DialogContent for true full-screen */}
      {selectedPhoto !== null && (
        <div 
          className="fixed inset-0 bg-black/95 z-[100] flex items-center justify-center"
          onClick={closeLightbox}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          <div className="relative w-screen h-screen flex items-center justify-center">
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-14 right-14 z-10 bg-black/50 text-white p-4 rounded-full hover:bg-black/70 transition-colors"
            >
              <X size={24} />
            </button>

            {/* Navigation buttons */}
            {selectedPhoto > 0 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prevPhoto();
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 text-white p-4 rounded-full hover:bg-black/70 transition-colors"
              >
                <ChevronLeft size={24} />
              </button>
            )}

            {selectedPhoto < photos.length - 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextPhoto();
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 text-white p-4 rounded-full hover:bg-black/70 transition-colors"
              >
                <ChevronRight size={24} />
              </button>
            )}

            {/* Main image */}
            <img
              src={photos[selectedPhoto].src}
              alt={photos[selectedPhoto].alt}
              className={`max-w-[98vw] max-h-[98vh] object-contain transition-opacity duration-300 ${
                isTransitioning ? 'opacity-0' : 'opacity-100'
              }`}
              onClick={(e) => e.stopPropagation()}
            />

            {/* Image counter and caption */}
            <div className={`absolute bottom-16 left-1/2 -translate-x-1/2 text-center text-white transition-opacity duration-300 ${
              isTransitioning ? 'opacity-0' : 'opacity-100'
            }`}>
              <p className="text-base bg-black/50 px-3 py-1 rounded-full mb-2">
                {selectedPhoto + 1} / {photos.length}
              </p>
              <p className="text-base bg-black/50 px-3 py-1 rounded">
                {photos[selectedPhoto].alt}
              </p>
            </div>
          </div>
        </div>
      )}
    </Dialog>
  );
};

export default GalleryModal;