import React from 'react';
import { Button } from './Button';
import './HeroSection.css';
import '../App.css';


function HeroSection() {
    return (
        <div className='hero-container'>
            <video src="./videos/Pexels Videos 1321208.mp4" autoPlay loop muted />
            <h1>Kaitlyn Branagan</h1>
            <p>Full Stack Web Developer</p>
            <div className="hero-btns">
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                    GitHub
                </Button>
                <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
                    Linkedin 
                </Button>
            </div>
            
        </div>
    )
}

export default HeroSection;
