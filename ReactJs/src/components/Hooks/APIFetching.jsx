import { useState,useEffect } from "react";

const Fetching = ()=>{
    const [usersList, setUsersList] = useState([]);
    const [pending, setPending] = useState(false);  

    const fetchAllUsers = async () =>{
        try {
            setPending(true);
            const apiResponse = await fetch('https://dummyjson.com/users');
            const result = await apiResponse.json();
            //console.log(result);
            if(result?.users) {
                setUsersList(result?.users);
                setPending(false);
            }else{
                setUsersList([]);
                setPending(false);
            }
        }catch(error){
            console.log(error);
        }
    }
    // useEffect(()=>{
    //     fetchAllUsers();
    // },[])

     // console.log(`${usersList} users fetched from API`);
    if(pending) {
        return <h1>Fetching users! wait...</h1>
    }
    return(
        <div>
            <h1>All Users Data</h1>
            <button onClick={fetchAllUsers}>Users List</button>
            <ul>
                {
                    usersList && usersList.length > 0 ? usersList.map(userItem => (
                        <li key={userItem?.id}>
                            <p>{userItem.firstName} {userItem.lastName}</p>
                        </li>)
                    ) : <h1>No Users Found! Please try again later.</h1>
                }
            </ul>
        </div>
    )
}

export default Fetching;