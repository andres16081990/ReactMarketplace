import TYPES from '../types/types'

export const initalState = {
    isLoading: true, 
    products: [],
    error : ''
}

const productsReducer = (state,{ type, payload }) => {
    switch (type) {
        case TYPES.FETCH_CREATE_PRODUCT:                    
            return {
                loading : false,
                products:[payload,...state.products], 
                error : ''
            };
        case TYPES.FETCH_PRODUCTS_CREATED:
            console.log(payload)
            return {
                isLoading: false,
                products: [...payload,...state.products],
                error : ''
            };
        case TYPES.FETCH_DELETE_PRODUCTS:
            const {deleted} = payload.data;
            const {prodId} = payload;
            const newState = state.products.filter((prod)=>{
                if(deleted){
                    return prod._id !== prodId}
                });
            return {
                isloading:false,
                products :[...newState],
                error :''
            };
        case TYPES.FETCH_MODIFY_PRODUCTS:
            const stateUpdated = state.products.filter(e=>e._id !== payload._id);   
            return {
                isLoading: false,
                products:[payload,...stateUpdated],
                error: ''
            };
        case TYPES.FETCH_ERROR:
            return{
                isloading: false,
                products:[],
                error: 'Somethig went wrong!'
            };    
            default:
            return state;
    }
}

export default productsReducer;