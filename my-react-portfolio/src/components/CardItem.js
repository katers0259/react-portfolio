import React from 'react'
import { Link } from 'react-router-dom';

import './Cards.css';



function CardItem(props) {
    return (
    
               
                        <li className="cards__item">
                            <Link className="cards__item__link">

                                <div className="cards__item__pic-wrap">
                                    <img src={props.src} alt="" className="cards__item__img" />
                                    
                                    </div>
                                    <div className="cards">{props.label}</div>
                                    <h5 className="cards__item__text"></h5>
                                    <div className="cards__item__info">
                                    {props.text}
                                    <a href={props.path} classname="link">Repo</a>
                                    
                                </div>
                            </Link>
                            
                        </li>
              
        
           
        
   
    )
}
export default CardItem
