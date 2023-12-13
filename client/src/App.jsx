import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { AuthProvider } from "./context/authContext";
import { ProtectedRoute } from "./routes";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import { TaskFormPage } from "./pages/TaskFormPage";
import { LoginPage } from "./pages/LoginPage";
import { TasksPage } from "./pages/TasksPage";
import { TaskProvider } from "./context/tasksContext";
function App() {
  return (
    <AuthProvider> // Proveedor de autenticación
      <TaskProvider> // Proveedor de tareas
        <BrowserRouter> // Enrutador principal
          <main className="container content-container mx-auto px-10 md:px-0"> // Contenedor principal
            <Navbar /> // Barra de navegación
            <Routes> // Rutas
              <Route path="/" element={<HomePage />} /> // Ruta para la página de inicio
              <Route path="/login" element={<LoginPage />} /> // Ruta para la página de inicio de sesión
              <Route path="/register" element={<RegisterPage />} /> // Ruta para la página de registro
              <Route element={<ProtectedRoute />}> // Ruta protegida
                <Route path="/tasks" element={<TasksPage />} /> // Ruta para la página de tareas
                <Route path="/add-task" element={<TaskFormPage />} /> // Ruta para la página de agregar tarea
                <Route path="/tasks/:id" element={<TaskFormPage />} /> // Ruta para la página de editar tarea
                <Route path="/profile" element={<h1>Profile</h1>} /> // Ruta para la página de perfil
              </Route>
            </Routes>
          </main>
        </BrowserRouter>
      </TaskProvider>
    </AuthProvider>
  );
}
export default App; // Exporta el componente App como el valor predeterminado
