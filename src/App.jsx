import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Feature from './Components/Feature'
import Workflow from './Components/Workflow'
import Price from './Components/Price'
import Testimonials from './Components/Testimonials'
import Footer from './Components/Footer'

const App = () => {
  return (
<>
<Navbar/>
<div className='max-w-7xl mx-auto pt-20 px-6'>
  <Hero/>
  <Feature/>
  <Workflow/>
  <Price/>
  <Testimonials/>
  <Footer/>
</div>
</>
  )
}

export default App