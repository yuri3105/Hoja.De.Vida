import React from 'react' //Importar siempre react
import '../utlis/css/Principal.estilos.css'
import Yuri from '../utlis/Img/A2.jpg'
import { Link } from 'react-router-dom'

const Principal = () => {
    return (

        <div className="container_Principal">

                <div className="ContainerImage">
                    <Link to="/">
                        <img src={Yuri} alt="Hola esta es Yuri"/>
                    </Link>
                </div>

            <div className="ContainerText">
                <h1 className="CuerpoTitle">YURI ALEJANDRA HERRERA PEREZ</h1>
                <p>Correo: Herrerayuri120@gmail.com</p>
                <p>Cra: 96 B # 40 a 16 sur.</p> 
                <p>Cel: 320 7081 577 </p>    
            </div>

            <div className="Principal">
                <p id="containerBotones1">
                <Link to="/Info">
                  <button className="botones1" type="button">INFORMACION</button>
                </Link>
            
                <Link to="/Estu">
                  <button className="botones1" type="button">ESTUDIOS</button>
                </Link>
                </p>

                 <p id="containerBotones1">
                <Link to="/Expe">
                  <button className="botones1" type="button">EXPERIENCIA</button>
                </Link>
                
                <Link to="/Habi">
                  <button className="botones1" type="button">HABILIDADES</button>
                </Link>
                </p>
            </div>
                
        </div>
    )
}
export default Principal;