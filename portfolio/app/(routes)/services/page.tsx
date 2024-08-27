import SliderServices from "@/components/slider-services";
import TransitionPage from "@/components/transition-page";

const ServicesPage = () => {
    return (
        <>

            <TransitionPage />
            <div className="flex items-center justify-center min-h-screen pt-16 px-4">
                <div className="grid items-center justify-center max-w-5xl gap-6 mx-auto md:grid-cols-2">
                    <div className="max-w-lg mx-auto md:mx-0">
                        <h1 className="text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-5">
                            Mis <span className="font-bold text-secondary">servicios.</span>
                        </h1>
                        <p className="mb-3 text-lg md:text-xl text-gray-300 text-justify">
                            Ofrezco servicios de desarrollo web frontend especializados en la creación de sitios web y aplicaciones atractivas y funcionales. Utilizando las últimas tecnologías, como HTML, CSS y JavaScript, diseño interfaces de usuario intuitivas y responsivas que reflejan la identidad de marca de mis clientes y mejoran su presencia en línea.
                        </p>
                        <button className="px-4 py-2 rounded-lg bg-secondary hover:bg-secondary/65 text-white">
                            Contacta conmigo
                        </button>
                    </div>

                    {/* SLIDER */}
                    <div className="w-full mt-12 md:mt-0">
                        <SliderServices />
                    </div>
                </div>
            </div>





        </>
    );
}

export default ServicesPage;