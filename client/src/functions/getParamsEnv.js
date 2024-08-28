//! Unico lugar donde obtengo las variables de entorno.
export default function getParamsEnv() {
  const ROOT = import.meta.env.VITE_ROOT || "/";
  const LOGIN = import.meta.env.VITE_LOGIN || "/login";
  const HOME = import.meta.env.VITE_HOME || "/home";
  const TICKETS = import.meta.env.VITE_TICKETS || "/tickets";

  const API_URL_BASE =
    import.meta.env.VITE_URL_BASE || "http://localhost:3001/mant-control/";
  return {
    ROOT,
    LOGIN,
    HOME,
    TICKETS,
    API_URL_BASE,
  };
}
