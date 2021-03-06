import React from 'react';
import {Link } from 'react-router-dom'
import { FiPower,FiTrash2 } from 'react-icons/fi';
import './styles.css';
import logoImg from '../../assets/logo.svg';


export default function Profile(){
    return(
<div className = "profile-container">
    <header>
        <img src={logoImg} alt="Be the Hero"></img>
        <span>Bem vinda, APDA</span>

<Link className= "button" to= "/incidents/new">Cadastra novo caso</Link>
<button type = "button">
    <FiPower size={24} color = "#E02041" style={{marginTop:4}} />
</button>
    </header>
    <h1>Casos Cadastrados</h1>
<ul>
    <li>
        <strong>CASO:</strong>
    <p>Caso teste</p>

    <strong>Descrição:</strong>
    <p>Descrição teste</p>

    <strong>Valor:</strong>
    <p>R$ 120,00</p>
    <button type= "button">
        <FiTrash2 size={20} color ="#fff"></FiTrash2>
   
       
    </button>
    </li>
    <li>
        <strong>Caso:</strong>
    <p>Caso teste</p>

    <strong>Descrição:</strong>
    <p>Descrição teste</p>

    <strong>Valor:</strong>
    <p>R$ 120,00</p>
    <button type= "button">
        <FiTrash2 size={20} color ="#a8a8b3"></FiTrash2>
    </button>
    </li>
    <li>
        <strong>Caso:</strong>
    <p>Caso teste</p>

    <strong>Descrição:</strong>
    <p>Descrição teste</p>

    <strong>Valor:</strong>
    <p>R$ 120,00</p>
    <button type= "button">
        <FiTrash2 size={20} color ="#a8a8b3"></FiTrash2>
    </button>
    </li>
    <li>
        <strong>Caso:</strong>
    <p>Caso teste</p>

    <strong>Descrição:</strong>
    <p>Descrição teste</p>

    <strong>Valor:</strong>
    <p>R$ 120,00</p>
    <button type= "button">
        <FiTrash2 size={20} color ="#a8a8b3"></FiTrash2>
    </button>
    </li>
</ul>
</div>
    );
}