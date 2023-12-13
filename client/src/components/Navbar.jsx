// Importar el componente Link de react-router-dom y el contexto de autenticación
import { Link } from "react-router-dom";
import { useAuth } from "../context/authContext";
// Importar el componente ButtonLink de la biblioteca UI
import { ButtonLink } from "./ui/ButtonLink";

// Función para renderizar la barra de navegación
export function Navbar() {
  // Obtener el estado de autenticación, la función de cierre de sesión y el usuario del contexto de autenticación
  const { isAuthenticated, logout, user } = useAuth();
  console.log(isAuthenticated, user)

  return (
    // Componente de navegación con estilo y elementos de navegación
    <nav className="my-3 flex justify-between py-5 px-10 rounded-lg" style={{backgroundColor:"rgba(233, 184, 202, 1)", border: "2px solid rgba(0, 0, 0, 1)"}}>
      {/* Título del sitio */}
      <h1 className="text-2xl font-bold" style={{color:"rgba(0, 0, 0, 1)"}}>
        {/* Enlace al inicio o a la página de tareas según si el usuario está autenticado */}
        <Link to={isAuthenticated ? "/tasks" : "/"}>Fashion online</Link>
      </h1>
      {/* Lista de elementos de navegación */}
      <ul className="flex gap-x-2">
        {/* Si el usuario está autenticado, mostrar la bienvenida, el botón de agregar tarea y el botón de cerrar sesión */}
        {isAuthenticated ? (
          <>
            <li>
              Welcome {user.username}
            </li>
            <li>
              <ButtonLink to="/add-task">Add Task</ButtonLink>
            </li>
            <li>
              <Link to="/" onClick={() => logout()}>
                Logout
              </Link>
            </li>
          </>
        ) : (
          <>
            <li>
              {/* Si el usuario no está autenticado, mostrar los botones de inicio de sesión y registro */}
              <ButtonLink to="/login">ingresar</ButtonLink>
            </li>
            <li>
              <ButtonLink to="/register">Registrarte</ButtonLink>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}
