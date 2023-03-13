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
//Inicializando DB
require("./back-end/configurations/mongoose.config"); 

//Importamos rutas
const jokeRoutes = require("./back-end/routes/joke.routes");
jokeRoutes(app);

//Ejecutamos server
const PORT = process.env.PORT || 8000
app.listen(PORT, () => console.log(`Server Express running on port ${PORT}!`));