import React, { useState } from 'react';
import axios from 'axios';
import { useStateContext } from '../../context/stateContext';
import { useAuth } from '../../context/authContext';

export default function CreatePlaylist() {
    const [playlistName, setPlaylistName] = useState();
    const { dispatch } = useStateContext();
    const { encodedToken } = useAuth();

    const savePlaylist = async () => {
        try {
            const res = await axios.post("/api/user/playlists", {
                playlist: { title: playlistName, description: "bar bar bar" }
            }, {
                    headers: {
                        authorization: encodedToken
                    }
                });
            dispatch({ type: "CREATE_NEW_PLAYLIST", payload: res.data.playlists });
            dispatch({ type: "HIDE_MODAL" });
        }
        catch (e) {
            console.log(e);
        }
    }
    return (
        <div>
            <center>
                <div className="modal-container" id="modalBox">
                    <div className="content-modal">
                        <h1>Create new playlist</h1>
                        <input onChange={(e) => setPlaylistName(e.target.value)} type="text" placeholder="Enter playlist name" />
                        <div className="options end">
                            <span className="purple" id="action1" onClick={savePlaylist}> Save playlist </span>
                            <span className="purple" id="action2" onClick={() => dispatch({ type: "HIDE_MODAL" })}> Cancel </span>
                        </div>
                    </div>
                </div>
            </center>
        </div>
    )
}