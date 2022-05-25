import React from "react";
import "./style.css";
import cadeado from "../../assets/img/cadeado.svg";
import cartao from "../../assets/img/cartao.svg";
import caminhao from "../../assets/img/caminhao.svg";
import SaleCard from '../SaleCard'

const Sales = () => {
  return (
    <div className="sales-container">
      <div className="sales-content">
        <SaleCard imageFile={cadeado} altTxt="cadeado" label="Site Seguro"/>
        <div className="borders">
          <SaleCard
          
          imageFile={cartao} altTxt="cartao" label="Até 12x sem juros"/>
        </div>
        <SaleCard imageFile={caminhao} altTxt="caminhao" label="Entrega para todo o Brasil"/>       
      </div>
    </div>
  );
};

export default Sales;
