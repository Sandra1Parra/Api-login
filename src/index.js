
import app from "./app.js"; // Importa la instancia de la aplicación Express desde el archivo "app.js".
import { PORT } from "./config.js"; // Importa el puerto desde el archivo "config.js".
import { connectDB } from "./db.js"; // Importa la función para conectar a la base de datos desde el archivo "db.js".

async function main() {
  try {
    await connectDB(); // Conecta a la base de datos.
    app.listen(PORT); // Inicia el servidor en el puerto especificado.
    console.log(`Listening on port http://localhost:${PORT}`); // Imprime un mensaje indicando el puerto en el que está escuchando el servidor.
    console.log(`Environment: ${process.env.NODE_ENV}`); // Imprime el entorno de ejecución actual.
  } catch (error) {
    console.error(error); // Imprime cualquier error que ocurra.
  }
}

main(); // Ejecuta la función principal para iniciar el servidor y conectar a la base de datos.
