import { ThemeProvider, useForkRef } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MenuAppBar from "./componentes/navegacion/MenuAppBar";
import Login from "./componentes/seguridad/Login";
import RegistrarUsuario from "./componentes/seguridad/RegistrarUsuario";
import Productos from "./componentes/pantallas/Productos";
import theme from "./theme/theme";
import DetalleProducto from "./componentes/pantallas/DetalleProducto";
import CarritoCompras from "./componentes/pantallas/CarritoCompras";
import ProcesoCompra from "./componentes/pantallas/ProcesoCompra";
import OrdenCompra from "./componentes/pantallas/OrdenCompra";
import Perfil from "./componentes/seguridad/Perfil";
import Usuarios from "./componentes/pantallas/admin/Usuarios";
import EditarUsuario from "./componentes/pantallas/admin/EditarUsuario";
import ListaProductos from "./componentes/pantallas/admin/ListaProductos";
import AgregarProducto from "./componentes/pantallas/admin/AgregarProducto";
import EditarProducto from "./componentes/pantallas/admin/EditarProducto";
import ListaPedidos from "./componentes/pantallas/admin/ListaPedidos";
import { getUsuario } from "./actions/UsuarioAction";

function App() {
  const [servidorRespuesta, setServidorRespuesta] = useState(false);
  useEffect(() => {
    if (!servidorRespuesta) {
      getUsuario().then((response) => {
        setServidorRespuesta(true);
      });
    }
  }, [servidorRespuesta]);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <MenuAppBar />
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/registrar" component={RegistrarUsuario} />
          <Route exact path="/" component={Productos} />
          <Route
            exact
            path="/detalleProducto/:id"
            component={DetalleProducto}
          />
          <Route exact path="/carrito" component={CarritoCompras} />
          <Route exact path="/procesoCompra" component={ProcesoCompra} />
          <Route exact path="/ordenCompra/:id" component={OrdenCompra} />
          <Route exact path="/perfil" component={Perfil} />
          <Route exact path="/admin/usuarios" component={Usuarios} />
          <Route exact path="/admin/usuario/:id" component={EditarUsuario} />
          <Route
            exact
            path="/admin/listaProductos"
            component={ListaProductos}
          />
          <Route
            exact
            path="/admin/agregarProducto"
            component={AgregarProducto}
          />
          <Route
            exact
            path="/admin/editarProducto/:id"
            component={EditarProducto}
          />
          <Route exact path="/admin/listaPedidos" component={ListaPedidos} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
