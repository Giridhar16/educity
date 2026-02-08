import React from "react";
import "./About.css";
import about_img from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";
const About = ({setPlayState}) => {
    return (
        <div className="about container">
            <div className="about-left">
                <img src={about_img} alt="About Us" className="about_img"/>
                <img src={play_icon} alt="Play Icon" className="play_icon" onClick={()=>{setPlayState(true)}}/>
            </div>
            <div className="about-right">
                <h3>ABOUT UNIVERSITY</h3>
                <h2>Nutruing Tomorrow's Leaders Today</h2>
                <p>Our university is dedicated to providing exceptional education and fostering innovation.</p>

                <p>
                    Join us on a journey of discovery and growth, where we empower students to achieve their full potential and make a positive impact on the world.
                </p>
                <p>
                    Explore our diverse programs, state-of-the-art facilities, and vibrant campus life that together create an enriching educational experience.
                </p>
            </div>
        </div>
    )
}
export default About;