import React from 'react'
import newsletter from '../../assets/img/newsletter.svg'
import './newsField.css'

const NewsField = () => {


    const verifyFields = (e) => {
        e.preventDefault()
        const email = document.querySelector('#email')
        const errorField = document.querySelector('#message-error')
        console.log(email)
        console.log(errorField)
        
            errorField.value.innerHTML = "E-mail inválido"
            email.classList.add('error')
        
    }


    return (
        <div className='news-container'>
            <div className='news-content-container'>
                <div className='news-content'>
                    <div>
                        <img src={newsletter} alt="newsletter logo" />
                    </div>

                    <div className="news-promo">
                        <p>Receba nossas novidades, descontos e muito mais</p>
                    </div>

                    <p id="message-error"></p>
                    <div className="news-input">
                        <input type="text" placeholder='Digite seu nome' />
                        <input id='email' className='' type="text" placeholder='Digite seu e-mail' />
                    </div>

                    <button onClick={verifyFields}> <a href="#"> Eu quero receber novidades!</a></button>
                </div>
            </div>
        </div>
    )
}

export default NewsField