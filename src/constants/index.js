import { Link, useHref } from "react-router-dom";
import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "Sobre mi",
  },
  {
    id: "work",
    title: "Cursos",
  },
  {
    id: "contact",
    title: "Contacto",
  },
];

const services = [
  {
    title: "Desarrollador Full Stack ",
    icon: web,
  },
  {
    title: "React JS",
    icon: mobile,
  },
  {
    title: "Node Js",
    icon: backend,
  },
  {
    title: "Angular",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Desarrollo en React JS",
    company_name:
      "Universidad Tecnológica Nacional, Facultad Regional de Buenos Aires",
    icon: starbucks,
    iconBg: "#383E56",
    date: "21 Abr 2022 - 14 Jul 2022",
    points: [
      "Horas de cursada: 105",
      "Nota: Sobresaliente",
      "Estado: Finalizado",
      "Profesor: Leandro Gil Carrano",
    ],
  },
  {
    title: "Desarrollo con Angular",
    company_name:
      "Universidad Tecnológica Nacional, Facultad Regional de Buenos Aires",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "26 Jul 2022 - 6 Sep 2022",
    points: [
      "Horas de cursada: 105",
      "Nota: Sobresaliente",
      "Estado: Finalizado",
      "Profesor: Leandro Gil Carrano",
    ],
  },
  {
    title: "Desarrollo con NodeJS",
    company_name:
      "Universidad Tecnológica Nacional, Facultad Regional de Buenos Aires",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Horas de cursada: 45",
      "Nota: Sobresaliente",
      "Estado: Finalizado",
      "Profesor: Leandro Gil Carrano",
    ],
  },
  {
    title: "JavaScript Moderno",
    company_name: "Udemy",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "15 Jun 2023 - 28 Sep 2023",
    points: [
      "Horas de cursada: 50",
      "Nota: Aprobado",
      "Estado: Finalizado",
      "Profesor: Juan Pablo De la Torre Valdez",
    ],
  },
];

const projects = [
  {
    name: "Control de Gastos",
    description:
      "Sistema de administración de gastos que utiliza las tecnologías modernas de desarrollo web, React y Tailwind CSS. Esta aplicación permite a los usuarios realizar un seguimiento detallado de sus gastos, organizarlos en diferentes categorías y editarlos. Con una interfaz de usuario intuitiva y atractiva, el sistema ayuda a los usuarios a manejar sus finanzas personales.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },

      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/DanielCuello/control_gastos",
  },
  {
    name: "Administrador de Pacientes de Veterinaria",
    description:  
      "Este proyecto MERN es un sistema  de gestión de pacientes para clínicas veterinarias, diseñado para proporcionar una experiencia fluida y eficiente para los profesionales veterinarios. Permite la creación, autenticación y edición de perfiles de pacientes de manera segura y fácil.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongoDB",
        color: "green-text-gradient",
      },
      {
        name: "node",
        color: "pink-text-gradient",
      },
      {
        name: "tailwind",
        color: "white-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/DanielCuello/MERN_APV_frontend",
   
  },
  {
    name: "Guitar LA",
    description:
      "Proyecto impulsado por tecnología moderna que utiliza Next.js para el frontend y Strapi como backend. Esta plataforma permite explorar una amplia gama de guitarras y agregar productos al carrito de compras. Con un diseño elegante y una experiencia de usuario fluida, esta tienda ofrece una forma conveniente y emocionante de comprar guitarras de calidad.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "strapi",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/DanielCuello/GuitarLAStrapi",
  },
];

export { services, technologies, experiences, projects };
