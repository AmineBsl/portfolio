import { ArrowDownIcon } from '@heroicons/react/solid'
import { Link} from "react-scroll";

function Name() {
    return (
        <div className="font-orbitron h-1/4 w-screen lg:h-screen lg:w-1/2 flex flex-col items-center justify-center text-white">
            <div className="w-fit">
                <p className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl">Amine</p>
                <p className="mb-2 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl">Boussoualim</p>
                <hr className="border-4 border-[#FDF800] h-2" />
                <p className="mt-2 text-2xl sm:text-5xl lg:text-4xl xl:text-4xl">web developper</p>
            </div>
            <Link to='about' smooth={true} className="flex items-center mb-2 absolute bottom-0 hover:cursor-pointer">

                <ArrowDownIcon className='animate-bounce w-10' />
                Scroll

            </Link>
        </div>
    )
}

export default Name
