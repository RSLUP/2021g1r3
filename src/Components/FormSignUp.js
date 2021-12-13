import React from 'react'
import Image from '../Images/img-9.png';
import './Form.css'
import UseForm from './UseForm';
import ValidateInfo from './ValidateInfo';


const FormSignUp = ({submitForm}) => {
    const {handleChange,values,handleSubmit,errors}=UseForm(submitForm,ValidateInfo);
    return (
        <div className="form-content-right">
            <div className="form-image-wrapper">
                <img src={Image}/>
            </div>
            <div className="form-text-wrapper">
                <p className="form-title">Let’s Get Started!</p>
                <p className="form-subtitle">Sign in to your new account of Quiz app</p>
            </div>
            <div className="form-wrapper">
                <form onSubmit={handleSubmit} className="form-items" noValidate>
                    <div className="form-inputs">
                        <input type="text" name="Name" className="form-input" placeholder="Name" value={values.Name} onChange={handleChange}/>
                        {errors.Name && <p>{errors.Name}</p>}
                    </div>
                    <div className="form-inputs">
                        <input  type="email" name="Email" className="form-input" placeholder="Email" value={values.Email} onChange={handleChange}/>
                        {errors.Email && <p>{errors.Email}</p>}
                    </div>
                    <div className="form-inputs">
                        <input  type="password" name="Password" className="form-input" placeholder="Password" value={values.Password} onChange={handleChange}/>
                        {errors.Password && <p>{errors.Password}</p>}
                    </div>
                    <div className="form-inputs">
                        <input  type="password" name="ConfirmPassword" className="form-input" placeholder="Confirm Password" value={values.ConfirmPassword} onChange={handleChange}/>
                        {errors.ConfirmPassword && <p>{errors.ConfirmPassword}</p>}
                        <i className="fa fa-user fa-lg fa-fw" aria-hidden="true"></i>
                    </div>
                    <button className="form-input-btn" type="submit">Sign Up</button>
                    <div className="form-text-wrapper">
                        <p className="form-subtitle">Already have an account?<a href='#'>Login here</a></p>
                    </div>
                </form>
            </div>    
        </div>
    
    );
};

export default FormSignUp;
