import React from 'react'
import Navbar from './Navbar'
import Footer from './footer'
import HeroSection from './Hero'
import SolutionsSection from './Solutions'

const Landing = () => {
  return (
    <>
    <Navbar />
        <HeroSection />
        <SolutionsSection />
    <Footer />
    </>
  )
}

export default Landing