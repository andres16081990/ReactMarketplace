import { Button, Card, CardActions, CardContent, FormControl, InputLabel, Select, TextField } from '@material-ui/core';
import React from 'react'

const CreateProductView = ({formik,category})=>{
    return(<>
        <div className='products-form'>
            <form onSubmit={formik.handleSubmit}>
                <Card className='products-card-form'>
                    <CardContent className='products-card-content'>
                        <h2>Create products</h2>
                        <TextField id='title' 
                            className='fieldsInput' 
                            variant='outlined' 
                            value={formik.values.title}
                            label='Title' 
                            onChange={formik.handleChange}
                            error={formik.touched.title && Boolean(formik.errors.title)}/>
                        <TextField id='description'  
                            className='fieldsInput' 
                            variant='outlined' 
                            value={formik.values.description}
                            label='Description' 
                            onChange={formik.handleChange}
                            error={formik.touched.description && Boolean(formik.errors.description)}/>
                        <TextField id='price' 
                            className='fieldsInput' 
                            variant='outlined' 
                            value={formik.values.price}
                            label='Price' 
                            onChange={formik.handleChange}
                            error={formik.touched.price && Boolean(formik.errors.price)}/>
                        <FormControl variant="outlined">
                            <InputLabel htmlFor="outlined-age-native-simple">Category</InputLabel>
                                <Select 
                                    id='category' 
                                    native label="Category" 
                                    value={formik.values.category} 
                                    onChange={formik.handleChange}
                                    error={formik.touched.category && Boolean(formik.errors.category)}>   
                                <option aria-label="None" value=""/>
                                    {
                                    category.map(({title,_id})=><option value={_id} key={_id}>{title}</option>)
                                    } 
                                </Select>
                        </FormControl>
                        <TextField id='imgURL' 
                            className='fieldsInput' 
                            variant='outlined' 
                            value={formik.values.imgURL}
                            label='ImgURL' 
                            onChange={formik.handleChange}
                            error={formik.touched.imgURL && Boolean(formik.errors.imgURL)}/>                    
                </CardContent>
                    <CardActions>
                        <div className='products-card-actions'>
                            <Button type='submit' variant='contained'color='primary'>Create</Button>
                        </div>
                    </CardActions>
                </Card>
            </form>
        </div>
    </>)
}

export default CreateProductView;