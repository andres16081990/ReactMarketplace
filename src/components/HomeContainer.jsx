import React from 'react'
import HomeView from './HomeView'

const HomeContainer = ({data})=>{

    return(<>
        {
            data.map(({message,id})=><HomeView message={message} key={id}/>)
        }
    </>)
}

export default HomeContainer