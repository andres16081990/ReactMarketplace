import React, { useContext, useEffect, useState } from 'react';
import ProfileCardContainer from '../components/ProfileCardContainer';
import { AuthContext } from '../Context/AuthContext';
import apidataMarketplace from '../services/authentication.services';


const CustomerPrivatePage = () => {
    const [profile, setProfile] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();

    const {token} = useContext(AuthContext);

    useEffect(() => {
        const getUserProfile = async() => {
            const endPoints = `/user`,
            options = {
                method: 'GET',
                headers: {
                    'Content-Type' : 'application/json',
                    'x-access-token' : token
                }
            };
            try {
                const response = await fetch(`${apidataMarketplace}${endPoints}`,options);
                const data = await response.json();
                setProfile(data);
                setLoading(false);                
            } catch (error) {
                setError(error)
            };            
        };
        getUserProfile();
    }, []);

    if(error) return<div>Ups...error</div>
    if(loading) return <div>Loading</div>
    return(
        <ProfileCardContainer profile={profile}/>
    )
}

export default CustomerPrivatePage;