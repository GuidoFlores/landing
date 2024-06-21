let loaded = (eventLoaded) => {

    /*window.alert("landing page loaded");
    console.log(eventLoaded);
    debugger;*/

    let myform = document.getElementById('formulario');

    let urlBase = 'https://proyecto1-3a9b5-default-rtdb.firebaseio.com/collection.json'

    myform.addEventListener('submit', async (eventSubmit) => {

        eventSubmit.preventDefault();

        let nombreValue = myform.nombre.value.trim();
        let correoValue = myform.correo.value.trim();
        let apellidoValue = myform.apellido.value.trim();
        let ciudadValue = myform.ciudad.value.trim();


        // Validación del contenido del input 

        if (nombreValue === '' || correoValue === '' || apellidoValue === '' || ciudadValue === '') {

            alert('por favor ingrese todos los campos')

            return;
        }

        try{
            let respuesta = await fetch(urlBase, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({'nombre': nombreValue, 'apellido': apellidoValue , 'email': correoValue , 'ciudad': ciudadValue    })
            });

            if(!respuesta.ok){
                throw new Error('Hubo un problema al enviar los datos.');
            }

            window.location.href = 'index.html'
        }catch(error){
            console.error('Error:', error);
            alert('Hubo un problema al enviar los datos.');
        }

        debugger;
        

    });

    
}


async function obtenerDatos() {
    const url = "https://proyecto1-3a9b5-default-rtdb.firebaseio.com/collection.json"; // Reemplaza con la URL real de la API o recurso
    const respuesta = await fetch(url);
    if (!respuesta.ok) {
    console.error("Error:", respuesta.status);
    return;
    }
    const datos = await respuesta.json();
    console.log(datos); // Procesar o mostrar los datos obtenidos

    const ciudadCount = {};
    for (const key in datos) {
        if (datos.hasOwnProperty(key)) {
            const obj = datos[key];
            const ciudad = obj.ciudad;
            if (ciudadCount[ciudad]) {
                ciudadCount[ciudad]++;
            } else {
                ciudadCount[ciudad] = 1;
            }
        }
    }

    const tableBody = document.getElementById('tablebody');
    tableBody.innerHTML = '';

    for (const ciudad in ciudadCount) {
        if (ciudadCount.hasOwnProperty(ciudad)) {
            const conteo = ciudadCount[ciudad];
            let template = `
                <tr>
                    <td>${ciudad}</td>
                    <td>${conteo}</td>
                </tr>
            `;
            tableBody.innerHTML += template;
        }
    }
}


window.addEventListener("DOMContentLoaded", loaded);
obtenerDatos()


