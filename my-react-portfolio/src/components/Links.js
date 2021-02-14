import React from 'react'
import projects from './projects';

function Links() {
    return (
        
        <div classname="cards">
            <a url={projects.repo}>Github Repo</a>
            <div className="cards"></div>
            <a url={projects.liveLink}>Live Link Repo</a>
        </div>
        
    )
}

export default Links;
