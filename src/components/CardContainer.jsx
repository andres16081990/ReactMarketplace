import React from 'react';
import CardView from './CardView';


const CardContainer = ({products})=>{
    return(
        <div className='cardDiv'>
                {
                    products.map(({title,price,_id,description,imgURL})=><CardView key={_id} title={title} price={price} description={description} imgURL={imgURL}/>)
                }             
        </div>
    )
}

export default CardContainer  