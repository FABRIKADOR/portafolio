"use client"

import ContainerPage from "@/components/container";
import CounterServices from "@/components/counter-services";
import TimeLine from "@/components/time-line";
import TransitionPage from "@/components/transition-page";

const AboutMePage = () => {
    return (
        <>
            <div className="fondo">
                <TransitionPage />
                <ContainerPage>
                    <h1 className="text-2xl leading-tight text-center md:text-left md:text-5xl md:mt-10">
                        Toda mi{' '}
                        <span className="font-bold text-secondary">
                            trayectoria academica
                        </span>
                    </h1>

                    <CounterServices />

                    <TimeLine />

                </ContainerPage>
            </div>

        </>
    );
}

export default AboutMePage;