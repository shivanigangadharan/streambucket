import React from 'react';
import './playlistcard.css';
import axios from 'axios';
import { useAuth } from '../../context/authContext';
import { useStateContext } from '../../context/stateContext';
import { useNavigate } from 'react-router';

export default function PlaylistCard({ playlist }) {
    const { title, videos, _id } = playlist;
    const { encodedToken } = useAuth();
    const { dispatch } = useStateContext();
    const navigate = useNavigate();

    const deletePlaylist = async () => {
        try {
            const res = await axios.delete(`/api/user/playlists/${_id}`, {
                headers: {
                    authorization: encodedToken
                }
            })
            navigate("/playlists");
            dispatch({ type: "DELETE_PLAYLIST", payload: res.data.playlists });

        } catch (e) {
            console.log(e);
        }
    }

    return (
        <div className="playlist-card">
            <div className="playlist-content">
                <div style={{ 'color': 'var(--darkgrey)' }} className="bold"> {title} </div>
                <div style={{ 'color': 'var(--grey)' }} className="details"> {videos.length} videos</div>
            </div>
            <div onClick={deletePlaylist}>
                <i style={{ 'color': 'var(--darkgrey)' }} className="delete-icon fa-regular fa-trash-can"></i>
            </div>
        </div>
    )
}