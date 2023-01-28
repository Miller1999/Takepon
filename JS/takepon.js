//Elementos del HTML
const seccionSeleccionarAtaque = document.getElementById("selAtaque")
const seccionReiniciar = document.getElementById("reiniciar")
const botonMascotaJugador = document.getElementById("boton-mascota");
const botonReiniciar = document.getElementById("boton-reiniciar")
//Elementos HTML que estaban dentro de funcion seleccionarMascotaJugador
const seccionSeleccionarMascota = document.getElementById("selMascota")
const spanMascotaJugador = document.getElementById("mascota-jugador");
//Elementos HTML que estaban dentro de funcion seleccionarMascotaEnemigo
const spanMascotaEnemigo = document.getElementById("mascota-enemigo");
//Elementos HTML que estaban dentro de funcion combate
const spanVidasJugador = document.getElementById("vidas-jugador")
const spanVidasEnemigo = document.getElementById("vidas-enemigo")
//Elementos HTML que estaban en la funcion crear mensaje
const seccionMensajes = document.getElementById("resultado")
const ataquesdelJugador = document.getElementById("ataquedelJugador")
const ataquesdelEnemigo = document.getElementById("ataquedelEnemigo")
//Elementos HTML que estaban en la funcion crear mensaje final
//let seccionMensajes = document.getElementById("resultado")
//let botonFuego = document.getElementById("boton-fuego")
//let botonAgua = document.getElementById("boton-agua")
//let botonTierra = document.getElementById("boton-tierra")
const contenedorTarjetas = document.getElementById("contenedor-tarjetas")
const contenedorAtaques = document.getElementById("contenedorAtaques")

let takepones = []
let ataqueJugador = []
let ataEnemigo = []
let opcionDeTakepon
let inputWailzemonk
let inputSkiploont
let inputFennecros
let mascotaJugador
let ataquesTakepon
let ataquesTakeponEnemigo
let botonFuego
let botonAgua
let botonTierra
let botones = []
let indexAtaqueJugador
let indexAtaqueEnemigo
let victoriasJugador = 0
let victoriasEnemigo = 0
let vidasJugador = 3
let vidasEnemigo = 3

class Takepon{
  constructor(nombre,foto,vida){
    this.nombre = nombre
    this.foto = foto
    this.vida = vida
    this.ataques = []
  }
}

let wailmezonk = new Takepon("Wailzemonk",'./Imagenes/Wailmezonk.jpg', 5)
let skiploont = new Takepon("Skiploont",'./Imagenes/Skiploont.jpg',5)
let fennecros = new Takepon("Fennecros",'./Imagenes/Fennecros.jpg',5)

wailmezonk.ataques.push(
  {nombre: "💧", id: "boton-agua"},
  {nombre: "💧", id: "boton-agua"},
  {nombre: "💧", id: "boton-agua"},
  {nombre: "🔥", id: "boton-fuego"},
  {nombre: "🌱", id: "boton-tierra"}
)
skiploont.ataques.push(
  {nombre: "💧", id: "boton-agua"},
  {nombre: "🔥", id: "boton-fuego"},
  {nombre: "🌱", id: "boton-tierra"},
  {nombre: "🌱", id: "boton-tierra"},
  {nombre: "🌱", id: "boton-tierra"}
)
fennecros.ataques.push(
  {nombre: "💧", id: "boton-agua"},
  {nombre: "🔥", id: "boton-fuego"},
  {nombre: "🔥", id: "boton-fuego"},
  {nombre: "🔥", id: "boton-fuego"},
  {nombre: "🌱", id: "boton-tierra"}
)

takepones.push(wailmezonk,skiploont,fennecros)

seccionSeleccionarAtaque.style.display = "none";
seccionReiniciar.style.display = "none"
botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador);
botonReiniciar.addEventListener('click', reiniciarJuego)

takepones.forEach((takepon) => {
  opcionDeTakepon = `
  <input type="radio" name="mascota" id=${takepon.nombre}>
  <label class="tarjeta-takepon" for=${takepon.nombre}>
      <p>${takepon.nombre}</p>
      <img src=${takepon.foto} alt=${takepon.nombre}>
  </label>
  `
  contenedorTarjetas.innerHTML +=  opcionDeTakepon

  inputWailzemonk = document.getElementById("Wailzemonk")
  inputSkiploont  = document.getElementById("Skiploont")
  inputFennecros = document.getElementById("Fennecros")
})

function seleccionarMascotaJugador(){
    seccionSeleccionarAtaque.style.display = "flex"
    seccionSeleccionarMascota.style.display = "none"
    if(inputWailzemonk.checked == true)
    {
        spanMascotaJugador.innerHTML = inputWailzemonk.id
        mascotaJugador = inputWailzemonk.id
    }
    else if(inputSkiploont.checked == true)
    {
        spanMascotaJugador.innerHTML = inputSkiploont.id
        mascotaJugador = inputSkiploont.id
    }
    else if(inputFennecros.checked == true)
    {
        spanMascotaJugador.innerHTML = inputFennecros.id
        mascotaJugador = inputFennecros.id
    }
    else{
        alert("No escogiste ningun takepon")
    }
    extraerAtaques(mascotaJugador)
    seleccionarMascotaEnemigo()
}

function extraerAtaques(mascotaJugador){
  let ataques
  for(let i = 0;i<takepones.length;i++)
  {
    if(mascotaJugador === takepones[i].nombre){
      ataques = takepones[i].ataques
    }
  }
  mostrarAtaques(ataques)
}

function mostrarAtaques(ataques){
  ataques.forEach((ataque)=>{
    ataquesTakepon = `
    <button id=${ataque.id} class="botonAtaque BAtaque">${ataque.nombre}</button>
    `
    contenedorAtaques.innerHTML += ataquesTakepon
  })
  botonFuego = document.getElementById("boton-fuego")
  botonAgua = document.getElementById("boton-agua")
  botonTierra = document.getElementById("boton-tierra")
  botones = document.querySelectorAll(".BAtaque")
}

function secuenciaAtaque(){
  botones.forEach((boton)=>{
    boton.addEventListener('click',(e) => {
      if(e.target.textContent === "🔥"){
        ataqueJugador.push("FUEGO")
        console.log(ataqueJugador)
        boton.disabled = true
      }else if(e.target.textContent === "💧"){
        ataqueJugador.push("AGUA")
        console.log(ataqueJugador)
        boton.disabled = true
      }else if(e.target.textContent === "🌱"){
        ataqueJugador.push("TIERRA")
        console.log(ataqueJugador)
        boton.disabled = true
      }
      ataqueEnemigo()
    })
  })
  
}

function seleccionarMascotaEnemigo(){
  let takeponEnemigo = aleatorio(0,takepones.length-1);
  spanMascotaEnemigo.innerHTML = takepones[takeponEnemigo].nombre
  ataquesTakeponEnemigo = takepones[takeponEnemigo].ataques
  secuenciaAtaque()
}

function ataqueEnemigo(){
  let ataqueAleatorio = aleatorio(0,takepones.length-1)
  if(ataqueAleatorio == 0 || ataqueAleatorio == 1){
    ataEnemigo.push("FUEGO")
  } else if (ataqueAleatorio == 3 || ataqueAleatorio == 4){
    ataEnemigo.push("AGUA")
  } else{
    ataEnemigo.push("TIERRA")
  }
  console.log(ataEnemigo)
  iniciarPelea()
}

function iniciarPelea(){
  if(ataqueJugador.length === 5){
    combate()
  }
}

function indexAmbosOponentes(jugador,enemigo){
  indexAtaqueJugador = ataqueJugador[jugador]
  indexAtaqueEnemigo = ataEnemigo[enemigo]
}

function combate(){

  for(let i = 0; i < ataqueJugador.length; i++){
    if(ataqueJugador[i] === ataEnemigo[i]){
      indexAmbosOponentes(i,i)
      crearMensaje("EMPATE")
    } else if (ataqueJugador[i] == "FUEGO" && ataEnemigo[i] == "TIERRA") {
      indexAmbosOponentes(i,i)
      crearMensaje("GANASTE")
      victoriasJugador++
      spanVidasJugador.innerHTML = victoriasJugador
    }  else if (ataqueJugador[i] == "AGUA" && ataEnemigo[i] == "FUEGO") {
      indexAmbosOponentes(i,i)
      crearMensaje("GANASTE")
      victoriasJugador++
      spanVidasJugador.innerHTML = victoriasJugador
    } else if (ataqueJugador[i] == "TIERRA" && ataEnemigo[i] == "AGUA") {
      indexAmbosOponentes(i,i)
      crearMensaje("GANASTE")
      victoriasJugador++
      spanVidasJugador.innerHTML = victoriasJugador
    } else {
      indexAmbosOponentes(i,i)
      crearMensaje("PERDISTE")
      victoriasEnemigo++
      spanVidasEnemigo.innerHTML = victoriasEnemigo
    } 
  }

  revisarVictorias()
}

function revisarVictorias(){
  if(victoriasJugador === victoriasEnemigo){
    crearMensajeFinal("DESEMPATE")
  }else if (victoriasJugador > victoriasEnemigo){
    crearMensajeFinal("ERES UN MAESTRO TAKEPON")
  }else{
    crearMensajeFinal("ENTRENA MAS!!")
  }
}

function crearMensaje(resultado){
  let nuevoataquedelJugador = document.createElement('p')
  let nuevoataquedelEnemigo = document.createElement('p')

  seccionMensajes.innerHTML = resultado
  nuevoataquedelJugador.innerHTML = indexAtaqueJugador
  nuevoataquedelEnemigo.innerHTML = indexAtaqueEnemigo

  ataquesdelJugador.appendChild(nuevoataquedelJugador)
  ataquesdelEnemigo.appendChild(nuevoataquedelEnemigo)
}

function crearMensajeFinal(resultadoFinal){
  seccionMensajes.innerHTML = resultadoFinal
  seccionReiniciar.style.display = "block"
}

function aleatorio(min,max){
  return Math.floor(Math.random()*(max-min+1)+min);
}

function reiniciarJuego(){
  location.reload()
}
