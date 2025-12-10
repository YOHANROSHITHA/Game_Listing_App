import React, { useEffect } from 'react'

function Banner({gameBanner}) {
    useEffect(()=>{
        console.log("gameBanner", gameBanner)
    })
  return (
    <div>Banner</div>
  )
}

export default Banner