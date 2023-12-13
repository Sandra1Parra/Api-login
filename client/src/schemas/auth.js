import { z } from "zod";
// Esquema de validación para el inicio de sesión
export const loginSchema = z.object({
  email: z.string().email({
    message: "Por favor ingrese una direccion de correo valida", // Mensaje de error si el email no es válido
  }),
  password: z.string().min(6, {
    message: "La contraseña debe tener al menos 6 caracteres", // Mensaje de error si la contraseña tiene menos de 6 caracteres
  }),
});
// Esquema de validación para el registro
export const registerSchema = z.object({
  username: z.string().min(3, {
    message: "El nombre de usuario debe tener al menos 3 caracteres", // Mensaje de error si el nombre de usuario tiene menos de 3 caracteres
  }),
  email: z.string().email({
    message: "Por favor ingrese una direccion de correo valida", // Mensaje de error si el email no es válido
  }),
  password: z.string().min(6, {
    message: "La contraseña debe tener al menos 6 caracteres", // Mensaje de error si la contraseña tiene menos de 6 caracteres
  }),
  confirmPassword: z.string().min(6, {
    message: "La contraseña debe tener al menos 6 caracteres", // Mensaje de error si la contraseña de confirmación tiene menos de 6 caracteres
  }),
}).refine((data) => data.password === data.confirmPassword, {
  message: "La contraseña no coincide", // Mensaje de error si las contraseñas no coinciden
  path: ["confirmPassword"], // Ruta del campo en el que se produce el error
});