const btnEnvio = document.getElementById('enviarCorreo');

btnEnvio.addEventListener('click', function(e){
    e.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const tema = document.getElementById('tema').value;
    const mensaje = document.getElementById('mensaje').value;

    window.location.href=`mailto:hoyosjavier56@gmail.com?subject=Consulta&body=Nombre%3A%20${nombre}%0ACorreo%3A%20${email}%0AAsunto%3A%20${tema}%0AMensaje%3A%20${mensaje}`;
});
