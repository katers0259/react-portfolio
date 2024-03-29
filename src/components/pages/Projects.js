import React from 'react'
import Cards from '../Cards';
import projects from '../projects.json'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Projects() {
    return (
        <div>
            <h1 class="skills">See My Work</h1>
            <div className="container">
            {projects.map(result => {
                return(
                    
                    
                        
                            
                    <Cards 
                    key={result.id}
                    title={result.title}
                    img={result.img}
                    des={result.des}
                    repo={result.repo}
                    liveLink={result.liveLink}
                    />
                    
                    
                    
                )
            })}
            </div>
        </div>
    )
}

export default Projects
