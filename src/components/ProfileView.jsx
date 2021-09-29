import { Button } from '@material-ui/core';
import React from 'react';
import firtsWordToUperCase from '../helpers/to.upercase';


const ProfileView =  ({profile})=>{
    return(<>
            <h1 className='user-welcome'>Welcome {`${firtsWordToUperCase(profile.name)}`}</h1>
            <div className="hero-container">
                <div className="main-container">
                    <div className="avatar-container">
                        <img src={profile.avatar} className="avatar" alt={profile.name} />
                    </div>
                    <div className="profile-info">
                        <div className="profile__content">
                            <h3>My information</h3>
                            <h4 className="profile__user-name">Nombre: {`${firtsWordToUperCase(profile.name)} ${firtsWordToUperCase(profile.lastname)}`}</h4>
                            <p className="profile__user-slogan">E-mail: {profile.email}</p>
                            <Button variant='contained' color='secondary'>Change Data</Button>
                        </div>
                    </div>
                </div>
            </div>
    </>)
}

export default ProfileView;