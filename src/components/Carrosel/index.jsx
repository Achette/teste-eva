import React from 'react'
import CarroselCard from '../CarroselCard'
import arrowLeft from '../../assets/img/arrow-left.svg'
import arrowRight from '../../assets/img/arrow-right.svg'
import './carrosel.css'
import { useRef } from 'react'

const Carrosel = ({ title }) => {

  const slider = useRef(null)

  const handleLeftClick = (e) => {
    e.preventDefault()
    console.log(slider.current.offsetWidth)
    slider.current.offsetWidth.scrollLeft -= slider.current.offsetWidth

  }

  const handleRightClick = (e) => {
    e.preventDefault()
    console.log(slider.current.offsetWidth)
    slider.current.offsetWidth.scrollLeft += slider.current.offsetWidth
  }


  return (
    <div className='container-carrosel' >
      <hr/>
        <h2>{title}</h2>
        <div className='carrosel-content'>
          <button onClick={handleLeftClick}><img className='arrow' src={arrowLeft} alt="" /></button>
          
            <div className="carrosel-slider" ref={slider}>
              <CarroselCard />
              <CarroselCard />
              <CarroselCard />
              <CarroselCard />
            </div>
          
            <button onClick={handleRightClick}><img className='arrow' src={arrowRight} alt="" /></button>
        </div>
        </div>
  )
}

export default Carrosel