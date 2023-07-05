const listaPersonas = document.getElementById("saludo");
const formulario = document.getElementById("formulario-contacto");
const inputNombre = document.getElementById("nombre");
const inputApellido = document.getElementById("apellido");
const inputEmail = document.getElementById("email");
const comentarios = document.querySelector("textarea");

formulario.addEventListener('submit', mostrar);
const personas = [];

function mostrar(event){
    event.preventDefault();
    const persona = {
        nombre: inputNombre.value,
        apellido: inputApellido.value,
        email: inputEmail.value,
        comentarios: comentarios.value, 
    };
    personas.push(persona);
    inputNombre.value = "";
    inputApellido.value = "";
    inputEmail.value = "";
    comentarios.value = "";
    const usuario = document.createElement('div');
    usuario.innerHTML = `<p>${persona.nombre}</p><p>${persona.apellido}</p><p>${persona.email}</p><p>${persona.comentarios}</p>`
    listaPersonas.appendChild(usuario);

}