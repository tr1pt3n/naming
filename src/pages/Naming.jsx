import React from 'react'
import About from '../components/About'
import Body from '../components/Body'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Name from '../components/Name'
import Navbar from '../components/Navbar'

const Naming = () => {
  return (
    <div className="flex flex-col items-center">
      <Navbar />
      <div className="w-[1140px] mt-[60px]">
        <About />
        <Name />
        <Body />
        <Contact />
      </div>
      <Footer />
    </div>
  )
}

export default Naming