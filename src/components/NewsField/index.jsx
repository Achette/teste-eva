import React, {useState} from 'react'
import newsletter from '../../assets/img/newsletter.svg'
import './newsField.css'

const NewsField = () => {

    const [ cadastro, setCadastro ] = useState({email: '', nome: ''})
    const [ erro, setErro ] = useState({email: false, nome: false})


    const verifyFields = (e) => {
        e.preventDefault()
        console.log(cadastro)
       if(!cadastro.email) {
           setErro({...erro, email: true} )
          
       } else {
           setErro({...erro, email: false})
           alert("Cadastrado com sucesso")
       }
        
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

                        {erro.email ? <p id="message-error">E-mail inválido!</p> : undefined}
                    
                    <div className="news-input">
                        <input onChange={(e) => setCadastro({...cadastro, nome: e.target.value})} 
                        type="text" placeholder='Digite seu nome' />

                        <input onChange={(e) => setCadastro({...cadastro, email: e.target.value})}
                        id='email' className={erro.email ? 'error' : ''} type="text" placeholder='Digite seu e-mail' />
                    </div>

                    <button onClick={verifyFields}> <a href="#"> Eu quero receber novidades!</a></button>
                </div>
            </div>
        </div>
    )
}

export default NewsField