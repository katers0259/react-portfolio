import React from 'react'
// import CardItem from './CardItem'
// import '../components/Cards.css';
import AboutMeCard from './AboutMeCard';
import './AboutMe.css';


export default function AboutMe() {
    return (


        <div className="cards-container">
            <div className="cards-wrapper">
                <ul className="cards_items">
                    <AboutMeCard
                        src="https://res.cloudinary.com/dqtnonoqg/image/upload/v1610427708/portfolio-photo1_rfmuwo.jpg"
                    >
                        <div className="cards">
                            <h1>About Myself</h1>
                            </div>
                        My Name is Kaitlyn Branagan. I have a love for full stack web development. I am excellent
                        at creating and maintaining great client relationships. I have 10 plus years of customer
                        service skills, as well as management and organization skills. Proven ability to be able
                        to manage a team of employees, while meeting goals.
                                <br></br>
                        <div className="cards">
                            <h1>Languages</h1>
                        </div>
                        <div className="cards">
                            <ul>
                                <li><i class="fab fa-html5"> HTML</i></li>
                                <li><i class="fab fa-css3-alt"> CSS</i></li>
                                <li>Tailwind CSS</li>
                                <li><i class="fab fa-node-js"> Node JS</i></li>
                                <li><i class="fas fa-database"> My SQL, MongoDB</i></li>
                                <li><i class="fab fa-react"> React</i></li>
                                <li> Handlebars.js</li>
                                <li> Express.js</li>
                                <li><i class="fab fa-js"> Javascript, JQuery</i></li>
                            </ul>
                        </div>
                        <div className="cards">
                            <h2>Skills</h2>
                            </div>
                            <p>Team Management, Problem Solving, Debugging, Customer Service, Client Relations,
                    Training, Time Management, Team Oriented, Self Motivated.</p>

                       
                    </AboutMeCard>













                </ul>
            </div>
        </div>

    )
}
