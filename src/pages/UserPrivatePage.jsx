import  TYPES  from '../types/types';
import React, {useContext, useEffect, useReducer, useState} from 'react'
import CardCreateProdContainer from '../components/CardCreateProdContainer';
import CreateProductContainer from '../components/CreateProductContainer';
import ProfileCardContainer from '../components/ProfileCardContainer';
import { AuthContext } from '../Context/AuthContext';
import productsReducer, { initalState } from '../reducers/products.reducer';
import apidataMarketplace from '../services/authentication.services';


const UserPrivatePage = ()=>{    
    const [state, dispatch] = useReducer(productsReducer,initalState); 
    
    const [profile, setProfile] = useState({});    
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();
    const [category, setCategory] = useState([]);


    const {token,userId} = useContext(AuthContext);

    
    useEffect(() => {

        const setStates = async () =>{  
            const endPointUser = `/user`
            const options = {
                method: 'GET',
                headers:{
                    'Content-type': 'application/json',
                    'x-access-token' : token
                },
            };
            const endPointCategory = `/category/category`
            const optionsCategory = {
                method: 'GET',
                headers:{
                     'Content-type': 'application/json'
                }
            } 
            const endPoint = `/products/creator/`;

            try {
                const responseProfile = await fetch(`${apidataMarketplace}${endPointUser}`,options);
                const resProfileData = await responseProfile.json();
                setProfile(resProfileData);

                const responseCategory = await fetch(`${apidataMarketplace}${endPointCategory}`,optionsCategory);
                const resCategData = await responseCategory.json();
                setCategory(resCategData);

                const response = await fetch(`${apidataMarketplace}${endPoint}${userId}`,options);
                const resProductData = await response.json();
                dispatch({type:TYPES.FETCH_PRODUCTS_CREATED , payload : resProductData});

                setLoading(false);

            } catch (error) {
                setError(error)
            }

        }
        setStates();
    }, []);
 
        
    const dataFromCreateProducts = async (object) => {
        const data = object
        const endPoint = `/products`;
        const options = {
            method: 'POST',
            headers:{
            'Content-type': 'application/json',
            'x-access-token' : token
        },
        body: JSON.stringify(data)
        }
        try {
            const response = await fetch(`${apidataMarketplace}${endPoint}`,options)
            const {product} = await response.json()
            dispatch({type:TYPES.FETCH_CREATE_PRODUCT , payload : product})            
        } catch (error) {
            dispatch({type:TYPES.FETCH_ERROR})
        }
    };

    const dataFromModifyProduct = async(object) => {
        const data = object;
        const {id} = object;
        const endPoint = `/products/`
        const options = {
            method: 'PUT',
            headers: {
                'Content-Type' : 'application/json',
                'x-access-token' : token
            },
            body: JSON.stringify(data)
        };
        try {
            const response = await fetch(`${apidataMarketplace}${endPoint}${id}`,options);
            const {product} = await response.json()
            dispatch({type: TYPES.FETCH_MODIFY_PRODUCTS, payload: product});
        } catch (error) {
            dispatch({type:TYPES.FETCH_ERROR})
        }

    }; 

    const fetchDataDeleteProduct = async(string) => {
        const id = string;
        const endPoint = `/products/`;
        const options = {
            method: 'DELETE',
            headers:{
                'Content-Type' : 'application/json',
                'x-access-token' : token
            }
        };
        try {
            const response = await fetch(`${apidataMarketplace}${endPoint}${id}`,options)
            const data = await response.json();
            dispatch({type:TYPES.FETCH_DELETE_PRODUCTS,payload:{prodId:id,data:data}})
        } catch (error) {
            dispatch({type:TYPES.FETCH_ERROR})
        }

    }


    if(loading) return <div>Loading</div>
    if(state.isLoading) return <div>Loading</div>
    if(error) return <div>error</div>   

    return(<>
        <ProfileCardContainer profile={profile}/>
        <CreateProductContainer profile={profile} category={category} dataFromCreateProducts={dataFromCreateProducts}/>
        <CardCreateProdContainer state={state.products} dataFromModifyProduct={dataFromModifyProduct} fetchDataDeleteProduct={fetchDataDeleteProduct}/>
    </>)
}

export default UserPrivatePage;