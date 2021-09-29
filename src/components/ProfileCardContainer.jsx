import React from 'react';
import ProfileView from './ProfileView'


const ProfileCardContainer =({profile})=>{  

	
    return(<>
        <ProfileView
            profile={profile}/>
    </>)
}

export default ProfileCardContainer;