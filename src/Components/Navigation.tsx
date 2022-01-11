import { ReactComponent as BackgroundRoad } from "../assets/BackgroundRoad.svg"
import { ReactComponent as Building1 } from "../assets/Building1.svg"
import { ReactComponent as Building2 } from "../assets/Building2.svg"
import { ReactComponent as Building3 } from "../assets/Building3.svg"
import { ReactComponent as Building4 } from "../assets/Building4.svg"
import { Link } from "react-scroll"

import { useState } from "react"


function Navigation() {
    const [building1Hovered, setBuilding1Hovered] = useState(false);
    const [building2Hovered, setBuilding2Hovered] = useState(false);
    const [building3Hovered, setBuilding3Hovered] = useState(false);
    const [building4Hovered, setBuilding4Hovered] = useState(false);

    return (
        <div className="flex items-center justify-center h-3/4 w-screen lg:h-screen lg:w-1/2">
            <div className="w-10/12 relative">
                <BackgroundRoad width="100%" height="100%" />
                <Link to='about' smooth={true}><div onMouseLeave={() => setBuilding1Hovered(false)} onMouseEnter={() => setBuilding1Hovered(true)} className="group">
                    <Building1 height="70.72%" width="13.01%" preserveAspectRatio="none" className="hover:cursor-pointer absolute left-[16.31%] bottom-[15.27%]" />
                    <button className={`${building1Hovered ? 'button-glow' :''} group-hover:shadow-purple neon-button left-[16.56%] top-[14.9%] w-[12.5%] h-[7%] text-neon-purple border-neon-purple`}>A propos</button>
                </div></Link>
                <div onMouseLeave={() => setBuilding2Hovered(false)} onMouseEnter={() => setBuilding2Hovered(true)} className="group">
                    <Building2 height="53.27%" width="21.91%" preserveAspectRatio="none" className="hover:cursor-pointer absolute left-[29.3%] bottom-[15.27%]" />
                    <button className={`${building2Hovered ? 'button-glow' :''} group-hover:shadow-orange neon-button left-[29.65%] top-[31.9%] w-[21.20%] text-neon-orange border-neon-orange`}>Formation / Experiences</button>
                </div>
                <div onMouseLeave={() => setBuilding3Hovered(false)} onMouseEnter={() => setBuilding3Hovered(true)} className="group">
                    <Building3 height="47.45%" width="16.16%" preserveAspectRatio="none" className="hover:cursor-pointer absolute left-[51.15%] bottom-[15.27%]" /> 
                    <button className={`${building3Hovered ? 'button-glow' :''} group-hover:shadow-blue neon-button left-[51.60%] top-[37.9%] h-[10%] w-[15.2%] text-neon-blue border-neon-blue`}>Projets</button>
                </div>
                <div onMouseLeave={() => setBuilding4Hovered(false)} onMouseEnter={() => setBuilding4Hovered(true)} className="group">             
                    <Building4 height="62%" width="16.16%" preserveAspectRatio="none" className="hover:cursor-pointer absolute left-[67.15%] bottom-[15.27%]" />
                    <button className={`${building4Hovered ? 'button-glow' :''} group-hover:shadow-yellow neon-button left-[67.60%] top-[23.4%] h-[8%] w-[15.2%] text-neon-yellow border-neon-yellow`}>Contact</button>
                </div>
            </div>

        </div>
    )
}

export default Navigation
