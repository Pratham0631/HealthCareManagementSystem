import React from 'react'
import Header from '../components/header'
import Speciality from '../components/speciality'
import Doctor from './Doctor'
import Doctors from '../components/Doctors'
import Banner from '../components/Banner'

const Home = () => {
  return (
    <div>
        <Header/>
        <Speciality/>
        <Doctors/>
        <Banner/>
    </div>
  )
}

export default Home