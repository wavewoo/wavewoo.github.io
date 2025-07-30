// Gallery data with actual photo imports for years with photos
// For other years, you can add your own photos following this structure

// 2014 Photos
import festival2014_1 from "@/assets/gallery/2014/1.jpg";
import festival2014_2 from "@/assets/gallery/2014/2.jpg";
import festival2014_3 from "@/assets/gallery/2014/3.jpg";
import festival2014_4 from "@/assets/gallery/2014/4.jpg";
import festival2014_5 from "@/assets/gallery/2014/5.jpg";
import festival2014_6 from "@/assets/gallery/2014/6.jpg";
import festival2014_7 from "@/assets/gallery/2014/7.jpg";
import festival2014_8 from "@/assets/gallery/2014/8.jpg";
import festival2014_9 from "@/assets/gallery/2014/9.jpg";
import festival2014_10 from "@/assets/gallery/2014/10.jpg";
import festival2014_11 from "@/assets/gallery/2014/11.jpg";
import festival2014_12 from "@/assets/gallery/2014/12.jpg";

// 2015 Photos
import festival2015_1 from "@/assets/gallery/2015/1.jpg";
import festival2015_2 from "@/assets/gallery/2015/2.jpg";
import festival2015_3 from "@/assets/gallery/2015/3.jpg";
import festival2015_4 from "@/assets/gallery/2015/4.jpg";
import festival2015_5 from "@/assets/gallery/2015/5.jpg";
import festival2015_6 from "@/assets/gallery/2015/6.jpg";
import festival2015_7 from "@/assets/gallery/2015/7.jpg";
import festival2015_8 from "@/assets/gallery/2015/8.jpg"; 

// 2016 Photos
import festival2016_1 from "@/assets/gallery/2016/1.jpg";
import festival2016_2 from "@/assets/gallery/2016/2.jpg";
import festival2016_3 from "@/assets/gallery/2016/3.jpg";
import festival2016_4 from "@/assets/gallery/2016/4.jpg";
import festival2016_5 from "@/assets/gallery/2016/5.jpg";
import festival2016_6 from "@/assets/gallery/2016/6.jpg";
import festival2016_7 from "@/assets/gallery/2016/7.jpg";
import festival2016_8 from "@/assets/gallery/2016/8.jpg";
import festival2016_9 from "@/assets/gallery/2016/9.jpg";
import festival2016_10 from "@/assets/gallery/2016/10.jpg";

// 2017 Photos
import festival2017_1 from "@/assets/gallery/2017/1.jpg";
import festival2017_2 from "@/assets/gallery/2017/2.jpg";
import festival2017_3 from "@/assets/gallery/2017/3.jpg";
import festival2017_4 from "@/assets/gallery/2017/4.jpg";
import festival2017_5 from "@/assets/gallery/2017/5.jpg";

// 2018 Photos
import festival2018_1 from "@/assets/gallery/2018/1.jpg";
import festival2018_2 from "@/assets/gallery/2018/2.jpg";

// 2019 Photos
import festival2019_1 from "@/assets/gallery/2019/1.jpg";
import festival2019_2 from "@/assets/gallery/2019/2.jpg";
import festival2019_3 from "@/assets/gallery/2019/3.jpg";
import festival2019_4 from "@/assets/gallery/2019/4.jpg";

// 2020 Photos
import festival2020_1 from "@/assets/gallery/2020/1.jpg";
import festival2020_2 from "@/assets/gallery/2020/2.jpg";
import festival2020_3 from "@/assets/gallery/2020/3.jpg";
import festival2020_4 from "@/assets/gallery/2020/4.jpg";
import festival2020_5 from "@/assets/gallery/2020/5.jpg";
import festival2020_6 from "@/assets/gallery/2020/6.jpg";
import festival2020_7 from "@/assets/gallery/2020/7.jpg";
import festival2020_8 from "@/assets/gallery/2020/8.jpg";

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
    { id: 1, src: festival2014_1, alt: "Прапор республіки розвивається під час ритуальних купань" },
    { id: 2, src: festival2014_2, alt: "Міністр культури відпочиває перед будівлею Верховної Ліги Джекесу" },
    { id: 3, src: festival2014_3, alt: "Будівлі міністерств" },
    { id: 4, src: festival2014_4, alt: "Будівлі міністерств" },
    { id: 5, src: festival2014_5, alt: "Оригінальний прапор Республіки та місце приготування їжі" },
    { id: 6, src: festival2014_6, alt: "Будівля Верховної Ліги Джекесу" },
    { id: 7, src: festival2014_7, alt: "Прикордонний стовпчик Республіки" },
    { id: 8, src: festival2014_8, alt: "Допомога при спуску до джерела води" },
    { id: 9, src: festival2014_9, alt: "Перший прапор Республіки" },
    { id: 10, src: festival2014_10, alt: "Збір та обговорення важливих державних питань" },
    { id: 11, src: festival2014_11, alt: "Оригінальна арт-інсталяція \"Меморіал загублених тапочків\"" },
    { id: 12, src: festival2014_12, alt: "Меморіал, торговий морський прапор Республіки та фізична маніфестація гербу Республіки" },
  ],
  2015: [
    { id: 1, src: festival2015_1, alt: "Електронна музика під зірками" },
    { id: 2, src: festival2015_2, alt: "Фольклорний гурт на сцені" },
    { id: 3, src: festival2015_3, alt: "Кемпінг під вечір" },
    { id: 4, src: festival2015_4, alt: "Музичні майстер-класи" },
    { id: 5, src: festival2015_5, alt: "Вуличні артисти на фестивалі" },
    { id: 6, src: festival2015_6, alt: "Фестиваль у повному розпалі" },
    { id: 7, src: festival2015_7, alt: "Вечірній концерт з вогняним шоу" },
    { id: 8, src: festival2015_8, alt: "Фестивальна публіка танцює" },
  ],
  2016: [
    { id: 1, src: festival2016_1, alt: "Рок-концерт з піротехнікою" },
    { id: 2, src: festival2016_2, alt: "Захід сонця над фестивалем" },
    { id: 3, src: festival2016_3, alt: "Дитяча зона з розвагами" },
    { id: 4, src: festival2016_4, alt: "Джазовий ансамбль" },
    { id: 5, src: festival2016_5, alt: "Виступ місцевого гурту" },
    { id: 6, src: festival2016_6, alt: "Арт-інсталяція на фестивалі" },
    { id: 7, src: festival2016_7, alt: "Фестивальна гастрономічна зона" },
    { id: 8, src: festival2016_8, alt: "Музиканти на сцені" },
    { id: 9, src: festival2016_9, alt: "Фестиваль під зорями" },
    { id: 10, src: festival2016_10, alt: "Фольклорний гурт на сцені" },
  ],
  2017: [
    { id: 1, src: festival2017_1, alt: "Фестиваль у повному розпалі" },
    { id: 2, src: festival2017_2, alt: "Вечірній концерт з вогняним шоу" },
    { id: 3, src: festival2017_3, alt: "Фольклорний гурт на сцені" },
    { id: 4, src: festival2017_4, alt: "Арт-інсталяція на фестивалі" },
    { id: 5, src: festival2017_5, alt: "Музиканти на сцені" },
  ],
  2018: [
    { id: 1, src: festival2018_1, alt: "Фестиваль у повному розпалі" },
    { id: 2, src: festival2018_2, alt: "Вечірній концерт з вогняним шоу" },
  ],
  2019: [
    { id: 1, src: festival2019_1, alt: "Фестиваль у повному розпалі" },
    { id: 2, src: festival2019_2, alt: "Вечірній концерт з вогняним шоу" },
    { id: 3, src: festival2019_3, alt: "Фольклорний гурт на сцені" },
    { id: 4, src: festival2019_4, alt: "Арт-інсталяція на фестивалі" },
  ],
  2020: [
    { id: 1, src: festival2020_1, alt: "Фестиваль у повному розпалі" },
    { id: 2, src: festival2020_2, alt: "Вечірній концерт з вогняним шоу" },
    { id: 3, src: festival2020_3, alt: "Фольклорний гурт на сцені" },
    { id: 4, src: festival2020_4, alt: "Арт-інсталяція на фестивалі" },
    { id: 5, src: festival2020_5, alt: "Музиканти на сцені" },
    { id: 6, src: festival2020_6, alt: "Фестиваль у повному розпалі" },
    { id: 7, src: festival2020_7, alt: "Вечірній концерт з вогняним шоу" },
    { id: 8, src: festival2020_8, alt: "Фольклорний гурт на сцені" },
  ],
  // Just create folders like: src/assets/gallery/2017/, src/assets/gallery/2018/, etc.
};

// Helper function to get photos for a specific year
export const getPhotosForYear = (year: number): GalleryPhoto[] => {
  return galleryData[year] || [];
};

// Helper function to check if a year has photos
export const hasPhotosForYear = (year: number): boolean => {
  return galleryData[year] && galleryData[year].length > 0;
};