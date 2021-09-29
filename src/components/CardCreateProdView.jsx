import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@material-ui/core';
import React from 'react';
import ModalContainer from './ModalContainer';

const CardCreateProdView = ({
  title,
  id,
  description,
  imgURL,
  createdAt,
  category,
  price,
  dataFromModifyProduct,
  fetchDataDeleteProduct}) =>{

    return(
        <Card className='carView'>
          <CardActionArea>
            <CardMedia
            component="img"
            image={imgURL}
            height='300' 
            width='300'/>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {description}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {price}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <ModalContainer description={description} id={id} title={title} price={price} imgURL={imgURL} dataFromModifyProduct={dataFromModifyProduct}/>
          <Button variant='contained' color="secondary" onClick={()=>fetchDataDeleteProduct(id)}>Delete</Button>
        </CardActions>
      </Card>
    )
}

export default CardCreateProdView