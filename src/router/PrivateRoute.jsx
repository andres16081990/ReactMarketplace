import React from 'react'
import { Redirect, Route } from 'react-router-dom'

const PrivateRoute = ({component: Component, user,...rest})=>{
    return(
        <Route {...rest} render={(props) =>(
            !user ? (<Redirect to='/logIn' />) : (<Component {...props} />)
    )}/>          
    )
}

export default PrivateRoute  