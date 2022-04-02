import React, { useEffect, useState } from 'react';
import '../videolisting/videolisting.css';
import Videocard from '../../components/videocard/videocard';
import { useAuth } from '../../context/authContext';
import axios from 'axios';
import { useNavigate } from 'react-router';

export default function Watchlater() {
    const { user, encodedToken } = useAuth();
    const [videos, setVideos] = useState([]);
    const navigate = useNavigate();
    useEffect(async () => {
        if (user) {
            const res = await axios.get("/api/user/watchlater", {
                headers: {
                    authorization: encodedToken
                }
            })
            setVideos(res.data.watchlater);
        }
        else {
            alert("Please login to view watchlater.");
            navigate("/login");
        }

    })
    return (
        <div className="videolisting-container">
            <h1 className="bold"> Watch later </h1>
            <div className="video-grid">
                {
                    videos.map((video) => {
                        return <Videocard video={video} />
                    })
                }
            </div>
        </div>
    )
}