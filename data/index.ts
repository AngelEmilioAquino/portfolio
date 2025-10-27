import { url } from "inspector";

export const navItems = [
  { name: "Experiencia", link: "#experiencia" },
  { name: "Proyectos", link: "#proyectos" },
  { name: "Sobre Mí", link: "#sobre-mi" },
  { name: "Contacto", link: "#contacto" },
];

export const gridItems = [
  {
    id: 1,
    title: "Priorizo ​​la colaboración con el cliente, fomentando la comunicación abierta.",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Soy muy flexible con las comunicaciones por zona horaria.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 5,
    title: "Desarrollando habilidades en diseño de software.",
    description: "Enfocado en SOLID, DevOps y patrones de diseño",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2", 
    imgClassName: "absolute right-0 bottom-0 md:w-200 w-200",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/grid3.png",
    spareImg: "/grid.svg",
  },
  {
    id: 4,
    title: "Apasionado por la tecnología, el desarrollo y DevOps.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },
  {
    id: 3,
    title: "Mi stack tecnológico",
    description: "Intento mejorar constantemente",
    className: "md:col-span-3 md:row-span-2", 
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 6,
    title: "¿Quieres empezar un proyecto juntos o discutir oportunidades laborales?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];


export const projects = [
  {
    id: 1,
    title: "",
    des: "",
    img: "",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "/ui.earth.com",
  },
  {
    id: 2,
    title: "",
    des: "",
    img: "",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "/ui.yoom.com",
  },
  {
    id: 3,
    title: "",
    des: "",
    img: "",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "/ui.aiimg.com",
  },
  {
    id: 4,
    title: "",
    des: "",
    img: "",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "/ui.apple.com",
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Desarrollador Frontend – UNPHU | CIBSE-2026",
    desc: "Lidero la experiencia UX/UI del sitio web de CIBSE, personalizando una plantilla base mediante Markdown, CSS y JavaScript. He mejorado la coherencia visual y accesibilidad general en un 35%, aplicando principios de diseño moderno y buenas prácticas.",
    date: "Julio 2025 - Presente",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Desarrollador Full Stack – Precisa Group SRL",
    desc: "Lidero la parte UX/UI de los proyectos en los que participo, implementando diseños más intuitivos y accesibles con React, Supabase, NextJS y NodeJS. He optimizado la consistencia visual de los componentes y la lógica del frontend mediante buenas prácticas, logrando mejorar la experiencia de usuario en un 30%.",
    date: "Julio 2025 - Presente",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Desarrollador Full Stack – Construcciones y Soluciones Emilio SRL",
    desc: "Diseñé y mantengo un sistema integral de gestión de inventario con PHP, JavaScript, MySQL y CSS. Lidero el diseño UX/UI y manejo todo el ciclo del producto, desde el backend hasta el despliegue. Logré aumentar la eficiencia operativa en un 40% y simplificar el flujo de uso para empleados mediante una interfaz más limpia y adaptable.",
    date: "Febrero 2023 – Actualidad (mantenimiento)",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Freelance – Aplicaciones Web y Móviles",
    desc: "Desarrollo soluciones personalizadas para clientes, abarcando desde el diseño UX/UI hasta la implementación completa en frontend, backend y despliegue. Aplico principios de DevOps avanzados para optimizar los flujos de publicación y mantenimiento, asegurando un diseño consistente y una experiencia visual profesional.",
    date: "2023 - Presente",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    url: "https://github.com/AngelEmilioAquino"
  },
  {
    id: 2,
    img: "./whatsapp.svg",
    url: "tel:+18094038309",
  },
  {
    id: 3,
    img: "/link.svg",
    url: "https://www.linkedin.com/in/angel-emilio-aquino/",
  },
];
