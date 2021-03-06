import HttpCliente from "../servicios/HttpCliente";
import axios from "axios";

const instancia = axios.create();
instancia.CancelToken = axios.CancelToken;
instancia.isCancel = axios.isCancel;

export const registrarUsuario = (usuario) => {
  return new Promise((resolve, eject) => {
    instancia
      .post("api/usuario/registrar", usuario)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        resolve(error.response);
      });
  });
};

export const loginUsuario = (usuario, dispatch) => {
  return new Promise((resolve, eject) => {
    instancia
      .post("api/usuario/login", usuario)
      .then((response) => {
        dispatch({
            type: "INICIAR_SESION",
            sesion: response.data,
            autenticado:true
        })
        resolve(response);
      })
      .catch((error) => {
        resolve(error.response);
      });
  });
};

export const getUsuario = () => {
  return new Promise((resolve, eject) => {
    HttpCliente.get("api/usuario")
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        resolve(error.response);
      });
  });
};
