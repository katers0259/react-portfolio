import React from 'react'
import Col from 'react-bootstrap/Col'
import ContactMeCard from './ContactMeCard';
import Row from 'react-bootstrap/Row';
import './ContactMe.css';

function ContactMe() {
    return (
        <>
            <div>
            <Row className="justify-content-center">
                            <Col lg="auto">
                <div className="cards-contact">
                    <h1 class="skills">Get In Touch</h1>
                   
                                <ContactMeCard>
                                    <div className="contact-info">
                                    <div className="cards">
                                        <a href="mailto:kaitlynbranagan@gmail.com">kaitlynbranagan@gmail.com</a>
                                    </div>
                                    <div className="cards">
                                        801-800-3411
                                    </div>
                                    <div className="cards ">
                                        <a href="https://www.facebook.com/katers0259" target="_blank"> <i class="fab fa-facebook social-icons"></i></a>

                                        <a href="https://www.instagram.com/ohbranagans/" target="_blank"><i class="fab fa-instagram social-icons"></i></a>

                                        <a href="https://codepen.io/katers0259" target="_blank">
                                            <i class="fab fa-codepen social-icons"></i>
                                        </a>

                                        <a href="https://www.linkedin.com/in/kaitlyn-branagan-a119891b1/" target="_blank" >
                                            <i class="fab fa-linkedin-in social-icons"></i>
                                        </a>

                                        <a href="https://github.com/katers0259" target="_blank"  >
                                            <i class="fab fa-github social-icons"></i>
                                        </a>
                                        </div>
                                        <div className="cards resume">
                                        <a href="https://drive.google.com/file/d/1rfwDxBN-k3eoY5In2eagaZ727YIflXea/view?usp=sharing" download >
                                        <i class="fas fa-file "></i>Download My Resume Here
                                        </a>
                                        </div>
                                        </div>
                                </ContactMeCard>


                       
                </div>
                </Col>
                </Row>
            </div>

        </>
    )

}

export default ContactMe
