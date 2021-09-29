import React, { useEffect, useState } from 'react'
import HomeContainer from '../components/HomeContainer'

const HomePage = ({message})=>{

    const [data, setData] = useState([]);
    
    useEffect(() => {
        fetch(`http://localhost:3050/api`)
        .then(response => response.json())
        .then(data => setData(data))
        .catch(error => console.log(error))       
        
    },[]);
    return(<>
        <HomeContainer data={data}/>
    </>)
}

export default HomePage