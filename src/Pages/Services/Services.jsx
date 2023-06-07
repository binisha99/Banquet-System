import React from 'react'
import Navbar from '../../Component/Navbar/Navbar'
import Footer from '../../Component/Footer/Footer'
import './Services.css'
import ServiceCard from './ServiceCard'
import ServiceHeader from './serviceHeader'
import Menu from './Menu'

export default function Services() {
  return (
    <>
    <Navbar />
    <ServiceHeader />
    <ServiceCard />
   <Menu />
    <Footer />
    </>
  )
}
