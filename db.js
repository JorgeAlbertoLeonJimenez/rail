import { createPool } from "mysql2/promise";
import { config } from "dotenv";
config()
// Crear un pool de conexiones
export const connection = createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
  });

// Función para conectar y probar la conexión
async function testConnection() {
  try {
    const conn = await connection.getConnection();
    console.log('Conectado exitosamente como ID ' + conn.threadId);
    conn.release(); // Liberar la conexión después de usarla
  } catch (err) {
    console.error('Error conectando: ' + err.stack);
  }
}

// Llamar a la función para probar la conexión
testConnection();
