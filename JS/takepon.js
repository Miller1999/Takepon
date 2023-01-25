let ataqueJugador
let ataEnemigo
let vidasJugador = 3
let vidasEnemigo = 3

let seccionSeleccionarAtaque = document.getElementById("selAtaque")
seccionSeleccionarAtaque.style.display = "none";
let seccionReiniciar = document.getElementById("reiniciar")
seccionReiniciar.style.display = "none"
let botonMascotaJugador = document.getElementById("boton-mascota");
botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador);
let botonFuego = document.getElementById("boton-fuego")
botonFuego.addEventListener('click',ataqueFuego)
let botonAgua = document.getElementById("boton-agua")
botonAgua.addEventListener('click', ataqueAgua)
let botonTierra = document.getElementById("boton-tierra")
botonTierra.addEventListener('click', ataqueTierra)
let botonReiniciar = document.getElementById("boton-reiniciar")
botonReiniciar.addEventListener('click', reiniciarJuego)

function seleccionarMascotaJugador(){
    seccionSeleccionarAtaque.style.display = "block"
    let seccionSeleccionarMascota = document.getElementById("selMascota")
    seccionSeleccionarMascota.style.display = "none"
    let inputWailzemonk = document.getElementById("Wailmezonk");
    let inputSkiploont = document.getElementById("Skiploont");
    let inputFennecros = document.getElementById("Fennecros");
    let spanMascotaJugador = document.getElementById("mascota-jugador");
    if(inputWailzemonk.checked == true)
    {
        spanMascotaJugador.innerHTML = "Wailzemonk"
    }
    else if(inputSkiploont.checked == true)
    {
        spanMascotaJugador.innerHTML = "Skiploont"
    }
    else if(inputFennecros.checked == true)
    {
        spanMascotaJugador.innerHTML = "Fennecros"
    }
    else{
        alert("No escogiste ningun takepon")
    }
    seleccionarMascotaEnemigo()
}

function seleccionarMascotaEnemigo(){
  let takeponEnemigo = aleatorio(1,3);
  let spanMascotaEnemigo = document.getElementById("mascota-enemigo");
  if(takeponEnemigo == 1){
    spanMascotaEnemigo.innerHTML = "Wailzemonk"
  } else if (takeponEnemigo == 2){
    spanMascotaEnemigo.innerHTML = "Skiploont"
  } else if(takeponEnemigo == 3){
    spanMascotaEnemigo.innerHTML = "Fennecros"
  }
}

function aleatorio(min,max){
  return Math.floor(Math.random()*(max-min+1)+min);
}

function ataqueAgua(){
  ataqueJugador = "AGUA"
  ataqueEnemigo()
}
function ataqueFuego(){
  ataqueJugador = "FUEGO"
  ataqueEnemigo()
}
function ataqueTierra(){
  ataqueJugador = "TIERRA"
  ataqueEnemigo()
}
function ataqueEnemigo(){
  let ataqueAleatorio = aleatorio(1,3)
  if(ataqueAleatorio == 1){
    ataEnemigo = "FUEGO"
  } else if (ataqueAleatorio == 2){
    ataEnemigo = "AGUA"
  } else if(ataqueAleatorio == 3){
    ataEnemigo = "TIERRA"
  }
  combate()
}

function combate(){
  let spanVidasJugador = document.getElementById("vidas-jugador")
  let spanVidasEnemigo = document.getElementById("vidas-enemigo")
  if (ataqueJugador == ataEnemigo) {
    crearMensaje("EMPATE")
  } else if (ataqueJugador == "FUEGO" && ataEnemigo == "TIERRA") {
      crearMensaje("GANASTE")
      vidasEnemigo--
      spanVidasEnemigo.innerHTML = vidasEnemigo
  } else if (ataqueJugador == "AGUA" && ataEnemigo == "FUEGO") {
      crearMensaje("GANASTE")
      vidasEnemigo--
      spanVidasEnemigo.innerHTML = vidasEnemigo
  } else if (ataqueJugador == "TIERRA" && ataEnemigo == "AGUA") {
      crearMensaje("GANASTE")
      vidasEnemigo--
      spanVidasEnemigo.innerHTML = vidasEnemigo
  } else {
      crearMensaje("PERDISTE")
      vidasJugador--;
      spanVidasJugador.innerHTML = vidasJugador
  } 
  revisarVidas()
}

function revisarVidas(){
  if(vidasEnemigo == 0){
    crearMensajeFinal("FELICIDADES ERES UN MAESTRO TAKEPON")
  }else if (vidasJugador == 0){
    crearMensajeFinal("ENTRENA MAS!!!!")
  }
}

function crearMensaje(resultado){
  let seccionMensajes = document.getElementById("mensajes")
  let parrafo = document.createElement("p")
  parrafo.innerHTML = "Tu takepon ataco con " + ataqueJugador  + ", el takepon del enemigo ataco con " + ataEnemigo + " " + resultado;
  seccionMensajes.appendChild(parrafo)
}

function crearMensajeFinal(resultadoFinal){
  let seccionMensajes = document.getElementById("mensajes")
  let parrafo = document.createElement("p")
  parrafo.innerHTML = resultadoFinal
  seccionMensajes.appendChild(parrafo)
  let botonFuego = document.getElementById("boton-fuego")
  botonFuego.disabled = true
  let botonAgua = document.getElementById("boton-agua")
  botonAgua.disabled = true
  let botonTierra = document.getElementById("boton-tierra")
  botonTierra.disabled = true
  seccionReiniciar.style.display = "block"
}

function reiniciarJuego(){
  location.reload()
}