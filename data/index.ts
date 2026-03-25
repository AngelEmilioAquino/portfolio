import { url } from "inspector";

export const navItems = [
{ name: "Experience", link: "#experience" },
{ name: "Projects", link: "#projects" },
{ name: "About Me", link: "#about-me" },
{ name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize collaboration with the client, fostering open communication.",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm flexible across time zones.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 5,
    title: "Developing skills in software design.",
    description: "Focused on SOLID, DevOps, and design patterns.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2", 
    imgClassName: "absolute right-0 bottom-0 md:w-200 w-200",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/grid3.png",
    spareImg: "/grid.svg",
  },
  {
    id: 4,
    title: "Passionate about technology, development, and DevOps.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },
  {
    id: 3,
    title: "My Technology Stack",
    description: "I try to improve constantly",
    className: "md:col-span-3 md:row-span-2", 
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 6,
    title: "Do you want to start a project together or discuss job opportunities?",
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
    title: "Aprobado RD",
    des: "Real estate platform designed to facilitate house sales in the Dominican Republic.",
    img: "/AprobadoRD.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/prisma.svg", "/supabase.svg"],
    link: "https://aprobadord.com/",
  },
  {
    id: 2,
    title: "Fintech",
    des: "A fintech platform that offers financial services and solutions to users.",
    img: "/Fintech.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/reactrouter.svg", "/reactquery.svg"],
    link: "",
    githubLink: "",
  },
  {
    id: 3,
    title: "KYC",
    des: "A platform for verifying customer identity and assessing potential risks.",
    img: "/KYC3.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/supabase.svg", "/next.svg"],
    link: "",
    githubLink: "",
  },
  {
    id: 4,
    title: "El Pensum",
    des: "A platform that helps students find academic resources.",
    img: "/pensum22.png",
    iconLists: ["/Angular.png", "/tail.svg", "/ts.svg", "/aspnet.webp", "/fm.svg"],
    link: "https://elpensum.com/inicio",
  },
  {
    id: 5,
    title: "RoboTap",
    des: "RoboTap is a UNPHU initiative using technology for social impact.",
    img: "/banner.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/vite.svg", "/fm.svg"],
    link: "https://robo-tap.vercel.app/",
    githubLink: "https://github.com/AngelEmilioAquino/RoboTap",
  },
  {
    id: 6,
    title: "A&N Ecommerce",
    des: "A&N E-commerce is a modern online store, created by Angel Aquino and Nicole Tineo.",
    img: "/A&N.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/supabase.svg", "/fm.svg"],
    link: "https://aynecommerce.netlify.app/",
    githubLink: "https://github.com/AngelEmilioAquino/Ecommerce",
  },
  {
    id: 7,
    title: "UNPHU SHOP",
    des: "UNPHU Shop is a modern online store, created by Angel Aquino and Nicole Tineo.",
    img: "/UNPHUShop.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/supabase.svg", "/fm.svg"],
    link: "https://unphu-shop.vercel.app/",
    githubLink: "https://github.com/AngelEmilioAquino/UNPHU-shop",
  },
  {
    id: 8,
    title: "A3 Crypto Place",
    des: "A3 Crypto Place is a modern online platform for cryptocurrency trading details.",
    img: "/crypto.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/supabase.svg", "/fm.svg"],
    link: "https://a3cryptoplace.vercel.app/",
    githubLink: "https://github.com/AngelEmilioAquino/A3Crypto",
  },
  {
    id: 9,
    title: "A3 File Converter",
    des: "A3 File Converter is a modern online platform for converting and managing files.",
    img: "/fileconverter.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/supabase.svg", "/fm.svg"],
    link: "https://a3fileconverter.netlify.app/",
    githubLink: "https://github.com/AngelEmilioAquino/FileConverter",
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
    desc: "I lead the UX/UI design of the CIBSE website, customizing a base template using Markdown, CSS, and JavaScript. I have improved visual consistency and overall accessibility by 35%, applying modern design principles and best practices.",
    date: "July 2025 - Present",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Full Stack Developer – Precisa Group SRL",
    desc: "I lead the UX/UI design of projects I participate in, implementing more intuitive and accessible designs with React, Supabase, NextJS and NodeJS. I have optimized the visual consistency of components and frontend logic through best practices, achieving a 30% improvement in user experience.",
    date: "July 2025 - Present",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Full Stack Developer – Emilio SRL Construction and Solutions",
    desc: "I designed and maintain a comprehensive inventory management system using PHP, JavaScript, MySQL, and CSS. I lead the UX/UI design and manage the entire product lifecycle, from backend development to deployment. I achieved a 40% increase in operational efficiency and simplified the user experience for employees through a cleaner and more responsive interface.",
    date: "February 2023 – Present (maintenance)",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Freelance – Web and Mobile Applications",
    desc: "I develop custom solutions for clients, encompassing everything from UX/UI design to full implementation across frontend, backend, and deployment. I apply advanced DevOps principles to optimize publishing and maintenance workflows, ensuring consistent design and a professional visual experience.",
    date: "2023 - Present",
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
