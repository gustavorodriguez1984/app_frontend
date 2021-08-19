import {
  CardMedia,
  Container,
  IconButton,
  Table,
  TableBody,
  TableContainer,
  TableRow,
  Typography,
  TextField,
  MenuItem,
  TableCell,
  Icon,
  Grid,
  Paper,
  Divider,
  Button,
} from "@material-ui/core";
import React from "react";
import useStyles from "../../theme/useStyles";
import { ProductoArray } from "../Data/dataPrueba";
const CarritoCompras = () => {
  const miArray = ProductoArray;
  const classes = useStyles();

  return (
    <Container className={classes.containermt}>
      <Typography variant="h4" className={classes.text_title}>
        CARRITO DE COMPRAS
      </Typography>
      <Grid container spacing={4}>
        <Grid item lg={9} md={8} sm={12} xs={12}>
          <TableContainer component={Paper} variant="outlined">
            <Table>
              <TableBody>
                {miArray.map((producto) => (
                  <TableRow key={producto.key}>
                    <TableCell>
                      <CardMedia
                        className={classes.imgProductoCC}
                        image="https://images.platforum.cloud/banners/vtxoa_com_banner_2880w.jpg"
                        title="imagen en carrito"
                      ></CardMedia>
                    </TableCell>
                    <TableCell>
                      <Typography className={classes.text_detalle}>
                        {producto.titulo}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography className={classes.text_detalle}>
                        ${producto.precio}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <TextField select variant="outlined" size="small">
                        <MenuItem value={1}> 1</MenuItem>
                        <MenuItem value={2}> 2</MenuItem>
                        <MenuItem value={3}> 3</MenuItem>
                        <MenuItem value={4}> 4</MenuItem>
                        <MenuItem value={5}> 5</MenuItem>
                      </TextField>
                    </TableCell>
                    <TableCell>
                      <IconButton>
                        <Icon>delete</Icon>
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <Paper variant="outlined" squeare className={classes.paperPadding}>
            <Typography variant="h6" className={classes.text_title}>
              SUBTOTAL ({miArray.lenght}) PRO
            </Typography>
            <Typography className={classes.text_title}>$143.46</Typography>
            <Divider className={classes.gridmb}></Divider>
            <Button variant="containded" color="primary" size="large">
              REALIZAR COPMRA
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CarritoCompras;
