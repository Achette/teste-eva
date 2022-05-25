import React from "react";
import "./style.css";
import evaLogo from "../../assets/img/logo.png";
import carrinho from '../../assets/img/carrinho.svg'
import usuario from '../../assets/img/usuario.svg'
import setaCategorias from '../../assets/img/seta-categorias.svg'

const Navbar = () => {
  return (
    <header>
      <nav>
        <img className="logo" src={evaLogo} alt="" />

        
          <div className="nav-content categorias">
            <a href="/">Categorias</a>
            <img src={setaCategorias} alt="" />
          </div>

          <div className="nav-content ">
            <input className="nav-input" type="text" />
          </div>

          <div className="nav-content">
            <a href="#">Minha conta</a>
            <img src={usuario} alt="" />
          </div>

          <div className="nav-content">
            <a href="#">Carrinho(2)</a>
            <img src={carrinho} alt="" />
          </div>
        
      </nav>
    </header>
  );
};

export default Navbar;
