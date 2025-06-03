import { useState } from "react";

function FormComponent() {
    const [name, setName] = useState('');
    const [emailValue, setEmailValue] = useState("");
    const [formData, setFormData] = useState({
        name: '',
        email : ''
    })
    function handleSubmit(event){
        event.preventDefault();
        console.log(name, emailValue)
        console.log(formData);
    }

    function handleOnChange(event){
        const {name, value} = event.target
        setFormData({
            ...formData,
            [name] : value
        })
    }
    return(
        <div>
            <h1>Form</h1>
            <form onSubmit={handleSubmit}>
                <input value={name}  id="name" name="name" placeholder="Enter your Name: " onChange={handleOnChange}/> 
                <input value={emailValue} type="email"  id="email" name="email" placeholder="Enter you Email: " onChange={handleOnChange}/>
                <button type="submit">Submit</button>
            </form> 
        </div>
    )
}

export default FormComponent;