import React from 'react';
import './playlistcard.css';

export default function PlaylistCard() {
    return (
        <div className="playlist-card">
            <div className="playlist-content">
                <div className="bold"> My playlist #1 </div>
                <div className="details"> 10 videos </div>
            </div>
            <i class="delete-icon fa-regular fa-trash-can"></i>
        </div>
    )
}