import React, { useEffect, useState } from 'react'
import GlobalApi from '../Services/GlobalApi'

function GenaralList() {

    const [genreList, setGenreList] = useState([])

    // define the fetch function before useEffect so it's available when the effect runs
    const getGenreList = () => {
        GlobalApi.getGenreList()
            .then((resp) => {
                console.log(resp.data.results);
                setGenreList(resp.data.results);
            })
            .catch((err) => {
                console.error('Failed to load genres', err)
            })
    }

    useEffect(() => {
        getGenreList();
    }, [])

  return (
    <div>
      <h2 className='text-[30px] font-bold '>Genres</h2>

    </div>
  )
}

export default GenaralList