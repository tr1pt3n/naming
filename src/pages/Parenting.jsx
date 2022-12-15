import React from 'react'
import Articles from '../components/Articles'
import Community from '../components/Community'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const Parenting = () => {
  return (
    <div className="flex flex-col items-center">
      <Navbar />
      <div className="w-[1140px] mt-[60px]">
        <Community />
        <Articles />
        <Contact />
      </div>
      <Footer />
    </div>
  )
}

export default Parenting