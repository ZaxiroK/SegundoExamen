var usuarioLogueado = {
    pk: "",
    nombre: "",
    apellido: "",
    genero: "",
    telefono: "",
    usuario: "",
    contrasenia: ""
};
var msj2;
var listaPost = [];
var listaPostGuardar = [];


function traerUsuarioLogueado() {
    var usuarioCascaron = localStorage.getItem('identificador')
    if (usuarioCascaron == null) {
        alert("contacta a un administrador");
    } else {
        usuarioLogueado = JSON.parse(localStorage.getItem("identificador"));

    }
    return usuarioLogueado;
}

function asignarNombreLabel() {
    var label = document.getElementById("usuario");
    var usuario = traerUsuarioLogueado();

    label.innerText = usuario.nombreG;
}
asignarNombreLabel();
imprimirTabla();

function validar() {
    var post = document.getElementById("form-post").value;
    if (document.getElementById("form-post").value == 0) {
        alert("Debes de digitar algo");
    } else {
        guardarPost();
    }
}

function guardarPost() {
    var idUsuario, nombre, msj2;

    idUsuario = usuarioLogueado.pkG,
        nombre = usuarioLogueado.nombreG

    msj = document.getElementById('form-post').value;
    /*if(msj2.value == 0) {
        listaPostGuardar = [];
        listaPostGuardar.push(postGuardar);
    postPersonaLogueada(listaPostGuardar);
    imprimirTabla();
    }else{*/

    var postGuardar = {
        duenno: idUsuario,
        nombrePersona: nombre,
        postMsj: msj
    }
    listaPostGuardar.push(postGuardar);
    postPersonaLogueada(listaPostGuardar);
    imprimirTabla();
}

/* function guardarPostAlEliminar(lista){
    var guardarListaEliminar = []
    
    guardarListaEliminar = 
        
    postPersonaLogueada(listaPostGuardar);
    imprimirTabla();
    }
    
//}*/

function postPersonaLogueada(infoGuardar) {
    localStorage.setItem('listPost', JSON.stringify(infoGuardar))

}

function getListPost() {
    var storedList = localStorage.getItem('listPost')
    if (storedList == null) {
        listaPost = [];
    } else {
        listaPost = JSON.parse(storedList);
        listaPostGuardar = listaPost;
    }
    return listaPost;
}

function imprimirTabla() {
    var list = getListPost(),
        tbody = document.querySelector('#tblPost tbody');

    tbody.innerHTML = '';

    for (var i = 0; i < list.length; i++) {
        var row = tbody.insertRow(i);
        var postCelda = row.insertCell(0),
            duennoNombreCelda = row.insertCell(1),
            editarCell = row.insertCell(2),
            BorrarCell = row.insertCell(3);


        postCelda.innerHTML = list[i].postMsj;
        duennoNombreCelda.innerHTML = list[i].nombrePersona;
        var duennoId = list[i].duenno;

        var colEditar = document.createElement('input');
        colEditar.type = 'button'
        colEditar.value = 'Editar'
        editarCell.appendChild(colEditar);

        colEditar.setAttribute('post', i + 'nombre', i + 'id', i);
        var colBorrar = document.createElement('input');
        colBorrar.type = 'button';
        colBorrar.value = 'Borrar';

        BorrarCell.appendChild(colBorrar);

        var indexToDel, table = document.getElementById('tblPost');
        for (var y = 1; y < table.rows.length; y++) {
            colBorrar.onclick = function() {


                for (var i = 0; i < list.length; i++) {
                    if (list[i].duenno == usuarioLogueado.pkG) {
                        /*if(list[i].postMsj == postCelda.innerHTML){
                           
                        }*/
                        list.splice(i, 1);
                        localStorage.setItem('listPost', JSON.stringify(list));
                        imprimirTabla();
                        break;
                    }
                    alert("no puedes borrar msj de otros usuarios")
                }

                imprimirTabla();

            }

        }
        /*else{
                        
                localStorage.removeItem("listPost");
						break;
                    }*/


    }


}