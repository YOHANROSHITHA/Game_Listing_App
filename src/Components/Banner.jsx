import React, { useEffect } from 'react'

function Banner({gameBanner}) {
    useEffect(()=>{
        console.log("gameBanner", gameBanner)
    },[])
  return (
    <div>
      <div>
        <h2 className='text-[24px] text-white font-bold'>{gameBanner.name}</h2>
        <button>Get Now</button>
      </div>
      <img src={gameBanner.background_image}
      className='md:h-[320px] w-full object-cover
      rounded-xl' />
    </div>
  )
}

export default Banner