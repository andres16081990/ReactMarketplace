import React, { useEffect, useState } from 'react'
import sliderData from '../assets/slider.data'
import CardContainer from '../components/CardContainer'
import HeroContainer from '../components/HeroContainer'
import PickListComponent from '../components/PickListComponent'
import apidataMarketplace from '../services/authentication.services'

const ProductsPage = ()=>{

    const [products, setProducts] = useState([]);
    const [category, setCategory] = useState([]);
    const [pickCategory, setPickCategory] = useState('');
    
    
    useEffect(() => {
        const getCategory = async()=>{

            const options = {
                method: 'GET',
                headers:{
                    'Content-type': 'application/json',
                },
            };
            const category = `/category/category`
            try {
                const responseCategoy = await fetch(`${apidataMarketplace}${category}`,options);
                const resCategoryData = await responseCategoy.json();
                setCategory(resCategoryData);
            } catch (error) {
                console.log(error)
            }
            

        }
        getCategory()
    }, []);

    const handleCategory = (e)=>{
        setPickCategory(e.target.value);
    }

    useEffect(() => {

        const options = {
            method: 'GET',
            headers:{
                'Content-type': 'application/json',
            },
        };
        if(pickCategory !== ''){
            const getProductsByCategory = async()=>{
                const productsCategory = `/products/category/`;
                try {
                    const responseProdByCat = await fetch(`${apidataMarketplace}${productsCategory}${pickCategory}`,options);
                    const resProdByCatData = await responseProdByCat.json();
                    setProducts(resProdByCatData)
                } catch (error) {
                    console.log(error)
                }
            }
            getProductsByCategory();
        }

        if(pickCategory === ''){

            const productsFetch = async()=>{
                const products = `/products`;
                try {
                    const responseProducts = await fetch(`${apidataMarketplace}${products}`,options);
                    const resProdData = await responseProducts.json();
                    setProducts(resProdData)
                } catch (error) {
                    console.log(error);
                }
            }
    
            productsFetch(); 
        }
    }, [pickCategory]);

    return(<>
        <HeroContainer slides={sliderData}/>
        <PickListComponent category={category} handleCategory={handleCategory} pickCategory={pickCategory}/>
        <CardContainer products={products}/>
    </>)
}
export default ProductsPage