import React from 'react'
import Navbar from '../components/Navbar'
import Course from '../components/Course'
import Footer from '../components/Footer'

function Cources() {
  return (
    <div>
      <Navbar />
      <div className='min-h-screen'>
      <Course />
      </div>
      <Footer />
    </div>
  )
}

export default Cources
