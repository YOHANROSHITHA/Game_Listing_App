import React, { useEffect, useState, useContext } from 'react'
import GlobalApi from '../Services/GlobalApi'
import { ThemeContext } from '../Context/ThemeContext'

function GenaralList() {
    const [genreList, setGenreList] = useState([])
    const { theme } = useContext(ThemeContext); // Access the current theme

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
      <h2
                className={`text-[30px] font-bold ${ theme === 'dark' ? 'text-white' : 'text-black'}`}>
                Genres
      </h2>
      {genreList.map((item)=>(
        <div className='flex gap-2 items-center mb-2 cursor-pointer hover:bg-gray-300 p-2 rounded-lg'>
            <img src={item.image_background} 
            className='w-[40px] h-[40px] 
            object-cover rounded-lg'/>
            <h3 className='dark:text-white text-[18px]'>{item.name}</h3>
        </div>
      ))}

    </div>
  )
}

export default GenaralList