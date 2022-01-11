import MyPicture from '../assets/moi.jpg'

function AboutPage() {
    return (
        <div id="about" className="font-chakra justify-around text-white font-medium flex flex-col items-center h-screen bg-zinc-900">
            <p className="text-5xl text-[#4fcbc8]">A propos</p>
            <div className="flex h-1/2 w-3/4 border-4 bg-neon-yellow/10 border-neon-yellow relative">
                <div className="w-10 h-14 top-0 left-0 -translate-x-4 -translate-y-6 rotate-45 absolute border-r-4 border-neon-yellow bg-zinc-900"></div>
                <div className="w-10 h-14 bottom-0 right-0 translate-x-4 translate-y-6 rotate-45 absolute border-l-4 border-neon-yellow bg-zinc-900"></div> 
                <div className="lg:flex justify-center items-center hidden w-1/2">
                    <img className="h-3/4" src={MyPicture} alt="Gueg"></img>
                </div>
                <div className="flex items-center text-center text-xl lg:w-1/2">
                    <p className="m-2 text-sm lg:text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mollis fringilla pretium. Fusce interdum nec diam nec aliquam. Maecenas eget varius diam, at posuere justo. Vestibulum semper congue leo, ut scelerisque neque tempor sit amet. Aenean id mi dui. Ut id ultricies lacus. Vestibulum hendrerit vestibulum nibh at tempor. Sed tempus condimentum ipsum, a finibus urna porta ac. Vestibulum condimentum tempus massa, a mattis ex ornare id. Duis vel rhoncus dolor. Mauris a consequat nisl, id feugiat velit.</p>
                </div>  
            </div>
        </div>
    )
}

export default AboutPage
