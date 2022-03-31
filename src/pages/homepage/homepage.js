import React from 'react';
import './homepage.css';
import Videocard from '../../components/videocard/videocard';
import { Link } from 'react-router-dom';

export default function Homepage() {
    return (
        <div className="homepage-container">
            <div className="banner">
                <div className="banner-title"> STREAM BUCKET</div>
                <div className="banner-subtext"> Watch HD videos, create playlists, share with your friends and more.</div>
                <Link to="/videolisting">
                    <button className="btn start"> START WATCHING NOW </button>
                </Link>
            </div>

            <h3 className="bold"> Must watch videos  </h3>

            <div className="video-grid">
                <Videocard /><Videocard /><Videocard />
                <Videocard />

            </div>

        </div>
    )
}