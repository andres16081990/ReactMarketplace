import React from 'react'
import {Card,CardActions,Button,CardContent,TextField} from '@material-ui/core';
import { NavLink } from 'react-router-dom';



const LogInView = ({email,password,handleEmail,handlePassword,handleOnsubmit}) =>{
    return(<>
        <div className='logInDiv'>
            <form>
                <Card className={'cardLogin'}>
                    <CardContent className='cardLoginContent'>
                        <h2>Enter your email and Password</h2>
                        <TextField 
                            type='email'
                            label="E-mail" 
                            variant="outlined"
                            value={email}
                            onChange={handleEmail} />
                        <TextField 
                            className='fieldsInput' 
                            type='password' 
                            label="Password" 
                            variant="outlined"
                            value={password}
                            onChange={handlePassword}/>
                    </CardContent>
                    <CardActions>
                        <Button type='submit' variant='contained'color='primary' onClick={handleOnsubmit}>LogIn</Button>
                        <Button variant='contained'color='secondary'>
                            <NavLink className='Navlinks' exact to='/singIn'>Register</NavLink>
                        </Button>
                    </CardActions>
                </Card>
            </form>
        </div>
    </>)
}

export default LogInView