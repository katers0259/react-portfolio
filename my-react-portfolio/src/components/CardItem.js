import React from 'react'
import { Link } from 'react-router-dom';
import './Cards.css';


function CardItem(props) {

    
    return (
        <>
            <li className="cards_item">
                <Link className="cards__item__link" to={props.path}>
                    <figure className="cards__item__pic-wrap" data-category={props.label}>
                        <img src={props.src} alt="project image" className="cards__item__img"></img>
                    </figure>
                    <div className="cards__item__info">
                        <h5 className="cards__item__text">{props.text}</h5>
                        <h5 className="repo">{props.children}</h5>

                    </div>
                </Link>
            </li>
        </>
    )
}

export default CardItem
