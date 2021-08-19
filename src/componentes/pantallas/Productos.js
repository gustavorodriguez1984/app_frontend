import { CardMedia, Container,Card, Grid, Typography, Avatar, CardContent, Button } from '@material-ui/core';
import React from 'react';
import useStyles from '../../theme/useStyles';
import { ProductoArray } from '../Data/dataPrueba';

const Productos = (props) => {
    const miArray = ProductoArray;
    const verProducto =(id)=>{
        props.history.push("/detalleProducto/"+ id);
    }
    const classes = useStyles();
   

    return (
        <div>
            <Container className ={classes.containermt}>
                <Typography variant="h4" className ={classes.text_title}>
                    Productos
                </Typography>
                <Grid container spacing={4}>
                    {miArray.map(data =>(
                    <Grid item lg={3} md={4} sm={6} xs={12} key ={data.key}>
                        <Card>
                            <CardMedia className ={classes.media}
                            image = "https://images.platforum.cloud/banners/vtxoa_com_banner_2880w.jpg"
                            title="Mi Producto"
                            >
                               <Avatar variant="square" className ={classes.price}>
                                   ${data.precio}
                                </Avatar>         
                            </CardMedia>
                            <CardContent>
                                <Typography variant="h6" className ={classes.text_card}>
                                    {data.titulo}
                                </Typography>
                                <Button
                                variant="contained"
                                color="primary"
                                fullWidth
                                onClick={()=>verProducto(data.key)}
                                >
                                    Mas detalles
                                </Button>
                            </CardContent>
                        </Card>
                        
                    </Grid>
                    ))}
                </Grid>
            </Container>
        </div>
    );
};

export default Productos;
