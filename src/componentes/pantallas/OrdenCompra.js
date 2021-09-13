import React from "react";
import useStyles from "../../theme/useStyles";
import {
  Container,
  Grid,
  Typography,
  Button,
  TableContainer,
  TableBody,
  Table,
  TableRow,
  CardMedia,
  Divider,
  TableCell,
  Paper,
} from "@material-ui/core";

const OrdenCompra = (props) => {
  const { id } = props.match.params;
  const mensajeEnvio = "No entregado";
  const mensajePago = "No Pagado";
  const classes = useStyles();
  return (
    <Container className={classes.containermt}>
      <Typography variant="h5" className={classes.text_title}>
        Orden de compra : {id.toUpperCase()}
      </Typography>
      <Grid container spacing={2} className={classes.paperPadding}>
        <Grid item md={8} xs={12}>
          <Typography variant="h6" className={classes.text_Title}>
            ENVIO
          </Typography>
          <Typography variant="body2" className={classes.text_envio}>
            Nombres: Nestor Arcila
          </Typography>
          <Typography variant="body2" className={classes.text_envio}>
            email:nestor@gmail.com
          </Typography>
          <Typography variant="body2" className={classes.text_envio}>
            Calle 2 Cali, Colombia
          </Typography>
          <div className={classes.alertDelivered}>
            <Typography variant="body2" className={classes.text_Title}>
              {mensajeEnvio}
            </Typography>
          </div>
          <Divider className={classes.divider} />
          <Typography variant="h6" className={classes.text_Title}>
            METODO DE PAGO
          </Typography>
          <Typography>PAYPAL</Typography>
          <div className={classes.alertDelivered}>
            <Typography variant="body2" className={classes.text_Title}>
              {mensajePago}
            </Typography>
          </div>
          <Divider className={classes.divider} />
          <Typography variant="h6" className={classes.text_Title}>
            PRODUCTOS
          </Typography>
          <TableContainer className={classes.gridmb}>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <CardMedia
                      className={classes.imgProductoPC}
                      image="https://images.platforum.cloud/banners/vtxoa_com_banner_2880w.jpg"
                      title="imagen en proceso de compra"
                    ></CardMedia>
                  </TableCell>
                  <TableCell>
                    <Typography className={classes.text_detalle}>
                      Abrigo Vaxi Moda 2020
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography className={classes.text_detalle}>
                      2 * $25 = $50
                    </Typography>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        <Grid item md={4} xs={12}>
          <TableContainer component={Paper} square>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell colSpan={2}>
                    <Typography variant="h6" className={classes.text_title}>
                      RESUMEN DEL PEDIDO
                    </Typography>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Typography className={classes.text_title}>
                      Productos
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography className={classes.text_title}>$50</Typography>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Typography className={classes.text_title}>
                      Envio
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography className={classes.text_title}>$2</Typography>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Typography className={classes.text_title}>
                      Impuesto
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography className={classes.text_title}>$8</Typography>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Typography className={classes.text_title}>
                      Total
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography className={classes.text_title}>$60</Typography>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell colSpan={2}>
                    <Button
                      variant="contained"
                      color="primary"
                      size="large"
                      fullWidth
                      classes={classes.gridmb}
                    >
                      PayPal
                    </Button>
                    <Button
                      variant="contained"
                     
                      size="large"
                      fullWidth
                    >
                      Tarjeta de Credito o Debito
                    </Button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </Container>
  );
};

export default OrdenCompra;
