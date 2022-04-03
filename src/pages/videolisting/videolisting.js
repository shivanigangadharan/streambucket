import React, { useState, useEffect } from 'react';
import './videolisting.css';
import Videocard from '../../components/videocard/videocard';
import axios from 'axios';

export default function Videolisting() {
    const [videos, setVideos] = useState([]);
    useEffect(async () => {
        const res = await axios.get("/api/videos");
        setVideos(res.data.videos);
    }, [])
    return (
        <div className="videolisting-container">
            <h1 className="bold"> Trending videos </h1>
            <div className="video-grid">
                {
                    videos.map((video) => {
                        return <Videocard video={video} key={video._id} />
                    })
                }
            </div>
        </div>
    )
}