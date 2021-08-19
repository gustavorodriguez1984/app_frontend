import {
  Container,
  Grid,
  Typography,
  Paper,
  CardMedia,
  TableContainer,
  TableCell,
  MenuItem,
  Table,
  TextField,
  TableBody,
  TableRow,
  Button,
} from "@material-ui/core";
import React from "react";
import useStyles from "../../theme/useStyles";

const DetalleProducto = (props) => {
  const agregarCarrito = () => {
    props.history.push("/carrito");
  };
  const classes = useStyles();

  return (
    <Container className={classes.containermt}>
      <Typography variant="h4" className={classes.text_title}>
        Abrigo Vaxi
      </Typography>
      <Grid container spacing={4}>
        <Grid item lg={8} md={8} xs={12}>
          <Paper className={classes.PaperImg} varinat="outlined" square>
            <CardMedia
              className={classes.mediaDetalle}
              image="https://images.platforum.cloud/banners/vtxoa_com_banner_2880w.jpg"
              title="Mi Producto"
            ></CardMedia>
          </Paper>
        </Grid>
        <Grid item lg={4} md={4} xs={12}>
          <TableContainer component={Paper} variant="outlined">
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <Typography variant="subtiltle2">Precio </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="subtiltle2">25.99 </Typography>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Typography variant="subtiltle2">Cantidad </Typography>
                  </TableCell>
                  <TableCell>
                    <TextField size="small" select variant="outlined">
                      <MenuItem value={1}> 1</MenuItem>
                      <MenuItem value={2}> 2</MenuItem>
                      <MenuItem value={3}> 3</MenuItem>
                    </TextField>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell colSpan={2}>
                    <Button
                      variant="contained"
                      color="primary"
                      size="large"
                      onClick={agregarCarrito}
                    >
                      Agregar a carrito
                    </Button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        <Grid item lg={8} md={8} xs={12}>
          <Grid container spacing={2}>
            <Grid item md={6}>
              <Typography className={classes.text_detalle}>
                Precio:$25.99{" "}
              </Typography>
              <Typography className={classes.text_detalle}>
                Unidades disponibles:15{" "}
              </Typography>
              <Typography className={classes.text_detalle}>
                Marca:Vaxi{" "}
              </Typography>
              <Typography className={classes.text_detalle}>
                Temporada:Invierno{" "}
              </Typography>
            </Grid>
            <Grid item md={6}>
              <Typography className={classes.text_detalle}>
                Descripcion{" "}
              </Typography>
              <Typography className={classes.text_detalle}>
                Abrigo Vaxi talla M,de algon puro, color negro con boton y
                cierre, ideal para el invierno con bolsillos al exterior, suave
                al contacto con la piel.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default DetalleProducto;
