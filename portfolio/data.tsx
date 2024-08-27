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
        title: "Web Pro",
        image: "/image-1.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 2,
        title: "Desarrollo Web Ágil",
        image: "/image-2.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 3,
        title: "Estrategias Web",
        image: "/image-3.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 4,
        title: "Ideas Creativas",
        image: "/image-4.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 5,
        title: "Webs Impactantes",
        image: "/image-5.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 6,
        title: "Web Dinámica",
        image: "/image-6.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 7,
        title: "Dark Web ",
        image: "/image-7.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 8,
        title: "E-commerce web",
        image: "/image-8.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    }
];

export const dataTestimonials = [
    {
        id: 1,
        name: "George Snow",
        description:
            "¡Increíble plataforma! Los testimonios aquí son genuinos y me han ayudado a tomar decisiones informadas. ¡Altamente recomendado!",
        imageUrl: "/profile1.png",
    },
    {
        id: 2,
        name: "Juan Pérez",
        description:
            "Me encanta la variedad de testimonios disponibles en esta página. Es inspirador ver cómo otras personas han superado desafíos similares a los míos. ¡Gracias por esta invaluable fuente de motivación!",
        imageUrl: "/profile2.png",
    },
    {
        id: 3,
        name: "María García",
        description:
            "Excelente recurso para obtener opiniones auténticas sobre diferentes productos y servicios. Me ha ayudado mucho en mis compras en línea. ¡Bravo por este sitio!",
        imageUrl: "/profile3.png",
    },
    {
        id: 4,
        name: "Laura Snow",
        description:
            "¡Qué descubrimiento tan fantástico! Los testimonios aquí son honestos y detallados. Me siento más seguro al tomar decisiones después de leer las experiencias compartidas por otros usuarios.",
        imageUrl: "/profile4.png",
    },
    {
        id: 5,
        name: "Carlos Sánchez",
        description:
            "Una joya en la web. Los testimonios son fáciles de encontrar y están bien organizados. ¡Definitivamente mi destino número uno cuando necesito referencias confiables!",
        imageUrl: "/profile5.png",
    },
    {
        id: 6,
        name: "Antonio Martínez",
        description:
            "¡Fantástico recurso para aquellos que buscan validación antes de tomar decisiones importantes! Los testimonios aquí son veraces y realmente útiles. ¡Gracias por simplificar mi proceso de toma de decisiones!",
        imageUrl: "/profile6.png",
    },
];