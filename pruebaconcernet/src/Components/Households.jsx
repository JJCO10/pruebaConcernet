import NavBar from "./NavBar";
import "../Styles/Households.css";
import frente from "../Images/frente.jpeg";
import baño from "../Images/baño.jpg";
import patio from "../Images/patio.jpg";
import cuartos from "../Images/cuartos.jpg";
import salonPrincipal from "../Images/salonPrincipal.jpg";


const Households = () => {
    return(
        <div className="Households">
            <NavBar/>
            <div className="households__container">
                <div className="resumen">
                    <h1>¿NECESITAS UNA CASA?</h1>
                    <p>
                        En la actualidad, la vivienda es un bien de consumo, por lo que es necesario que se tenga en cuenta la calidad de la misma.
                    </p>
                </div>
                <div className="frente">
                    <div className="imagenfrente">
                        <img src={frente} alt="frente" />
                    </div>
                    <div className="descripcionFrente">
                        <h2>FRENTE</h2>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default Households;