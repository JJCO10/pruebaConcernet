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
                    <h2>
                        En la actualidad, la vivienda es un bien de consumo, por lo que es necesario que se tenga en cuenta la calidad de la misma.
                    </h2>
                </div>
                <div className="frente">
                    <div className="imagenfrente">
                        <img src={frente} alt="frente" />
                    </div>
                    <div className="descripcionFrente">
                        <h3>FACHADA</h3>
                        "Explora la belleza de nuestra arquitectura. Sumérgete en un viaje visual a través de las fachadas de nuestras casas, donde el diseño se encuentra con la funcionalidad para crear hogares que cautivan y inspiran."
                    </div>
                </div>
                <div className="baño">
                    <div className="imagenbaño">
                        <img src={baño} alt="baño" />
                    </div>
                    <div className="descripcionBaño">
                        <h3>BAÑOS</h3>
                        <p>
                        "Descubre la elegancia en cada detalle. Explora nuestra galería de baños que fusionan estilo y funcionalidad, ofreciendo inspiración para crear espacios íntimos que reflejen tu personalidad y comodidad."
                        </p>
                    </div>
                </div>
                <div className="patio">
                    <div className="imagenpatio">
                        <img src={patio} alt="patio" />
                    </div>
                    <div className="descripcionPatio">
                        <h3>PATIOS</h3>
                        <p>
                        "Explora la vida al aire libre en su máximo esplendor. Sumérgete en nuestra colección de patios que ofrecen un oasis de tranquilidad y entretenimiento. Encuentra inspiración para crear espacios exteriores que sean un reflejo de tu estilo de vida y te conecten con la naturaleza."
                        </p>
                    </div>
                </div>
                <div className="cuartos">
                    <div className="imagenCuartos">
                        <img src={cuartos} alt="cuartos" />
                    </div>
                    <div className="descripcionCuartos">
                        <h3>CUARTOS</h3>
                        <p>
                        "Sumérgete en el confort y el estilo. Descubre nuestra selección de dormitorios que fusionan elegancia y funcionalidad para crear espacios de descanso irresistibles. Encuentra inspiración para diseñar tu refugio perfecto y renovar tus sueños."
                        </p>
                    </div>
                </div>
                <div className="salonPrincipal">
                    <div className="imagenSalonPrincipal">
                        <img src={salonPrincipal} alt="salonPrincipal" />
                    </div>
                    <div className="descripcionSalonPrincipal">
                        <h3>SALÓN PRINCIPAL</h3>
                        <p>
                        "Explora la elegancia en cada rincón. Adéntrate en nuestra galería de salones principales que combinan lujo y comodidad para crear espacios acogedores y sofisticados. Encuentra inspiración para transformar tu sala en el corazón de tu hogar."
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default Households;