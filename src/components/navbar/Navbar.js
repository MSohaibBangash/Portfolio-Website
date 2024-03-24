import React, { useState } from 'react'
import logo from "../../assets/logo.png"
import { ReactComponent as Facebook } from "../../assets/facebook.svg"
import { ReactComponent as Twitter } from "../../assets/twitter.svg"
import { ReactComponent as Linkedin } from "../../assets/linkedin.svg"
import { ReactComponent as Instagram } from "../../assets/instagram.svg"
import './navbar.css'
function Navbar() {

    const [activeLink, setActiveLink] = useState(null);

   const handleActiveLink = (linkId) => {
      setActiveLink(linkId);
    };
    return (
        <>
            <nav className="nav-sticky fixed-top navbar-custom sticky sticky-dark navbar navbar-expand-lg navbar-light bg-light py-3">
                <div className="container ">
                    <a className="navbar-brand  me-3" href='/'>
                        <img src={logo} alt="Logo" width="110px" className="logo-img" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className={`nav-link ${activeLink === 1 ? "active" : ""}`} onClick={ ()=> handleActiveLink(1)} href="#home">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className={`nav-link ${activeLink === 2 ? "active" : ""}`} onClick={ ()=> handleActiveLink(2)} href="#about">About Us</a>
                            </li>
                            <li className="nav-item">
                                <a className={`nav-link ${activeLink === 3 ? "active" : ""}`} onClick={ ()=> handleActiveLink(3)} href="#service">Services</a>
                            </li>
                            <li className="nav-item">
                                <a className={`nav-link ${activeLink === 4 ? "active" : ""}`} onClick={ ()=> handleActiveLink(4)} href="#feature">Features</a>
                            </li>
                            <li className="nav-item">
                                <a className={`nav-link ${activeLink === 5 ? "active" : ""}`} onClick={ ()=> handleActiveLink(5)} href="#project">Project</a>
                            </li>
                            <li className="nav-item">
                                <a className={`nav-link ${activeLink === 6 ? "active" : ""}`} onClick={ ()=> handleActiveLink(6)} href="#testimonial">Clients</a>
                            </li>
                            <li className="nav-item">
                                <a className={`nav-link ${activeLink === 7 ? "active" : ""}`} onClick={ ()=> handleActiveLink(7)} href="#contact">Contact Us</a>
                            </li>
                        </ul>
                        <div className='d-flex align-items-center gap-3'>
                            <a href="/">
                                <Facebook />
                            </a>
                            <a href="/">
                                <Twitter />
                            </a>
                            <a href="/">
                                <Instagram />
                            </a>
                            <a href="/">
                                <Linkedin />
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar