import { FaReact } from "react-icons/fa";
import { GiSpaceSuit } from "react-icons/gi";
import { FaShuttleSpace } from "react-icons/fa6";



function Services() {
    return (
        <div
            className='bg-black h-[fit-content] 
            w-[100vw] flex justify-center 
            items-center backdrop-blur-3xl'>
            <div
                className="h-full flex 
                justify-evenly items-center flex-col
                md:flex-row gap-4 my-5 flex-wrap ">

                    <div className="basis-[30%] text-white 
                    flex flex-col items-center justify-center 
                    h-[300px] bg-[#072c42] 
                    py-5 px-5 rounded-sl mx-4 md:mx-0 gap-4 rounded-lg">

                        <FaReact className="text-[4rem]"/>
                        <h1 
                        className="text-[2rem] 
                        uppercase"
                        >
                        Hst
                        </h1>
                        <h4 
                        className="text-[1.5rem] 
                        uppercase font-extrabold"
                        >
                        300-1500km
                        </h4>
                        <p 
                        className="text-center"
                        >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Modi, repudiandae?
                        </p>
                    </div>

                    <div className="basis-[30%] text-white 
                    flex flex-col items-center justify-center 
                    h-[300px] bg-[#072c42] 
                    py-5 px-5 rounded-sl mx-4 md:mx-0 gap-4 rounded-lg">

                        <FaShuttleSpace  className="text-[4rem]"/>
                        <h1 
                        className="text-[2rem] uppercase"
                        >
                        Iss
                        </h1>
                        <h4 
                        className="text-[1.5rem] font-extrabold">
                        300-1500km
                        </h4>
                        <p 
                        className="text-center">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, repudiandae?</p>
                    </div>

                    <div className="basis-[30%] text-white 
                    flex flex-col items-center justify-center 
                    h-[300px] bg-[#072c42] 
                    py-5 px-5 rounded-sl mx-4 md:mx-0 gap-4 rounded-lg">

                        <GiSpaceSuit  className="text-[4rem]"/>
                        <h1 
                        className="text-[2rem] uppercase"
                        >
                        Hst
                        </h1>
                        <h4 
                        className="text-[1.5rem] uppercase 
                        font-extrabold"
                        >
                        300-1500km
                        </h4>
                        <p 
                        className="text-center"
                        >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Modi, repudiandae?</p>
                    </div>
            </div>
        </div>
    )
}

export default Services
