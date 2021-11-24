import {
  Avatar,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { ProductoArray } from "../Data/dataPrueba";
import useStyles from "../../theme/useStyles";
import { getProductos } from "../../actions/ProductoAction";
import { Pagination } from "@material-ui/lab";

//Para la paginacion necesito instalar la extension @material-ui/lab

const Productos = (props) => {

  const [requestProductos, setRequestProductos] = useState({
    count: 0,
    pageIndex: 1,
    pageSize: 2,
    search: '',
  });

  const [paginadorProductos, setPaginadorProductos] = useState({
    count: 0,
    pageIndex: 0,
    pageSize: 0,
    pageCount: 0,
  });

  const handleChange=(event,value)=>{
    setRequestProductos((anterior)=>({
      ...anterior,
      pageIndex:value
    }));
  }

  useEffect(() => {
    const getListaProductos = async () => {
      const response = await getProductos(requestProductos);
      setPaginadorProductos(response.data);
    };
    getListaProductos();
  },[requestProductos]);

  const verProducto = (id) => {
    props.history.push("/detalleProducto/" + id);
  };
  const miArray = ProductoArray;
  const classes = useStyles();

  if(!paginadorProductos.data){
      return null;
  }


  return (
    <Container className={classes.containermt}>
      <Typography variant="h4" className={classes.text_title}>
        Productos
      </Typography>
      <Grid container spacing={4}>
        {paginadorProductos.data.map((data) => (
          <Grid item lg={3} md={4} sm={6} xs={12} key={data.key}>
            <Card>
              <CardMedia
                className={classes.media}
                image="https://static.dafiti.com.co/p/frenezi-6606-640739-1-catalog-new.jpg"
                title="mi producto"
              >
                <Avatar variant="square" className={classes.price}>
                  ${data.precio}
                </Avatar>
              </CardMedia>
              <CardContent>
                <Typography className={classes.text_card}>
                  {data.nombre}
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  onClick={() => verProducto(data.id)}
                >
                  MAS DETALLES
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Pagination count={paginadorProductos.pageCount} page={paginadorProductos.pageIndex} onChange={handleChange}/>
    </Container>
  );
};

export default Productos;
