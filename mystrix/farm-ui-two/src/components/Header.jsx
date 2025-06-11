import React from 'react';
import { Link } from 'react-router-dom';
import logo from '/logo/logo.png';

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        <img src={logo} alt="" width={140} height={40} />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/about">About Us</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Blog</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/contact">Contact</Link>
                            </li>
                            <li className="ms-2 mt-1">
                                <Link className="btn btn-outline-light btn-sm" aria-current="page" to="/register">
                                    Signup
                                </Link>
                            </li>
                            <li className="ms-2 mt-1">
                                <Link className="btn btn-warning btn-sm" aria-current="page" to="/login">
                                    Sign In
                                </Link>
                            </li>
                         
                         
                        </ul>
/
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header
