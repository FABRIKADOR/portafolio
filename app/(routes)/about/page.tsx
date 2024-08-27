import TransitionPage from "@/components/transition-page";

const AboutMe = () => {
    return (
        <>
            <TransitionPage />
            <div className="flex items-center justify-center min-h-screen pt-16 px-4">
                <div className="grid items-center justify-center max-w-5xl gap-6 mx-auto md:grid-cols-2 mt-24 md:mt-2">
                    <div className="max-w-lg mx-auto md:mx-0">
                        <h1 className="text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-5">
                            Acerca de <span className="font-bold text-secondary">mí</span>
                        </h1>
                        <p className="mb-3 text-lg md:text-xl text-gray-300 text-justify">
                            Soy Arian Fabricio Aguilar Nowell, un ingeniero en software con una profunda pasión por el desarrollo de experiencias digitales innovadoras. Mi experiencia abarca el diseño y desarrollo de aplicaciones web, con un enfoque en crear interfaces de usuario atractivas y funcionales.
                        </p>
                        <p className="mb-3 text-lg md:text-xl text-gray-300 text-justify">
                            Con una sólida formación en tecnologías modernas como HTML, CSS y JavaScript, me dedico a ofrecer soluciones que no solo cumplen con los requisitos técnicos, sino que también mejoran la experiencia del usuario y reflejan la identidad de marca de mis clientes.
                        </p>
                        <p className="text-lg md:text-xl text-gray-300 text-justify">
                            Mi objetivo es seguir creciendo en el campo de la programación y el diseño, y estoy siempre abierto a nuevos desafíos y oportunidades para colaborar en proyectos que marquen la diferencia.
                        </p>
                    </div>

                    {/* Imagen ajustada */}
                    <div className="w-full mt-12 md:mt-0 flex items-center justify-center">
                        <img 
                            src="/yo.jpg" 
                            alt="Arian Fabricio Aguilar Nowell" 
                            className="w-full md:w-[350px] h-auto rounded-lg shadow-lg object-cover"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default AboutMe;
