var pk = 0;
var personasRegistradas = [];
var usuarioNoExistente = "";
/*$(function() {



})*/
//valida que los campos de ingresar los datos no esten vacios y sean los indicados para guardar
function validar() {
    var nombre, apellido, genero, telefono, usuario, contrasenia, contrasenia2;
    var pw = document.getElementById("form-password").value;
    var pwr = document.getElementById("form-passwordRepeat").value;
    var usuario = document.getElementById("form-user").value;
    if (document.getElementById("form-firtsname").value == 0) {
        alert("Nombre requerido");
    } else if (document.getElementById("form-lastname").value == 0) {
        alert("Apellido requerido");
    } else if (document.getElementById("form-phone").value == 0) {
        alert("Telefono requerido");
    } else if (document.getElementById("form-user").value == 0) {
        alert("Nombre de usuario requerido");
    } else if (document.getElementById("form-password").value == 0) {
        alert("Contraseña requerida");
    } else if (document.getElementById("form-passwordRepeat").value == 0) {
        alert("Validacion contraseña requerida");
    } else if (document.getElementById("form-passwordRepeat").value == 0) {
        alert("Validacion contraseña requerida");
    } else if (verificarUsuarioName(usuario) == 's') {
        alert("El nombre de usuario ya existe !!");
    } else if (pw == pwr) {
        guardar();
    } else {
        alert("Contraseñas no coinciden");
    }

}


//guarda los datos de la persona registrada
function guardar() {

    var pkey, nombre, apellido, genero, telefono, usuario, contrasenia;
    getContadorPersonasPkeys(pk);
    if (pk == 0) {
        pkey = pk + 1;
    } else {
        pkey = 1;
        pkey += pk;
    }

    nombre = document.getElementById("form-firtsname").value;
    apellido = document.getElementById("form-lastname").value;
    genero = document.getElementById("form-genero").value;
    var sexo;

    if (document.getElementById('hombre').checked) {
        sexo = document.getElementById('hombre').value;

    } else if (document.getElementById('mujer').checked) {
        sexo = document.getElementById('mujer').value;
    }

    telefono = document.getElementById("form-phone").value;
    usuario = document.getElementById("form-user").value;
    contrasenia = document.getElementById("form-password").value;

    var persona = {
        pkG: pkey,
        nombreG: nombre,
        apellidoG: apellido,
        generoG: sexo,
        telefonoG: telefono,
        usuarioG: usuario,
        contraseniaG: contrasenia
    }

    localStorageIds(pkey);
    getPersonasRegistradas();
    personasRegistradas.push(persona);
    listPersonasRegistradas(personasRegistradas);
    //localStorage.clear();
}

// guarda las personas en localstorage
function listPersonasRegistradas(pList) {
    localStorage.setItem('openFacePersonasRegistradas', JSON.stringify(pList))
    alert("Registro exitoso");
}


// guarda el contador de ids de las personas en localstorage
function localStorageIds(primaryKeysContador) {
    localStorage.setItem('identificador', JSON.stringify(primaryKeysContador))

}

//extrae el contador de localstorage y se lo asigna a el contador actual
function getContadorPersonasPkeys() {
    var contadorPkeys = localStorage.getItem('identificador')
    if (contadorPkeys == null) {
        pk = 0;
    } else {
        pk = JSON.parse(contadorPkeys);

    }
    return contadorPkeys;
}
//extrae las personas de localstorage
function getPersonasRegistradas() {
    var storagePersonas = localStorage.getItem('openFacePersonasRegistradas')
    if (storagePersonas == null) {
        personasRegistradas = [];
    } else {
        personasRegistradas = JSON.parse(storagePersonas);

    }

    return personasRegistradas;
}
//verifica que el nombre de usuario no sea uno ya registrado
function verificarUsuarioName(userName) {
    var user = userName;
    var existe = 'n';

    var lista = getPersonasRegistradas();

    for (var i = 0; i < lista.length; i++) {

        var nick = lista[i].usuarioG;

        if (nick == user) {
            existe = 's';
            return existe;
        } else {
            existe = 'n';
        }
    }
    return existe;
}