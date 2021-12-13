import React from 'react'
import './HeroSection.css'
import HeroImage from '../Images/img-5.png';
import logo from '../Images/img-2.png'






function TwoColorContent({Topline2,imgStart}) {
    return (
        <>
            <div className="Two_Color_Canvas darkBg">
                <div className="Two_Color_Logo_Wrapper">
                    <img src={logo}  alt='logo' width="250" height="100"  />
                </div>
                <div className = "Two_Color_Text_Wrapper" >
                    <hr  style={{color: '#ffffff',backgroundColor: '#ffffff',borderColor : '#ffffff'}}/> 
                    <p className="Two_Color_Top-line" >{Topline2}</p>
                </div>
                <div className ="Two_Color_Container">
                    <div className ="row home__hero-row" style={{display:'flex',flexDirection : imgStart==='start' ? 'row-reverse' : 'row'}}>
                        <div className="Two_Color_Col">
                            <div className="Two_Color_img_wrapper">
                                <img src={HeroImage} width="75%" height="80%"/>
                            </div>
                        </div>  
                    </div> 
                </div>
            </div> 
        </>
    )
}

export default TwoColorContent;



