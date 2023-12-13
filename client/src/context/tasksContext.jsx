import { createContext, useContext, useState } from "react";
import {
  createTaskRequest,
  deleteTaskRequest,
  getTasksRequest,
  getTaskRequest,
  updateTaskRequest,
} from "../api/tasks";
const TaskContext = createContext(); // Crea un contexto para las tareas
export const useTasks = () => {
  const context = useContext(TaskContext); // Obtiene el contexto de las tareas utilizando la función useContext
  if (!context) throw new Error("useTasks must be used within a TaskProvider"); // Lanza un error si el contexto no está disponible
  return context; // Devuelve el contexto de las tareas
};
export function TaskProvider({ children }) {
  const [tasks, setTasks] = useState([]); // Define el estado de las tareas
  const getTasks = async () => { // Define una función asincrónica para obtener las tareas
    const res = await getTasksRequest(); // Realiza una solicitud para obtener las tareas utilizando la función getTasksRequest del archivo tasks.js
    setTasks(res.data); // Establece las tareas en el estado
  };
  const deleteTask = async (id) => { // Define una función asincrónica para eliminar una tarea
    try {
      const res = await deleteTaskRequest(id); // Realiza una solicitud para eliminar una tarea utilizando la función deleteTaskRequest del archivo tasks.js
      if (res.status === 204) setTasks(tasks.filter((task) => task._id !== id)); // Si la solicitud es exitosa, elimina la tarea del estado
    } catch (error) {
      console.log(error); // Muestra el mensaje de error en la consola
    }
  };
  const createTask = async (task) => { // Define una función asincrónica para crear una tarea
    try {
      const res = await createTaskRequest(task); // Realiza una solicitud para crear una tarea utilizando la función createTaskRequest del archivo tasks.js
      console.log(res.data); // Muestra la respuesta en la consola
    } catch (error) {
      console.log(error); // Muestra el mensaje de error en la consola
    }
  };
  const getTask = async (id) => { // Define una función asincrónica para obtener una tarea
    try {
      const res = await getTaskRequest(id); // Realiza una solicitud para obtener una tarea utilizando la función getTaskRequest del archivo tasks.js
      return res.data; // Devuelve los datos de la tarea
    } catch (error) {
      console.error(error); // Muestra el mensaje de error en la consola
    }
  };
  const updateTask = async (id, task) => { // Define una función asincrónica para actualizar una tarea
    try {
      await updateTaskRequest(id, task); // Realiza una solicitud para actualizar una tarea utilizando la función updateTaskRequest del archivo tasks.js
    } catch (error) {
      console.error(error); // Muestra el mensaje de error en la consola
    }
  };
  return (
    <TaskContext.Provider
      value={{
        tasks,
        getTasks,
        deleteTask,
        createTask,
        getTask,
        updateTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}