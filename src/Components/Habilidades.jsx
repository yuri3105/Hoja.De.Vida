import React from 'react' //Importar siempre react
import '../utlis/css/Habilidades.estilos.css'
import Yuri from '../utlis/Img/A2.jpg'
import { Link } from 'react-router-dom'

const Habilidades = () => {
    return (

        <div className="container_Habilidades">

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

            <div className="Habilidades">

            <button> Habilidades </button>

            <p>Visualización:
            Imaginar posibles soluciones
            o alternativas para un 
            problema o situación</p>

            <p>Convencional;
            Organización de información, 
            elaboración y seguimiento de 
            procedimientos y reglas.</p>

            <p>Gestión de proyectos:
            Organización y administración 
            de recursos para cumplir 
            con un objetivo o meta</p>
            </div>

        </div>

    )
}
export default Habilidades;