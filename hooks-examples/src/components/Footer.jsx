import React, { useContext } from 'react'
import { AppContext } from '../hooks/AppContext'

const Footer = () => {
    
    //Consume Context
    const {phone, email} = useContext(AppContext)

    return (
        <div>
            Footer
            <h1>Phone : {phone}</h1>
            <h5>Email : {email}</h5>
        </div>
        
    )
}

export default Footer