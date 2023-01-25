let ataqueJugador
let ataEnemigo
let botonMascotaJugador = document.getElementById("boton-mascota");
botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador);
let botonFuego = document.getElementById("boton-fuego")
botonFuego.addEventListener('click',ataqueFuego)
let botonAgua = document.getElementById("boton-agua")
botonAgua.addEventListener('click', ataqueAgua)
let botonTierra = document.getElementById("boton-tierra")
botonTierra.addEventListener('click', ataqueTierra)

function seleccionarMascotaJugador(){
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
  alert("Atacaste con AGUA")
  ataqueEnemigo()
}
function ataqueFuego(){
  ataqueJugador = "FUEGO"
  alert("Atacaste con FUEGO")
  ataqueEnemigo()
}
function ataqueTierra(){
  ataqueJugador = "TIERRA"
  alert("Atacaste con Tierra")
  ataqueEnemigo()
}
function ataqueEnemigo(){
  let ataqueAleatorio = aleatorio(1,3)
  if(ataqueAleatorio == 1){
    ataEnemigo = "FUEGO"
    alert("El enemigo ataco con FUEGO")
  } else if (ataqueAleatorio == 2){
    ataEnemigo = "AGUA"
    alert("El enemigo ataco con AGUA")
  } else if(ataqueAleatorio == 3){
    ataEnemigo = "TIERRA"
    alert("El enemigo ataco con TIERRA")
  }
  
}