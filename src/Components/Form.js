import React, { useState } from 'react';
import FormSignUp from './FormSignUp'

const Form = () => {
    const [isSubmitted,setIsSubmitted] = useState (false);
    function submitForm(){
        setIsSubmitted(true);
    }

    return (
        <div>
            {!isSubmitted ? (
                <FormSignUp submitForm={submitForm}/>
            ):(<p>Successfully submitted</p>)}
        </div>
    )
}

export default Form;
