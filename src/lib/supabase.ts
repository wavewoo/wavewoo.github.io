export { supabase } from "@/integrations/supabase/client"

// List of authorized users
export const AUTHORIZED_USERS = [
  { surname: "ЗАДОРОЖНИЙ", 
    passport: "НС0001",
    firstName: "Назар",
    birthDate: "1994-10-18",
    citizenshipDate: "2014-08-19",
    passportDate: "2022-07-29",
    status: "Міністр юстиції",
    citStatus: "Дійсне",
    attendance: "2014, 2015, 2016, 2017, 2018, 2019, 2021, 2022, 2023, 2024, 2025"
  },
  { 
    surname: "ПАХАЛЮК", 
    passport: "НС0002",
    firstName: "Яна",
    birthDate: "1994-07-07",
    citizenshipDate: "2014-08-19",
    passportDate: "2023-07-14",
    status: "Міністр культури",
    citStatus: "Дійсне",
    attendance: "2014, 2015, 2016, 2017, 2018, 2019, 2020, 2022, 2023, 2024"
  },
  { 
    surname: "ЗАХАРЯК", 
    passport: "НС0005",
    firstName: "Андрій",
    birthDate: "1993-12-13",
    citizenshipDate: "2014-08-19",
    passportDate: "2022-07-29",
    status: "Міністр цифрової трансформації",
    citStatus: "Дійсне",
    attendance: "2014, 2015, 2016, 2018, 2019, 2020, 2021, 2022, 2023"
  },
  { 
    surname: "ПРИШЛЯК", 
    passport: "НС0006",
    firstName: "Тетяна",
    birthDate: "1997-10-17",
    citizenshipDate: "2014-08-19",
    passportDate: "2022-07-29",
    status: "Міністр охорони здоров'я",
    citStatus: "Заморожене",
    attendance: "2014, 2019, 2021"
  },
  { 
    surname: "КРАВЦОВ", 
    passport: "НС0007",
    firstName: "Юрій",
    birthDate: "1994-03-04",
    citizenshipDate: "2014-08-19",
    passportDate: "2022-07-29",
    status: "Міністр фінансів",
    citStatus: "Дійсне",
    attendance: "2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025"
  },
  { 
    surname: "ВОВКІВ", 
    passport: "ВС0004",
    firstName: "Назарій",
    birthDate: "1996-09-01",
    citizenshipDate: "2018-08-18",
    passportDate: "2022-07-29",
    status: "Міністр енергетики",
    citStatus: "Дійсне",
    attendance: "2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025"
  },
  { 
    surname: "АНДРУШКО", 
    passport: "ВС0005",
    firstName: "Віра",
    birthDate: "1998-09-30",
    citizenshipDate: "2018-08-18",
    passportDate: "2022-07-29",
    status: "???",
    citStatus: "Дійсне",
    attendance: "2016, 2018, 2019, 2020, 2021, 2022, 2023"
  },
  { 
    surname: "БОКАЛО", 
    passport: "ЛБ0001",
    firstName: "Юрій",
    birthDate: "1994-05-05",
    citizenshipDate: "2019-08-16",
    passportDate: "2022-07-29",
    status: "Міністр господарства",
    citStatus: "Дійсне",
    attendance: "2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025"
  },
  { 
    surname: "БОКАЛО", 
    passport: "ЛБ0002",
    firstName: "Іра",
    birthDate: "1994-04-08",
    citizenshipDate: "2019-08-16",
    passportDate: "2022-07-29",
    status: "Міністр брендингу",
    citStatus: "Дійсне",
    attendance: "2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025"
  },
  { 
    surname: "КОВАЛЬЧУК", 
    passport: "МЙ0002",
    firstName: "Віталій",
    birthDate: "1992-10-12",
    citizenshipDate: "2022-07-29",
    passportDate: "2022-07-29",
    status: "Міністр закордонних справ",
    citStatus: "Заморожене",
    attendance: "2021, 2022"
  },
  { 
    surname: "НИЖНИК", 
    passport: "МЙ0003",
    firstName: "Наталія",
    birthDate: "1996-10-04",
    citizenshipDate: "2022-07-29",
    passportDate: "2022-07-29",
    status: "Заступниця міністра господарства",
    citStatus: "Дійсне",
    attendance: "2021, 2022, 2023, 2024, 2025"
  },
  { 
    surname: "ГНАТКІВ", 
    passport: "МЙ0004",
    firstName: "Богдан",
    birthDate: "1997-03-30",
    citizenshipDate: "2022-07-29",
    passportDate: "2022-07-29",
    status: "Міністр благоустрою та охорони довкілля",
    citStatus: "Дійсне",
    attendance: "2021, 2022, 2023, 2024, 2025"
  },
  { 
    surname: "ПАХАЛЮК", 
    passport: "МЙ0005",
    firstName: "Вадим",
    birthDate: "1995-01-27",
    citizenshipDate: "2023-07-14",
    passportDate: "2023-07-14",
    status: "Заступник міністра культури",
    citStatus: "Дійсне",
    attendance: "2022, 2023"
  },
  { 
    surname: "ЛІЩУК", 
    passport: "МЙ0006",
    firstName: "Аліна",
    birthDate: "2002-02-18",
    citizenshipDate: "2023-07-14",
    passportDate: "2023-07-14",
    status: "Заступниця міністра енергетики",
    citStatus: "Дійсне",
    attendance: "2022, 2023, 2024, 2025"
  },
  { 
    surname: "ГУК", 
    passport: "МЙ0007",
    firstName: "Олександр",
    birthDate: "1992-12-29",
    citizenshipDate: "2023-07-14",
    passportDate: "2023-07-14",
    status: "В.о. міністра охорони здоров’я",
    citStatus: "Дійсне",
    attendance: "2022, 2023"
  },
  { 
    surname: "ЙОЖИК", 
    passport: "МЙ0008",
    firstName: "Максим",
    birthDate: "1995-09-23",
    citizenshipDate: "2023-07-14",
    passportDate: "2023-07-14",
    status: "Міністр Татишо",
    citStatus: "Дійсне",
    attendance: "2022, 2023, 2024, 2025"
  },
  { 
    surname: "ТЕРЛЕЦЬКА", 
    passport: "МЙ0009",
    firstName: "Вікторія",
    birthDate: "1996-11-19",
    citizenshipDate: "2023-07-14",
    passportDate: "2023-07-14",
    status: "Заступниця міністра господарства",
    citStatus: "Дійсне",
    attendance: "2022, 2023, 2024"
  },
  { 
    surname: "ГАРБОВСЬКА", 
    passport: "МЙ0010",
    firstName: "Оксана",
    birthDate: "1999-02-06",
    citizenshipDate: "2023-07-14",
    passportDate: "2023-07-14",
    status: "Заступниця міністра брендингу",
    citStatus: "Дійсне",
    attendance: "2022, 2023, 2024, 2025"
  },
  { 
    surname: "КРИВАНЧИК", 
    passport: "МЙ0012",
    firstName: "Наталія",
    birthDate: "2003-06-10",
    citizenshipDate: "2024-07-19",
    passportDate: "2024-07-19",
    status: "Заступниця міністра цифрової трансформації",
    citStatus: "Дійсне",
    attendance: "2023, 2024"
  },
  { 
    surname: "МАТКІВСЬКА", 
    passport: "МЙ0013",
    firstName: "Марічка",
    birthDate: "1998-01-18",
    citizenshipDate: "2025-07-25",
    passportDate: "2025-07-25",
    status: "Заступниця міністра юстиції",
    citStatus: "Дійсне",
    attendance: "2022, 2025"
  },
  { 
    surname: "ПАГУТА", 
    passport: "МЙ0014",
    firstName: "Богдан",
    birthDate: "1999-01-23",
    citizenshipDate: "2025-07-25",
    passportDate: "2025-07-25",
    status: "Заступник міністра юстиції",
    citStatus: "Дійсне",
    attendance: "2023, 2025"
  },
  { 
    surname: "СОПОТНИЦЬКА", 
    passport: "МЙ0016",
    firstName: "Ольга",
    birthDate: "2003-07-16",
    citizenshipDate: "2025-07-25",
    passportDate: "2025-07-25",
    status: "???",
    citStatus: "Дійсне",
    attendance: "2024, 2025"
  },
  { 
    surname: "ХОРОШУЛІНА",
    passport: "МЙ0017",
    firstName: "Світлана",
    birthDate: "1991-07-18",
    citizenshipDate: "2025-07-25",
    passportDate: "2025-07-25",
    status: "???",
    citStatus: "Дійсне",
    attendance: "2024, 2025"
  },
  { 
    surname: "ПЕТРУК", 
    passport: "МЙ0018",
    firstName: "Світлана",
    birthDate: "1987-01-26",
    citizenshipDate: "2025-07-25",
    passportDate: "2025-07-25",
    status: "Заступниця міністра фінансів",
    citStatus: "Дійсне",
    attendance: "2024, 2025"
  },
  { 
    surname: "ПАСТУШЕНКО", 
    passport: "МЙ0019",
    firstName: "Павлина",
    birthDate: "1983-04-20",
    citizenshipDate: "2025-07-25",
    passportDate: "2025-07-25",
    status: "Заступник міністра енергетики",
    citStatus: "Дійсне",
    attendance: "2024, 2025"
  },
  { 
    surname: "ЛАЦИНА", 
    passport: "МЙ0020",
    firstName: "Анна",
    birthDate: "1996-12-15",
    citizenshipDate: "2025-07-25",
    passportDate: "2025-07-25",
    status: "???",
    citStatus: "Дійсне",
    attendance: "2024, 2025"
  },
  { 
    surname: "МИХАЙЛЮК", 
    passport: "МЙ0021",
    firstName: "Христина",
    birthDate: "1990-05-20",
    citizenshipDate: "2025-07-25",
    passportDate: "2025-07-25",
    status: "Секретарка міністра юстиції",
    citStatus: "Дійсне",
    attendance: "2024, 2025"
  },
  { 
    surname: "СЕРІКОВА", 
    passport: "МЙ0004А",
    firstName: "Маргарита",
    birthDate: "1996-04-16",
    citizenshipDate: "2023-07-14",
    passportDate: "2023-07-14",
    status: "Заступниця міністра культури",
    citStatus: "Дійсне",
    attendance: "2022, 2023"
  }
];
// List of informational users (not authorized for login)
export const INFORMATIONAL_USERS = [
  {
    surname: "ЗАТВАРСЬКИЙ",
    firstName: "Тарас",
    birthDate: "1994-11-23",
    status: "---",
    citStatus: "Недійсне",
    attendance: "2014"
    // Note: no passport field - this prevents login
  },
  {
    surname: "КІНДРАТІВ",
    firstName: "Наталія", 
    birthDate: "1997-08-17",
    status: "Міністр ЗМІ",
    citStatus: "Заморожене",
    attendance: "2014, 2019, 2021"
  },
  {
    surname: "НЕВІДОМО",
    firstName: "Іванка",
    birthDate: "1900-01-01",
    status: "---",
    citStatus: "Недійсне",
    attendance: "2015, 2016"
  },
  {
    surname: "ЗАЛОКОЦЬКА",
    firstName: "Христина",
    birthDate: "1994-04-13",
    status: "---",
    citStatus: "Недійсне",
    attendance: "2015"
  },
  {
    surname: "ВОЙЦЕШИН",
    firstName: "Василь", 
    birthDate: "1900-01-01",
    status: "---",
    citStatus: "Недійсне",
    attendance: "2016"
  },
  {
    surname: "НЕВІДОМО",
    firstName: "Марія",
    birthDate: "1900-01-01",
    status: "---",
    citStatus: "Недійсне",
    attendance: "2016"
  },
  {
    surname: "ЦУРА",
    firstName: "Соломія",
    birthDate: "1900-01-01",
    status: "---",
    citStatus: "Недійсне",
    attendance: "2017"
  },
  {
    surname: "ГНАТКІВ",
    firstName: "Дмитро",
    birthDate: "1900-01-13",
    status: "Керівник управління флоту",
    citStatus: "Заморожене",
    attendance: "2017, 2018, 2019, 2020, 2021"
  },
  {
    surname: "КОСТИК",
    firstName: "Галя",
    birthDate: "1900-01-01",
    status: "---",
    citStatus: "Недійсне",
    attendance: "2017, 2018"
  },
  {
    surname: "СМОРОДІН",
    firstName: "Валентин",
    birthDate: "1900-01-01",
    status: "Державний психолог",
    citStatus: "Довічне",
    attendance: "2019, 2021"
  },
  {
    surname: "САГАТЮК",
    firstName: "Олександр",
    birthDate: "1900-01-01",
    status: "---",
    citStatus: "Недійсне",
    attendance: "2021"
  },
  {
    surname: "ГОНЧАРОВ",
    firstName: "Олександр",
    birthDate: "1900-01-01",
    status: "---",
    citStatus: "Недійсне",
    attendance: "2021"
  },
  {
    surname: "ЯРЧУК",
    firstName: "Марія",
    birthDate: "1900-01-01",
    status: "---",
    citStatus: "Недійсне",
    attendance: "2023"
  },
  {
    surname: "КОВАЛЬЧУК",
    firstName: "Михайло",
    birthDate: "1900-01-01",
    status: "---",
    citStatus: "Недійсне",
    attendance: "2023"
  },
  {
    surname: "ПАХАЛЮК",
    firstName: "Олег",
    birthDate: "1900-01-01",
    status: "---",
    citStatus: "Недійсне",
    attendance: "2023"
  },
  {
    surname: "ЛЮТИК",
    firstName: "Ігор",
    birthDate: "1900-01-01",
    status: "---",
    citStatus: "Недійсне",
    attendance: "2024"
  },
  {
    surname: "ПОХОДЖАЙ",
    firstName: "Марта",
    birthDate: "1900-01-01",
    status: "---",
    citStatus: "Недійсне",
    attendance: "2024"
  },
  {
    surname: "ЯГОЦЬКИЙ",
    firstName: "Данило",
    birthDate: "1900-01-01",
    status: "---",
    citStatus: "Недійсне",
    attendance: "2024"
  },
  {
    surname: "ПЛЯЦКО",
    firstName: "Марта",
    birthDate: "1900-01-01",
    status: "---",
    citStatus: "Недійсне",
    attendance: "2024"
  },
  {
    surname: "ПЛЯЦКО",
    firstName: "Андрій",
    birthDate: "1900-01-01",
    status: "---",
    citStatus: "Недійсне",
    attendance: "2024"
  },
  {
    surname: "КОНИК",
    firstName: "Захар",
    birthDate: "1900-01-01",
    status: "---",
    citStatus: "Недійсне",
    attendance: "2024"
  },
  {
    surname: "НЕДЯЛКІНА",
    firstName: "Дарина",
    birthDate: "1900-01-01",
    status: "---",
    citStatus: "Недійсне",
    attendance: "2024"
  },
  {
    surname: "БАНДРІВСЬКИЙ",
    firstName: "Павло",
    birthDate: "1900-01-01",
    status: "---",
    citStatus: "Недійсне",
    attendance: "2025"
  },
  {
    surname: "МИКИТИН",
    firstName: "Вероніка",
    birthDate: "1900-01-01",
    status: "---",
    citStatus: "Недійсне",
    attendance: "2025"
  },
  {
    surname: "РУДИК",
    firstName: "Вікторія",
    birthDate: "1900-01-01",
    status: "---",
    citStatus: "Недійсне",
    attendance: "2025"
  }
];

// Combined list for searching/displaying all users
export const ALL_USERS = [...AUTHORIZED_USERS, ...INFORMATIONAL_USERS];

// Original utility functions for working with authorized users
export const getUserDetails = (surname: string, passport: string) => {
  return AUTHORIZED_USERS.find(
    user => user.surname.toLowerCase() === surname.toLowerCase().trim() && 
            user.passport === passport.trim()
  );
};

export const isAuthorizedUser = (surname: string, passport: string): boolean => {
  return AUTHORIZED_USERS.some(
    user => user.surname.toLowerCase() === surname.toLowerCase().trim() && 
            user.passport === passport.trim()
  );
};

// New utility functions for working with all users
export const findUserBySurname = (surname: string) => {
  return ALL_USERS.filter(
    user => user.surname.toLowerCase().includes(surname.toLowerCase().trim())
  );
};

export const getAllUsersForDisplay = () => {
  return ALL_USERS.map(user => ({
    surname: user.surname,
    firstName: user.firstName,
    status: user.status,
    citStatus: user.citStatus,
    canLogin: 'passport' in user // Indicates if user can login
  }));
};

export const getUserStatistics = () => {
  return {
    totalUsers: ALL_USERS.length,
    authorizedUsers: AUTHORIZED_USERS.length,
    informationalUsers: INFORMATIONAL_USERS.length,
    activeUsers: ALL_USERS.filter(user => user.citStatus === "Дійсне").length
  };
};

// Festival attendance utilities
export const getUsersByYear = (year: string) => {
  return ALL_USERS.filter(user => {
    if (!user.attendance) return false;
    return user.attendance.split(', ').includes(year);
  }).sort((a, b) => a.surname.localeCompare(b.surname));
};

export const getYearStatistics = (year: string) => {
  const attendees = getUsersByYear(year);
  return {
    total: attendees.length,
    active: attendees.filter(user => user.citStatus === "Дійсне").length,
    frozen: attendees.filter(user => user.citStatus === "Заморожене").length
  };
};

export const getAllFestivalYears = () => {
  const years = new Set<string>();
  ALL_USERS.forEach(user => {
    if (user.attendance) {
      user.attendance.split(', ').forEach(year => years.add(year.trim()));
    }
  });
  return Array.from(years).sort();
};