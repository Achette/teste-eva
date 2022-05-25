import React from 'react'
import './saleCard.css'

const SaleCard = ({imageFile, altTxt, label}) => {
  return (
    <div className="sales-cards">
    <img src={imageFile} alt={altTxt} />
    <p>{label}</p>
  </div>
  )
}

export default SaleCard