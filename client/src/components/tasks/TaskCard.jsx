// Importar el contexto de las tareas y los componentes de botón y tarjeta de la biblioteca UI
import { useTasks } from "../../context/tasksContext";
import { Button, ButtonLink, Card } from "../ui";
// Función para renderizar una tarjeta de tarea
export function TaskCard({ task }) {
  // Obtener la función de eliminar tarea del contexto de tareas
  const { deleteTask } = useTasks();
  return (
    // Componente de tarjeta para mostrar la información de la tarea
    <Card>
      {/* Encabezado con el título y botones de eliminar y editar */}
      <header className="flex justify-between">
        <h1 className="text-2xl font-bold">{task.title}</h1>
        <div className="flex gap-x-2 items-center" >
          <Button onClick={() => deleteTask(task._id)}>Delete</Button>
          <ButtonLink to={`/tasks/${task._id}`}>Edit</ButtonLink>
        </div>
      </header>
      {/* Descripción de la tarea */}
      <p className="text-slate-300">{task.description}</p>
      {/* Formato de fecha */}
      <p>
        {task.date &&
          new Date(task.date).toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
      </p>
    </Card>
  );
}