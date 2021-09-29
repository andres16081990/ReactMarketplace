import { FormControl, InputLabel, Select } from '@material-ui/core';
import React from 'react';


const PickListComponent = ({category,handleCategory,pickCategory}) =>{
    return(
    <div classname='productsCategory'>
        <FormControl variant="outlined">
            <InputLabel htmlFor="outlined-age-native-simple">Category</InputLabel>
            <Select native label="Category" value={pickCategory} onChange={handleCategory} >   
                <option aria-label="None" value=""/>
                {
                category.map(({title,_id})=><option value={_id} key={_id}>{title}</option>)
                } 
            </Select>
        </FormControl>   
    </div>
    );
};

export default PickListComponent; 