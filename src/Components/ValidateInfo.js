export default function ValidateInfo(values){
    let errors={};

    if (!values.Name.trim()){
        errors.Name='Name required';
    }

    if(!values.Email){
        errors.Email='Email Required';
    }else if (!/\S+@\S+\.\S+/.test(values.Email)){
        errors.Email='Invalid email address';
    }

    if (!values.Password){
        errors.Password='Password Required';
    }else if(values.Password.length < 8){
        errors.Password='Password need 8 or more characters';
    }

    if (!values.ConfirmPassword){
        errors.ConfirmPassword='Password Required';
    }else if(values.ConfirmPassword !== values.Password){
        errors.ConfirmPassword='Password do not match';
    }

    return errors;
}