import React from 'react';
import { Button } from './Button';
import './HeroSection.css';
import '../App.css';


function HeroSection() {
    return (
        <>
        <div className='hero-container'>
            <video src="https://res.cloudinary.com/dqtnonoqg/video/upload/v1613200421/Pexels_Videos_1321208_xol8an.mp4" autoPlay loop muted />
            <h1>Kaitlyn Branagan</h1>
            <p>Please Visit  <a href="https://updatedportfoliokaitlynbran.herokuapp.com/"> My New Portfolio Here </a> </p>
            <div className="hero-btns">
             <Button  className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                    GitHub
                   
                </Button>
                
               
            </div>
            
        </div>
        </>
    )
}

export default HeroSection;
