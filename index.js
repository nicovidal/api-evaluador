const express=require('express')
require("dotenv").config();
const cors = require("cors");


// Server Express
const app = express();


// Leer y parsear el body
app.use(express.json());

app.use(cors({
    origin: "*", 
    methods: ["GET", "POST", "PUT", "DELETE"], 
    allowedHeaders: ["Content-Type", "Authorization"] 
  }));

// Escuchar peticiones
app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en el puerto ${process.env.PORT}`);
    console.log("Documentación en: http://localhost:" + process.env.PORT + "/api-evaluador");

  });