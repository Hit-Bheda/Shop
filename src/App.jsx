import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Page1 from './Components/Page1/Page1'
import Page2 from './Components/Page2/Page2'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="main">
        <Navbar />
        <Page1 />
        <Page2 />
      </div>
    </>
  )
}

export default App
