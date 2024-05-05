import { FaFacebook, FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { CiLocationOn, CiMail, CiLinkedin  } from "react-icons/ci";
import { IoPhonePortraitOutline } from "react-icons/io5";

function Footer() {
    return (
        <>
            <div className='text-white flex-col
        bg-gray-900 px-5 pt-5 flex justify-center
        items-center h-[fit-content] w-full'>
                <div className='w-[90vw] flex flex-col md:flex-row 
                justify-center items-start gap-4 md:items-center py-4'>
                    <ul className='flex flex-col md:basis-1/4
                basis-1 list-disc ps-5'>
                        <h1
                            className='text-3xl text-white font-bold'
                        >Important Links
                        </h1>
                        <li className='cursor-pointer'>Home</li>
                        <li className='cursor-pointer'>About</li>
                        <li className='cursor-pointer'>Services</li>
                        <li className='cursor-pointer'>Login</li>
                    </ul>
                    <ul className='flex flex-col md:basis-1/4
                basis-1 list-disc ps-5'>
                        <h1
                            className='text-3xl text-white font-bold'
                        >Links
                        </h1>
                        <li className='cursor-pointer'>Home</li>
                        <li className='cursor-pointer'>About</li>
                        <li className='cursor-pointer'>Services</li>
                        <li className='cursor-pointer'>Login</li>
                    </ul>
                    <ul className='flex md:basis-1/2 gap-5
                    flex-col justify-center items-start'>
                        <li 
                        className='cursor-pointer flex 
                        flex-row gap-1 justify-center'
                        >
                        <CiLocationOn/>
                        Kolkata, West Bengal
                        </li>
                        <li 
                        className='cursor-pointer flex flex-row 
                        justify-center items-center gap-1'
                        >
                        <CiMail/>
                        duttaankit917@gmail.com
                        </li>
                        <li 
                        className='cursor-pointer flex 
                        flex-row gap-1 justify-center'
                        >
                        <IoPhonePortraitOutline/>
                        +91 8372068294
                        </li>
                    </ul>
                </div>

            </div>
            <div className='w-full h-[fit-content]
            bg-[#393b41] text-white 
            flex flex-row justify-center 
            items-center py-5 gap-4'>
                <FaFacebook className='cursor-pointer'/>
                <FaInstagram className='cursor-pointer'/>
                <FaGithub className='cursor-pointer'/>
                <CiLinkedin className='cursor-pointer'/>
                <p className='text-slate-400'>@All Rights Reserved</p>
            </div>
        </>

    )
}

export default Footer
