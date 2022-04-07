import React, { useEffect, useState } from 'react';
import '../videolisting/videolisting.css';
import Videocard from '../../components/videocard/videocard';
// import './history.css';
import axios from 'axios';
import { useAuth } from '../../context/authContext';
import { useStateContext } from '../../context/stateContext';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

export default function Likes() {
    const { user, encodedToken } = useAuth();
    const { state, dispatch } = useStateContext();
    const [videos, setVideos] = useState([]);
    const navigate = useNavigate();
    useEffect(async () => {
        if (user) {
            const res = await axios.get("/api/user/likes", {
                headers: {
                    authorization: encodedToken
                }
            });
            setVideos(res.data.likes);
        } else {
            alert("Please login to view liked videos.");
            navigate("/login");
        }
    }, [state])
    const removeFromLikes = async (id) => {
        const res = await axios.delete(`/api/user/likes/${id}`, {
            headers: {
                authorization: encodedToken
            }
        });
        dispatch({ type: "REMOVE_FROM_LIKES", payload: res.data.likes });
    }

    return (
        <div className="videolisting-container">
            <div className="history-title">
                <h1 className="bold"> Liked videos </h1>
            </div>
            <div>
                {videos.length === 0 ?
                    <div>
                        <h3> No videos here! </h3>
                        <Link to="/videolisting">
                            <button className="btn remove-btn"> View all videos </button>
                        </Link>
                    </div> :
                    <div>
                        {
                            videos.map((vid) => {
                                return (
                                    <div className="video-grid" style={{ 'display': 'flex', 'flexDirection': 'column', 'alignItems': 'center' }}>
                                        <Videocard video={vid} />
                                        <button className="btn remove-btn" onClick={() => removeFromLikes(vid._id)}> Remove from likes </button>
                                    </div>
                                )
                            })
                        }
                    </div>
                }
            </div>
        </div>
    )
}