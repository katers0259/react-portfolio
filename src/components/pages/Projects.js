import React from 'react'
import Cards from '../Cards';
import projects from '../projects.json'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Projects() {
    return (
        <div>
            <h1>See My Work</h1>
            {projects.map(result => {
                return(
                    
                    <Container>
                        <Row className="justify-content-center">
                            <Col lg="auto">
                    <Cards 
                    key={result.id}
                    title={result.title}
                    img={result.img}
                    des={result.des}
                    repo={result.repo}
                    liveLink={result.liveLink}
                    />
                    </Col>
                    </Row>
                    </Container>
                )
            })}
            
        </div>
    )
}

export default Projects
