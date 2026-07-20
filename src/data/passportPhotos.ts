// Type definition for passport photo data
export interface PassportPhoto {
  passport: string;
  photoUrl: string;
  altText?: string;
}

// Passport photos data
const passportPhotos: PassportPhoto[] = [
  {
    passport: "НС0001",
    photoUrl: "/passportphotos/НС0001.png",
    altText: "Паспортне фото"
  },
  {
    passport: "НС0002",
    photoUrl: "/passportphotos/НС0002.png",
    altText: "Паспортне фото"
  },
  {
    passport: "НС0005",
    photoUrl: "/passportphotos/НС0005.png",
    altText: "Паспортне фото"
  },
  {
    passport: "НС0006",
    photoUrl: "/passportphotos/НС0006.png",
    altText: "Паспортне фото"
  },
  {
    passport: "НС0007",
    photoUrl: "/passportphotos/НС0007.png",
    altText: "Паспортне фото"
  },
  {
    passport: "ВС0004",
    photoUrl: "/passportphotos/ВС0004.png",
    altText: "Паспортне фото"
  },
  {
    passport: "ВС0005",
    photoUrl: "/passportphotos/ВС0005.png",
    altText: "Паспортне фото"
  },
  {
    passport: "ЛБ0001",
    photoUrl: "/passportphotos/ЛБ0001.png",
    altText: "Паспортне фото"
  },
  {
    passport: "ЛБ0002",
    photoUrl: "/passportphotos/ЛБ0002.png",
    altText: "Паспортне фото"
  },
  {
    passport: "МЙ0002",
    photoUrl: "/passportphotos/МЙ0002.png",
    altText: "Паспортне фото"
  },
  {
    passport: "МЙ0003",
    photoUrl: "/passportphotos/МЙ0003.png",
    altText: "Паспортне фото"
  },
  {
    passport: "МЙ0004",
    photoUrl: "/passportphotos/МЙ0004.png",
    altText: "Паспортне фото"
  },
  {
    passport: "МЙ0005",
    photoUrl: "/passportphotos/МЙ0005.png",
    altText: "Паспортне фото"
  },
  {
    passport: "МЙ0006",
    photoUrl: "/passportphotos/МЙ0006.png",
    altText: "Паспортне фото"
  },
  {
    passport: "МЙ0007",
    photoUrl: "/passportphotos/МЙ0007.png",
    altText: "Паспортне фото"
  },
  {
    passport: "МЙ0008",
    photoUrl: "/passportphotos/МЙ0008.png",
    altText: "Паспортне фото"
  },
  {
    passport: "МЙ0009",
    photoUrl: "/passportphotos/МЙ0009.png",
    altText: "Паспортне фото"
  },
  {
    passport: "МЙ0010",
    photoUrl: "/passportphotos/МЙ0010.png",
    altText: "Паспортне фото"
  },
  {
    passport: "МЙ0012",
    photoUrl: "/passportphotos/МЙ0012.png",
    altText: "Паспортне фото"
  },
  {
    passport: "МЙ0013",
    photoUrl: "/passportphotos/МЙ0013.png",
    altText: "Паспортне фото"
  },
  {
    passport: "МЙ0014",
    photoUrl: "/passportphotos/МЙ0014.png",
    altText: "Паспортне фото"
  },
  {
    passport: "МЙ0016",
    photoUrl: "/passportphotos/МЙ0016.png",
    altText: "Паспортне фото"
  },
  {
    passport: "МЙ0017",
    photoUrl: "/passportphotos/МЙ0017.png",
    altText: "Паспортне фото"
  },
  {
    passport: "МЙ0018",
    photoUrl: "/passportphotos/МЙ0018.png",
    altText: "Паспортне фото"
  },
  {
    passport: "МЙ0019",
    photoUrl: "/passportphotos/МЙ0019.png",
    altText: "Паспортне фото"
  },
  {
    passport: "МЙ0020",
    photoUrl: "/passportphotos/МЙ0020.png",
    altText: "Паспортне фото"
  },
  {
    passport: "МЙ0021",
    photoUrl: "/passportphotos/МЙ0021.png",
    altText: "Паспортне фото"
  },
  {
    passport: "МЙ0004А",
    photoUrl: "/passportphotos/МЙ0004А.png",
    altText: "Паспортне фото"
  }
];

// Function to get photo by passport number
export const getPassportPhoto = (passportNumber: string): string | null => {
  const photoData = passportPhotos.find(photo => photo.passport === passportNumber);
  return photoData ? photoData.photoUrl : null;
};

// Function to get photo data (including alt text) by passport number
export const getPassportPhotoData = (passportNumber: string): PassportPhoto | null => {
  return passportPhotos.find(photo => photo.passport === passportNumber) || null;
};

// Function to add a new passport photo (for future functionality)
export const addPassportPhoto = (passport: string, photoUrl: string, altText?: string): void => {
  const existingIndex = passportPhotos.findIndex(photo => photo.passport === passport);
  
  if (existingIndex !== -1) {
    // Update existing photo
    passportPhotos[existingIndex] = { passport, photoUrl, altText };
  } else {
    // Add new photo
    passportPhotos.push({ passport, photoUrl, altText });
  }
};

export default passportPhotos;