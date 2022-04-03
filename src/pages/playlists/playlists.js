import React, { useState, useEffect } from 'react';
import '../videolisting/videolisting.css';
import '../history/history.css';
import PlaylistCard from '../../components/playlistcard/playlistcard';
import { useNavigate } from 'react-router';
import { useAuth } from '../../context/authContext';
import axios from 'axios';
import { useStateContext } from '../../context/stateContext';
import CreatePlaylist from '../../components/createPlaylist/createPlaylist';

export default function Playlists() {
    const [playlistsArr, setPlaylistsArr] = useState([]);

    const { state, dispatch } = useStateContext();
    const { user, encodedToken } = useAuth();

    const navigate = useNavigate();

    useEffect(async () => {
        if (user) {
            const res = await axios.get("/api/user/playlists", {
                headers: {
                    authorization: encodedToken
                }
            })
            setPlaylistsArr(res.data.playlists);
        }
        else {
            alert("Please login to view watchlater.");
            navigate("/login");
        }

    }, [playlistsArr])



    return (
        <div className="videolisting-container">
            <div className="history-title">
                <h1 className="bold"> My Playlists </h1>
                <div>
                    <button className="btn clear-history" id="openmodal" onClick={() => dispatch({ type: "SHOW_MODAL" })}>Create playlist</button>
                    <div hidden={!state.showModal}>
                        <CreatePlaylist />
                    </div>
                </div>
            </div>
            <div className="video-grid">
                {state.playlists.map((item) => {
                    return <PlaylistCard playlist={item} key={item._id} />
                })}
            </div>
        </div>
    )
}