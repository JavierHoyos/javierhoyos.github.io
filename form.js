const btnEnvio = document.getElementById('enviarCorreo');

btnEnvio.addEventListener('click', function(e){
    e.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const tema = document.getElementById('tema').value;
    const mensaje = document.getElementById('mensaje').value;

    window.location.href=`mailto:hoyosjavier56@gmail.com?subject=envioDesdeFormulario&body=Nombre%${nombre}%0ACorreo%${email}%0Aasunto%3${tema}%0Amensaje%3A${mensaje}`;
});
