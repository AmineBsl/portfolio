import BorderEdgeCut from "./BorderEdgeCut"

function ProjectsPage() {
    return (
        <div className="bg-zinc-900 h-screen font-chakra justify-evenly text-white font-medium flex flex-col items-center">
            <p className="text-5xl text-[#4fcbc8]">Projets</p>
            <section className="flex h-3/4 w-3/4 border-4 bg-neon-yellow/10 border-neon-yellow relative">
                <BorderEdgeCut/>
                <div className="lg:flex justify-center items-center hidden w-1/2">
                    Lulu
                </div>
                <div className="flex items-center text-center text-xl lg:w-1/2">
                    <p className="m-2 text-sm lg:text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mollis fringilla pretium. Fusce interdum nec diam nec aliquam. Maecenas eget varius diam, at posuere justo. Vestibulum semper congue leo, ut scelerisque neque tempor sit amet. Aenean id mi dui. Ut id ultricies lacus. Vestibulum hendrerit vestibulum nibh at tempor. Sed tempus condimentum ipsum, a finibus urna porta ac. Vestibulum condimentum tempus massa, a mattis ex ornare id. Duis vel rhoncus dolor. Mauris a consequat nisl, id feugiat velit.</p>
                </div>  
            </section>
        </div>
    )
}

export default ProjectsPage
