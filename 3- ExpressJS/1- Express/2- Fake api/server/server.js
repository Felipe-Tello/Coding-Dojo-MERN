const express = require("express");
const cors = require("cors");

const app = express();


//Para usar Json y obtener datos de URL
app.use( express.json(), express.urlencoded({ extended: true }) );


//Permitir accesar desde un origen distinto
app.use (
    cors( {
        origin: "http://localhost:3000",
        //Credenciales
        credentials: true
    })
)

//Importamos rutas
const fakerRoutes = require("./back-end/routes/faker.routes");
fakerRoutes(app);

//Ejecutamos server
const PORT = process.env.PORT || 8000
app.listen(PORT, () => console.log(`Server Express running on port ${PORT}!`));