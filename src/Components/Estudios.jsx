import React from 'react' //Importar siempre react
import '../utlis/css/Estudios.estilos.css'
import Yuri from '../utlis/Img/A2.jpg'

const Estudios = () => {
    return (

        <div className="container_Estudios">
                <div className="ContainerImage">
                    <img src={Yuri} alt="Hola esta es Yuri" />
                </div>
            <div className="ContainerText">
                <h1 className="CuerpoTitle">YURI ALEJANDRA HERRERA PEREZ</h1>
                <p>Herrerayuri120@gmail.com</p>
                <p>Cra 96 B # 40 a 16 sur.</p> 
                <p>320 7081 577 </p>     
            </div>

            <div className="Estudios">
            <p>Bachilerato: 2019, Colegio Saludcoop Sur I.E.D
            Certificado en electronica y robotica, Colegio Saludcoop Sur I.E.D
            Certificado en ingles, cengua castellana, matematicas
            y proyecto de vida, Univercidad Distrital.</p>
            </div>

        </div>

    )
}
export default Estudios;