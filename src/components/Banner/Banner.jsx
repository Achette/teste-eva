import React from "react";

import "./style.css";

const Banner = () => {
  return (
    <div className="container">
      <div id="banner-style" className="banner-content"></div>

      <div className="text-banner">
        <p className="text-bigger">Seus livros favoritos</p>
        <p className="text-small">estão te esperando aqui!</p>
      </div>
    </div>
  );
};

export default Banner;
