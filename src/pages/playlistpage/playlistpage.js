import React from 'react';
import '../videolisting/videolisting.css';
import Videocard from '../../components/videocard/videocard';
import '../history/history.css';

export default function Playlistpage() {
    const arr = [1, 2, 3, 4];
    return (
        <div className="videolisting-container">
            <div className="history-title">
                <h1 className="bold"> My playlist #1 </h1>
                <div>
                    <button className="btn clear-history"> Delete this playlist </button>
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