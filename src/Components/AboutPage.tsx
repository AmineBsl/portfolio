import MyPicture from '../assets/avatar.png'

import BorderEdgeCut from './BorderEdgeCut';

import { useRef } from 'react';

import useAnim from '../Hooks/useAnim'

function AboutPage() {
    const mainDivRef = useRef<HTMLDivElement>(null);
    useAnim(mainDivRef, 'left');

    return (
        <div id="about" className="font-chakra lg:justify-evenly text-white font-medium flex flex-col items-center lg:h-screen bg-zinc-900">
            <p className="text-5xl text-[#4fcbc8] mb-8 lg:mb-0">Hey !</p>
            <div ref={mainDivRef} className="flex h-72 lg:h-1/2 w-3/4 border-4 bg-neon-yellow/10 border-neon-yellow relative">
                <BorderEdgeCut/>
                <div className="lg:flex justify-center items-center hidden w-1/2">
                    <img className="h-3/4" src={MyPicture} alt="Amine"></img>
                </div>
                <div className="flex flex-col justify-center lg:w-1/2">
                    <p className="m-2 text-sm lg:text-2xl">Mon nom est Amine BOUSSOUALIM, j'ai 23 ans et je suis un développeur venant du Havre.</p>
                    <p className="m-2 text-sm lg:text-2xl">J'ai récemment obtenu un Master Informatique à l'université Le Havre Normandie et je suis à la recherche
                        de mon premier emploi en développement web fullstack.</p>
                </div>  
            </div>
        </div>
    )
}

export default AboutPage
