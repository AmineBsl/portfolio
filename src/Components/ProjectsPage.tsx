import BorderEdgeCut from "./BorderEdgeCut"

import Projetf1pic from "../assets/projetf1thumb.png"
import ProjetPortfolioPick from "../assets/screenPortfolio.png"
import data from "../assets/data.json"
import { useState } from "react"

function ProjectsPage() {
    const projectPictures = [Projetf1pic, ProjetPortfolioPick]
    const nbProjects = data.projets.length - 1;
    const [selectedTab, setSelectedTab] = useState(0)

    return (
        <div id='projects' className="bg-zinc-900 h-screen font-chakra justify-evenly text-white font-medium flex flex-col items-center">
            <p className="text-5xl text-[#4fcbc8]">Projets</p>
            <section className="flex lg:flex-col h-3/4 w-3/4 border-4 bg-neon-yellow/10 border-neon-yellow relative ">
                <BorderEdgeCut />
                <div className="flex flex-col lg:flex-row items-center text-center lg:text-sm text-xs h-full lg:h-16 w-16 lg:w-full bg-neon-yellow/20 ">
                    {data.projets.map(({ onglet }, i) =>
                        <div onClick={() => i < nbProjects && setSelectedTab(i)} className={`flex items-center justify-center lg:h-full lg:w-1/6 h-1/6 w-full p-2 ${i === selectedTab ? 'bg-neon-yellow/50' : 'bg-neon-yellow/30'} 
                         ${i < nbProjects ? "hover:bg-neon-yellow/50 hover:cursor-pointer" : "hover:cursor-not-allowed "}`}>
                            <p className="">{onglet}</p>
                        </div>
                    )}
                </div>

                <div className="flex items-center h-full">
                    <div className="lg:flex px-5 justify-center items-center hidden w-1/2">
                        <a href={data.projets[selectedTab].lien} target="_blank" rel="noopener noreferrer"><img className="rounded-lg" src={projectPictures[selectedTab]} alt="Amine"></img></a>
                    </div>
                    <div className="flex text-center text-xl lg:w-1/2">
                        <p className="m-2 text-sm lg:text-xl">{data.projets[selectedTab].desc}</p>
                    </div>
                </div>

            </section>
        </div>
    )
}

export default ProjectsPage
