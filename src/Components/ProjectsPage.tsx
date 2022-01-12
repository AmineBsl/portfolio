import BorderEdgeCut from "./BorderEdgeCut"

import Projetf1pic from "../assets/projetf1thumb.png"
import MyPicture from "../assets/moi.jpg"
import { useState } from "react"

function ProjectsPage() {
    const projets = [
        {
            onglet: 'Formula 1 Database',
            picture : Projetf1pic,
            desc : 'The goal of this application is to provide users with any usefull informations about Formula 1. Data is fetched from ErgastAPI'
        },
        {
            onglet: 'My Portfolio',
            picture : MyPicture,
            desc : 'This my portfolio, here you will find out about my formations, experiences and the different projects I am working on !'
        },
        {
            onglet: 'Coming soon...',
            picture : Projetf1pic,
            desc : 'Ca arrive oklm'
        },
    ]
    const [selectedTab, setSelectedTab] = useState(0)

    return (
        <div id='projects' className="bg-zinc-900 h-screen font-chakra justify-evenly text-white font-medium flex flex-col items-center">
            <p className="text-5xl text-[#4fcbc8]">Projets</p>
            <section className="flex lg:flex-col h-3/4 w-3/4 border-4 bg-neon-yellow/10 border-neon-yellow relative ">
                <BorderEdgeCut />
                <div className="flex flex-col lg:flex-row items-center text-center lg:text-sm text-xs h-full lg:h-16 w-16 lg:w-full bg-neon-yellow/20 ">
                    {projets.map(({onglet}, i) =>
                        <div onClick={() => setSelectedTab(i)} className={`flex items-center justify-center lg:h-full lg:w-1/6 h-1/6 w-full p-2 ${i === selectedTab ? 'bg-neon-yellow/50' : 'bg-neon-yellow/30'}  hover:bg-neon-yellow/50 hover:cursor-pointer`}>
                            <p className="">{onglet}</p>
                        </div>
                    )}
                </div>

                <div className="flex items-center h-full">
                    <div className="lg:flex px-5 justify-center items-center hidden w-1/2">
                        <a href="https://formula-1-database.vercel.app/" target="_blank" rel="noopener noreferrer"><img className="rounded" src={projets[selectedTab].picture} alt="Amine"></img></a>
                    </div>
                    <div className="flex text-center text-xl lg:w-1/2">
                        <p className="m-2 text-sm lg:text-xl">{projets[selectedTab].desc}</p>
                    </div>
                </div>

            </section>
        </div>
    )
}

export default ProjectsPage
