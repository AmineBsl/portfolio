import Navigation from "./Navigation"
import Name from "./Name"
import { ArrowDownIcon } from '@heroicons/react/solid'
import { Link} from "react-scroll";


function TopPage() {
    return (
        <div className="relative flex flex-col lg:flex-row h-screen bg-zinc-900">
            <Name />
            <Navigation />
            <Link to='about' smooth={true} className="text-white font-orbitron flex items-center mb-2 absolute bottom-0 left-1/2 -translate-x-1/2 lg:translate-y-0 -translate-y-1/2 hover:cursor-pointer">

                <ArrowDownIcon className='animate-bounce w-10' />
                Scroll

            </Link>
        </div>
    )   
}

export default TopPage
