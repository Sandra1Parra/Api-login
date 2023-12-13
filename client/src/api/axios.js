// Importar la biblioteca axios desde "axios"
import axios from "axios";
// Importar la URL de la API desde el archivo de configuración
import { API_URL } from "../config";

// Crear una instancia de axios con la URL base y la opción de enviar las cookies
const instance = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});

// Exportar la instancia de axios como valor predeterminado
export default instance;