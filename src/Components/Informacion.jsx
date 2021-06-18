import React from 'react' //Importar siempre react
import '../utlis/css/Informacion.estilos.css'
import Yuri from '../utlis/Img/A2.jpg'
import { Link } from 'react-router-dom'

const Informacion = () => {
    return (

        <div className="container_Informacion">

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
            <div className="informacion">

            <button> Informacion </button>

            <p>Tengo 20 años, Vivo en Bogotá, Colombia. 
                Actualmente soy estudiante de
                Frontend en el instituto
                Kuepa.</p>

                <p>Me considero una persona 
                creativa, amable, 
                responsable y honesta.
                Tengo conocimientos basicos 
                en electronica, robotica, HTML5, CSS
                y JavaScript, junto con librerias como React.</p>
            </div>
        </div>

    )
}
export default Informacion;