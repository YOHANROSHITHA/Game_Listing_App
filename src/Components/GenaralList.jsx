import React, { useEffect } from 'react'
import GlobalApi from '../Services/GlobalApi'

function GenaralList() {
    
    useEffect(()=>{
        getGenreList();
    }, [])
    const getGenreList=()=>{
        GlobalApi.getGenreList.then((resp)=>{
            console.log(resp.data.results);
        })
    }

  return (
    <div>GenaralList</div>
  )
}

export default GenaralList