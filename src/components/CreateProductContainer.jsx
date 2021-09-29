import React from 'react';
import CreateProductView from './CreateProductView';
import { useFormik } from 'formik';
import *as yup from 'yup';


const CreateProductContainer =({profile,category , dataFromCreateProducts, renderProducts})=>{
    const validationSchema = yup.object({
        title: yup.string('Enter the title').required('title required').max(10),
        description: yup.string('Enter the description').max(25).min(10),
        price: yup.number('Enter the price').required('Price required'),
        category: yup.string(),
        //imgURL: yup.string().matches(regExvalidator)
    });

    const formik = useFormik({
        initialValues:{
            title:'',
            description:'',
            price:'',
            category:'',
            imgURL:''
        },
        validationSchema:validationSchema,
        onSubmit:(values)=>{
            dataFromCreateProducts(values);
            //renderProducts(profile._id);
        }
    });
   
    return(
        <CreateProductView formik={formik} category={category}/>
    )
}

export default CreateProductContainer