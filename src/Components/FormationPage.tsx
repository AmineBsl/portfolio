import BorderEdgeCut from "./BorderEdgeCut"


import data from '../assets/data.json'

function FormationPage() {

    return (
        <div id="formation" className="font-chakra text-white font-medium  bg-zinc-900 lg:h-screen">
            <div className="flex flex-col items-center justify-center lg:h-1/2">
                <p className="text-neon-blue text-5xl mb-6">Formations</p>
                <div className="overflow-hidden flex flex-col lg:flex-row lg:justify-evenly items-center w-full">
                    {data.formations.map((f, i) =>
                        <div className="flex flex-col items-center text-center border-4 bg-neon-yellow/10 border-neon-yellow relative lg:w-1/4 h-72 w-4/5 my-8 lg:my-0">
                            <BorderEdgeCut />
                            <p className="mt-8 mx-2 text-neon-yellow text-2xl">{f.titre}</p>
                            <p className="text-sm xl:text-xl">{f.lieu}</p>
                            <p className="text-xl">{f.years}</p>
                            <p className="mt-6 mx-2 text-sm md:text-xs 2xl:text-base">{f.desc}</p>
                        </div>
                    )}
                </div>
            </div>

            <div className="flex flex-col items-center justify-center lg:h-1/2">
                <p className="text-neon-blue text-5xl mb-6">Experiences</p>
                <div className="overflow-hidden flex flex-col lg:flex-row lg:justify-evenly items-center w-full">
                    {data.experiences.map((e, i) =>
                        <div className="flex flex-col items-center text-center border-4 bg-neon-yellow/10 border-neon-yellow relative lg:w-1/4 h-72  w-4/5 my-8 lg:my-0">
                            <BorderEdgeCut />
                            <p className="mt-8 mx-2 text-neon-yellow text-2xl">{e.titre}</p>
                            <p className="text-xl">{e.years}</p>
                            <p className="mt-6 mx-2 text-sm md:text-xs 2xl:text-base">{e.desc}</p>
                        </div>
                    )}
                </div>

            </div>

        </div>
    )
}

export default FormationPage
