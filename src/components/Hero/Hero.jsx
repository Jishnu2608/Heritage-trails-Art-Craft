import React from 'react';
import './Hero.css';

const Hero =() => {
    return (
        <section id="hero-section" className="hero-wrapper">
           <div className="paddings innerWidth flexCenter hero-container">
               {/* left side */}
               <div className="flexColStart hero-left">
                   <div className="hero-title">
                       <div className="orange-circle"/>
                       <h1>
                           Art and Craft
                       </h1>
                   </div>

                   <div className="flexColStart hero-des">
                       <span className="secondaryText">"Art and craft are the languages of the soul, where creativity flows from the 
                       hands of creators, shaping the intangible into tangible forms that speak to the essence of existence."</span>
                       <span className="secondaryText"><i>~ Leonardo da Vinci</i></span>
                   </div>
  
               </div>
                {/* right side */}
               <div className="flexCenter hero-right">
                   <div className="image-container">
                       <img src="./content-art-craft-hero-img.jpeg" alt=" "/>
                   </div>
               </div>
            
            </div> 

        </section>
    )
}

export default Hero