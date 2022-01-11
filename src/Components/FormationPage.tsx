import BorderEdgeCut from "./BorderEdgeCut"
import moi from "../assets/moi.jpg"
function FormationPage() {

    const formation = ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mollis fringilla pretium. Fusce interdum nec diam nec aliquam. Maecenas eget varius diam, at posuere justo. Vestibulum semper congue leo, ut scelerisque neque tempor sit amet.', 'Formation 2', 'Formation 3']
    const experience = ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mollis fringilla pretium. Fusce interdum nec diam nec aliquam. Maecenas eget varius diam, at posuere justo. Vestibulum semper congue leo, ut scelerisque neque tempor sit amet.', 'Experience 2']
    return (
        <div id="about" className="font-chakra justify-evenly text-white font-medium  flex flex-col items-center lg:h-screen bg-zinc-900 px-8 lg:mx-0 pb-8 lg:pb-0">
            <p className="text-neon-blue text-5xl mb-8 lg:mb-0">Formations</p>
            <div className="flex flex-col lg:flex-row justify-between lg:w-3/4"> 
                {formation.map(f =>
                    <section className="flex flex-col items-center  text-center border-4 bg-neon-yellow/10 border-neon-yellow relative lg:w-1/4 mb-8 lg:mb-0">
                        <BorderEdgeCut />
                        <img src={moi} alt='Logo' className="h-24 mt-8"></img>
                        <p className="mt-8 mx-2">{f}</p>
                    </section>

                )}
            </div>
            <p className="text-neon-blue text-5xl mb-8 lg:mb-0">Experiences</p>
            <div className="flex flex-col lg:flex-row justify-evenly  lg:w-3/4">
                {experience.map(e =>
                    <section className="flex flex-col items-center text-center border-4 bg-neon-yellow/10 border-neon-yellow relative lg:w-1/4 mb-8 lg:mb-0">
                        <BorderEdgeCut />
                        <img src={moi} alt='logo' className="h-24 mt-8"></img>
                        <p className="mt-8 mx-2">{e}</p>
                    </section>

                )}
            </div>
        </div>
    )
}

export default FormationPage
