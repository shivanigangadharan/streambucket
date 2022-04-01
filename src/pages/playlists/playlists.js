import React from 'react';
import '../videolisting/videolisting.css';
import '../history/history.css';
import PlaylistCard from '../../components/playlistcard/playlistcard';

export default function Playlists() {
    return (
        <div className="videolisting-container">
            <div className="history-title">
                <h1 className="bold"> My Playlists </h1>
                <div>
                    <button className="btn clear-history"> Create new playlist </button>
                </div>
            </div>
            <div className="video-grid">
                <PlaylistCard />
                <PlaylistCard />
                <PlaylistCard />
                <PlaylistCard />
            </div>
        </div>
    )
}