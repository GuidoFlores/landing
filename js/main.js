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

        // Validación del contenido del input 

        if (nombreValue === '' || correoValue === '') {

            alert('por favor ingrese todos los campos')

            return;
        }

        try{
            let respuesta = await fetch(urlBase, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({'email': correoValue, 'nombre': nombreValue  })
            });

            if(!respuesta.ok){
                throw new Error('Hubo un problema al enviar los datos.');
            }

            window.location.href = 'index.html'
        }catch(error){
            console.error('Error:', error);
            alert('Hubo un problema al enviar los datos.');
        }

        /*if(correoValue.length == 0){

            correo.focus()

            alert('Ingrese un correo válido')

            return;
        }*/

        
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

    const tableBody = document.getElementById('tablebody');
        for (const key in datos) {
            if (datos.hasOwnProperty(key)) {
                const obj = datos[key];
                const categoria = obj.nombre
                const conteo = obj.email
                let template = `
                    <tr>
                        <td>${categoria}</td>
                        <td>${conteo}</td>
                    </tr>
                `;
                tableBody.innerHTML += template;
            }
        }
    }


window.addEventListener("DOMContentLoaded", loaded);
obtenerDatos()


