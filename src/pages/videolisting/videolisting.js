import React from 'react';
import './videolisting.css';
import Videocard from '../../components/videocard/videocard';

export default function Videolisting() {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8];
    return (
        <div className="videolisting-container">
            <h1 className="title"> Trending videos </h1>
            <div className="video-grid">
                {
                    arr.map((e) => {
                        return <Videocard />
                    })
                }
            </div>
        </div>
    )
}