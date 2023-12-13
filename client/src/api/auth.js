// Importar la biblioteca axios desde el archivo "axios"
import axios from "./axios";
// Función para realizar una solicitud de registro de usuario
export const registerRequest = async (user) =>
  axios.post(`/auth/register`, user);
// Función para realizar una solicitud de inicio de sesión de usuario
export const loginRequest = async (user) => axios.post(`/auth/login`, user);
// Función para realizar una solicitud de verificación de token
export const verifyTokenRequest = async () => axios.get(`/auth/verify`);
