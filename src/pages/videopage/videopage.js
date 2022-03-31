import React from 'react';
import './videopage.css';
import Videocard from '../../components/videocard/videocard';

export default function Videopage() {
    return (
        <div className="videopage-container">
            <div className="video-container">
                <iframe width="956" height="538" src="https://www.youtube.com/embed/V-Z0L3c3mH0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <div className="video-title"> De Mauka Zindagi Instrumental cover </div>
                <div className="vid-section">
                    <div>
                        <div className="artist"> Melody Cocktails </div>
                        <div className="details"> 3,400 views | 4 months ago </div>
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
                <span> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae tellus suscipit, bibendum risus sit amet, consectetur magna. Phasellus ut ligula venenatis, tincidunt mi ac, tempor diam. Sed vel imperdiet justo, non vehicula erat. In hac habitasse platea dictumst. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.  </span>
            </div>
            <div className="must-watch">
                <h1 className="video-title"> Must watch </h1>
                <Videocard />
                <Videocard />
                <Videocard />

            </div>
        </div >
    )
}