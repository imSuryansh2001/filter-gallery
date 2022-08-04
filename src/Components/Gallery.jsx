import React, { useState } from 'react'
import Photos from "./Photos"

const Gallery = () => {

  const [items,setItems] = useState(Photos);

  const filterrr = (n) =>{
    const updated = Photos.filter((currE)=>{
        return currE.category===n;
    });
    setItems(updated);
  }

  return (
    <>
        {/* buttons main box */}
        <div className='flex mt-4 md:mt-8 justify-evenly w-[100%] md:w-[80%] lg:w-[40%] mx-auto'>
          <button onClick={()=>filterrr("natural")} className="btn">Natural</button>
          <button onClick={()=>filterrr("minimilist")} className="btn">Minimilist</button>
          <button onClick={()=>filterrr("classic")} className="btn">Classic</button>
        </div>


        {/* all in one card div */}
        <div className='lg:flex lg:flex-row lg:flex-wrap lg:justify-center lg:items-center'>
        {
          items.map((ce,index)=>{
              return <>
              {/* card main div */}
              <div className='mt-10 flex flex-col justify-center items-center md:flex-row'>
              {/* card div */}
                <div className='px-4 bg-cyan-200 hover:shadow-gray-900 shadow-lg mt-4 dark:bg-gradient-to-br dark:from-gray-700 to dark:bg-cyan-700 to  py-4 mx-2 lg:w-[30vw] lg:m-4 lg:hover:drop-shadow-2xl lg:shadow-gray-900 lg:duration-500 lg:cursor-pointer'>
                  <img src={ce.img} alt={ce.img}/>
                  <h1 className='text-lg text-gray-800 dark:text-green-300 tracking-[0.2rem] text-center font-bold px-3 py-1'> {ce.name} </h1>
                  <h1 className='text-lg text-center tracking-[0.1rem] mt-6 text-gray-800 dark:text-white  px-3 py-1'> -------{ce.category}------- </h1>
                 {/* inner div */}
                 <div className='bg-gray-800 mt-3'>
                   <p className='text-lg text-cyan-300 text-center md:py-6 lg:py-3 px-6 pt-6'> {ce.description} </p>
                   <p className='text-lg text-green-300 font-bold bg-cyan-900 mt-6  pb-2 md:py-4 lg:py-2  tracking-[0.2rem] text-center  px-3 py-1'>{ce.price}</p>
                 </div>
                </div>
              </div>
          </>
             
          })
        }
        </div>

    </>
  );
}

export default Gallery