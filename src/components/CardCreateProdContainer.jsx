import React from 'react'
import CardCreateProdView from './CardCreateProdView';

const CardCreateProdContainer = ({state,dataFromModifyProduct,fetchDataDeleteProduct}) => { 
    return(<>
    <div className='cardDiv'>
        {
            state.map(({
                title,
                _id,
                description,
                imgURL,
                createdAt,
                category,
                price})=><CardCreateProdView 
                    title={title} 
                    key={_id} 
                    description={description} 
                    imgURL={imgURL} createdAt={createdAt} 
                    category={category} 
                    id={_id} 
                    price={price}
                    dataFromModifyProduct={dataFromModifyProduct}
                    fetchDataDeleteProduct={fetchDataDeleteProduct}/>) 
        }
    </div>
    </>)
}

export default CardCreateProdContainer;