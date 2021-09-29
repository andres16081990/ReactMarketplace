import React, { useContext } from 'react'

import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import LogInContainer from '../components/LogInContainer'
import SingInContainer from '../components/SingInContainer'
import { AuthContext } from '../Context/AuthContext'
import PrivateRoute from './PrivateRoute'
import HomePage from '../pages/HomePage'
import ProductsPage from '../pages/ProductsPage'
import UserPrivatePage from '../pages/UserPrivatePage'
import NavigationContainer from '../components/NavigationContainer'
import CustomerPrivatePage from '../pages/CustomerPrivatePage'


const AppRouter = () =>{

    const {user} = useContext(AuthContext);


    return(<>
        <Router>
            <NavigationContainer/>
            <Switch>
                <Route exact path={'/'}>
                    <HomePage/>
                </Route>
                <Route exact path={'/products'}>
                    <ProductsPage/>
                </Route>
                <Route exact path={'/singIn'}>
                    <SingInContainer/>
                </Route>
                <Route exact path={'/logIn'}>
                    <LogInContainer/>
                </Route>

                <PrivateRoute exact path={'/user'} component={UserPrivatePage} user={user}/>

                <PrivateRoute exact path={'/customer'} component={CustomerPrivatePage} user={user}/>

                
            </Switch>



        </Router>
    
    </>)
}

export default AppRouter