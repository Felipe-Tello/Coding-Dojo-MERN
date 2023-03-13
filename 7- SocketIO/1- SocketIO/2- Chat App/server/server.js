const express = require("express");
const cors = require("cors");
const http = require("http");

const app = express();

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////    SOCKET.IO    //////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Importamos la clase server desde la libreria de Socket.IO
const { Server } = require("socket.io")
//La variable server usa la libreria "http" para generar un servidor a traves de la app
const server = http.createServer(app);
//Conectamos el sevidor de Socket.io con el servidor de Express
//Le decimos la servidor cual sera la URL donde estara corriendo la aplicacion y cuales methodos soporta (GET & POST)
const io = new Server(server, {
    path: '/socket.io',
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"],
    },
});
// el evento "connection" esta a la escucha de un evento cuando un usuario se conecta al servidor mediante "socket.id" 
io.on("connection", (socket) => {
    console.log(`User Connected: ${socket.id}`);
    socket.on("join_room", (data) => {
        socket.join(data);
        console.log(`User with ID: ${socket.id} joined room: ${data}`);
    });
    socket.on("send_message", (data) => {
        socket.to(data.room).emit("receive_message", data)
    });
    socket.on("disconnect", () => {
        console.log("User disconnected", socket.id)
    });
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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

//Ejecutamos server
const PORT = process.env.PORT || 8000
app.listen(PORT, () => console.log(`Server Express running on port ${PORT}!`));
server.listen(8001, () => {console.log("Server Socket.io running on port 8001!")})