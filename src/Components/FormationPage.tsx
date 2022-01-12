import BorderEdgeCut from "./BorderEdgeCut"
import moi from "../assets/moi.jpg"
function FormationPage() {

    const formation = ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mollis fringilla pretium. Fusce interdum nec diam nec aliquam. Maecenas eget varius diam, at posuere justo. Vestibulum semper congue leo, ut scelerisque neque tempor sit amet.', 'Formation 2', 'Formation 3']
    const experience = ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mollis fringilla pretium. Fusce interdum nec diam nec aliquam. Maecenas eget varius diam, at posuere justo. Vestibulum semper congue leo, ut scelerisque neque tempor sit amet.', 'Experience 2']
    return (
        <div id="formation" className="font-chakra text-white font-medium  bg-zinc-900 lg:h-screen">
            <div className="flex flex-col items-center justify-center lg:h-1/2">
                <p className="text-neon-blue text-5xl mb-6">Formations</p>
                <div className="overflow-hidden flex flex-col lg:flex-row lg:justify-evenly items-center w-full">
                    {formation.map(e =>
                        <div className="flex flex-col items-center text-center border-4 bg-neon-yellow/10 border-neon-yellow relative lg:w-1/4 h-72 w-4/5 my-8 lg:my-0">
                            <BorderEdgeCut />
                            <img src={moi} alt='logo' className="h-24 mt-8"></img>
                            <p className="mt-8 mx-2">a</p>
                        </div>
                    )}
                </div>
            </div>

            <div className="flex flex-col items-center justify-center lg:h-1/2">
                <p className="text-neon-blue text-5xl mb-6">Experiences</p>
                <div className="overflow-hidden flex flex-col lg:flex-row lg:justify-evenly items-center w-full">
                    {experience.map(e =>
                        <div className="flex flex-col items-center text-center border-4 bg-neon-yellow/10 border-neon-yellow relative lg:w-1/4 h-72  w-4/5 my-8 lg:my-0">
                            <BorderEdgeCut />
                            <img src={moi} alt='logo' className="h-24 mt-8"></img>
                            <p className="mt-8 mx-2">b</p>
                        </div>
                    )}
                </div>

            </div>

        </div>
    )
}

export default FormationPage
