"use client"

import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const CoverParticles = () => {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    return (
        init && 
        <div className="w-[0px]">
        <Particles
            id="tsparticles"
            options={{
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                        onHover: {
                            enable: true,
                            mode: "repulse",
                        },
                    },
                    modes: {
                        push: {
                            quantity: 4,
                        },
                        repulse: {
                            distance: 150,
                            duration: 0.4,
                        },
                    },
                },
                particles: {
                    color: {
                        value: ["#FF007F", "#00CFFF", "#FFDC00", "#B1FF00"], // Colores vibrantes
                    },
                    links: {
                        color: "#ffffff",
                        distance: 100,
                        enable: true,
                        opacity: 0.4,
                        width: 1,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: true,
                        speed: 2,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                        },
                        value: 100,
                    },
                    opacity: {
                        value: 0.6,
                        animation: {
                            enable: true,
                            speed: 3, // Velocidad de pulsación de opacidad
                            sync: false,
                        },
                    },
                    shape: {
                        type: ["circle", "square", "triangle", "polygon"],

                    },
                    size: {
                        value: { min: 4, max: 10 },
                        animation: {
                            enable: true,
                            speed: 10, // Velocidad de pulsación de tamaño
                            sync: false,
                        },
                    },
                },
                detectRetina: true,
            }}
        />
        </div>
    );
}

export default CoverParticles;
