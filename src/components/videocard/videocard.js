import React from 'react';
import './videocard.css';

export default function Videocard() {
    return (
        <div className="card-container">
            <img className="card-img" src="https://images.unsplash.com/photo-1433622070098-754fdf81c929?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
            <div className="card-content">
                <h3 className="video-title"> Beethoven - Moonlight Sonata  </h3>
                <div className="artist"> Melody Cocktails </div>
                <div className="details"> 6k views | 4 hours ago</div>
            </div>
            <button className="btn watch-now"> Watch now </button>
        </div>
    )
}