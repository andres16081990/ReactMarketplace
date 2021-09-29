import React, { useState } from 'react';
import ModalView from './ModalView';
import { useFormik } from 'formik';
import *as yup from 'yup';

const ModalContainer = ({description,id,title,price,imgURL,dataFromModifyProduct}) => {

  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  }
      
  const closeModal = () => {
    setIsOpen(false);
  }

  const validationSchema = yup.object({
    title: yup.string('Enter the title').required('title required').max(10),
    description: yup.string('Enter the description').max(25).min(10),
    price: yup.number('Enter the price').required('Price required'),
    category: yup.string(),
    //imgURL: yup.string().matches(regExvalidator)
});

const formik = useFormik({
    initialValues:{
        title:title,
        description:description,
        price:price,
        imgURL:imgURL,
        id:id
    },
    validationSchema:validationSchema,
    onSubmit:(values)=>{
      dataFromModifyProduct(values)
    }
});
  return(<>
      <ModalView 
          modalIsOpen={modalIsOpen}
          openModal={openModal}
          closeModal={closeModal}
          description={description} 
          id={id} 
          title={title} 
          price={price} 
          imgURL={imgURL}
          formik={formik}/>
  </>);
};

export default  ModalContainer