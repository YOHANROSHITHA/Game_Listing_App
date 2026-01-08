import React, { useEffect, useState } from 'react'
import GenaralList from '../Components/GenaralList'
import Banner from '../Components/Banner'
import GlobalApi from '../Services/GlobalApi'
import { all } from 'axios';


function Home() {
  const[allGameslist,setAllGamelist]=useState();

  useEffect(()=>{
    getAllGameslist();
  }, [])

const getAllGameslist = ()=>{

  GlobalApi.getAllGames().then((resp)=>{
    setAllGamelist(resp.data.results)
  })

}

  return (
    <div className='grid grid-cols-4 px-8'>
      <div className='md:block'>
        <GenaralList/>
      </div>
      <div className='col-span-4 md:col-span-3 '>
        { allGameslist ?.length>0?
        <div>
            <Banner gameBanner={allGameslist[0]}/>
            <TrendingGames gameList={allGameslist}/>
         </div>
         : null}
        </div>
      
      </div>
  )
}

export default Home