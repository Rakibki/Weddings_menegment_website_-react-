import React from 'react'
import Banner from '../../components/header/banner/Banner'
import Services from './services/Services'
import Clients from './clients/Clients'
import Gallery from "./Gallery"

const Home = () => {
  return (
    <div>
       <Banner />
       <Services />
       <Gallery />
       <Clients />
    </div>
  )
}

export default Home