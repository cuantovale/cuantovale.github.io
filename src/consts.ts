import italiaCafeLogo from "./images/italia-cafe.png";
import clewBotLogo from "./images/clew-bot.png";

export const SITE_TITLE = "Felix Ramirez - Portafolio";
export const SITE_DESCRIPTION = "Bienvenido a mi portafolio";

export const stack: { name: string; color: string }[] = [
  {
    name: "HTML",
    color: "#EF652A",
  },
  {
    name: "CSS",
    color: "#30A9DC",
  },
  {
    name: "JavaScript",
    color: "#F0DB4F",
  },
  {
    name: "React",
    color: "#00D8FF",
  },
  {
    name: "tienda-nube",
    color: "#3398DB",
  },
  {
    name: "VS-Code",
    color: "#3DA9F2",
  },
];

export const projects = [
  {
    name: "Italia Café",
    description:
      'Un <b style="color: #FAA628;">menú digital</b> para una cafetería local, permitiendo a los clientes ver los productos desde sus dispositivos móviles y ordenar de forma rápida y sencilla.',
    image: italiaCafeLogo,
    url: "https://italiacafe.com.ar",
  },
  {
    name: "Clew Bot",
    description:
      'Plataforma dedicada a la <b style="color: #FAA628;">venta de bots de Discord</b> personalizados, ofreciendo soluciones de automatización y entretenimiento para servidores.',
    image: clewBotLogo,
    url: "https://clewbot.space",
  },
];
