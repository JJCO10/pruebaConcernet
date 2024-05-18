import NavBar from "./NavBar";
import "../Styles/About.css";
import Logo from "../Images/ConCerNet5.png";


const About = () => {
    return(
        <div className="about">
            <NavBar/>
            <div className="about__container">
                <div className="tituloAbout">
                    <h1>¿QUIENES SOMOS?</h1>
                </div>
                <div className="imagenAbout">
                    <img src={Logo} alt="logo" />
                </div>
                <div className="parrafoAbout">
                    <p>
                    En ConCernet, estamos comprometidos con simplificar y mejorar la experiencia de encontrar y agendar espacios en conjuntos residenciales, así como facilitar el proceso de arrendamiento o compra de casas. Como líderes en el sector de la gestión inmobiliaria, nos enorgullecemos de ofrecer soluciones innovadoras y eficientes que satisfacen las necesidades de nuestros clientes.
                    </p>
                    <p>
                    Nuestra plataforma integral de agendamiento de espacios en conjuntos cerrados permite a nuestros usuarios reservar fácilmente piscinas, canchas deportivas, salones de eventos y más, con tan solo unos clics. Además, ofrecemos una amplia gama de opciones de arrendamiento y compra de propiedades residenciales, brindando asesoramiento experto y acompañamiento en cada paso del proceso. 
                    </p>
                    <p>
                    En ConCernet, nos esforzamos por proporcionar un servicio excepcional y una experiencia sin complicaciones, asegurando que nuestros clientes encuentren el hogar perfecto o disfruten de sus espacios comunitarios con total tranquilidad.
                    </p>                   
                </div>
                <div className="finalAbout">
                <h3>
                    ¡Únete a ConCernet hoy y descubre una nueva forma de vivir y disfrutar tu espacio!
                </h3>
                </div>
            </div>
        </div>
    )
};
export default About;