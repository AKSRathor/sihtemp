import React from 'react'
// import Navbar from "./Navbar"
import Hero from "./Hero"
import Cardsw1 from "./cardsw1"
import Whyus from "./WhyUs"
import Companies from "./Companies"
import Achievement from "./Achievement"
import Feedback from "./Feedback"
import CTA from "./CTA"
import Footer from "./Footer"

const Home = () => {
  return (
    <div>
    <Hero />
    <Cardsw1/>
    <Whyus />
    
    <Companies />
    <Achievement />
    <Feedback />
    <CTA />
    <Footer />
    </div>
  )
}

export default Home