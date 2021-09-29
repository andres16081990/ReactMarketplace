import React, { useEffect, useState } from 'react'
import { useContext } from 'react';
import { useHistory } from 'react-router';
import { AuthContext } from '../Context/AuthContext';
import LogInView from './LogInView';


const LogInContainer =()=>{
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const history = useHistory()
    const {logInUser,user}= useContext(AuthContext)    

    const handleEmail = (e)=>{
        setEmail(e.target.value)
    }

    const handlePassword = (e)=>{
        setPassword(e.target.value)  
    }

    const handleOnsubmit = (e)=>{
        const data = {email: email,password : password}
        if(data){
            logInUser(data)
        }
        e.preventDefault();

    }

    useEffect(() => {        
        if(user){
            history.push('/user');
        }
    }, [user]);


    return(<>
        <LogInView
            email={email}
            password={password}
            handleEmail={handleEmail}
            handlePassword={handlePassword}
            handleOnsubmit={handleOnsubmit}/>
    </>)
}

export default LogInContainer