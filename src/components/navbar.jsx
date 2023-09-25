import React from "react";
import { NavLink } from "react-router-dom";
import { List } from 'react-bootstrap-icons'; 
import './navbar.css'

function Navbar() {
    return <>
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <a className="navbar-brand" href="#"><img src="./src/assets/images/site-logo.png" className="img-fluid site-logo" />ShopEcom</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                     <List/>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link" to='/home'>Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to='/products'>Products</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to='/lgoin'>Login</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to='/register'>Register</NavLink>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
    </>
}

export default Navbar