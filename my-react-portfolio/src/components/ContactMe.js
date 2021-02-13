import React from 'react'

import ContactMeCard from './ContactMeCard';
import './ContactMe.css';

function ContactMe() {
    return (
        <>
            <div>
                <div className="cards">
                    <h1>Get In Touch</h1>
                    <div className="cards__container">
                        <div className="cards__wrapper">
                            <ul className="cards__items">
                                <ContactMeCard>
                                    <div className="cards">
                                        <a href="mailto:kaitlynbranagan@gmail.com">kaitlynbranagan@gmail.com</a>
                                    </div>
                                    <div className="cards">
                                        801-800-3411
                                    </div>
                                    <div className="cards">
                                        <a href="https://www.facebook.com/katers0259" target="_blank"> <i class="fab fa-facebook"></i></a>

                                        <a href="https://www.instagram.com/ohbranagans/" target="_blank"><i class="fab fa-instagram"></i></a>

                                        <a href="https://codepen.io/katers0259" target="_blank">
                                            <i class="fab fa-codepen"></i>
                                        </a>

                                        <a href="https://www.linkedin.com/in/kaitlyn-branagan-a119891b1/" target="_blank" >
                                            <i class="fab fa-linkedin-in"></i>
                                        </a>

                                        <a href="https://github.com/katers0259" target="_blank"  >
                                            <i class="fab fa-github"></i>
                                        </a>
                                        </div>
                                        <div className="cards resume">
                                        <a href="https://drive.google.com/file/d/1QcubR8-_WiX1CtYaMo0wdqjN9CIfRF7w/view?usp=sharing" download >
                                        <i class="fas fa-file"></i>Download My Resume Here
                                        </a>
                                        </div>
                                </ContactMeCard>


                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )

}

export default ContactMe
