export { supabase } from "@/integrations/supabase/client"

// List of authorized users from the original AuthModal
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
    attendance: "2014, 2015, 2016"
  },
  { 
    surname: "ЗАХАРЯК", 
    passport: "НС0005",
    firstName: "Андрій",
    birthDate: "1993-12-13",
    citizenshipDate: "2014-08-19",
    passportDate: "2022-07-29",
    status: "Міністр цифрової трансформації",
    citStatus: "Дійсне"
  },
  { 
    surname: "ПРИШЛЯК", 
    passport: "НС0006",
    firstName: "Тетяна",
    birthDate: "1997-10-17",
    citizenshipDate: "2014-08-19",
    passportDate: "2022-07-29",
    status: "Міністр охорони здоров'я",
    citStatus: "Заморожене"
  },
  { 
    surname: "КРАВЦОВ", 
    passport: "НС0007",
    firstName: "Юрій",
    birthDate: "1994-03-04",
    citizenshipDate: "2014-08-19",
    passportDate: "2022-07-29",
    status: "Міністр фінансів",
    citStatus: "Дійсне"
  },
  { 
    surname: "ВОВКІВ", 
    passport: "ВС0004",
    firstName: "Назарій",
    birthDate: "1996-09-01",
    citizenshipDate: "2018-08-18",
    passportDate: "2022-07-29",
    status: "Міністр енергетики",
    citStatus: "Дійсне"
  },
  { 
    surname: "АНДРУШКО", 
    passport: "ВС0005",
    firstName: "Віра",
    birthDate: "1998-09-30",
    citizenshipDate: "2018-08-18",
    passportDate: "2022-07-29",
    status: "???",
    citStatus: "Дійсне"
  },
  { 
    surname: "БОКАЛО", 
    passport: "ЛБ0001",
    firstName: "Юрій",
    birthDate: "1994-05-05",
    citizenshipDate: "2019-08-16",
    passportDate: "2022-07-29",
    status: "Міністр господарства",
    citStatus: "Дійсне"
  },
  { 
    surname: "БОКАЛО", 
    passport: "ЛБ0002",
    firstName: "Іра",
    birthDate: "1994-04-08",
    citizenshipDate: "2019-08-16",
    passportDate: "2022-07-29",
    status: "Міністр брендингу",
    citStatus: "Дійсне"
  },
  { 
    surname: "КОВАЛЬЧУК", 
    passport: "МЙ0002",
    firstName: "Віталій",
    birthDate: "1992-10-12",
    citizenshipDate: "2022-07-29",
    passportDate: "2022-07-29",
    status: "Міністр закордонних справ",
    citStatus: "Заморожене"
  },
  { 
    surname: "НИЖНИК", 
    passport: "МЙ0003",
    firstName: "Наталія",
    birthDate: "1996-10-04",
    citizenshipDate: "2022-07-29",
    passportDate: "2022-07-29",
    status: "Заступниця міністра господарства",
    citStatus: "Дійсне"
  },
  { 
    surname: "СЕРІКОВА", 
    passport: "МЙ0004",
    firstName: "Світлана",
    birthDate: "1993-08-16",
    citizenshipDate: "2023-06-04",
    passportDate: "2023-06-24",
    status: "Громадянин",
    citStatus: "Дійсне"
  },
  { 
    surname: "ПАХАЛЮК", 
    passport: "МЙ0005",
    firstName: "Павло",
    birthDate: "1981-10-03",
    citizenshipDate: "2023-06-05",
    passportDate: "2023-06-25",
    status: "Громадянин",
    citStatus: "Дійсне"
  },
  { 
    surname: "ЛІЩУК", 
    passport: "МЙ0006",
    firstName: "Лідія",
    birthDate: "1977-05-25",
    citizenshipDate: "2023-06-06",
    passportDate: "2023-06-26",
    status: "Громадянин",
    citStatus: "Дійсне"
  },
  { 
    surname: "ГУК", 
    passport: "МЙ0007",
    firstName: "Григорій",
    birthDate: "1984-01-09",
    citizenshipDate: "2023-06-07",
    passportDate: "2023-06-27",
    status: "Громадянин",
    citStatus: "Дійсне"
  },
  { 
    surname: "ЙОЖИК", 
    passport: "МЙ0008",
    firstName: "Ярослав",
    birthDate: "1996-11-21",
    citizenshipDate: "2023-06-08",
    passportDate: "2023-06-28",
    status: "Громадянин",
    citStatus: "Дійсне"
  },
  { 
    surname: "ТЕРЛЕЦЬКА", 
    passport: "МЙ0009",
    firstName: "Тетяна",
    birthDate: "1989-03-17",
    citizenshipDate: "2023-06-09",
    passportDate: "2023-06-29",
    status: "Громадянин",
    citStatus: "Дійсне"
  },
  { 
    surname: "ГАРБОВСЬКА", 
    passport: "МЙ0010",
    firstName: "Галина",
    birthDate: "1972-07-04",
    citizenshipDate: "2023-06-10",
    passportDate: "2023-06-30",
    status: "Громадянин",
    citStatus: "Дійсне"
  },
  { 
    surname: "КРИВАНЧИК", 
    passport: "МЙ0012",
    firstName: "Костянтин",
    birthDate: "1986-12-13",
    citizenshipDate: "2023-06-12",
    passportDate: "2023-07-02",
    status: "Громадянин",
    citStatus: "Дійсне"
  },
  { 
    surname: "МАТКІВСЬКА", 
    passport: "МЙ0013",
    firstName: "Марта",
    birthDate: "1991-09-07",
    citizenshipDate: "2023-06-13",
    passportDate: "2023-07-03",
    status: "Громадянин",
    citStatus: "Дійсне"
  },
  { 
    surname: "ПАГУТА", 
    passport: "МЙ0014",
    firstName: "Петрина",
    birthDate: "1994-04-26",
    citizenshipDate: "2023-06-14",
    passportDate: "2023-07-04",
    status: "Громадянин",
    citStatus: "Дійсне"
  },
  { 
    surname: "СОПОТНИЦЬКА", 
    passport: "МЙ0016",
    firstName: "Софія",
    birthDate: "1980-08-11",
    citizenshipDate: "2023-06-16",
    passportDate: "2023-07-06",
    status: "Громадянин",
    citStatus: "Дійсне"
  },
  { 
    surname: "ХОРОШУЛІНА", 
    passport: "МЙ0017",
    firstName: "Христина",
    birthDate: "1997-01-19",
    citizenshipDate: "2023-06-17",
    passportDate: "2023-07-07",
    status: "Громадянин",
    citStatus: "Дійсне"
  },
  { 
    surname: "ПЕТРУК", 
    passport: "МЙ0018",
    firstName: "Петро",
    birthDate: "1973-06-02",
    citizenshipDate: "2023-06-18",
    passportDate: "2023-07-08",
    status: "Громадянин",
    citStatus: "Дійсне"
  },
  { 
    surname: "ПАСТУШЕНКО", 
    passport: "МЙ0019",
    firstName: "Павлина",
    birthDate: "1985-10-15",
    citizenshipDate: "2023-06-19",
    passportDate: "2023-07-09",
    status: "Громадянин",
    citStatus: "Дійсне"
  },
  { 
    surname: "ЛАЦИНА", 
    passport: "МЙ0020",
    firstName: "Лариса",
    birthDate: "1979-02-23",
    citizenshipDate: "2023-06-20",
    passportDate: "2023-07-10",
    status: "Громадянин",
    citStatus: "Дійсне"
  },
  { 
    surname: "МИХАЙЛЮК", 
    passport: "МЙ0021",
    firstName: "Максим",
    birthDate: "1992-05-08",
    citizenshipDate: "2023-06-21",
    passportDate: "2023-07-11",
    status: "Громадянин",
    citStatus: "Дійсне"
  },
  { 
    surname: "1", 
    passport: "1",
    firstName: "Тест",
    birthDate: "2000-01-01",
    citizenshipDate: "2024-01-01",
    passportDate: "2024-01-15",
    status: "Тестовий користувач",
    citStatus: "Дійсне"
  }
];

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