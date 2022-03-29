import React, { useState, useEffect } from 'react';
import './navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Navbar() {
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
                    <Link to="/login">
                        <span> Login </span>
                    </Link>
                    <Link to="/watchlater">
                        <i className="nav-icon fa-regular fa-clock">
                        </i>
                    </Link>
                    <Link to="/playlists">
                        <i className="fa-solid fa-list-music"></i>
                    </Link>
                </div>
            </div>

        </div>
    )
}