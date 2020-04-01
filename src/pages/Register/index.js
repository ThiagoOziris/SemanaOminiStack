import React, {useState} from 'react';
import {Link} from 'react-router-dom'
import {FiArrowLeft} from 'react-icons/fi';
import api from '../../services/api';
import './styles.css';
import logoImg from '../../assets/logo.svg';


export default function Register(){
const [nome,setnome]= useState('');
const [email,setemail]= useState('');
const [WhatSapp,setWhatSapp]= useState('');
const [Cidade,setCidade]= useState('');
const [UF,setUF]= useState('');

   async function handLeRegister(e){
        e.preventDefault();
        const data ={
          nome,email,WhatSapp,Cidade,UF  
        };
        try{
            const response = await api.post('ongs',data);
        alert(`seu ID de acesso: ${response.data.id}` );
        }catch(err){
            alert('Erro no cadastro,tente novamente')
        }
        
    }
    return (
        <div className= "register-container">
            <div className= "content">
                <section>
                    <img src={logoImg} alt="Be the Hero"/>
                    <h1>Cadastro</h1>
                   
                     <p>Faça seu cadastro,entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>
                
                     <Link className ="back-link" to="/">
                        <FiArrowLeft size={16}  color="#36e020"/>
                        Não tenho cadastro
                        </Link>
                </section>
                <form onSubmit= {handLeRegister}> 
                    <input placeholder= "Nome da ONG"
                    value={nome}
                    onChange={e => setnome(e.target.value)}
                    />
                    <input type = "email" placeholder="E-mail"
                     value={email}
                     onChange={e => setemail(e.target.value)}
                    
                    />
                    <input placeholder= "WhatsApp"
                     value={WhatSapp}
                     onChange={e => setWhatSapp(e.target.value)}
                    />
                    <div className= "input-group">
                    <input placeholder= "Cidade" 
                    value={Cidade} style={{marginRight:6,width:224}}
                     
                     onChange={e => setCidade(e.target.value)}
                    />
                    <input placeholder= "UF"  style={{width:60}}
                     value={UF}
                     onChange={e => setUF(e.target.value)}
                    />

                    </div>
                    <button className= "button" type = "submit" >Cadastrar  </button>
                </form>

            </div>

        </div>
    );
}