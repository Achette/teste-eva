import React from 'react'
import CategoryCard from '../CategoriesCard'
import livros from '../../assets/img/category-1.jpg'
import escritorio from '../../assets/img/category-2.jpg'
import vestuario from '../../assets/img/category-3.jpg'
import './categories.css'

const Categories = () => {
  return (
    <div className='categories-container'>
        <CategoryCard imageFile={livros} altTxt="books" label="Livros" />
        <CategoryCard imageFile={escritorio} altTxt="office room" label="Escritório" />
        <CategoryCard imageFile={vestuario} altTxt="wear" label="Vestuário" />
    </div>
  )
}

export default Categories