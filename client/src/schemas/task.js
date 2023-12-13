import { z } from "zod";
// Esquema de validación para una tarea
export const taskSchema = z.object({
  title: z.string({
    required_error: "Title is required", // Mensaje de error si el título no está presente
  }),
  description: z.string({
    required_error: "Description is required", // Mensaje de error si la descripción no está presente
  }),
});
