import React from 'react';
import '../videolisting/videolisting.css';
import Videocard from '../../components/videocard/videocard';

export default function Watchlater() {
    const arr = [1, 2, 3, 4];
    return (
        <div className="videolisting-container">
            <h1 className="bold"> Watch later </h1>
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