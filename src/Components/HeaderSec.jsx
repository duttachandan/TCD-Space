
function HeaderSec() {
    return (
        <div
            className=' relative right-0 flex flex-wrap 
            px-5 md:px-16 h-full z-[50] text-white '>
                    <div
                        className='flex justify-center 
                        items-center h-full'>
                        <div className="container grid grid-cols-1 
                            sm:grid-cols-2 gap-4">
                            <div
                                className='md:basis-1/2 h-full flex 
                                flex-col w-full'>
                                <h1 className="uppercase font-extrabold 
                                text-[2rem] md:text-[2.5rem]">
                                    Orbit the earth
                                </h1>
                                <p className="pb-5"> Lorem ipsum, dolor sit amet consectetur
                                    adipisicing elit. Impedit, consequatur laudantium quas
                                    quasi fugit ducimus id. Commodi temporibus eaque, doloremque,
                                    asperiores libero corrupti facilis ex sed unde optio quod maxime.
                                </p>
                                <button 
                                className='bg-blue uppercase
                                bg-blue-600 w-[fit-content] 
                                hover:bg-sky-600 px-5 py-1 rounded-md'>
                                Learn More
                                </button>
                            </div>
                            <div
                                className='md:basis-1/3 hidden md:block'>

                            </div>
                        </div>
                    </div>
        </div>
    )
}

export default HeaderSec
