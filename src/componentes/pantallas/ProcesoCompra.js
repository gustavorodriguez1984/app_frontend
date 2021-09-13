import {
  Container,
  Stepper,
  Step,
  StepLabel,
  Grid,
  Typography,
  Button,
  TextField,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  TableContainer,
  TableBody,
  Table,
  TableRow,
  CardMedia,
  Divider,
  TableCell,
  Paper
} from "@material-ui/core";
import React, { useState } from "react";
import useStyles from "../../theme/useStyles";
const ProcesoCompra = (props) => {
  const [activeStep, setActiveStep] = useState(1);
  const continuarProceso = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const retrocederProceso = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const realizarPedido=()=>{
    const idCompra="d3996cb2-a6ea-4c42-868d-e4ca947e17c1";
    props.history.push("/ordenCompra/"+ idCompra);
  }

  const classes = useStyles();
  return (
    <Container className={classes.containermt}>
      <Stepper activeStep={activeStep} alternativeLabel>
        <Step>
          <StepLabel>Registrarse</StepLabel>
        </Step>
        <Step>
          <StepLabel>Envio</StepLabel>
        </Step>
        <Step>
          <StepLabel>Metodo de pago</StepLabel>
        </Step>
        <Step>
          <StepLabel>Realizar Pago</StepLabel>
        </Step>
      </Stepper>
      {activeStep === 1 ? (
        <Grid md={6} xs={12} className={classes.gridPC}>
          <Typography>Envio del Producto</Typography>
          <form onSubmit={(e) => e.preventDefault()} className={classes.form}>
            <Grid container spacing={4}>
              <Grid items xs={12}>
                <TextField
                  label="Direccion"
                  fullWidth
                  InputLabelProps={{
                    shrink: true,
                  }}
                ></TextField>
              </Grid>
              <Grid items xs={12}>
                <TextField
                  label="Ciudad"
                  fullWidth
                  InputLabelProps={{
                    shrink: true,
                  }}
                ></TextField>
              </Grid>
              <Grid items xs={12}>
                <TextField
                  label="Pais"
                  fullWidth
                  InputLabelProps={{
                    shrink: true,
                  }}
                ></TextField>
              </Grid>
              <Grid items xs={12}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={continuarProceso}
                >
                  CONTINUAR
                </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>
      ) : activeStep === 2 ? (
        <Grid md={3} xs={12} className={classes.gridPC}>
          <Typography variant="h6" className={classes.text_Title}>
            Metodo de Pago
          </Typography>
          <Grid container spacing={2}>
            <Grid items xs={12}>
              <FormControl className={classes.formControl}>
                <FormLabel>Seleccione Metodo</FormLabel>
                <RadioGroup>
                  <FormControlLabel
                    value="PayPal"
                    control={<Radio color="primary" />}
                    label="PayPal o Tarjeta"
                  />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid items xs={12}>
              <Button
                variant="contained"
                color="primary"
                className={classes.buttonAnterior}
                onClick={retrocederProceso}
              >
                Anterior
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={continuarProceso}
              >
                Continuar
              </Button>
            </Grid>
          </Grid>
        </Grid>
      ) : activeStep === 3 ? (
        <Grid>
          <Grid container className={classes.gridPC}>
            <Grid item md={8} xs={12} className={classes.gridLR}>
              <Typography variant="h6" className={classes.text_Title}>
                ENVIO
              </Typography>
              <Typography>Calle 2 Cali, Colombia</Typography>
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
                        <Typography className={classes.text_title}>
                          $50
                        </Typography>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <Typography className={classes.text_title}>
                          Envio
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography className={classes.text_title}>
                          $2
                        </Typography>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <Typography className={classes.text_title}>
                          Impuesto
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography className={classes.text_title}>
                          $8
                        </Typography>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <Typography className={classes.text_title}>
                          Total
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography className={classes.text_title}>
                          $60
                        </Typography>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <Button
                          variant="contained"
                          color="primary"
                          size="large"
                          onClick={realizarPedido}
                        >
                          REALIZAR PEDIDO
                        </Button>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
          </Grid>
        </Grid>
      ) : null}
    </Container>
  );
};

export default ProcesoCompra;
