import React from 'react'
import '../../App.css';
import '../../components/About.css';
import CardItem from '../CardItem';

export default function About () {
    return (
        <>
        <div className="cards__container">
        <div className="cards__wrapper">
            <ul className="cards__items__img">
       <CardItem 
                        src="https://res.cloudinary.com/dqtnonoqg/image/upload/v1610427708/portfolio-photo1_rfmuwo.jpg"
                        text="My Name is Kaitlyn Branagan. I have a love for full stack web development. I am excellent
                        at creating and maintaining great client relationships. I have 10 plus years of customer
                        service skills, as well as management and organization skills. Proven ability to be able
                        to manage a team of employees, while meeting goals."
                        
                        
                        />
                        </ul>
                        </div>
                        </div>
        </>
    )
}