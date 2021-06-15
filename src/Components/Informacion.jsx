import React from 'react' //Importar siempre react
import '../utlis/css/Informacion.estilos.css'
import Yuri from '../utlis/Img/A2.jpg'

const Informacion = () => {
    return (

        <div className="container_Informacion">
                <div className="ContainerImage">
                    <img src={Yuri} alt="Hola esta es Yuri" />
                </div>
            <div className="ContainerText">
                <h1 className="CuerpoTitle">YURI ALEJANDRA HERRERA PEREZ</h1>
                <p>Herrerayuri120@gmail.com</p>
                <p>Cra 96 B # 40 a 16 sur.</p> 
                <p>320 7081 577 </p>              
            </div>
            <div className="informacion">
            <p>Tengo 20 años, Vivo en Bogotá, Colombia. 
                Actualmente soy estudiante de
                Frontend en el instituto
                Kuepa , estoy en busca de un lugar 
                donde hacer mis practicas.</p>
                <p>Me considero una persona 
                creativa, amable, 
                respondable y perfecionista.
                Tengo conocimientos basicos 
                en HTML5, CSS
                y JavaScript, junto con librerias como React, 
                en electronica y robotica</p>
            </div>
        </div>

    )
}
export default Informacion;