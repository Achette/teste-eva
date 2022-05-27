import React from 'react'
import './footerElements.css'

const FooterElements = ({ icon, info1, info2, info3, info4}) => {
  return (
    <div className='elements-container'>
        <div><img src={icon} alt="" srcset="" /></div>
        <a href="#">{info1}</a>
        <a href="#">{info2}</a>
        <a href="#">{info3}</a>
        <a href="#">{info4}</a>
    </div>
  )
}

export default FooterElements