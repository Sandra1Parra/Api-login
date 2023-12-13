import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./context/authContext";
// Componente de ruta protegida
export const ProtectedRoute = () => {
  const { isAuthenticated, loading } = useAuth();
  if (loading) return <h1>Loading...</h1>; // Si se está cargando, muestra el mensaje "Loading..."
  if (!isAuthenticated && !loading) return <Navigate to="/login" replace />; // Si no está autenticado y no se está cargando, redirige a la página de inicio de sesión
  return <Outlet />; // Si está autenticado, muestra el contenido de la ruta protegida
};