// Importar la biblioteca axios desde el archivo "axios"
import axios from "./axios";
// Función para realizar una solicitud GET de obtener todas las tareas
export const getTasksRequest = async () => axios.get("/tasks");
// Función para realizar una solicitud POST de crear una nueva tarea
export const createTaskRequest = async (task) => axios.post("/tasks", task);
// Función para realizar una solicitud PUT de actualizar una tarea existente
export const updateTaskRequest = async (task) =>
  axios.put(`/tasks/${task._id}`, task);
// Función para realizar una solicitud DELETE de eliminar una tarea
export const deleteTaskRequest = async (id) => axios.delete(`/tasks/${id}`);
// Función para realizar una solicitud GET de obtener una tarea específica por su ID
export const getTaskRequest = async (id) => axios.get(`/tasks/${id}`);
