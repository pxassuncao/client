import React from "react";
import './style.css';
import padlock from'../../assets/padlock.png';
import eptus2 from '../../assets/LogoPrata.png';



export default function Login(){
    return(
        <div className="login-container">
            <section className="form">
            <img src={eptus2} alt="Logo"/>
            <form>
                <h1>Acesse sua conta</h1>
                <input placeholder="Nome"/>
                <input  type="password" placeholder="Senha"/>
                <button className= "button" type="submit">Login</button>
            </form>
            </section>

            <img src={padlock} alt="Login"/>
        </div>
    )
}