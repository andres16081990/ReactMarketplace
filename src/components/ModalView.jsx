import { Button, Card, CardActions, CardContent, TextField, } from '@material-ui/core';
import React from 'react';
import Modal from 'react-modal';
import {FcLeft} from 'react-icons/fc'

const styles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    background:'#5D6D7E',
  },
};


const ModalView = ({modalIsOpen,openModal,closeModal,description,id,title,price,imgURL,formik}) => {

  return(
    <div>
      <Button  variant='contained' color='primary' onClick={openModal}>Modify</Button>
      <Modal
        ariaHideApp={false}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={styles}
        contentLabel="Example Modal">
        <Button color='transparent'onClick={closeModal}>{<FcLeft size={40}/>}</Button>
        <h2>Update product : {id}</h2>
        <div className='divForm'>
            <form onSubmit={formik.handleSubmit}>
                        <h2>Create products</h2>
                        <TextField id='title'  
                            variant='outlined' 
                            value={formik.values.title}
                            label='Title' 
                            onChange={formik.handleChange}
                            error={formik.touched.title && Boolean(formik.errors.title)}/>
                        <TextField id='description'   
                            variant='outlined' 
                            value={formik.values.description}
                            label='Description' 
                            onChange={formik.handleChange}
                            error={formik.touched.description && Boolean(formik.errors.description)}/>
                        <TextField id='price'  
                            variant='outlined' 
                            value={formik.values.price}
                            label='Price' 
                            onChange={formik.handleChange}
                            error={formik.touched.price && Boolean(formik.errors.price)}/>
                        <TextField id='imgURL'  
                            variant='outlined' 
                            value={formik.values.imgURL}
                            label='ImgURL' 
                            onChange={formik.handleChange}
                            error={formik.touched.imgURL && Boolean(formik.errors.imgURL)}/>                    
                    <CardActions>
                        <div>
                            <Button type='submit' variant='contained'color='primary'>Update</Button>
                        </div>
                    </CardActions>
            </form>
        </div>
      </Modal>
    </div>
  );
};

export default ModalView;

