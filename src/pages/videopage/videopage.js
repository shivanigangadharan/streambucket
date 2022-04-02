import React, { useEffect, useState } from 'react';
import './videopage.css';
import Videocard from '../../components/videocard/videocard';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function Videopage() {
    const { _id } = useParams();
    const [video, setVideo] = useState({});
    const [videos, setVideos] = useState([]);
    useEffect(async () => {
        const res = await axios.get("/api/videos");
        setVideos(res.data.videos);
        res.data.videos.find((e) => {
            if (e._id === _id) {
                setVideo(e);
            }
        })
    }, [video])
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
                        <div>
                            <i className="vidpage-icon fa-regular fa-thumbs-up"></i>Like
                    </div>
                        <div>
                            <i className="vidpage-icon fa-regular fa-clock"></i> Add to watch later
                    </div>
                        <div>
                            <i className="vidpage-icon fa-regular fa-square-plus"></i>Add to playlist
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