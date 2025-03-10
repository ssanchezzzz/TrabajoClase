/*
Consumir el endPoint de la API del clima Open-Meteo: 
- https://open-meteo.com/
- https://open-meteo.com/en/docs
- Ejemplo de petición
https://api.open-meteo.com/v1/forecast?latitude=7.1254&longitude=-73.1198&current=temperature_2m&hourly=temperature_2m&timezone=auto&past_days=3&forecast_days=3


Características para desarrollar: 
 - Cuando el sitio cargue se debe mostrar un gráfico con datos de prueba y la tabla sin datos
 - Cuando el usuario de click al botón buscar se debe hacer la solicitud de los datos a la API
 - Al recibir la respuesta del servidor se deben mapear los datos en la tabla y en el gráfico.
 - En caso de no encontrar datos o presentar un error se debe reportar por consola"
*/



//Ejemplo de creación de Gráfico
const ctx = document.getElementById('grafico'); //Nos resferimos al elemento

new Chart(ctx, { //Instanciamos 
    type: 'line',
    data: {
        labels: ['2025-03-02T00:00', '2025-03-02T01:00', '2025-03-02T02:00', '2025-03-02T03:00', '2025-03-02T04:00'],
        datasets: [{
            label: 'Temperatura',
            data: [20.3, 20.5, 20.3, 20.1, 19.9, 19.7],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
  });

async function obtenerDatos() {
    try {
        let latitud = document.getElementById("latitud").value;
        let longitud = document.getElementById("longitud").value;
        let url = `https://api.open-meteo.com/v1/forecast?latitude=${latitud}&longitude=${longitud}&current=temperature_2m&hourly=temperature_2m&timezone=auto&past_days=3&forecast_days=3`;

        let respuesta = await fetch (url);

        if (respuesta.ok) {
            let datos = await respuesta.json();
            
            document.getElementById("v_lat").innerText = datos.latitude;
            document.getElementById("v_long").innerText = datos.longitude;
            document.getElementById("v_alt").innerText = datos.elevation;
            document.getElementById("v_zone").innerText = datos.timezone;
            document.getElementById("v_temp").innerText = datos.current.temperature_2m;

            //Funciones - Pendiente

            // document.getElementById("v_hour").innerText = "pendiente "
            
            // addData (Grafica, datos.hourly.time, datos.hourly.temperature_2m.slice(0,5))
        }

    } catch (error) {
        console.error("Error al obtener los datos:", error)
    } 
    
}

// function actualizarDato(label, newData) { 
//     if (Grafica) {
//         Grafica.destroy(); // Borra el gráfico anterior
//     }
//     myChart = new Chart(ctx, {
//         type: 'line',
//         data: {
//             labels: label,
//             datasets: [{
//                 label: 'Temperatura',
//                 data: newData,
//                 borderColor: 'blue',
//                 backgroundColor: 'rgba(0, 0, 255, 0.2)',
//                 borderWidth: 2
//             }]
//         },
//         options: {
//             scales: {
//                 y: { beginAtZero: false }
//             }
//         }
//     });
// }
document.getElementById("buscar_datos").addEventListener("click", obtenerDatos);