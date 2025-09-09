import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Footer from './components/footer.jsx'
import Navbar from './components/navbar.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'

function App() {

  return (
    <>
      <BrowserRouter basename={import.meta.env.DEV ? '/' : '/'}>
      <Navbar />
      <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/about" element={<About />}/>
      </Routes>
      <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
