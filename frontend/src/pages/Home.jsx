import React from 'react'
import Hero from '../components/home/Hero'
import FeaturedSection from '../components/home/FeaturedSection'
import Exclusive from '../components/home/Exclusive'
import MacbooksSeries from '../components/home/MacbooksSeries'
import NewArrival from '../components/home/NewArrival'

const Home = () => {
  return (
    <>
      <Hero/>
      <FeaturedSection/>
      <MacbooksSeries/>
      <Exclusive/>
      <NewArrival/>

    </>
  )
}

export default Home
