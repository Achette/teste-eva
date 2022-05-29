import React from 'react'
import ReactStars from 'react-rating-stars-component'
import arrowLeft from '../../assets/img/arrow-left.svg'
import arrowRight from '../../assets/img/arrow-right.svg'
import './carrosel.css'
import { useRef } from 'react'

const Carrosel = ({ title, data }) => {

  const carroselSlider = useRef(null)


  const handleLeftClick = (e) => {
    e.preventDefault()
     carroselSlider.current.scrollLeft -= carroselSlider.current.offsetWidth

  }

  const handleRightClick = (e) => {
    e.preventDefault()
    carroselSlider.current.scrollLeft += carroselSlider.current.offsetWidth
  }

  const ratingChanged = () => {
    
  }


  return (
    <div className='container-carrosel' >
      <hr />
      <h2>{title}</h2>
      <div className='carrosel-content'>
        <button style={{ marginRight: '1.5vw' }} onClick={handleLeftClick}><img className='arrow' src={arrowLeft} alt="" /></button>

        <div className="carroselSlider" ref={carroselSlider}>
          {data.map((item) => {
            const { id, title, price, image, rating } = item

            return (
              <div className='item' key={id}>
                <div className='item-image'>
                  <img src={image} alt={title}/>
                </div>
                <div className='item-info'>
                  <span className='name'>{title}</span>
                  <ReactStars 
                  count={5}
                  onChange={ratingChanged}
    size={24}
    activeColor="#ffd700"
                  />
                   <span className='rating'>Rating: {rating.rate}</span>
                  <span className='price'>$ {price.toFixed(2)}</span>
                <span className='buy'> <a href="#">Comprar</a> </span>
                </div>
              </div>
            )
          })}
        </div>

        <button style={{ marginLeft: '1.5vw' }} onClick={handleRightClick}><img className='arrow' src={arrowRight} alt="" /></button>
      </div>
    </div>
  )
}

export default Carrosel