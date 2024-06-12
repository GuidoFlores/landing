let loaded = (eventLoaded) => {

    window.alert("landing page loaded");
    console.log(eventLoaded);
    debugger;

    let myform = document.getElementById('formulario');

    myform.addEventListener('submit', (eventSubmit) => {

        eventSubmit.preventDefault();

        let nombreValue = nombre.value;

        // Validación del contenido del input 

        if (nombreValue.length == 0) {

            nombre.focus()

            alert('Ingrese un texto válido')

            return;
        }

        let correoValue = correo.value;

        if(correoValue.length == 0){

            correo.focus()

            alert('Ingrese un correo válido')

            return;
        }

        debugger;

    })
}

window.addEventListener("DOMContentLoaded", loaded);