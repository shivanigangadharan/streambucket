import React, { useState, useEffect } from 'react';
import './navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../../context/authContext';
import logo from '../../assets/logo.png';

export default function Navbar() {
    const { user, setUser } = useAuth();
    const [loginBtn, setLoginBtn] = useState();
    const navigate = useNavigate();
    useEffect(() => {
        if (user !== null) {
            setLoginBtn("Logout");
        }
        else {
            setLoginBtn("Login");
        }
    }, [user]);
    const handleLoginClick = () => {
        if (loginBtn == "Logout") {
            setUser(null);
            localStorage.removeItem("token");
            navigate("/");
        }
        else {
            navigate("/login");
        }
    }
    return (
        <div>
            <div className="container-nav">
                <Link to="/">
                    <span className="nav-title">
                        <span style={{ 'color': 'var(--red' }}> STREAM</span><span style={{ 'color': 'black' }}>BUCKET</span>
                        <img className="logo" src={logo} alt="logo" />
                    </span>
                </Link>
                <div className="navbar-options">
                    <span onClick={handleLoginClick}> {loginBtn} </span>
                    <Link to="/watchlater">
                        <i className="nav-icon fa-regular fa-clock">
                        </i>
                    </Link>
                    <Link to="/likes">
                        <i className="nav-icon fa-regular fa-thumbs-up"></i>
                    </Link>
                    <Link to="/playlists">
                        <i className="nav-icon fa-regular fa-rectangle-list"></i>
                    </Link>
                    <Link to="/history">
                        <i className="nav-icon fa-solid fa-clock-rotate-left"></i>
                    </Link>
                </div>
            </div>

        </div >
    )
}