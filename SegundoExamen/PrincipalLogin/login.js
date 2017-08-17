var personasRegistradas = [];
var personaLogueadaInformacion = {
    pk: "",
    nombre: "",
    apellido: "",
    genero: "",
    telefono: "",
    usuario: "",
    contrasenia: ""
};

/*$(function() {



})*/

function validar() {
    var nombre, apellido, genero, telefono, usuario, contrasenia, contrasenia2;
    var pw = document.getElementById("form-password").value;
    var usuario = document.getElementById("form-username").value;
    if (document.getElementById("form-username").value == 0) {
        alert("Nombre requerido");
    } else if (document.getElementById("form-password").value == 0) {
        alert("Contraseña requerida");
    } else if (verificacionLogin(usuario, pw) == 'n') {
        alert("El nombre de usuario o contraseña son incorrectos")
    } else {

        window.open("../MenuPrincipal/OpenFacePrincipal.html")
    }

}

function getPersonasRegistradas() {
    var storagePersonas = localStorage.getItem('openFacePersonasRegistradas')
    if (storagePersonas == null) {
        personasRegistradas = [];
    } else {
        personasRegistradas = JSON.parse(storagePersonas);

    }

    return personasRegistradas;
}

function verificacionLogin(userName, pw) {
    var user = userName;
    var pw = pw;
    var existe = 'n';

    var lista = getPersonasRegistradas();

    for (var i = 0; i < lista.length; i++) {
        var id = lista[i].pkG;
        var nombre = lista[i].nombreG;
        var apellido = lista[i].apellidoG;
        var genero = lista[i].generoG;
        var telefono = lista[i].telefonoG;
        var nick = lista[i].usuarioG;
        var passw = lista[i].contraseniaG;



        var persona = {
            pkG: id,
            nombreG: nombre,
            apellidoG: apellido,
            generoG: genero,
            telefonoG: telefono,
            usuarioG: nick,
            contraseniaG: passw
        }

        if (nick == user && passw == pw) {
            existe = 's';
            //personaLogueadaInformacion.push(persona);
            personaLogueada(persona);
            return existe;
        } else {
            existe = 'n';
        }
    }
    return existe;
}

function personaLogueada(persona) {
    localStorage.setItem('identificador', JSON.stringify(persona))

}

