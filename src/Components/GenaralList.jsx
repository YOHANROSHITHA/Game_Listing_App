import React, { useEffect, useState, useContext } from 'react'
import GlobalApi from '../Services/GlobalApi'
import { ThemeContext } from '../Context/ThemeContext'

function GenaralList() {
    const [genreList, setGenreList] = useState([])
    const { theme } = useContext(ThemeContext); // Access the current theme
    const [activeIndex,setActiveIndex] = useState(0);
    
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
      {genreList.map((item,index)=>(
        <div 
        onClick={() => setActiveIndex(index)}
        className={`flex gap-2 items-center mb-2 cursor-pointer
         hover:bg-gray-300 p-2 group
         rounded-lg hover:dark:bg-gray-400 ${activeIndex === index ? 'bg-gray-300 dark:bg-gray-400' : ''}`}>
            <img src={item.image_background} 
            className={`w-[40px] h-[40px] 
            object-cover rounded-lg group-hover:scale-105 transition-all
            ease-out duration-300 ${activeIndex === index ? 'scale-105' : ''}`} />
            <h3 className={`${theme === 'dark' ? 'text-white' : 'text-black'} text-[18px]
            group-hover:font-bold transition-all
            ease-out duration-300 ${activeIndex === index ? 'font-bold' : ''}`}>{item.name}</h3>
        </div>
      ))}

    </div>
  )
}

export default GenaralList