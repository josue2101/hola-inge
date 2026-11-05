function mostrarMensaje(){

    document.getElementById("mensaje")
    .innerHTML =
    "Bienvenido al curso de Desarrollo Web";

}
function resaltar(card){

    card.style.backgroundColor =
    "lightblue";

}

function restaurar(card){

    card.style.backgroundColor =
    "white";

}
let imagenes = [

"https://picsum.photos/id/10/600/300",

"https://picsum.photos/id/20/600/300",

"https://picsum.photos/id/30/600/300"

];

let posicion = 0;

function siguiente(){

    posicion++;

    if(posicion >= imagenes.length){

        posicion = 0;

    }

    document.getElementById("imagen")
    .src = imagenes[posicion];

}

function anterior(){

    posicion--;

    if(posicion < 0){

        posicion =
        imagenes.length - 1;

    }

    document.getElementById("imagen")
    .src = imagenes[posicion];

}
function validar(){

    let nombre = document.getElementById("nombre").value.trim();
    let correo = document.getElementById("correo").value.trim();
    let mensaje = document.getElementById("mensajeContacto").value.trim();
    let resultado = document.getElementById("resultado");

    if(nombre === "" || correo === "" || mensaje === ""){
        resultado.innerHTML = "Debe completar todos los campos";
        return false;
    }

    let contacto = {
        nombre: nombre,
        correo: correo,
        mensaje: mensaje
    };

    console.log(JSON.stringify(contacto));

    resultado.innerHTML = "Formulario enviado correctamente";
    return false;

}

function saberMas(servicio) {

    let mensaje = "";

    if (servicio === "Desarrollo Web") {
        mensaje = "Ofrecemos diseño y desarrollo de páginas web.";
    }
    else if (servicio === "Redes") {
        mensaje = "Ofrecemos instalación y configuración de redes.";
    }
    else if (servicio === "Soporte Técnico") {
        mensaje = "Ofrecemos mantenimiento de equipos informáticos.";
    }

    document.getElementById("resultado2").innerHTML = mensaje;
}