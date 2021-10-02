import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@material-ui/core';
import React from 'react';

const CardView = ({title,price,description,imgURL})=>{
    return(<>
          <div>
            <div>
              <div className="client1">
                <div className="theCard">
                  <div className="thefront">
                    <Card>
                      <CardActionArea>
                        <CardMedia
                          component="img"
                          image={imgURL}
                          height="300"
                          title="Contemplative Reptile"
                        />
                      </CardActionArea>
                    </Card>
                  </div>
                  <div className="theBack">
                    <Card>
                      <CardActionArea>
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
                        <Button variant='contained' color="primary">
                          Share
                        </Button>
                      </CardActions>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </div>
    </>)
}

export default CardView

//components