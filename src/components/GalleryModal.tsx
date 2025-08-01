import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { getPhotosForYear, hasPhotosForYear } from "@/data/galleryData";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";

interface GalleryModalProps {
  year: number;
  children: React.ReactNode;
}

const GalleryModal = ({ year, children }: GalleryModalProps) => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const photos = getPhotosForYear(year);
  const hasPhotos = hasPhotosForYear(year);
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    if (selectedPhoto !== null) {
      // Save current scroll position
      const scrollY = window.scrollY;
      
      // Apply styles to prevent background interaction but allow lightbox interaction
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.left = '0';
      document.body.style.right = '0';
      document.body.style.overflow = 'hidden';
      
      return () => {
        // Restore original styles
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.left = '';
        document.body.style.right = '';
        document.body.style.overflow = '';
        
        // Restore scroll position
        window.scrollTo(0, scrollY);
      };
    }
  }, [selectedPhoto]);

  const openLightbox = (photoIndex: number) => {
    setSelectedPhoto(photoIndex);
  };

  const closeLightbox = () => {
    setSelectedPhoto(null);
  };

  const nextPhoto = () => {
    if (selectedPhoto !== null && selectedPhoto < photos.length - 1 && !isTransitioning) {
      console.log('Moving to next photo:', selectedPhoto + 1);
      setIsTransitioning(true);
      const nextIndex = selectedPhoto + 1;
      setTimeout(() => {
        setSelectedPhoto(nextIndex);
        setIsTransitioning(false);
      }, 150);
    }
  };

  const prevPhoto = () => {
    if (selectedPhoto !== null && selectedPhoto > 0 && !isTransitioning) {
      console.log('Moving to prev photo:', selectedPhoto - 1);
      setIsTransitioning(true);
      const prevIndex = selectedPhoto - 1;
      setTimeout(() => {
        setSelectedPhoto(prevIndex);
        setIsTransitioning(false);
      }, 150);
    }
  };

  const handleNavigation = (direction: 'next' | 'prev', event?: React.MouseEvent | React.TouchEvent) => {
    if (event) {
      event.stopPropagation();
      event.preventDefault();
    }
    
    if (isTransitioning) return;
    
    if (direction === 'next') {
      nextPhoto();
    } else {
      prevPhoto();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') nextPhoto();
    if (e.key === 'ArrowLeft') prevPhoto();
  };

  const handleAllPhotosAccess = () => {
    if (isAuthenticated) {
      // User is authenticated, open the Google Drive link
      window.open(
        "https://drive.google.com/drive/folders/1ExoCiVnXA2f50CPw060moGFx7kC3sBJw?usp=drive_link",
        "_blank",
        "noopener,noreferrer"
      );
    } else {
      // User is not authenticated, redirect to auth page
      navigate("/auth");
    }
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
              <div className="mt-6 text-center space-y-4">
                <p className="text-sm text-muted-foreground">
                  Клікніть на фото для перегляду у повному розмірі
                </p>
                
                <Button 
                  variant="outline" 
                  className="w-full max-w-xs"
                  onClick={handleAllPhotosAccess}
                >
                  Перейти до всіх фотографій
                </Button>
              </div>
            </>
          ) : (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">📷</div>
              <p className="text-lg text-muted-foreground mb-4">
                Фотографії з {year} року будуть додані незабаром
              </p>
            </div>
          )}
        </div>
      </DialogContent>
      
      {/* Lightbox - Outside of DialogContent for true full-screen */}
      {selectedPhoto !== null && (
        <div 
          className="lightbox-overlay fixed inset-0 bg-black/95 z-[100] flex items-center justify-center"
          onKeyDown={handleKeyDown}
          tabIndex={0}
          style={{ 
            userSelect: 'none',
            touchAction: 'none'
          }}
        >
          {/* Background overlay that closes lightbox */}
          <div 
            className="absolute inset-0"
            onClick={closeLightbox}
            onTouchEnd={closeLightbox}
          />
          
          <div 
            className="lightbox-content relative w-screen h-screen flex items-center justify-center pointer-events-none"
          >
            {/* Close button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
                closeLightbox();
              }}
              className="absolute top-4 right-4 md:top-14 md:right-14 z-[120] bg-black/50 text-white p-3 md:p-4 rounded-full hover:bg-black/70 transition-colors pointer-events-auto"
              style={{ touchAction: 'manipulation' }}
            >
              <X size={20} className="md:w-6 md:h-6" />
            </button>

            {/* Navigation buttons */}
            {selectedPhoto > 0 && (
              <button
                onClick={() => handleNavigation('prev')}
                className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-[120] bg-black/50 text-white p-3 md:p-4 rounded-full hover:bg-black/70 transition-colors select-none pointer-events-auto"
                disabled={isTransitioning}
                style={{ touchAction: 'manipulation' }}
              >
                <ChevronLeft size={20} className="md:w-6 md:h-6" />
              </button>
            )}

            {selectedPhoto < photos.length - 1 && (
              <button
                onClick={() => handleNavigation('next')}
                className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-[120] bg-black/50 text-white p-3 md:p-4 rounded-full hover:bg-black/70 transition-colors select-none pointer-events-auto"
                disabled={isTransitioning}
                style={{ touchAction: 'manipulation' }}
              >
                <ChevronRight size={20} className="md:w-6 md:h-6" />
              </button>
            )}

            {/* Main image */}
            <img
              src={photos[selectedPhoto].src}
              alt={photos[selectedPhoto].alt}
              className={`max-w-[98vw] max-h-[98vh] object-contain transition-opacity duration-300 pointer-events-auto ${
                isTransitioning ? 'opacity-0' : 'opacity-100'
              }`}
              onClick={(e) => e.stopPropagation()}
              style={{ touchAction: 'none' }}
            />

            {/* Image counter and caption */}
            <div className={`absolute bottom-16 left-1/2 -translate-x-1/2 text-center text-white transition-opacity duration-300 pointer-events-none ${
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