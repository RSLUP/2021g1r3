import React from 'react'
import {Link} from 'react-router-dom'
import './HeroSection.css'
import { Button } from './Button'
import HeroImage from '../Images/img-9.png';



function HeroSection({lightBg,topLine,LightText,LightTextDesc,headline,headline2,headline3,headline4,description,buttonLable,img,alt,imgStart}) {
    return (
        <>
            <div className={lightBg ? 'home__hero-section' : 'home__hero-section darkBg'}>
                <div className ="container">
                    <div className ="row home__hero-row" 
                    style={{display:'flex',flexDirection : imgStart==='start' ? 'row-reverse' : 'row'}}>
                        <div className="col">
                            <div className = "home__hero-text-wrapper">

                                <h1 className={LightText ? 'heading' : 'heading dark'}>{headline}<span className={LightText ? 'heading2' : 'heading dark'} >{headline2}</span>
                                <span className={LightText ? 'heading' : 'heading dark'} >{headline3}</span><span className={LightText ? 'heading2' : 'heading dark'} >{headline4}</span></h1>
                                
                                <p className={LightTextDesc ? 'home__hero-subtitle' : 'home__hero-subtitle dark'}>{description}</p>
                                <hr  style={{color: '#ffffff',backgroundColor: '#ffffff',height: .3,borderColor : '#ffffff'}}/>
                                <div className="top-line">{topLine}</div>
                                <Link to='/sign-up'>
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
