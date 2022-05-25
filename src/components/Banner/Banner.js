import React from "react";
import "./style.css";
import bannerBackground from "../../assets/img/banner.jpeg";

const Banner = () => (
  <>
    <div id="banner-style" className="banner-container"></div>

    <div className="text-banner">
      <p className="text-bigger">Seus livros favoritos</p>
      <p className="text-small">estão te esperando aqui!</p>
    </div>
  </>
);

export default Banner;
