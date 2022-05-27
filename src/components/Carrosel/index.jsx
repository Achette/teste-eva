
import CarroselCard from '../CarroselCard'
import arrowLeft from '../../assets/img/arrow-left.svg'
import arrowRight from '../../assets/img/arrow-right.svg'
import './carrosel.css'
import { useRef } from 'react'

const Carrosel = ({ title, data }) => {

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
          <button style={{marginRight: '1.5vw'}} onClick={handleLeftClick}><img className='arrow' src={arrowLeft} alt="" /></button>
          
            <div className="carrosel-slider" ref={slider}>
              {data.map((item) => {
                const {id, title, price, rating, image} = item
                return (
                  <div className='item' key={id}>
                    <div className='item-image'>
                      <img src={image} alt={title} srcset="" />
                    </div>
                    <div className='item-info'>
                        <span className='name'>{title}</span>
                       {/*  <span className='rating'>{rating}</span> */}
                        <span className='price'>{price.toFixed(2)}</span>
                    </div>
                  </div>
                )
              })}
             
            </div>
          
            <button style={{marginLeft: '1.5vw'}} onClick={handleRightClick}><img className='arrow' src={arrowRight} alt="" /></button>
        </div>
        </div>
  )
}

export default Carrosel