import React, { useEffect, useState } from 'react';
import '../videolisting/videolisting.css';
import Videocard from '../../components/videocard/videocard';
import './history.css';
import axios from 'axios';
import { useAuth } from '../../context/authContext';
import { useStateContext } from '../../context/stateContext';
import { useNavigate } from 'react-router';

export default function History() {
    const { user, encodedToken } = useAuth();
    const { state, dispatch } = useStateContext();
    const [videos, setVideos] = useState([]);
    const navigate = useNavigate();
    useEffect(async () => {
        if (user) {
            const res = await axios.get("/api/user/history", {
                headers: {
                    authorization: encodedToken
                }
            });
            setVideos(res.data.history);
        } else {
            alert("Please login to view history.");
            navigate("/login");
        }
    }, [state])
    const removeFromHistory = async (id) => {
        const res = await axios.delete(`/api/user/history/${id}`, {
            headers: {
                authorization: encodedToken
            }
        });
        dispatch({ type: "REMOVE_FROM_HISTORY", payload: res.data.history });
    }
    const clearHistory = async () => {
        const res = await axios.delete("/api/user/history/all", {
            headers: {
                authorization: encodedToken
            }
        })
        dispatch({ type: "CLEAR_HISTORY", payload: res.data.history });
    }
    return (
        <div className="videolisting-container">
            <div className="history-title">
                <h1 className="bold"> History </h1>
                <div>
                    <button onClick={clearHistory} className="btn clear-history"> Clear full history </button>
                </div>
            </div>
            <div className="video-grid">
                {
                    videos.map((vid) => {
                        return (
                            <div style={{ 'display': 'flex', 'flexDirection': 'column', 'alignItems': 'center' }}>
                                <Videocard video={vid} />
                                <button className="btn remove-btn" onClick={() => removeFromHistory(vid._id)}> Remove from history </button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}