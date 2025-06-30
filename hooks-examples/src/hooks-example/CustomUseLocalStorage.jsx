import React from 'react'
import useLocalStorage from '../custom-hooks/useLocalStorage'

const CustomUseLocalStorage = () => {
    const [name, setName] = useLocalStorage('username','');
    const [id, setId] = useLocalStorage('id','');
    return (
        <div>
            <h1>CustomUseLocalStorage</h1>
            <input type='text' value={name} onChange={(e)=> setName(e.target.value)}/>
            <h3>Name : {name}</h3>
            <input type='text' value={id} onChange={(e)=> setId(e.target.value)} />
            <h3>Id : {id}</h3>
        </div>
    )
}

export default CustomUseLocalStorage