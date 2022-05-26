import React, { useEffect, useState } from "react";
import './carroselCard.css'

const CarroselCard = () => {

  const [data, setData] = useState([])

  useEffect(() => {
    fetch().then(response => response.json).then(setData)
  }, [])

    const showButton = () => {
      document.querySelector("#botao").classList.remove("hide")
    }

    const hideButton = () => {
      document.querySelector("#botao").classList.add("hide")
    }

  return (
    <div className="carrosel-card-container" onMouseOver={showButton} onMouseOut= {hideButton}>
      <div className="item-img">
        <img src="" alt="" srcset="" />
      </div>
      <div className="carrousel">
        <div className="item">
          
          <div className="info">
            <span className="name">Produto nome vem da API</span>
            <span>Stars aqui</span>
            <span className="oldPrice">preço antigo</span>
            <span className="price">Preço atual</span>
            <span className="additionalInfo">Alguma informação adicional</span>
            <button id="botao" className="hide" hidden>Comprar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarroselCard;
