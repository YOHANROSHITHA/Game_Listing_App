import React, { useEffect, useState } from 'react'
import GenaralList from '../Components/GenaralList'
import GlobalApi from '../Services/GlobalApi'


function Home() {
  const[allGameslist,setAllGamelist]=useState();

  useEffect(()=>{
    getAllGameslist();
  }, [])

const getAllGameslist = ()=>{

  GlobalApi.getAllGameslist().then((resp)=>{
    setAllGamelist(resp.data.results)
  })

}

  return (
    <div className='grid grid-cols-4 px-8'>
      <div className='md:block'>
        <GenaralList/>
      </div>
      <div className='col-span-4 md:col-span-3 '>
        {allGameslist ? <Banner gameBanner={allGameslist[0]}/> : null}
        </div>
      
      </div>
  )
}

export default Home