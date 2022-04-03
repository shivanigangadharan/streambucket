import React from 'react';
import './playlistcard.css';
import axios from 'axios';
import { useAuth } from '../../context/authContext';
import { useStateContext } from '../../context/stateContext';

export default function PlaylistCard({ playlist }) {
    const { title, description, videos, _id } = playlist;
    const { encodedToken } = useAuth();
    const { dispatch } = useStateContext();

    const deletePlaylist = async () => {
        try {
            const res = await axios.delete(`/api/user/playlists/${_id}`, {
                headers: {
                    authorization: encodedToken
                }
            })
            dispatch({ type: "DELETE_PLAYLIST", payload: res.data.playlists })
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <div className="playlist-card">
            <div className="playlist-content">
                <div className="bold"> {title} </div>
                <div className="details"> {description} </div>
                <div className="details"> {videos.length} videos</div>
            </div>
            <div onClick={deletePlaylist}>
                <i className="delete-icon fa-regular fa-trash-can"></i>
            </div>
        </div>
    )
}