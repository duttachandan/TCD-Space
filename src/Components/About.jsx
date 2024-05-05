import satelite from "../assets/satelite1.jpg"
import satelite2 from "../assets/satelite2.jpg"


function About() {
    return (
        <div
            className='text-white bg-black 
            h-[fit-content] w-[100vw] flex-col
            justify-center items-center'
            id="About">
            <div
            className="flex flex-col md:flex-row justify-center
            items-center h-[full] w-[full] py-20 gap-10">

                <img
                data-aos="zoom-out"
                data-aos-duration = "2500" 
                className="md:w-[40vw] w-[80vw] px-auto md:px-0" 
                src={satelite} 
                alt="" />

                <div className="basis-1/2 lg:basis-1/4 flex flex-col h-[fit-content] 
                border-r-2 border-b-2 border-blue-600 justify-center items-start
                gap-5 py-5 mx-5 md:mx-0">
                    <h4 className="px-4 text-blue-700">Our mission</h4>

                    <h1 className="px-4 uppercase text-2xl">RapidScat</h1>

                    <p className="px-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                    Fugiat officia consectetur inventore dolores 
                    vero doloremque debitis quia eos, numquam voluptatibus!
                    </p>

                    <button 
                    className='bg-blue uppercase
                    bg-blue-600 w-[fit-content] 
                    hover:bg-sky-600 px-5 py-1 rounded-md'>
                    Learn More
                    </button>
                </div>
            </div>
            <div
            className="flex flex-col md:flex-row-reverse justify-center
            items-center h-[full] w-[full] py-20 gap-10">

                <img
                data-aos="zoom-in"
                data-aos-duration = "2500" 
                className="md:w-[40vw] w-[80vw] px-auto md:px-0" 
                src={satelite2} 
                alt="" />

                <div className="basis-1/2 lg:basis-1/4 flex flex-col h-[fit-content] 
                border-l-2 border-b-2 border-blue-600 justify-center items-start
                gap-5 py-5 mx-5 md:mx-0">
                    <h4 className="px-4 text-blue-700">Our mission</h4>

                    <h1 className="px-4 uppercase text-2xl">RapidScat</h1>

                    <p className="px-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                    Fugiat officia consectetur inventore dolores 
                    vero doloremque debitis quia eos, numquam voluptatibus!
                    </p>

                    <button 
                    className='bg-blue uppercase
                    bg-blue-600 w-[fit-content] 
                    hover:bg-sky-600 px-5 py-1 
                    ms-2 rounded-md'>
                    Learn More
                    </button>
                </div>
            </div>
        </div>
    )
}

export default About
