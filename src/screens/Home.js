import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Cards from '../components/Cards'
import Carousel from '../components/Carousel'
import { ClassNames } from '@emotion/react'


export const Home = () => {
  return (
    <>
      <div>
        <> <Navbar></Navbar></>
        <>
          <Carousel></Carousel>
        </>
       <div className='m-3'>
        <Cards></Cards>
        <Cards></Cards>
        <Cards></Cards>
        <Cards></Cards>
       </div>
        <><Footer></Footer></>
      </div>
    </>
  )
}
