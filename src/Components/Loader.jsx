import Gif from "../assets/Gif.gif"

function Loader() {
  return (
    <div className='h-[100vh] w-[100vw] bg-black flex justify-center items-center'>
        <img src={Gif} alt="" />
    </div>
  )
}

export default Loader
