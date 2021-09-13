import { Container, Grid } from "@material-ui/core";
import React from "react";
import useStyles from "../../theme/useStyles";

const OrdenCompra = (props) => {
  const { id } = props.match.params;
  const classes = useStyles();
  return (
    <Container className={classes.containermt}>
      <Typography variant="h5" className={classes.text_title}>
        Orden de compra : {id.toUpperCase()}
      </Typography>
      <Grid container spacing={2} className={classes.paperPadding}>
        <Grid item md={8} xs={12} >
          <Typography variant="h6" className={classes.text_Title}>
            ENVIO
          </Typography>
          <Typography variant="body2" className={classes.text_envio}>
            Nombres: Nestor Arcilas
          </Typography>
          <Typography variant="body2" className={classes.text_envio}>
           email:nestor@gmail.com
          </Typography>
          <Typography variant="body2" className={classes.text_envio}>
            Calle 2 Cali, Colombia
          </Typography>
          <div/>
          <Divider className={classes.divider} />
          <Typography variant="h6" className={classes.text_Title}>
            METODO DE PAGO
          </Typography>
          <Typography>PAYPAL</Typography>
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
          <Button
            variant="contained"
            color="primary"
            onClick={retrocederProceso}
          >
            ANTERIOR
          </Button>
        </Grid>

      </Grid>
    </Container>
  );
};

export default OrdenCompra;
