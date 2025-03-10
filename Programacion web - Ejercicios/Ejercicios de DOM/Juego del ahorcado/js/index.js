let palabrasSecretas = ["Perro", "Gato", "Elefante", "Tigre", "León", "Jirafa", "Cebra", "Lobo", "Oso", "Águila"];
let intentos = 6;
let letrasUsadas = "";

function iniciarJuego() {
    document.getElementById("jugar").addEventListener("click", selectorPalabra);
    document.getElementById("reiniciar").addEventListener("click", selectorPalabra);
}

function selectorPalabra() {
    let palabra = palabrasSecretas [Math.floor(Math.random()*palabrasSecretas.length)];

    document.getElementById("intentosRestantes").innerText = 6;  
    document.getElementById("letrasUsadas").innerText = ""; 

    mostrarPalabraOculta(palabra);
    compararLetra(palabra.toUpperCase());
}

function mostrarPalabraOculta(palabra) {
    let palabraOculta = "_ ".repeat(palabra.length); //Hacemos esto para decirle la cantidad de veces que va a repetir "_ " que representaria la letra de cada palabra decimos que repita esto lo que mida la palabra 
    document.getElementById("palabraSecreta").innerText = palabraOculta;
}

function compararLetra (palabra) {
    document.getElementById("validarLetra").addEventListener("click", function () {

        let letra = document.getElementById("letra").value.toUpperCase();
        let coincidenciaLetra = false;
        
        for (let i = 0; i < palabra.length; i++) {
            if (letra == palabra[i]) {
                let _palabraOculta = document.getElementById("palabraSecreta").innerText;
                let palabraOculta = _palabraOculta.split(" ");

                palabraOculta [i] = letra;

            if (palabraOculta.join("") == palabra){
                alert("¡Felicidades ganaste!")
            }

            document.getElementById("palabraSecreta").innerText = palabraOculta.join(" ");

            coincidenciaLetra = true;
        }
    } 
    if (!coincidenciaLetra){
        document.getElementById("intentosRestantes").innerText = parseInt(document.getElementById("intentosRestantes").innerText) - 1; 
            if (parseInt(document.getElementById("intentosRestantes").innerText) == 0){
                alert("Te quedaste sin intentos.\n¡Haz perdido JAJAJA!")
            }
        }
    if (letrasUsadas.length == 0){
            letrasUsadas = letra;
            document.getElementById("letrasUsadas").innerText = letrasUsadas;
       }
        else{
            letrasUsadas = document.getElementById("letrasUsadas").innerText + ", " + letra;
            document.getElementById("letrasUsadas").innerText = letrasUsadas;
       }
    document.getElementById("letra").value = ""
    });
}

iniciarJuego();