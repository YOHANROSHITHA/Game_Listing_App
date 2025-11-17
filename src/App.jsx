import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Pages/Home'
import Header from './Components/Header'

function App() {
  const [count, setCount] = useState(0)
  const [theme,setTheme] = useState('light')

  return (
    
    <div className={ `${theme} ${theme=='dark' ?'bg-[#121212]' : null} `}>
    <h1 class="App">
      <Header/>
      <Home/>
    </h1>

    
    </div>
  )
}

export default App
