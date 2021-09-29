import { AppBar, Button, Toolbar } from '@material-ui/core';
import React from 'react';
import { NavLink } from 'react-router-dom';

const NavigationView = ({userAuth,handleOnclick}) => {
    return(<>
        <div>
            <AppBar position="static" color='transparent' className='navBarCustom'>
                <Toolbar variant="dense">
                    <ul className='NavList'>
                        <li className='NavItems'>
                            <Button variant="contained" color="primary">
                                <NavLink className='Navlinks' exact to='/'>Home</NavLink>
                            </Button>
                        </li>
                        <li className='NavItems'>
                            <Button variant="contained" color="primary">
                                <NavLink className='Navlinks' exact to='/products'>Products</NavLink>
                            </Button>
                        </li>
                    </ul>
                    <ul className='NavListSing'>
                    <li className='NavItems'>
                            {userAuth? <Button className='LogoutDisable'></Button>:
                            <Button variant="contained" color="secondary">
                                <NavLink className='Navlinks' exact to='/singIn'>SingIn</NavLink>
                            </Button>
                            }
                        </li>
                        <li className='NavItems'>
                            {userAuth? <Button className='LogoutDisable'></Button>:
                            <Button variant="contained" color="secondary">
                                <NavLink className='Navlinks' exact to='/logIn'>LogIn</NavLink>
                            </Button>
                            }
                        </li>
                        <li className='NavItems'>
                            {userAuth ? <Button variant="contained" color="secondary" onClick={handleOnclick}>LogOut</Button>:<Button className='LogoutDisable'></Button>}
                        </li>
                    </ul>
                </Toolbar>
            </AppBar>
        </div>    
    </>);
};

export default NavigationView;