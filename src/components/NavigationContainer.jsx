import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Context/AuthContext';
import NavigationView from './NavigationView';

const NavigationContainer =() =>{
  const [userAuth, setUserAuth] = useState();
  const {logOut, user} = useContext(AuthContext)

  const handleOnclick = ()=>{
    logOut()
  }
  useEffect(() => {
    if(user){
      setUserAuth(true)
    }
    if(!user){
      setUserAuth();
    }
  }, [user]);

  return (
    <NavigationView userAuth={userAuth} handleOnclick={handleOnclick}/>
  );
}

export default NavigationContainer
