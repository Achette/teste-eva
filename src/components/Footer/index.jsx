import React from 'react'
import FooterElements from '../FooterElements'
import './footer.css'
import loja from '../../assets/img/loja.svg'
import mapa from '../../assets/img/mapa.svg'
import whatsapp from '../../assets/img/whatsapp.svg'
import email from '../../assets/img/email.svg'

const Footer = () => {
    return (
        <div className='footer-container'>
            <h2>Eva Shop</h2>
            <div className='container-elements'>
                <FooterElements icon={loja}
                    info1="Quem somos"
                    info2="Políticas de privacidade"
                    info3="Feedback de clientes"
                    info4="Trocas e devoluções"
                />
                <div className="element">
                    <FooterElements icon={mapa}
                        info1="Rua Av.Rio Negro, 1100"
                        info2="Jardim Roselandia"
                        info3="14406-005"
                        info4="Franca / SP"
                    />
                </div>
                <div>
                    <img src={loja} alt="" />
                    <div className="elements-contact">
                        <img src={whatsapp} alt="whatsapp" />
                        <p>(16) 98179-7325</p>
                    </div>
                    <div className="elements-contact">
                        <img src={email} alt="whatsapp" />
                        <p>contato@evacommerce.com.br</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer