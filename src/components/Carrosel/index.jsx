import React from 'react'
import CarroselCard from '../CarroselCard'
import arrowLeft from '../../assets/img/arrow-left.svg'
import arrowRight from '../../assets/img/arrow-right.svg'
import './carrosel.css'

const Carrosel = ({ title }) => {
  return (
    <div className='container-carrosel' >
      <hr/>
        <h2>{title}</h2>
        <div className='carrosel-content'>
          <img className='arrow' src={arrowLeft} alt="" />
            <CarroselCard />
            <CarroselCard />
            <CarroselCard />
            <CarroselCard />
          
            <img className='arrow' src={arrowRight} alt="" />
        </div>
        </div>
  )
}

export default Carrosel