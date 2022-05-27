import React, { useEffect, useState } from "react";
import './carroselCard.css'

const CarroselCard = () => {

  const [data, setData] = useState([])

  useEffect(() => {
    fetch('https://fakestoreapi.com/products').then(response => response.json()).then(setData)
  }, [])

  
  return (
   
        <div className="carrosel-card-container" >
           {data.map((item) => {
      const { id, title, price, image} = item
      return (
     <div className="item" key={id}>
       <div className="item-img">
        <img src={image} alt="" srcset="" />
      </div>
      <div className="carrousel">
        <div className="item">
          
          <div className="info">
            <span className="name">{title}</span>
            <span>Stars aqui</span>
            <span className="oldPrice">preço antigo</span>
            <span className="price">{price}</span>
            <span className="additionalInfo">Alguma informação adicional</span>
            <button id="botao" className="hide" hidden>Comprar</button>
          </div>
        </div>
      </div>
     </div>
      )
      })}
      </div>
      
  
    
  );
};

export default CarroselCard;
