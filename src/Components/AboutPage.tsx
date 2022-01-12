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
        <div id="about" className="font-chakra justify-evenly text-white font-medium flex flex-col items-center h-screen bg-zinc-900">
            <p className="text-5xl text-[#4fcbc8]">Hey !</p>
            <section ref={sectionRef} className="flex h-1/2 w-3/4 border-4 bg-neon-yellow/10 border-neon-yellow relative">
                <BorderEdgeCut/>
                <div className="lg:flex justify-center items-center hidden w-1/2">
                    <img className="h-3/4" src={MyPicture} alt="Amine"></img>
                </div>
                <div className="flex items-center text-center lg:w-1/2">
                    <p className="m-2 text-sm lg:text-2xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mollis fringilla pretium. Fusce interdum nec diam nec aliquam. Maecenas eget varius diam, at posuere justo. Vestibulum semper congue leo, ut scelerisque neque tempor sit amet. Aenean id mi dui. Ut id ultricies lacus. Vestibulum hendrerit vestibulum nibh at tempor. Sed tempus condimentum ipsum, a finibus urna porta ac. Vestibulum condimentum tempus massa, a mattis ex ornare id. Duis vel rhoncus dolor. Mauris a consequat nisl, id feugiat velit.</p>
                </div>  
            </section>
        </div>
    )
}

export default AboutPage
