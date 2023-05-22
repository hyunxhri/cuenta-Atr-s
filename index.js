let n = 9
let n2 = 9
let centenas = 0
let decenas = 0
let unidades = 0
let intervaloCuentaAtras
let intervaloCuentaAdelante
let intervaloCuentaReloj
let intervaloTemporizador
let pausadoCuentaAtras
let pausadoCuentaAdelante
let pausadoReloj
let pausadoTemporizador
let minuto = 1
let segundoDigito1 = 0
let segundoDigito2 = 0
// Funcion que se ejecuta al abrir la pagina y que define lo se hace cada segundo
function cuentaAtras() {
    // Con setInterval definimos acciones que se realizan cada cierto tiempo.
    // El tiempo se expresa en mil�simas de segundo.
    // En este caso se ejecuta marchaAtras cada segundo = 1000 milisegundos.
    pausadoCuentaAtras = false
    intervaloCuentaAtras = setInterval(marchaAtras, 1000)
}

// 
function marchaAtras() {
    // Esta instrucci�n ejecuta c�digo condicional.
    // La parte del 'if' si se cumple la condici�n y 
    // la del 'else' si no se cumple.
    if (n2 > 0) n2 = n2 - 1
    else if (n === 0 && n2 === 0){
        n = 9
        n2 = 9
    }
    else {
        n2 = 9
        n = n - 1
    }


    // Cambiamos parte de la p�gina usando DOM
    document.getElementById("cuenta").src = n + ".png"
    document.getElementById("cuenta2").src = n2 + ".png"
}

function cuentaAdelante(){
    pausadoCuentaAdelante = false 
    intervaloCuentaAdelante = setInterval(marchaAdelante, 1000)
}

function marchaAdelante(){

    if (unidades < 9 ) unidades++
    else {
        unidades = 0
        decenas++
    }

    if (decenas === 10 ) {
        decenas = 0
        centenas++
    }

    if (centenas === 10) {
        centenas = 0
        decenas = 0
        unidades = 0
    }

    document.getElementById("cuenta3").src = centenas + ".png"
    document.getElementById("cuenta4").src = decenas + ".png"
    document.getElementById("cuenta5").src = unidades + ".png"
}

function reloj(){

    if (reloj.match(/^([01]\d|2[0-3]):([0-5]\d):([0-5]\d)$/)) {
        pausadoReloj = false 
        let tiempoTotal = obtenerTiempoTotal(reloj)
        mostrarContador(tiempoTotal)
        intervaloCuentaReloj = setInterval(function() {
                            tiempoTotal--;
                            mostrarContador(tiempoTotal)

                            if (tiempoTotal <= 0) {
                                clearInterval()
                                alert("¡Tiempo finalizado!")
                            }
                        }, 1000);
    } else {
        alert("Formato de tiempo incorrecto. Utiliza el formato HH:MM:SS")
    }
}

function obtenerTiempoTotal(reloj) {
    let partes = reloj.split(":")
    let horas = parseInt(partes[0])
    let minutos = parseInt(partes[1])
    let segundos = parseInt(partes[2])
    let tiempoTotal = horas * 3600 + minutos * 60 + segundos
    return tiempoTotal
}

function mostrarContador(tiempoTotal) {
    let horas = Math.floor(tiempoTotal / 3600)
    let minutos = Math.floor((tiempoTotal % 3600) / 60)
    let segundos = tiempoTotal % 60

    if (horas <= 9) {
        document.getElementById("horadigito1").src = "0.png"
        document.getElementById("horadigito2").src = horas + ".png"
    } else {
        let horasDigitos = horas.toString().split("");
        document.getElementById("horadigito1").src = horasDigitos[0] + ".png"
        document.getElementById("horadigito2").src = horasDigitos[1] + ".png"
    }

    if (minutos <= 9) {
        document.getElementById("minutodigito1").src = "0.png"
        document.getElementById("minutodigito2").src = minutos + ".png"
    } else {
        let minutosDigitos = minutos.toString().split("");
        document.getElementById("minutodigito1").src = minutosDigitos[0] + ".png"
        document.getElementById("minutodigito2").src = minutosDigitos[1] + ".png"
    }

    if (segundos <= 9) {
        document.getElementById("segundodigito1").src = "0.png"
        document.getElementById("segundodigito2").src = segundos + ".png"
    } else {
        let segundosDigitos = segundos.toString().split("");
        document.getElementById("segundodigito1").src = segundosDigitos[0] + ".png"
        document.getElementById("segundodigito2").src = segundosDigitos[1] + ".png"
    }
}

function cuentaTemporizador(){
    pausadoTemporizador = false 
    intervaloTemporizador = setInterval(temporizador, 1000)
}

function temporizador(){

    if(minuto === 1) {
        minuto--
        segundoDigito1 = 5
        segundoDigito2 = 9  
    } 
    else if(minuto === 0 && segundoDigito1 === 0 && segundoDigito2 === 0){
        setTimeout(window.close, 1000)
    }
    else if (minuto === 0 && segundoDigito2 === 0) {
        segundoDigito1--
        segundoDigito2 = 9
    }else {
        segundoDigito2--
    }

    document.getElementById("digito2").src = minuto + ".png"
    document.getElementById("digito3").src = segundoDigito1 + ".png"
    document.getElementById("digito4").src = segundoDigito2 + ".png"

}

function resetearContador1(){
    n = 0
    n2 = 0
}

function pausarContador1(){
    clearInterval(intervaloCuentaAtras)
    return pausadoCuentaAtras = true 
}

function continuarContador1(){
    if(pausadoCuentaAtras){
        cuentaAtras()
    } else alert("No puedes continuar algo que no está pausado.")
}

function resetearContador2(){
    centenas = 10
}

function pausarContador2(){
    clearInterval(intervaloCuentaAdelante)
    return pausadoCuentaAdelante = true 
}

function continuarContador2(){
    if(pausadoCuentaAdelante){
        cuentaAdelante()
    } else alert("No puedes continuar algo que no está pausado.")
}

function pausarReloj(){
    clearInterval(intervaloCuentaReloj)
    return pausadoReloj = true
}

function continuarReloj(){
    if(pausadoReloj){
        reloj()
    } else alert("No puedes continuar algo que no está pausado.")
}


function resetearTemporizador(){
    minuto = 1
    segundoDigito1 = 0
    segundoDigito2 = 0
}

function pausarTemporizador(){
    clearInterval(intervaloCuentaReloj)
    return pausadoTemporizador = true 
}

function continuarTemporizador(){
    if(pausadoTemporizador){
        reloj()
    } else alert("No puedes continuar algo que no está pausado.")
}

