import { Link } from "react-router-dom";
import React from 'react';


const NavBar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/Dashboard">Home</Link>
                </li>
                <li><Link to="/products">Productos</Link></li>
                <li><Link to="/about">Acerca de</Link></li>
                <li><Link to="/login">Inciar sesión</Link></li>
            </ul>
        </nav>
    );
}
export default NavBar;