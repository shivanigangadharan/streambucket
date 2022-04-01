import React from 'react';
import '../videolisting/videolisting.css';
import Videocard from '../../components/videocard/videocard';
import './history.css';

export default function Watchlater() {
    const arr = [1, 2, 3, 4];
    return (
        <div className="videolisting-container">
            <div className="history-title">
                <h1 className="bold"> History </h1>
                <div>
                    <button className="btn clear-history"> Clear full history </button>
                </div>
            </div>
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