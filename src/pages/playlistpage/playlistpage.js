import React, { useState, useEffect } from 'react';
import '../videolisting/videolisting.css';
import Videocard from '../../components/videocard/videocard';
import '../history/history.css';
import { useParams } from 'react-router-dom';
import { useStateContext } from '../../context/stateContext';
import axios from 'axios';
import { useAuth } from '../../context/authContext';

export default function Playlistpage() {
    const { state, dispatch } = useStateContext();
    const { encodedToken } = useAuth();
    const [videos, setVideos] = useState([]);
    const [playlistName, setPlaylistName] = useState();
    const { _id } = useParams();
    useEffect(() => {
        const playlst = state.playlists.find(e => e._id === _id);
        setVideos(playlst.videos);
        setPlaylistName(playlst.title);
    })
    const deleteVideo = async (id) => {
        const res = await axios.delete(`/api/user/playlists/${_id}/${id}`, {
            headers: {
                authorization: encodedToken
            }
        })
        const pl = state.playlists.filter(playlist => playlist._id === res.data.playlist._id);
        //this is the playlist (from state) in which vid needs to be deleted

        let plLISTS = [];

        if (pl[0].videos.some(vid => vid._id === id)) {
            state.playlists.map((e) => {
                if (e._id === _id) {
                    plLISTS.push(res.data.playlist);
                } else {
                    plLISTS.push(e);
                }
            })
        } else {
            console.log("Video is not there in this playlist.");
        }
        dispatch({ type: "ADD_TO_PLAYLIST", payload: plLISTS });

    }
    return (
        <div className="videolisting-container">
            <div className="history-title">
                <h1 className="bold"> {playlistName} </h1>
                <div>
                    <button className="btn clear-history"> Delete this playlist </button>
                </div>
            </div>
            <div className="video-grid">
                {
                    videos.map(e => {
                        return (
                            <div key={e._id}>
                                <Videocard video={e} />
                                <button onClick={() => deleteVideo(e._id)}> Remove from playlist</button>

                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}