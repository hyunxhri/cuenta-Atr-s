let n = 9
let n2 = 9
let centenas = 0
let decenas = 0
let unidades = 0
let intervaloCuentaAtras
let intervaloCuentaAdelante
let intervaloCuentaReloj
let intervaloTemporizador
let pausado 
let minuto = 1
let segundoDigito1 = 0
let segundoDigito2 = 0
// Funcion que se ejecuta al abrir la pagina y que define lo se hace cada segundo
function cuentaAtras() {
    // Con setInterval definimos acciones que se realizan cada cierto tiempo.
    // El tiempo se expresa en mil�simas de segundo.
    // En este caso se ejecuta marchaAtras cada segundo = 1000 milisegundos.
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
    pausado = false 
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

function cuentaReloj(){
    pausado = false 
    intervaloCuentaReloj = setInterval(reloj, 1000)
}

function reloj(){

    const reloj = new Date()
    const hora = reloj.getHours().toString()
    const minuto = reloj.getMinutes().toString()
    const segundo = reloj.getSeconds().toString()

    if (hora <= 9){
        document.getElementById("horadigito1").src = "0.png"
        document.getElementById("horadigito2").src = hora + ".png"
    } else {
        document.getElementById("horadigito1").src = hora[0] + ".png"
        document.getElementById("horadigito2").src = hora[1] + ".png"
    }
    if (minuto <= 9){
        document.getElementById("minutodigito1").src = "0.png"
        document.getElementById("minutodigito2").src = minuto + ".png"
    } else {
        document.getElementById("minutodigito1").src = minuto[0] + ".png"
        document.getElementById("minutodigito2").src = minuto[1] + ".png"
    }
    if (segundo <= 9){
        document.getElementById("segundodigito1").src = "0.png"
        document.getElementById("segundodigito2").src = segundo + ".png"
    
    } else {
        document.getElementById("segundodigito1").src = segundo[0] + ".png"
        document.getElementById("segundodigito2").src = segundo[1] + ".png"
    }
}


function cuentaTemporizador(){
    pausado = false 
    intervaloTemporizador = setInterval(temporizador, 100)
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

function resetear(){
    n = 0
    n2 = 0
    centenas = 10
    minuto = 1
    segundoDigito1 = 0
    segundoDigito2 = 0
}

function pausar(){
    clearInterval(intervaloCuentaAtras)
    clearInterval(intervaloCuentaAdelante)
    clearInterval(intervaloCuentaReloj)
    clearInterval(intervaloTemporizador)
    return pausado = true 
}

function continuar(){
    if(pausado){
        cuentaAtras()
        cuentaAdelante()
        cuentaReloj()
        cuentaTemporizador()
    } else alert("No puedes continuar algo que no está pausado.")
}