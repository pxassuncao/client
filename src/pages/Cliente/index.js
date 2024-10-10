import React from "react";
import {Link} from "react-router-dom";
import {FiPower, FiEdit, FiTrash2} from 'react-icons/fi';
import eptus2 from '../../assets/LogoPrata.png';


import './style.css';

export default function(){
    return(
        <div className="cliente-container">
            <header>
                <img src={eptus2} alt="Erudio"/>
                <span>Bem Vindo,<strong>Marcos</strong>!</span>
                <Link className="button" to="book/new">Adicionar Cliente</Link>
                <button type="button">
                    <FiPower size={18} color="#251FC5"/>
                </button>
            </header>
            <h1>Registro de Clientes</h1>
            <ul>
                <li>
                    <strong>Data do Cadastro</strong>
                    <p>09/10/2024</p> 
                    <strong>Nome</strong>
                    <p>Marcos Araújo Ribeiro Silva</p> 
                    <strong>Rua</strong>
                    <p>Travessa Ronaldo Sales</p> 
                    <strong>Número</strong>
                    <p>317</p>
                    <strong>Bairro</strong>
                    <p>Aeroporto</p> 
                    <strong>Cidade</strong>
                    <p>Boa Vista</p>
                    <strong>Estado</strong>
                    <p>Roraima</p>
                    <strong>Celular</strong>
                    <p>(95)981053654</p>
                    <strong>Email</strong>
                    <p>marcosaraujo@gmail.com</p>
                    <strong>Limite de Crédito</strong>
                    <p>R$ 1.200</p>

                    <button type="button">
                        <FiEdit size={20} color="#251Fc5"/>
                    </button>
                    <button type="button">
                        <FiTrash2 size={20} color="#251Fc5"/>
                    </button>
                </li>
                <li>
                    <strong>Data do Cadastro</strong>
                    <p>09/10/2024</p> 
                    <strong>Nome</strong>
                    <p>Marcos Araújo Ribeiro Silva</p> 
                    <strong>Rua</strong>
                    <p>Travessa Ronaldo Sales</p> 
                    <strong>Número</strong>
                    <p>317</p>
                    <strong>Bairro</strong>
                    <p>Aeroporto</p> 
                    <strong>Cidade</strong>
                    <p>Boa Vista</p>
                    <strong>Estado</strong>
                    <p>Roraima</p>
                    <strong>Celular</strong>
                    <p>(95)981053654</p>
                    <strong>Email</strong>
                    <p>marcosaraujo@gmail.com</p>
                    <strong>Limite de Crédito</strong>
                    <p>R$ 1.200</p> 

                    <button type="button">
                        <FiEdit size={20} color="#251Fc5"/>
                    </button>
                    <button type="button">
                        <FiTrash2 size={20} color="#251Fc5"/>
                    </button>
                </li>
                <li>
                    <strong>Data do Cadastro</strong>
                    <p>09/10/2024</p> 
                    <strong>Nome</strong>
                    <p>Marcos Araújo Ribeiro Silva</p> 
                    <strong>Rua</strong>
                    <p>Travessa Ronaldo Sales</p> 
                    <strong>Número</strong>
                    <p>317</p>
                    <strong>Bairro</strong>
                    <p>Aeroporto</p> 
                    <strong>Cidade</strong>
                    <p>Boa Vista</p>
                    <strong>Estado</strong>
                    <p>Roraima</p>
                    <strong>Celular</strong>
                    <p>(95)981053654</p>
                    <strong>Email</strong>
                    <p>marcosaraujo@gmail.com</p>
                    <strong>Limite de Crédito</strong>
                    <p>R$ 1.200</p> 

                    <button type="button">
                        <FiEdit size={20} color="#251Fc5"/>
                    </button>
                    <button type="button">
                        <FiTrash2 size={20} color="#251Fc5"/>
                    </button>
                </li>
                <li>
                    <strong>Data do Cadastro</strong>
                    <p>09/10/2024</p> 
                    <strong>Nome</strong>
                    <p>Marcos Araújo Ribeiro Silva</p> 
                    <strong>Rua</strong>
                    <p>Travessa Ronaldo Sales</p> 
                    <strong>Número</strong>
                    <p>317</p>
                    <strong>Bairro</strong>
                    <p>Aeroporto</p> 
                    <strong>Cidade</strong>
                    <p>Boa Vista</p>
                    <strong>Estado</strong>
                    <p>Roraima</p>
                    <strong>Celular</strong>
                    <p>(95)981053654</p>
                    <strong>Email</strong>
                    <p>marcosaraujo@gmail.com</p>
                    <strong>Limite de Crédito</strong>
                    <p>R$ 1.200</p>

                    <button type="button">
                        <FiEdit size={20} color="#251Fc5"/>
                    </button>
                    <button type="button">
                        <FiTrash2 size={20} color="#251Fc5"/>
                    </button>
                </li>
                <li>
                    <strong>Data do Cadastro</strong>
                    <p>09/10/2024</p> 
                    <strong>Nome</strong>
                    <p>Marcos Araújo Ribeiro Silva</p> 
                    <strong>Rua</strong>
                    <p>Travessa Ronaldo Sales</p> 
                    <strong>Número</strong>
                    <p>317</p>
                    <strong>Bairro</strong>
                    <p>Aeroporto</p> 
                    <strong>Cidade</strong>
                    <p>Boa Vista</p>
                    <strong>Estado</strong>
                    <p>Roraima</p>
                    <strong>Celular</strong>
                    <p>(95)981053654</p>
                    <strong>Email</strong>
                    <p>marcosaraujo@gmail.com</p>
                    <strong>Limite de Crédito</strong>
                    <p>R$ 1.200</p> 

                    <button type="button">
                        <FiEdit size={20} color="#251Fc5"/>
                    </button>
                    <button type="button">
                        <FiTrash2 size={20} color="#251Fc5"/>
                    </button>
                </li>
                <li>
                    <strong>Data do Cadastro</strong>
                    <p>09/10/2024</p> 
                    <strong>Nome</strong>
                    <p>Marcos Araújo Ribeiro Silva</p> 
                    <strong>Rua</strong>
                    <p>Travessa Ronaldo Sales</p> 
                    <strong>Número</strong>
                    <p>317</p>
                    <strong>Bairro</strong>
                    <p>Aeroporto</p> 
                    <strong>Cidade</strong>
                    <p>Boa Vista</p>
                    <strong>Estado</strong>
                    <p>Roraima</p>
                    <strong>Celular</strong>
                    <p>(95)981053654</p>
                    <strong>Email</strong>
                    <p>marcosaraujo@gmail.com</p>
                    <strong>Limite de Crédito</strong>
                    <p>R$ 1.200</p> 
                    <button type="button">
                        <FiEdit size={20} color="#251Fc5"/>
                    </button>
                    <button type="button">
                        <FiTrash2 size={20} color="#251Fc5"/>
                    </button>

                </li>
            </ul>
        </div>
    );
}