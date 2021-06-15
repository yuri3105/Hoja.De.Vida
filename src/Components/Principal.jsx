import React from 'react' //Importar siempre react
import '../utlis/css/Principal.estilos.css'
import Yuri from '../utlis/Img/A2.jpg'

const Principal = () => {
    return (

        <div className="container_Principal">
                <div className="ContainerImage">
                    <img src={Yuri} alt="Hola esta es Yuri" />
                </div>
            <div className="ContainerText">
                <h1 className="CuerpoTitle">YURI ALEJANDRA HERRERA PEREZ</h1>
                <p>Herrerayuri120@gmail.com</p>
                <p>Cra 96 B # 40 a 16 sur.</p> 
                <p>320 7081 577 </p>
                  
            </div>

        </div>

    )
}
export default Principal;