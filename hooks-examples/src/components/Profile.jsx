import React, { useContext } from 'react'
import Footer from './Footer'
import { AppContext } from '../hooks/AppContext'

const Profile = () => {
    const {count} = useContext(AppContext);
    return (
        <div>
            <h1>Profile Page</h1>
            <h3>Count : {count}</h3>
            <Footer />
        </div>
        
    )
}

export default Profile