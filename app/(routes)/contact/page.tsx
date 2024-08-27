import TransitionPage from "@/components/transition-page";

const ContactPage = () => {
    return (
        <>
            <TransitionPage />
            <div className="flex items-center justify-center min-h-screen pt-16 px-4">
                <div className="max-w-4xl mx-auto p-6 bg-white bg-opacity-5 backdrop-blur-lg rounded-lg shadow-lg">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-secondary leading-tight text-center md:text-left md:mb-5">
                        Contáctame <span className="font-bold text-secondary">.</span>
                    </h1>
                    <div className="grid md:grid-cols-2 gap-6 mt-8">
                        {/* Información de contacto */}
                        <div className="flex flex-col items-center md:items-start">
                            <h2 className="text-xl md:text-2xl font-semibold text-gray-200 mb-6">Información de contacto</h2>
                            <div className="mb-6 flex items-start">
                                <svg className="w-8 h-8 text-secondary mr-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h1.5M3 15h1.5m-1.5-5h1.5m4-7h4a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zM7 3v12m4-6h3m-3 3h3m-3 3h3" />
                                </svg>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-300">Email:</h3>
                                    <p className="text-gray-200">arianfabricioaguilar@gmail.com</p>
                                </div>
                            </div>
                            <div className="mb-6 flex items-start">
                                <svg className="w-8 h-8 text-secondary mr-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.3 4.9a3.4 3.4 0 0 1 4.6-.6l2.3 2.3a3.4 3.4 0 0 1 .6 4.6l-3.3 3.3A1 1 0 0 1 5 14l-2.3-2.3a3.4 3.4 0 0 1-.6-4.6zM19 5h.01M16 4v4m0 0v6a4 4 0 1 0 8 0V6a4 4 0 1 0-8 0z" />
                                </svg>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-300">Teléfono:</h3>
                                    <p className="text-gray-200">+51 998-351-3473</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ContactPage;
