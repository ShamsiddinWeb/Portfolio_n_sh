import React from 'react'
import MainHeader from '../../components/mainHeader/MainHeader'
import Hero from '../../components/hero/Hero'
import About from '../../components/about/About'
import Services from '../../components/services/Services'
import Work from '../../components/work/Work'
import Contact from '../../components/contact/Contact'
import Footer from '../../components/footer/Footer'

const Main = () => {
  return (
    <div>
      <MainHeader/>
      <Hero/>
      <About/>
      <Services/>
      <Work/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Main