export { supabase } from "@/integrations/supabase/client"

// List of authorized users from the original AuthModal
export const AUTHORIZED_USERS = [
  { surname: "ЗАДОРОЖНИЙ", passport: "НС0001" },
  { surname: "КОНИК", passport: "НС0002" },
  { surname: "ЗАХАРЯК", passport: "НС0005" },
  { surname: "ПРИШЛЯК", passport: "НС0006" },
  { surname: "КРАВЦОВ", passport: "НС0007" },
  { surname: "ВОВКІВ", passport: "ВС0004" },
  { surname: "АНДРУШКО", passport: "ВС0005" },
  { surname: "БОКАЛО", passport: "ЛБ0001" },
  { surname: "БОКАЛО", passport: "ЛБ0002" },
  { surname: "КОВАЛЬЧУК", passport: "МЙ0002" },
  { surname: "НИЖНИК", passport: "МЙ0003" },
  { surname: "СЕРІКОВА", passport: "МЙ0004" },
  { surname: "ПАХАЛЮК", passport: "МЙ0005" },
  { surname: "ЛІЩУК", passport: "МЙ0006" },
  { surname: "ГУК", passport: "МЙ0007" },
  { surname: "ЙОЖИК", passport: "МЙ0008" },
  { surname: "ТЕРЛЕЦЬКА", passport: "МЙ0009" },
  { surname: "ГАРБОВСЬКА", passport: "МЙ0010" },
  { surname: "КРИВАНЧИК", passport: "МЙ0012" },
  { surname: "МАТКІВСЬКА", passport: "МЙ0013" },
  { surname: "ПАГУТА", passport: "МЙ0014" },
  { surname: "СОПОТНИЦЬКА", passport: "МЙ0016" },
  { surname: "ХОРОШУЛІНА", passport: "МЙ0017" },
  { surname: "ПЕТРУК", passport: "МЙ0018" },
  { surname: "ПАСТУШЕНКО", passport: "МЙ0019" },
  { surname: "ЛАЦИНА", passport: "МЙ0020" },
  { surname: "МИХАЙЛЮК", passport: "МЙ0021" },
  { surname: "1", passport: "1" }
];

export const isAuthorizedUser = (surname: string, passport: string): boolean => {
  return AUTHORIZED_USERS.some(
    user => user.surname.toLowerCase() === surname.toLowerCase().trim() && 
            user.passport === passport.trim()
  );
}