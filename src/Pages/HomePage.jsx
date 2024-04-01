import React from 'react'
import Hero from '../Components/Hero/Hero'
import Home from '../Components/Home/Home'
import HomeSubSection from '../Components/HomeSubSection/HomeSubSection'
import HomeAboutUs from '../Components/HomeAboutUs/HomeAboutUs'
import CoreValues from '../Components/CoreValues/CoreValues'

const HomePage = () => {
  return (
    <div>
      <Hero/>
      <Home/>
      <HomeSubSection/>
      <HomeAboutUs/>
      <CoreValues/>
    </div>
  )
}

export default HomePage