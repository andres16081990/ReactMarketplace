import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { AuthContext } from '../Context/AuthContext';
import SingInView from './SingInView';


const SingInContainer = () =>{
    const {singInUser,user}= useContext(AuthContext);

    const history = useHistory();
    const [name, setName] = useState();
    const [lastname, setLastname] = useState();
    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [roles, setRoles] = useState();
    const [avatar, setAvatar] = useState();

    const handleName = (e)=>{
        setName(e.target.value)
    }

    const handleLastname =(e)=>{
        setLastname(e.target.value)
    }

    const handleUsername =(e)=>{
        setUsername(e.target.value)
    }

    const handleEmail =(e)=>{
        setEmail(e.target.value)
    }

    const handlePassword =(e)=>{
        setPassword(e.target.value)
    }

    const handleRole = (e) =>{
        setRoles(e.target.value)
    }
    const handleAvatar =  (e)=>{
        setAvatar(e.target.value)
    }
    const handleOnsubmit = (e)=>{
        const data = {
            name: name,
            lastname: lastname,
            username: username,
            email: email,
            password: password,
            roles: roles,
            avatar: avatar
        }
        if(data){
            singInUser(data)
        }
        e.preventDefault();
    }

    useEffect(() => {        
        if(user){
            history.push('/user');
        }
    }, [user]);


    return(<>
        <SingInView
            name={name}
            lastname={lastname}
            username={username}
            email={email}
            password={password}
            role={roles}
            avatar={avatar}
            handleName={handleName}
            handleLastname={handleLastname}
            handleUsername={handleUsername}
            handleEmail={handleEmail}
            handlePassword={handlePassword}
            handleRole={handleRole}
            handleOnsubmit={handleOnsubmit}
            handleAvatar={handleAvatar}/>
    </>)
}

export default SingInContainer