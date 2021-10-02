import { createContext, useEffect, useState } from 'react';
import ROLES from '../constants/roles.users';
import apidataMarketplace from '../services/authentication.services';


export const AuthContext = createContext(); 

export const AuthContextProvider = ({children}) =>{
    const [fetchResponse, fetchResponset] = useState({});
    const [user, setUser] = useState();
    const [token, setToken] = useState();
    const [userId, setUserId] = useState();
    const [userRole, setUserRole] = useState();
    const [error, setError] = useState();
    const [roleValidation, setRoleValidation] = useState(false);


    useEffect(() => {
        const storeRoles = async () =>{
            const endPoint = `/role/roles`;
            const options = {
                method: `GET`,
                headers: {
                    'Content-Type' : 'application/json'
                }
            };
            try {
                const response = await fetch(`${apidataMarketplace}${endPoint}`,options);
                console.log(response)
                const data = await response.json();
                console.log(data)
                data.forEach(rol=>localStorage.setItem(rol.name,rol._id));
            } catch (error) {
                setError(error)
            }
        };
        storeRoles();
    }, [fetchResponse]);

    const RoleValidation = () =>{
        const admin = localStorage.getItem(ROLES.Admin);
        const userRole = localStorage.getItem('role');
        const adminValidation = admin === userRole;
        adminValidation ? setRoleValidation(true) : setRoleValidation(false)
    };
    


    //Endpoints
    const login = '/auth/login'
    const singin = '/auth/singin'

    const setInLocalStorage = (fetched) =>{
        if(fetched !== {}){
            if(fetched.auth){
                const keys = Object.entries(fetched);
                localStorage.setItem(keys[1][0], fetched.token);
                localStorage.setItem(keys[2][0], fetched.user);
                localStorage.setItem(keys[3][0], fetched.role[0]);
            }
            if(!fetched.auth){
                return
            }
        }        
    }

    useEffect(() => {
        setInLocalStorage(fetchResponse);
    }, [fetchResponse]);


    const tokenValidator = ()=>{
        const tokenValidate = localStorage.getItem('token');
        const userValidate = localStorage.getItem('user');
        const userRolevalidate = localStorage.getItem('role');
        if(tokenValidate && userValidate){
            setUser(true);
            setToken(tokenValidate);
            setUserId(userValidate);
            setUserRole(userRolevalidate);
        }
    }

    useEffect(() => {
        tokenValidator();
        RoleValidation();
    }, [fetchResponse]);


    const logOut =  ()=>{
        const token = localStorage.getItem('token')
        if(token){
            localStorage.clear();
            setUser();
            fetchResponset({});
            setUserRole();
        }
    }
    

    // Login user request 
    const logInUser = async(ObjectFromLogin) =>{

        const dataFromLogin = ObjectFromLogin;        
        const options = {
            method: 'POST',
            headers:{
                'Content-type': 'application/json',
            },
            body: JSON.stringify(dataFromLogin)
        };

        try {
        const responseLogIn = await fetch(`${apidataMarketplace}${login}`,options);
        const resLogInData = await responseLogIn.json();
        fetchResponset(resLogInData);
        } catch (error) {
        console.log(error) 
        }
    }
    
    // sing in user Request
    const singInUser = async (singInData) =>{        
        const dataFromSingin = singInData

        const options ={
            method: 'POST',
            headers:{
                'Content-type': 'application/json',
            },
            body: JSON.stringify(dataFromSingin)
        }
        try {
            const responseSingIn = await fetch(`${apidataMarketplace}${singin}`,options);
            const resSingInData = await responseSingIn.json();
            fetchResponset(resSingInData)
            
        } catch (error) {
            console.log(error)
        }
        
    }
    

    const value = {
        logInUser,
        singInUser,
        logOut,
        tokenValidator,
        user,
        token,
        userId,
        userRole,
        roleValidation
    }

    
    if(error) return <div>Ups...error{error}</div>
    return(
        <AuthContext.Provider value={value} >
            {children}
        </AuthContext.Provider>
    )
}



