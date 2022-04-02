import React, { useState, useEffect } from 'react';
import './videocard.css';
import axios from 'axios';
import { useAuth } from '../../context/authContext';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

export default function Videocard({ video }) {
    const { user, setUser, encodedToken } = useAuth();
    const { title, artist, link, views, uploaded, imgUrl, _id } = video;
    const [watchlater, setWatchlater] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {
        if (user && user.watchlater.length > 0) {
            user.watchlater.map((vid) => {
                if (vid._id === _id) {
                    setWatchlater(true);
                }
            })
        }
    })
    const addToWatchLater = async () => {
        const res = await axios.post("/api/user/watchlater", { video }, {
            headers: {
                authorization: encodedToken
            }
        });
        setUser({ ...user, watchlater: res.data.watchlater });
        setWatchlater(true);
    }
    const removeFromWatchLater = async () => {
        const res = await axios.delete(`/api/user/watchlater/${_id}`, {
            headers: {
                authorization: encodedToken
            }
        })
        setUser({ ...user, watchlater: res.data.watchlater });
        setWatchlater(false);
    }
    const handleAddToWatchLater = async () => {
        console.log("User: ", user);
        if (user) {
            if (user.watchlater.some(vid => vid._id === _id)) {
                removeFromWatchLater();
            }
            else {
                addToWatchLater();
            }
        }
        else {
            alert("Please log in to add this video to watch later.");
            navigate("/login");
        }
    }
    return (
        <div className="card-container">
            <img className="card-img" src={imgUrl} />
            <div className="card-content">
                <span className="bold"> {title}  </span>
                <div className="artist"> {artist} </div>
                <div className="details"> {views} views | {uploaded}</div>
            </div>
            <div onClick={handleAddToWatchLater}>
                {watchlater ?
                    <i className="watchlater-icon fa-solid fa-circle-check"></i> :
                    <i className="watchlater-icon fa-solid fa-clock"></i>
                }
            </div>
            <Link to={`/videopage/${_id}`}>
                <button className="btn watch-now"> Watch now </button>
            </Link>
        </div>
    )
}