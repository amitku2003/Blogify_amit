import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "./images/Blogify.png";

const Header = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg " style={{backgroundColor : '#712cf9', borderColor : '#712cf9', padding: '0px 30px'}}>
                <div className="container-fluid">
                    <a class="navbar-brand" href="#">
                        <img src={Logo} alt="min-logo" style={{height : '60px', padding: '10px 0'}} />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" style={{color: '#fff'}}>
                        <span className="navbar-toggler-icon" style={{color: '#ffffff'}}></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink to='/' style={{ textDecoration: 'none' }}>
                                    <a className="nav-link active" style={{color:'white', fontSize:'15px'}} aria-current="page" href="#">Home</a>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" style={{color:'white', fontSize:'15px'}} href="#">Features</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Header;