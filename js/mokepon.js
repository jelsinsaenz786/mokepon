function iniciarJuego() {
    let botonMascotaJugador = document.getElementById("boton-mascotas")
botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador)
}
function seleccionarMascotaJugador(){
    let inputHipodoge = document.getElementById("Hipodoge")
    let inputCapipepo = document.getElementById("Capipepo")
    let inputRatigueya = document.getElementById("Ratigueya")

    if(inputHipodoge.checked){
        alert("seleccionaste a Hipodoge")
    }else if (inputCapipepo.checked){
        alert("seleccionaste a Capipepo")
    }else if (inputRatigueya.checked){
        alert("seleccionaste a Ratigueya")
    }else {
        alert("Selecciona una mascota")
    }
       
        

}

window.addEventListener("load", iniciarJuego)