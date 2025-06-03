import { useState } from "react";
import CommonForm from "../common-form";
import { RegisterFormElements } from "../config";

const initialRegisterFormData = {
    name : '',
    email : '',
    password : ''
}

function RegisterComponent() {
    const [registerFormData , setRegisterFormData] = useState(initialRegisterFormData);

    function handleRegisterOnSubmit(event){
        event.preventDefault();
        console.log(registerFormData);

        //api logic and database logic

        //Default Values on submit the form
        setRegisterFormData(initialRegisterFormData);
    }
    return(
        <div>

            <h1>Register Page/Component</h1>
            <CommonForm 
                formControls={RegisterFormElements}
                formData = {registerFormData}
                setFormData = {setRegisterFormData}
                buttonText={'Register'}
                onHandleSubmit={handleRegisterOnSubmit}
            />
        </div>
    )
}

export default RegisterComponent;