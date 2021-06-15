import React from 'react' //Importar siempre react
import '../utlis/css/Experiencia.estilos.css'
import Yuri from '../utlis/Img/A2.jpg'

const Experiencia = () => {
    return (

        <div className="container_Experiencia">
                <div className="ContainerImage">
                    <img src={Yuri} alt="Hola esta es Yuri" />
                </div>
            <div className="ContainerText">
                <h1 className="CuerpoTitle">YURI ALEJANDRA HERRERA PEREZ</h1>
                <p>Herrerayuri120@gmail.com</p>
                <p>Cra 96 B # 40 a 16 sur.</p> 
                <p>320 7081 577 </p>     
            </div>

            <div className="Experiencia">
            <p>Experiencia en trabajo
            Solo eh trabajado en puestos informales de ropa deportiva, almacen de calzado y comidas rapidas.</p>

            <p>Experiencia en  Kuepa-TechPower
            Se basa en los proyectos entregados en cada modulo, les dejare mi 
            Git Hub para que puedan observar algunos de los proyectos realisados.</p>
            </div>

        </div>

    )
}
export default Experiencia;