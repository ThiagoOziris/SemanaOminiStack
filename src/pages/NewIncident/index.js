import React from 'react';
import {Link} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';
import './styles.css';

import logoImg from '../../assets/logo.svg';

export default function NewIncident(){
    return(
<div className= "new-incident-container">
            <div className= "content">
                <section>
                    <img src={logoImg} alt="Be the Hero"/>
                    <h1>Cadastrar Novo Caso</h1>
                   
                     <p>Faça sua parte seja um Heroi</p>
                
                     <Link className ="back-link" to="/profile">
                        <FiArrowLeft size={18}  color="#36e020"/>
                        Voltar para Home
                        </Link>
                </section>
                <form>
               
                    <input placeholder= "Titulo do Caso"/>
                    <textarea placeholder="Descrição"/>
                    <input placeholder= "Valor em reais"/>
                    <button  className= "button" type = "submit" >Cadastrar</button>
                </form>

            </div>

        </div>







    );
}