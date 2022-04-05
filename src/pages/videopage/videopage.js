import React, { useEffect, useState } from 'react';
import './videopage.css';
import Videocard from '../../components/videocard/videocard';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useStateContext } from '../../context/stateContext';
import { useAuth } from '../../context/authContext';
import CreatePlaylist from '../../components/createPlaylist/createPlaylist';

export default function Videopage() {
    const { _id } = useParams();
    const [video, setVideo] = useState({});
    const [videos, setVideos] = useState([]);
    const [showAddTo, setShowAddTo] = useState(false);
    const { state, dispatch } = useStateContext();
    const { user, encodedToken } = useAuth();
    const navigate = useNavigate();

    const toggleShowAdd = () => {
        if (user) {
            setShowAddTo(showAddTo ? false : true);
        } else {
            alert("Please login to add to playlist.");
            navigate("/login");
        }
    }
    const handleCreatePlaylist = () => {
        dispatch({ type: "SHOW_MODAL" });
        navigate("/playlists");
    }
    useEffect(async () => {
        const res = await axios.get("/api/videos");
        setVideos(res.data.videos);
        res.data.videos.find((e) => {
            if (e._id === _id) {
                setVideo(e);
            }
        })
    }, [video])
    const addToPlaylist = async (e) => {
        const playlistid = e;
        const res = await axios.post(`/api/user/playlists/${playlistid}`, { video }, {
            headers: {
                authorization: encodedToken
            }
        })
        console.log(res);

        const pl = state.playlists.filter(playlist => playlist._id === res.data.playlist._id);
        //this is the playlist (from state) in which vid needs to be added

        let plLISTS = [];

        if (pl[0].videos.some(vid => vid._id === _id)) {
            console.log("Video is already in this playlist.");
        } else {
            state.playlists.map((e) => {
                if (e._id === playlistid) {
                    plLISTS.push(res.data.playlist)
                } else {
                    plLISTS.push(e);
                }
            })
        }
        dispatch({ type: "ADD_TO_PLAYLIST", payload: plLISTS });
    }
    const addToLikes = async () => {
        const res = await axios.post("/api/user/likes", { video }, {
            headers: {
                authorization: encodedToken
            }
        })
        dispatch({ type: "ADD_TO_LIKES", payload: res.data.likes });
    }
    return (
        <div className="videopage-container">
            <div className="video-container">
                <iframe width="956" height="538" src={`https://www.youtube.com/embed/${_id}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                <div className="video-title"> {video.title} </div>
                <div className="vid-section">
                    <div>
                        <div className="artist"> {video.artist} </div>
                        <div className="details"> {video.views} views | {video.uploaded} </div>
                    </div>
                    <div className="controllers">
                        <div onClick={addToLikes}>
                            <i className="vidpage-icon fa-regular fa-thumbs-up"></i>Like
                        </div>
                        <div>
                            <i className="vidpage-icon fa-regular fa-clock"></i> Add to watch later
                        </div>
                        <div onClick={toggleShowAdd} className="add-to-playlist">
                            <i className="vidpage-icon fa-regular fa-square-plus"></i>Add to playlist
                            <div className="add-to-options" hidden={!showAddTo}>

                                {
                                    state.playlists.map(e => {
                                        return (
                                            <div className="pl-option" onClick={() => addToPlaylist(e._id)}>{e.title} </div>
                                        )
                                    })
                                }
                                <hr />
                                <div className="pl-option" onClick={handleCreatePlaylist}>Create new playlist
                                    </div>

                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <h4> Description </h4>
                <span> {video.description} </span>
            </div>
            <div className="must-watch">
                <h1 className="video-title"> Must watch </h1>
                {
                    videos.map((video, index) => {
                        if (index < 4) {
                            return <Videocard video={video} key={video._id} />
                        }
                    })
                }
            </div>
        </div >
    )
}