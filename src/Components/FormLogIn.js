import React from 'react'
import { Link } from 'react-router-dom';
import Image from '../Images/img-9.png';
import './Form.css'


function FormLogIn() {
    return (
        <>
        <div className="form-content-right">
            <div className="form-image-wrapper">
                <img src={Image}/>
            </div>
            <div className="form-text-wrapper">
                <p className="form-title">Welcome back!</p>
                <p className="form-subtitle">Log in to your existant account of Quiz app</p>
            </div>
            <div className="form-wrapper">
                <form className="form-items-logIn">
                    <div className="form-inputs">
                        <input id="Email" type="email" name="Email" className="form-input" placeholder="Email"/>
                    </div>
                    <div className="form-inputs">
                        <input id="Password" type="password" name="Password" className="form-input" placeholder="Password"/>
                    </div>
                    <div className="form-text-wrapper">
                        <p className="form-subtitle-forgotPassword">Forgot Password?</p>
                    </div>
                    <button className="form-input-btn" type="submit">Log In</button>
                    <div className="form-text-wrapper">
                        <p className="form-subtitle">Or Connect using</p>
                    </div>
                    <div className="button-wrapper">
                        <button className="form-input-btn-facebook" >Facebook</button>
                        <button className="form-input-btn-google" >Google</button>
                    </div>
                    <div className="form-text-wrapper">
                        <p className="form-subtitle">Don't have any account?<a href='/SignUp'>Sign Up</a></p>
                    </div>
                </form>
            </div>    
        </div>
        </>
    )
}

export default FormLogIn
