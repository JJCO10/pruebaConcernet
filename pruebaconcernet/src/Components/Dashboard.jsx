import NavBar from "./NavBar";
import fachada from "../Images/fachada.jpg";
import "../Styles/Home.css";


const Dashboard = () => {
    return(

            <div className="container">
                <NavBar />
                <body>
                    <div className="home">
                        <img src={fachada} alt="ConCerNet" />
                        <div className="descripcion">
                            <h1>Todo sobre ConCerNet</h1>
                            <p className="parrafo">
                                esta es la pagina principal de ConCerNet.
                            </p>
                        </div>
                    </div>
                </body>
            </div>
    )
};
export default Dashboard;