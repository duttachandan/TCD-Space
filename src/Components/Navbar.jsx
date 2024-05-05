import { useState } from 'react'
import logo from "../assets/logo.png"
import { MdOutlineMenu } from "react-icons/md";

const Navlinks = () => {
    return (
        <ul className='w-full justify-evenly 
            items-center flex md:flex-row flex-col
            text-white bg-black md:bg-transparent'>
            <li
                className='text-white 
                cursor-pointer 
                md:pt-0 pt-4 md:
                hover:decoration-solid md:hover:underline 
                hover:text-red-400 md:hover:text-white'
            >
                About</li>
            <li
                className='text-white 
                cursor-pointer 
                md:pt-0 pt-4 md:
                hover:decoration-solid md:hover:underline 
                hover:text-red- md:hover:text-white'
            >
                Contact</li>
            <li
                className='text-white 
                cursor-pointer 
                md:pt-0 pt-4 md:
                hover:decoration-solid md:hover:underline 
                hover:text-red-400 md:hover:text-white'
                onClick={()=> '#About'}
            >
                Home
            </li>
            <li
                className=' md:py-0 py-5'>
                <button className='py-2 lg:py-1 px-10 md:px-3 rounded-xl 
                border-2 border-white'
                >
                    Login
                </button>
            </li>
        </ul>
    )
}
function Navbar() {
    const [show, setshow] = useState(false);
    return (
        <>
            <div
                className='fixed top-0 right-0
        z-[55] py-4 h-[fit-content] w-full 
        flex-wrap bg-black/20'
        data-aos="fade-down"
        data-aos-duration="2000">
                <div className="flex w-full 
            justify-between 
            flex-wrap">
                    <div className='md:ps-9 ps-1 flex cursor-pointer md:basis-1/2 basis-1/6'>
                        <img
                            className='h-[2rem]'
                            src={logo}
                            alt="" />
                        <span className='text-2xl 
                        font-extrabold text-white'
                        >
                            TechStack
                        </span>
                    </div>
                    <div
                        className=' pe-4 basis-1/2 justify-center hidden md:flex'
                    >
                        <Navlinks />
                    </div>
                    <div
                        className=' pe-5 text-2xl basis-1/2 text-white
                                cursor-pointer 
                                flex justify-end
                                md:hidden'
                        onClick={() => setshow(!show)}
                    >{show ? 'X':'☰'}</div>
                    {
                        show &&
                        <div className='md:hidden flex w-full mt-4'>
                            <Navlinks />
                        </div>
                    }
                </div>
            </div>
        </>

    )
}

export default Navbar
