import { ReactComponent as GMail } from '../assets/gmail.svg'
import { ReactComponent as LinkedIn } from '../assets/linkedin.svg'
import { ReactComponent as GitHub } from '../assets/github.svg'
import { ReactComponent as Phone } from '../assets/phone.svg'

function ContactPage() {
    return (
        <div id='contact' className="grid lg:grid-cols-2 grid-rows-4 lg:grid-rows-2 gap-2 pb-4 bg-zinc-900 text-lg font-chakra text-white">
            <div className='flex justify-center'>
                <GMail className='fill-[#4fcbc8]' />
                <p className='mx-3'>amineboussoualim@gmail.com</p>
            </div>
            <a href='https://www.linkedin.com/in/amine-haoues-boussoualim-565b7015a' target="_blank" rel="noopener noreferrer">
                <div className='flex justify-center'>
                    <LinkedIn className='fill-[#4fcbc8]' />
                    <p className='mx-3'>Amine Boussoualim</p>
                </div>
            </a>
            <div className='flex justify-center'>
                <Phone className='fill-[#4fcbc8]' />
                <p className='mx-3'>06 19 14 81 08</p>
            </div>
            <a href='https://github.com/AmineBsl' target="_blank" rel="noopener noreferrer">
                <div className='flex justify-center'>
                    <GitHub className='fill-[#4fcbc8]' />
                    <p className='mx-3'>Projects</p>
                </div>
            </a>
        </div>
    )
}

export default ContactPage
