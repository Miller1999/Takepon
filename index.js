//Importa la libreria
const express = require("express")
const cors = require("cors")
//Inicia la libreria
const app = express()

app.use(cors())
app.use(express.json())

const jugadores = []

class Jugador{
    constructor(id){
        this.id = id
    }
    asignarTakepon(takepon){
        this.takepon = takepon
    }
    actualizarPosicion(x, y){
        this.x = x
        this.y = y
    }
}
class Takepon{
    constructor(nombre){
        this.nombre = nombre
    }
}
//Recibir y responder peticiones endpoints
app.get("/unirse", (req,res) => {
    const id = `${Math.random()}`

    const jugador = new Jugador(id)

    jugadores.push(jugador)

    res.setHeader("Access-Control-Allow-Origin","*")

    res.send(id)
})
//buena practica cambiar cada nombre de servicio o endpoint
app.post("/takepon/:jugadorId",(req,res)=>{
    const jugadorId = req.params.jugadorId
    const nombre = req.body.takepon
    const takepon = new Takepon(nombre)
    
    const jugadorIndex = jugadores.findIndex((jugador)=> jugadorId === jugador.id)
    if(jugadorIndex >= 0){
        jugadores[jugadorIndex].asignarTakepon(takepon)
    }
    console.log(jugadores)
    console.log(jugadorId)
    res.end()
})

app.post("/takepon/:jugadorId/posicion", (req,res) => {
    const jugadorId = req.params.jugadorId
    const x = req.body.x||0
    const y = req.body.y||0
    const jugadorIndex = jugadores.findIndex((jugador)=> jugadorId === jugador.id)
    if(jugadorIndex >= 0){
        jugadores[jugadorIndex].actualizarPosicion(x,y)
    }
    res.end()
})

//Iniciar servidor
app.listen(8080, () =>{
    console.log("El servidor se inicio")
})