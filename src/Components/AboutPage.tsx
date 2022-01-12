import MyPicture from '../assets/avatar.png'

import scrollReveal from "scrollreveal";
import BorderEdgeCut from './BorderEdgeCut';

import { useEffect, useRef } from 'react';

function AboutPage() {
    const sectionRef = useRef<HTMLElement>(null);
    useEffect(() => {
        if (sectionRef.current)
          scrollReveal().reveal(sectionRef.current, {
            origin: 'left',
            distance: '50px',
            reset: true,
            delay: 250
          });
      }, []);

      
    return (
        <div id="about" className="font-chakra lg:justify-evenly text-white font-medium flex flex-col items-center lg:h-screen bg-zinc-900">
            <p className="text-5xl text-[#4fcbc8] mb-8 lg:mb-0">Hey !</p>
            <section ref={sectionRef} className="flex h-72 lg:h-1/2 w-3/4 border-4 bg-neon-yellow/10 border-neon-yellow relative">
                <BorderEdgeCut/>
                <div className="lg:flex justify-center items-center hidden w-1/2">
                    <img className="h-3/4" src={MyPicture} alt="Amine"></img>
                </div>
                <div className="flex flex-col justify-center lg:w-1/2">
                    <p className="m-2 text-sm lg:text-2xl">Mon nom est Amine BOUSSOUALIM, j'ai 23 ans et je suis un développeur venant du Havre.</p>
                    <p className="m-2 text-sm lg:text-2xl">J'ai récemment obtenu un Master Informatique à l'université Le Havre Normandie et je suis à la recherche
                        de mon premier emploi en développement web fullstack.</p>
                </div>  
            </section>
        </div>
    )
}

export default AboutPage
