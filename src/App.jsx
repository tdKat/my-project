import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Navbar from './components/navbar.jsx';
import Carousel from './components/carousel.jsx';
import Menutiles from './components/menutile.jsx';
import Footer from './components/footer.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
    <Carousel />
    <Menutiles />
    <Footer />
    </>
  )
}
import MenuTiles from './components/menutile.jsx';

export default App
