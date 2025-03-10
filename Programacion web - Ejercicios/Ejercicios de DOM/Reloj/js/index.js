function iniciarReloj() {
    document.getElementById("btnReloj").addEventListener("click", crearReloj)
}

function crearReloj() {
    let fecha = new Date()
    let apartado = document.querySelector("section");
    let p = document.createElement("p");
    p.innerText = fecha.getHours + ":" + fecha.getMinutes + ":" + fecha.getSeconds
    apartado.appendChild(p);
}