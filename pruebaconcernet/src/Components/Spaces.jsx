import NavBar from "./NavBar";
import "../Styles/Spaces.css";
import Piscina from "../Images/piscina 1.jpg";
import Cancha from "../Images/cancha 1.webp";
import Salon from "../Images/salon 1.jpeg";

const Spaces = () => {
    return(
        <div className="space">
            <NavBar/>
            <div className="space__container">
                <div className="titulo1">
                    <h1>¿QUE ESPACIO DESEAS AJENDAR?</h1>
                </div>
                <div className="espacionPiscina">
                    <div className="imagenPiscina">
                        <img src={Piscina} alt="Piscina" />
                    </div>
                    <div className="descripcionPiscina">
                        <h2>Piscina</h2>
                        <p>
                        ¡Reserva tu Oasis Acuático! Descubre la comodidad de agendar tu tiempo de piscina en nuestro conjunto cerrado. ¡Sumérgete en la diversión con solo unos clics!
                        </p>
                    </div>
                </div>
                <div className="espacioCancha">
                    <div className="imagenCancha">
                        <img src={Cancha} alt="imagenCancha" />
                    </div>
                    <div className="decripcionCancha">
                        <h2>Cancha</h2>
                        <p>
                        ¡Marca tu Jugada Perfecta! Reserva tu tiempo en nuestras canchas deportivas con facilidad. ¡Prepárate para competir y divertirte al máximo con solo unos toques!
                        </p>
                    </div>
                </div>
                <div className="espacioSalon">
                    <div className="imagenSalon">
                        <img src={Salon} alt="imagenSalon" />
                    </div>
                    <div className="descripcionSalon">
                        <h2>Salón</h2>
                        <p>
                        ¡Encuentra el espacio perfecto para tu evento especial en nuestro salón dedicado. Con nuestra plataforma de reservas en línea, planificar es fácil y rápido. Haz de cada ocasión algo inolvidable con nosotros!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default Spaces;