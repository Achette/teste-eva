import React from 'react'
import './categorieCard.css'

const CategoryCard = ( { imageFile, altTxt, label}) => {
    return (
        <div>
            <div className="category-cards">
            <img src={imageFile} alt={altTxt} />
            <p>{label}</p>
            </div>
        </div>
      )
}

export default CategoryCard