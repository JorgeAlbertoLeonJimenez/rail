import { connection } from "./db.js";
import express from "express";
const app = express();
const port = 3000;

// Middleware para parsear JSON
app.use(express.json());

// Ruta de ejemplo
app.get("/", (req, res) => {
  res.send("¡Hola, mundo!");
});
app.get('/usuarios', async ( req,res)=> {
    const [usuarios] = await connection.query('SELECT * FROM usuarios')
    res.status(200).json(usuarios)
})
// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
