import React, { useState, useEffect } from 'react';
import './homepage.css';
import Videocard from '../../components/videocard/videocard';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Homepage() {
    const [videos, setVideos] = useState([]);
    useEffect(async () => {
        const res = await axios.get("/api/videos");
        setVideos(res.data.videos);
    }, [])
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
                {
                    videos.map((video, index) => {
                        if (index < 4) {
                            return <Videocard video={video} key={video._id} />
                        }
                    })
                }
            </div>

        </div>
    )
}