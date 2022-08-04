import React from 'react'
import Gallery from './Components/Gallery';
import {WiMoonAltFirstQuarter} from "react-icons/wi"
import {CgArrowUpO} from "react-icons/cg"
import {Link} from "react-scroll"

const App = () => {

  const themeButton = () =>{
    document.body.classList.toggle("dark");
  }

  return (
    <>
    {/* theme div */}

    <div className='dark:bg-[#046c69] pt-4'>

    {/* icons div */}
    <div className='bg-black fixed mt-[13rem] z-[3] ml-[92%] md:ml-[95%] md:mt-4 lg:ml-[98%] backdrop-opacity-10 w-[5%] md:w-[3%] lg:w-[2%] px-3 md:px-0 py-1 flex flex-col justify-center items-center rounded-md'>
    <WiMoonAltFirstQuarter onClick={themeButton} className='text-lg md:cursor-pointer text-black bg-gray-200 rounded-full'/>

    <Link to="top" smooth={true} duration={1500}><CgArrowUpO className='text-xl md:cursor-pointer mt-2 text-black bg-gray-200 rounded-full'/></Link>

    </div>

    {/* main heading */}
    <h1 id="top" style={{"textShadow":"2px 2px 2px gray"}} className='text-center pt-6 md:pt-10 px-2 md:text-5xl text-4xl text-cyan-300 tracking-[0.1rem] font-bold'>Choose your Mood</h1>
    <hr className='mt-4'/>


      <Gallery/>
    </div>
    </>
  );
}

export default App
