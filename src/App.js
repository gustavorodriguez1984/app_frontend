import { ThemeProvider } from '@material-ui/core';
import React from 'react';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import MenuAppBar from './componentes/navegacion/MenuAppBar';
import Login from './componentes/seguridad/Login';
import RegistrarUsuario from './componentes/seguridad/RegistrarUsuario';
import Productos from './componentes/pantallas/Productos';
import theme from './theme/theme';
import DetalleProducto from './componentes/pantallas/DetalleProducto';
import CarritoCompras from './componentes/pantallas/CarritoCompras';
import ProcesoCompra from './componentes/pantallas/ProcesoCompra';
import OrdenCompra from './componentes/pantallas/OrdenCompra';



function App() {
  return (
    <ThemeProvider theme ={theme}>
      <Router>
        <MenuAppBar />
      <Switch>
      <Route exact path="/login" component={Login}/>
      <Route exact path="/registrar" component={RegistrarUsuario}/>
      <Route exact path="/" component={Productos}/>
      <Route exact path="/detalleProducto/:id" component={DetalleProducto}/>
      <Route exact path="/carrito" component={CarritoCompras}/>
      <Route exact path="/procesoCompra" component={ProcesoCompra}/>
      <Route exact path="/ordenCompra/:id" component={OrdenCompra}/>
      </Switch>
      </Router>
    
    </ThemeProvider>
      
    
  );
}

export default App;
