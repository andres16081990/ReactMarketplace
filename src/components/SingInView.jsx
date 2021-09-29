import React from 'react'
import {Card,CardActions,Button,CardContent,TextField, FormControl, InputLabel, Select} from '@material-ui/core';
import { NavLink } from 'react-router-dom';


const SingInView = ({
        name,
        lastname,
        username,
        email,
        password,
        roles,
        avatar,
        handleName,
        handleLastname,
        handleUsername,
        handleEmail,
        handlePassword,
        handleRole,
        handleOnsubmit,
        handleAvatar}) =>{
    return(<>
        <div className='singInDiv'>
            <form onSubmit={handleOnsubmit}>
                <Card className={'cardSingin'}>
                    <CardContent className='cardSinginContent'>
                        <h2>Sing In</h2>
                        <TextField  
                            label="Name" 
                            variant="outlined"
                            type='text'
                            value={name}
                            onChange={handleName}
                            placeholder='Enter Your Name'
                            className='fieldsInput'/>
                        <TextField 
                            label="Lastname"
                            variant="outlined"
                            type='text'
                            value={lastname}
                            onChange={handleLastname}
                            placeholder='Enter you Lastname'/>
                        <TextField 
                            label="Username" 
                            variant="outlined"
                            type='text'
                            value={username} 
                            onChange={handleUsername}/>
                        <TextField 
                            label="E-mail" 
                            variant="outlined"
                            type='email'
                            value={email} 
                            onChange={handleEmail}/>
                        <TextField 
                            label="Password" 
                            variant="outlined"
                            type='password'
                            value={password}
                            onChange={handlePassword}/>
                        <FormControl variant="outlined">
                            <InputLabel htmlFor="outlined-age-native-simple">Role</InputLabel>
                                <Select native label="Role" value={roles} onChange={handleRole}>   
                                    <option aria-label="None" value="" />
                                    <option value='user'>user</option>
                                    <option value='Admin'>Admin</option>
                                    <option value='moderator'>moderator</option>
                                </Select>
                        </FormControl>
                        <TextField 
                            label="avatar" 
                            variant="outlined"
                            type='text'
                            value={avatar} 
                            onChange={handleAvatar}/>
                    </CardContent>
                    <CardActions>
                        <div className='cardAcctionsSingin'>
                            <Button type='submit' variant='contained'color='primary'>SingIn</Button>
                            <Button variant='contained'color='secondary'>
                                <NavLink className='Navlinks' exact to='/LogIn'>LogIn</NavLink>
                            </Button>
                        </div>
                    </CardActions>
                </Card>
            </form>
        </div>
    </>)
}

export default SingInView
