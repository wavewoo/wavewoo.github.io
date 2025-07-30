// Gallery data with actual photo imports for years with photos
// For other years, you can add your own photos following this structure

// 2014 Photos
import festival2014_1 from "@/assets/gallery/2014/festival-2014-1.jpg";
import festival2014_2 from "@/assets/gallery/2014/festival-2014-2.jpg";
import festival2014_3 from "@/assets/gallery/2014/festival-2014-3.jpg";
import festival2014_4 from "@/assets/gallery/2014/festival-2014-4.jpg";

// 2015 Photos
import festival2015_1 from "@/assets/gallery/2015/festival-2015-1.jpg";
import festival2015_2 from "@/assets/gallery/2015/festival-2015-2.jpg";
import festival2015_3 from "@/assets/gallery/2015/festival-2015-3.jpg";
import festival2015_4 from "@/assets/gallery/2015/festival-2015-4.jpg";

// 2016 Photos
import festival2016_1 from "@/assets/gallery/2016/festival-2016-1.jpg";
import festival2016_2 from "@/assets/gallery/2016/festival-2016-2.jpg";
import festival2016_3 from "@/assets/gallery/2016/festival-2016-3.jpg";
import festival2016_4 from "@/assets/gallery/2016/festival-2016-4.jpg";

export interface GalleryPhoto {
  id: number;
  src: string;
  alt: string;
}

export interface YearGallery {
  year: number;
  photos: GalleryPhoto[];
}

export const galleryData: Record<number, GalleryPhoto[]> = {
  2014: [
    { id: 1, src: festival2014_1, alt: "Фестивальна публіка насолоджується концертом" },
    { id: 2, src: festival2014_2, alt: "Акустичний виступ під вечірнім небом" },
    { id: 3, src: festival2014_3, alt: "Фестивальна гастрономічна зона" },
    { id: 4, src: festival2014_4, alt: "Арт-інсталяція на фестивалі" },
  ],
  2015: [
    { id: 1, src: festival2015_1, alt: "Електронна музика під зірками" },
    { id: 2, src: festival2015_2, alt: "Фольклорний гурт на сцені" },
    { id: 3, src: festival2015_3, alt: "Кемпінг під вечір" },
    { id: 4, src: festival2015_4, alt: "Музичні майстер-класи" },
  ],
  2016: [
    { id: 1, src: festival2016_1, alt: "Рок-концерт з піротехнікою" },
    { id: 2, src: festival2016_2, alt: "Захід сонця над фестивалем" },
    { id: 3, src: festival2016_3, alt: "Дитяча зона з розвагами" },
    { id: 4, src: festival2016_4, alt: "Джазовий ансамбль" },
  ],
  // For years 2017-2025, you can add your own photos here
  // Just create folders like: src/assets/gallery/2017/, src/assets/gallery/2018/, etc.
  // Add your photos and import them above following the same pattern
};

// Helper function to get photos for a specific year
export const getPhotosForYear = (year: number): GalleryPhoto[] => {
  return galleryData[year] || [];
};

// Helper function to check if a year has photos
export const hasPhotosForYear = (year: number): boolean => {
  return galleryData[year] && galleryData[year].length > 0;
};