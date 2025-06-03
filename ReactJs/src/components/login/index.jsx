import { useState } from "react";
import CommonForm from "../common-form";
import { loginFormElements } from "../config";

const initialFormData = {
    email : "",
    password : "",
}

function LoginComponent() {
    const [loginFormData, setLoginFormData] = useState(initialFormData)

    function onHandleSubmit(event){
        event.preventDefault();
        console.log(loginFormData, "login Form Data")

        //api logic and database logic
        setLoginFormData(initialFormData);
    }

    
    return(
        <div>
            <h1>Login Page/Component</h1>
            <CommonForm 
                formData={loginFormData} 
                setFormData={setLoginFormData} 
                formControls={loginFormElements}
                buttonText={'Login'}
                onHandleSubmit={onHandleSubmit}
            />
        </div>
    )
}

export default LoginComponent;