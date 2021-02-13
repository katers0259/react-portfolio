import React from 'react'
import { Link } from 'react-router-dom';
import './AboutMe.css';

function AboutMeCard (props) {
    return (
        <>
            <li className="cards_item">
                
                    <figure className="cards__item__pic-wrap" data-category={props.label}>
                        <img src={props.src} alt="project image" className="cards__item__img"></img>
                    </figure>
                    <div className="cards__item__info">
                        <h1 className="cards__item__text">
                        {props.children}
                        </h1>
                        
                    </div>
               
            </li>
        </>
    )
}

export default AboutMeCard;
