import React, { useState, useEffect } from 'react';
import './videolisting.css';
import Videocard from '../../components/videocard/videocard';
import axios from 'axios';
import { useStateContext } from '../../context/stateContext';

export default function Videolisting() {
    const [videos, setVideos] = useState([]);
    const { state, dispatch } = useStateContext();

    useEffect(async () => {
        const res = await axios.get("/api/videos");
        if (state.category === null) {
            setVideos(res.data.videos);
        } else {
            setVideos(res.data.videos.filter(vid => vid.categoryName === state.category));
        }
    }, [state]);

    return (
        <div className="videolisting-container">
            <div className="flex" style={{ 'justifyContent': 'space-between', 'alignItems': 'center' }}>
                <h1 className="bold"> Tuned in. </h1>
                <div>
                    <button onClick={() => { dispatch({ type: "CLEAR_CATEGORY" }) }} className="btn clear-history"> Clear categories </button>
                </div>
            </div>
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