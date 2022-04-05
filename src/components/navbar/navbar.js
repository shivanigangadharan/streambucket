import React, { useState, useEffect } from 'react';
import './navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../../context/authContext';

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
                    <span className="brandname">Stream Bucket</span>
                </Link>
                <div className="flex">
                    <input className="searchbar" type="text" placeholder="Search" />
                    <i className="search-icon fas fa-search" aria-hidden="true"></i>
                </div>
                <div className="nav-options">
                    <span onClick={handleLoginClick}> {loginBtn} </span>
                    <Link to="/watchlater">
                        <i className="nav-icon fa-regular fa-clock">
                        </i>
                    </Link>
                    <Link to="/playlists">
                        <i className="nav-icon fa-regular fa-rectangle-list"></i>
                    </Link>
                    <Link to="/history">
                        <i className="nav-icon fa-solid fa-clock-rotate-left"></i>
                    </Link>
                </div>
            </div>

        </div>
    )
}