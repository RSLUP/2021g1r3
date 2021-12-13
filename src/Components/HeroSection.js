import React from 'react'
import {Link} from 'react-router-dom'
import './HeroSection.css'
import { Button } from './Button'
import HeroImage from '../Images/img-9.png';




function HeroSection({topLine,headline,headline2,headline3,headline4,description,buttonLable,imgStart}) {
    return (
        <>
        
            <div className="home__hero-section darkBg">
                <div className ="container">
                    <div className ="row home__hero-row" 
                    style={{display:'flex',flexDirection : imgStart==='start' ? 'row-reverse' : 'row'}}>
                        <div className="col">
                            <div className = "home__hero-text-wrapper">

                                <h1 className="heading">{headline}<span className= "Blue_Heading" >{headline2}</span>
                                <span className= "heading" >{headline3}</span><span className="Blue_Heading" >{headline4}</span></h1>
                                
                                <p className= "home__hero-subtitle">{description}</p>
                                <hr/>
                                <div className="top-line">{topLine}</div>
                                <Link to='LogIn'>
                                    <Button buttonSize='btn--wide' buttonColor='blue'>{buttonLable}</Button>
                                </Link>
                            </div>
                        </div>
                        <div className="col">
                            <div className="home__hero-img-wrapper">
                                <img src={HeroImage}/>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
            
        </>
    )
}

export default HeroSection
