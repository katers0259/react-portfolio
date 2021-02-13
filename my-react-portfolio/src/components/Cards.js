import React from 'react'
import CardItem from './CardItem'
import './Cards.css';

function Cards() {
    return (
        <div className="cards">
            <h1>projects</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                        src="https://res.cloudinary.com/dqtnonoqg/image/upload/v1610427708/my_team_jjzhgb.png"
                        text="This is an App that allows you to see a list of employees and their jobs and titles, you can add, delete and update the list
                        as you please.
                        Languages used: Node.js, Javascript, HTML, CSS"
                        label="Employee Tracker"
                        path="/projects"
                        />
                        <CardItem 
                        src="https://res.cloudinary.com/dqtnonoqg/image/upload/v1610427708/passgenerator_smhmmz.png"
                        text="This is a random password generator app, that can help you create passwords based on what you select for your
                        preferences, i.e length, special characters, etc.
                        Languages used: HTML, CSS, Javascript"
                        label="Random Password Generator"
                        path="/projects"
                        />
                        </ul>
                        <ul className="cards__items">
                        <CardItem 
                        src="https://res.cloudinary.com/dqtnonoqg/image/upload/v1610427708/macrame2_arp2gh.png"
                        text="Macrame Madness, is a site that you can upload photos and designs of macrame to share with other enthusiats, you are presented with a 
                        login page, that you must enter in you information before you are allowed into the site. You also have your own profile that you can 
                        create, and update.
                        Laguages used: HTML, TailwindCSS, JavaScript, MySQL, "
                        label="Random Password Generator"
                        path="/projects"
                        />
                        
                        
                        <CardItem 
                        src="https://res.cloudinary.com/dqtnonoqg/image/upload/v1610427708/weather_dashboard_ezpjnq.png"
                        text="This weather app allows the user to input any city, and see the current weather, and also the 5 day forecast.
                        Laguages used: HTML, CSS, Javascript, API "
                        label="Weather Dashboard"
                        path="/projects"
                        />
                        </ul>
                        <ul className="cards__items">
                          <CardItem 
                        src="https://res.cloudinary.com/dqtnonoqg/image/upload/v1610427709/search_cl9smp.png"
                        text="Pick your Pet, uses API calls to a petfinder API, that allows you to search for dogs or cats with specifications that 
                        you select and then displays those animals that are available for adoption.
                        Laguages used: HTML, CSS, Javascript, API "
                        label="Pick Your Pet"
                        path="/projects"
                        />
                             <CardItem 
                        src="https://res.cloudinary.com/dqtnonoqg/image/upload/v1613202799/workout_jvm7ph.png"
                        text="This workout fitness tracker lets the user input workouts, and tracks the specifications on a graph and displays this to the user
                        on their personal dashboard.
                        Laguages used: HTML, CSS, Javascript, MongoDB Atlas
                        This App is deployed on Heroku. "
                        label="Fitness Tracker"
                        path="/projects"
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
