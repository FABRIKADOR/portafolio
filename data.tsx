import { BookText, CodeSquare, HomeIcon, UserRound, Linkedin, Twitter, Rss, Twitch, Youtube, Crop, Pencil, Computer, Book, Rocket, Speech, Phone } from "lucide-react";

export const socialNetworks = [
    {
        id: 1,
        logo: <Youtube size={30} strokeWidth={1} />,
        src: "#!",
    },
    {
        id: 2,
        logo: <Linkedin size={30} strokeWidth={1} />,
        src: "#!",
    },
    {
        id: 3,
        logo: <Twitter size={30} strokeWidth={1} />,
        src: "#!",
    },
    {
        id: 4,
        logo: <Rss size={30} strokeWidth={1} />,
        src: "#!",
    },
    {
        id: 5,
        logo: <Twitch size={30} strokeWidth={1} />,
        src: "#!",
    },
];


export const itemsNavbar = [
    {
        id: 1,
        title: "Home",
        icon: <HomeIcon size={25} color="#fff" strokeWidth={1} />,
        link: "/",
        tooltip: "Home"
    },
    {
        id: 2,
        title: "User",
        icon: <Speech size={25} color="#fff" strokeWidth={1} />,
        link: "/about",
        tooltip: "About"
    },
    {
        id: 3,
        title: "User",
        icon: <UserRound size={25} color="#fff" strokeWidth={1} />,
        link: "/trayectory",
        tooltip: "Trayectory"
    },
    {
        id: 4,
        title: "Book",
        icon: <BookText size={25} color="#fff" strokeWidth={1} />,
        link: "/services",
        tooltip: "Services"
    },
    {
        id: 5,
        title: "Target",
        icon: <CodeSquare size={25} color="#fff" strokeWidth={1} />,
        link: "/portfolio",
        tooltip: "Portfolio"
    },
    {
        id: 6,
        title: "Phone",
        icon: <Phone size={25} color="#fff" strokeWidth={1} />,
        link: "/contact",
        tooltip: "Contact"
    },
    
];

export const dataAboutPage = [
    {
        id: 1,
        title: "Desarrollador Web",
        subtitle: "Freelance",
        description: "Creación de sitios web dinámicos y responsivos que cumplen con las necesidades específicas de cada cliente, utilizando las últimas tecnologías web.",
        date: "Nov 2023",
    },
    {
        id: 2,
        title: "Desarrollador de Experiencias Web",
        subtitle: "Proyectos Académicos",
        description: "He trabajado en diversos proyectos universitarios, creando interfaces y funcionalidades que reflejan creatividad y eficiencia.",
        date: "Ene 2024",
    },
    {
        id: 3,
        title: "Creador de Herramientas Digitales",
        subtitle: "SCIREHUB",
        description: "Lideré la creación de una plataforma innovadora para investigadores, facilitando la gestión de proyectos y la colaboración académica.",
        date: "May 2024",
    },
    {
        id: 4,
        title: "Desarrollador de Sistemas de Seguridad",
        subtitle: "Proyecto Personal",
        description: "Diseñé y programé un sistema de seguridad integral utilizando sensores y microcontroladores, aplicando conocimientos avanzados de hardware y software.",
        date: "Jul 2024",
    },
];


export const dataCounter = [
    {
        id: 0,
        endCounter: 7,
        text: "Proyectos innovadores",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 1,
        endCounter: 60,
        text: "Horas de código semanales",
        lineRight: true,
        lineRightMobile: false,
    },
    {
        id: 2,
        endCounter: 3000,
        text: "Líneas de código escritas",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 3,
        endCounter: 8,
        text: "Tecnologías dominadas",
        lineRight: false,
        lineRightMobile: false,
    },
];


export const serviceData = [
    {
        icon: <Crop />,
        title: "Branding",
        description: "Diseño identidades visuales coherentes y efectivas que reflejan la esencia de cada marca.",
    },
    {
        icon: <Pencil />,
        title: "Diseño Web",
        description: "Creo interfaces intuitivas y atractivas, con un enfoque en la experiencia del usuario.",
    },
    {
        icon: <Computer />,
        title: "Desarrollo Web",
        description: "Construyo sitios web personalizados y funcionales, adaptados a las necesidades de cada proyecto.",
    },
    {
        icon: <Rocket />,
        title: "Integración de APIs",
        description: "Conecto y optimizo sistemas mediante la integración fluida de APIs.",
    },
    {
        icon: <BookText />,
        title: "Innovación y Prototipado",
        description: "Desarrollo nuevas ideas, llevando conceptos a la realidad a través de prototipos funcionales.",
    },
];


export const dataPortfolio = [
    {
        id: 1,
        title: "Scire-Hub",
        image: "/scirehub.jpg",
        urlGithub: "https://www.figma.com/design/pPP9EzfFBVEjPyyJF0HKu0/ScireHub?node-id=150-55&p=f&t=P7up06SbeWG6VdR6-0",
        urlDemo: "https://www.figma.com/design/pPP9EzfFBVEjPyyJF0HKu0/ScireHub?node-id=150-55&p=f&t=P7up06SbeWG6VdR6-0",
    },
    {
        id: 2,
        title: "Reservana",
        image: "/reservana.jpg",
        urlGithub: "https://github.com/FABRIKADOR/Pagina-Reservaciones",
        urlDemo: "reservanagto.com",
    },
    {
        id: 3,
        title: "Aularium",
        image: "/aularium.jpg",
        urlGithub: "https://github.com/FABRIKADOR/aularium",
        urlDemo: "https://v0-aulas-lne16c.vercel.app",
    },
    {
        id: 4,
        title: "Frontabyss",
        image: "/frontabyss.jpg",
        urlGithub: "https://www.figma.com/design/D0Y2r6dm106c2OlDwFrzcf/Untitled?node-id=0-1&t=bfCnblVK8mtMa6Lt-1",
        urlDemo: "https://www.figma.com/design/D0Y2r6dm106c2OlDwFrzcf/Untitled?node-id=0-1&t=bfCnblVK8mtMa6Lt-1",
    },
    {
        id: 5,
        title: "Riery",
        image: "/riery.jpg",
        urlGithub: "https://www.figma.com/design/noYG4R5t7qxhH3KB4lwXik/Untitled?node-id=0-1&t=TeLFpMoucAfsW85n-1",
        urlDemo: "https://www.figma.com/design/noYG4R5t7qxhH3KB4lwXik/Untitled?node-id=0-1&t=TeLFpMoucAfsW85n-1",
    },
    {
        id: 6,
        title: "Codiscun",
        image: "/codiscun.jpg",
        urlGithub: "https://github.com/FABRIKADOR/Codicun-Proyect",
        urlDemo: "https://github.com/FABRIKADOR/Codicun-Proyect",
    },
    {
        id: 7,
        title: "Eneba-Clon ",
        image: "/eneba-clon.jpg",
        urlGithub: "https://github.com/FABRIKADOR/PAGINA-ENEBA",
        urlDemo: "https://eneba-clon.vercel.app",
    },
    {
        id: 8,
        title: "WaifuArk",
        image: "/waifuark.jpg",
        urlGithub: "https://editor.wix.com/html/editor/web/renderer/edit/dddbdc3b-4c03-4b23-806e-256784612537?metaSiteId=dd240182-10d9-4b95-b636-9e1f5bba1e2a",
        urlDemo: "https://editor.wix.com/html/editor/web/renderer/edit/dddbdc3b-4c03-4b23-806e-256784612537?metaSiteId=dd240182-10d9-4b95-b636-9e1f5bba1e2a",
    }
];

