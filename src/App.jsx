import { useEffect, useState } from 'react'
import Bgvideo from "./assets/earth.mp4"
import Navbar from "./Components/Navbar"
import HeaderSec from "./Components/HeaderSec"
import Services from "./Components/Services"
import About from "./Components/About"
import Footer from "./Components/Footer"
import AOS from 'aos';
import 'aos/dist/aos.css';
import Loader from './Components/Loader'


function App() {
  
  const [loading, setLoanding] = useState(true);

  useEffect(() => {
    AOS.init();
    setTimeout(()=>{
      setLoanding(false);
    }, 2000)
  })

  return (
    <>
      {loading ?
        <Loader/> :
        <>
          <div className='h-full md:w-full absolute bg-black/50'>
            <video
              loop
              muted
              autoPlay
              className='w-full fixed top-0 right-0
            h-full z-[-1] object-cover'>
              <source src={Bgvideo} />
            </video>
            <Navbar />
            <HeaderSec />
            <Services />
            <About />
            <Footer />
          </div>
        </>
      }
    </>
  )
}

export default App
