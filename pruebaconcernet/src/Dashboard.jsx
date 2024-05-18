import NavBar from "./Components/NavBar";
import fachada from "./Images/fachada.jpg";

const Dashboard = () => {
    return(
        <div className="container">
            <NavBar />
            <div className="home">
                <img src={fachada} alt="ConCerNet" />
                <div className="descripcion">
                    <h1>Todo sobre ConCerNet</h1>
                    <p className="parrafo">
                        esta es la pagina principal de ConCerNet.
                    </p>
                </div>
            </div>
        </div>
    )
};
export default Dashboard;