document.addEventListener('DOMContentLoaded', function() {
    const formulario = document.getElementById('formulario');

    formulario.addEventListener('submit', function(event) {
        event.preventDefault(); // Evitar el envío del formulario

        // Obtener los datos del formulario
        const nombre = document.getElementById('nombre').value;
        const email = document.getElementById('email').value;
        const mensaje = document.getElementById('mensaje').value;

        // Crear un objeto con los datos
        const datosFormulario = {
            nombre: nombre,
            email: email,
            mensaje: mensaje
        };

        // Guardar los datos en el almacenamiento local (Local Storage)
        localStorage.setItem('datosFormulario', JSON.stringify(datosFormulario));

        // Mostrar un mensaje de confirmación
        alert('Formulario enviado y datos guardados en Local Storage');

        // Opcional: Limpiar el formulario después de enviar
        formulario.reset();
    });
});