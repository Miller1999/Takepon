//Importa la libreria
const express = require("express")
//Inicia la libreria
const app = express()
//Recibir y responder peticiones
app.get("/", (req,res) => {
    res.send("Hola")
})
//Iniciar servidor
app.listen(8080, () =>{
    console.log("El servidor se inicio")
})