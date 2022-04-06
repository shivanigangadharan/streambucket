import React, { useState, useEffect } from 'react';
import './homepage.css';
import Videocard from '../../components/videocard/videocard';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useStateContext } from '../../context/stateContext';

export default function Homepage() {
    const [videos, setVideos] = useState([]);
    const [categories, setCategories] = useState([]);
    const { dispatch } = useStateContext();
    const navigate = useNavigate();

    const getCategories = async () => {
        const res = await axios.get("/api/categories");
        setCategories(res.data.categories);
    }

    const handleCategory = (category) => {
        dispatch({ type: "SET_CATEGORY", payload: category });
        navigate("/videolisting");
    }

    useEffect(async () => {
        const res = await axios.get("/api/videos");
        setVideos(res.data.videos);
        dispatch({ type: "CLEAR_CATEGORY" });
        getCategories();
    }, [])
    return (
        <div className="homepage-container">
            <div className="banner">
                <div className="banner-title"> STREAM BUCKET</div>
                <div className="banner-subtext"> Watch HD videos, create playlists, share with your friends and more.</div>
                <Link to="/videolisting">
                    <button className="btn start"> START WATCHING NOW </button>
                </Link>
            </div>
            <div className="categories">
                <b>Categories : </b>
                {categories.map(e => {
                    return (
                        <div onClick={() => { handleCategory(e.categoryName) }}>
                            {e.categoryName}
                        </div>
                    )
                })}
            </div>

            <h3 className="bold"> Must watch videos  </h3>

            <div className="video-grid">
                {
                    videos.map((video, index) => {
                        if (index < 4) {
                            return <Videocard video={video} key={video._id} />
                        }
                    })
                }
            </div>

        </div>
    )
}