import { ThemeProvider } from '@material-ui/core';
import React from 'react';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import MenuAppBar from './componentes/navegacion/MenuAppBar';
import Login from './componentes/seguridad/Login';
import RegistrarUsuario from './componentes/seguridad/RegistrarUsuario';
import theme from './theme/theme';


function App() {
  return (
    <ThemeProvider theme ={theme}>
      <Router>
        <MenuAppBar />
      <Switch>
      <Route exact path="/login" component={Login}/>
      <Route exact path="/registrar" component={RegistrarUsuario}/>
  
      </Switch>
      </Router>
    
    </ThemeProvider>
      
    
  );
}

export default App;
