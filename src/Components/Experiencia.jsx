import React from 'react' //Importar siempre react
import '../utlis/css/Experiencia.estilos.css'
import Yuri from '../utlis/Img/A2.jpg'
import { Link } from 'react-router-dom'

const Experiencia = () => {
    return (

        <div className="container_Experiencia">

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

            <div className="Experiencia">

            <button> Experiencia </button>

            <p>Experiencia en trabajos:
            Solo eh trabajado en puestos informales de ropa deportiva, almacen de calzado y comidas rapidas.</p>

            <p>Experiencia en  Kuepa-TechPower: 
            Se basa en los proyectos entregados en cada modulo, les dejare mi 
            Git Hub para que puedan observar algunos de los proyectos realisados.</p>
            </div>

        </div>

    )
}
export default Experiencia;