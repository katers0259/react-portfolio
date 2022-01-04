import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
 import './Cards.css';
import Card from 'react-bootstrap/Card';


function Cards(props) {



    return (
      
        <div className="cards__container">
            <div className="cards__wrapper">
                <div className="cards__items">
        <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={props.img}  />
  <Card.Body>
    <Card.Title>{props.title}</Card.Title>
    <Card.Text>
    {props.des}
    </Card.Text>
    <Card.Link href={props.liveLink} target="_blank">Live Link</Card.Link>
    <Card.Link href={props.repo} target="_blank">Repo</Card.Link>
  </Card.Body>
</Card>
</div>
</div>
</div>







    )
}

export default Cards
