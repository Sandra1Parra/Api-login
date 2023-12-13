import { useEffect } from "react"; // Importa la función useEffect de React
import { createContext, useContext, useState } from "react"; // Importa las funciones createContext, useContext y useState de React
import { loginRequest, registerRequest, verifyTokenRequest } from "../api/auth"; // Importa las funciones de autenticación del archivo auth.js
import Cookies from "js-cookie"; // Importa la biblioteca Cookies
const AuthContext = createContext(); // Crea un contexto de autenticación
export const useAuth = () => { // Define un gancho personalizado para obtener el contexto de autenticación
  const context = useContext(AuthContext); // Obtiene el contexto de autenticación utilizando la función useContext
  if (!context) throw new Error("useAuth must be used within a AuthProvider"); // Lanza un error si el contexto no está disponible
  return context; // Devuelve el contexto de autenticación
};
export const AuthProvider = ({ children }) => { // Define un componente proveedor de autenticación
  const [user, setUser] = useState(null); // Define el estado del usuario autenticado
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Define el estado de autenticación
  const [errors, setErrors] = useState([]); // Define el estado de errores
  const [loading, setLoading] = useState(true); // Define el estado de carga
  // Limpia los errores después de 5 segundos
  useEffect(() => {
    if (errors.length > 0) { // Si hay errores
      const timer = setTimeout(() => { // Configura un temporizador para limpiar los errores después de 5 segundos
        setErrors([]); // Limpia los errores
      }, 5000);
      return () => clearTimeout(timer); // Limpia el temporizador
    }
  }, [errors]);
  const signup = async (user) => { // Define una función asincrónica para registrarse
    try {
      const res = await registerRequest(user); // Realiza una solicitud de registro utilizando la función registerRequest del archivo auth.js
      if (res.status === 200) { // Si la solicitud es exitosa
        setUser(res.data); // Establece el usuario autenticado
        setIsAuthenticated(true); // Establece el estado de autenticación en verdadero
      }
    } catch (error) { // Si hay un error
      console.log(error.response.data); // Muestra el mensaje de error en la consola
      setErrors(error.response.data.message); // Establece el estado de errores
    }
  };
  const signin = async (user) => { // Define una función asincrónica para iniciar sesión
    try {
      const res = await loginRequest(user); // Realiza una solicitud de inicio de sesión utilizando la función loginRequest del archivo auth.js
      setUser(res.data); // Establece el usuario autenticado
      setIsAuthenticated(true); // Establece el estado de autenticación en verdadero
    } catch (error) { // Si hay un error
      console.log(error); // Muestra el mensaje de error en la consola
      // setErrors(error.response.data.message); // Establece el estado de errores
    }
  };
  const logout = () => { // Define una función para cerrar sesión
    Cookies.remove("token"); // Elimina la cookie de token
    setUser(null); // Establece el usuario en nulo
    setIsAuthenticated(false); // Establece el estado de autenticación en falso
  };
  useEffect(() => { // Define un efecto para verificar el estado de autenticación del usuario
    const checkLogin = async () => { // Define una función asincrónica para verificar el estado de autenticación del usuario
      const cookies = Cookies.get(); // Obtiene las cookies
      if (!cookies.token) { // Si no hay una cookie de token
        setIsAuthenticated(false); // Establece el estado de autenticación en falso
        setLoading(false); // Finaliza la carga
        return;
      }
      try {
        const res = await verifyTokenRequest(cookies.token); // Verifica el token utilizando la función verifyTokenRequest del archivo auth.js
        console.log(res); // Muestra la respuesta en la consola
        if (!res.data) return setIsAuthenticated(false); // Si el token no es válido, establece el estado de autenticación en falso
        setIsAuthenticated(true); // Establece el estado de autenticación en verdadero
        setUser(res.data); // Establece el usuario autenticado
        setLoading(false); // Finaliza la carga
      } catch (error) { // Si hay un error
        setIsAuthenticated(false); // Establece el estado de autenticación en falso
        setLoading(false); // Finaliza la carga
      }
    };
    checkLogin(); // Ejecuta la función para verificar el estado de autenticación del usuario
  }, []);
  return ( // Devuelve el proveedor de autenticación con el contexto y los componentes secundarios
    <AuthContext.Provider
      value={{
        user,
        signup,
        signin,
        logout,
        isAuthenticated,
        errors,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export default AuthContext; // Exporta el contexto de autenticación