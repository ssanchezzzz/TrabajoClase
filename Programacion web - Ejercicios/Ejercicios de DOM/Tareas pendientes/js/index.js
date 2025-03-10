let listadoTareas = document.querySelector("ol"); //.querySelector nos permite seleccionar el primer elemento que coincida con lo que le pasamos por parametro, con este seleccionamos nuestra lista para mas adelante añadir los datos

document.getElementById("subirTarea").addEventListener("click", function () {
    let li = document.createElement("li"); //Creamos un elemento tipo li, pero esta "volando" no lo hemos relacionado con la lista
    let texto = document.getElementById("recibirTarea").value;
    if (texto.trim() === "") { //.trim() se encarga de eliminar los espacios al inicio o al final con eso evitamos cosas como "    " se añadan a la lista
        alert("¡Tienes que ingresar algo para en listar tu tarea!")
    }
    else{
        li.innerText = texto; //Le pasamos el valor que va a contener
        listadoTareas.appendChild(li); //Lo adjuntamos a nuestra lista
    }
    li.addEventListener("click", function () { //En el momento que se haga click sobre algun li se activa esta funcion
        li.classList.toggle("tachar"); //toggle se encarga de añadir o retirar el elemento de la clase que le pasamos por parametros 
    });

    document.getElementById("recibirTarea").value = ""; //Vaciamos el input 
})

