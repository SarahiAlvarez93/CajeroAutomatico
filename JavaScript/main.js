const cuentas = [
    {nombre: "Mali", saldo: 200, password: "helloworld"},
    {nombre: "Gera", saldo: 290, password: "133t"},
    {nombre: "Maui", saldo: 67, password: "123"}
];

function getInfo(){
    let user = document.getElementById("usuario").value;
    let pass = document.getElementById("contraseña").value;

    for (let index = 0; index < cuentas.length; index++) {
        if (user==cuentas[index].nombre && pass==cuentas[index].password) {
            console.log(user + " esta logeado");
            alert("Bienvenido "+ user);
            document.location.href = "./index.html";
        }
}

//function login(usuario, contraseña) {

    //let user, pass;
    //console.log(usuario);
    //console.log(contraseña);
    //user = document.getElementById("usuario").value;
    //pass = document.getElementById("contraseña").value;

    //console.log(user);
    //console.log(pass);


    

        /* let validacion = cuentas[index];
        console.log(validacion);
        console.log(validacion.nombre);
        console.log(validacion.saldo);
        console.log(validacion.password);
        
         else {
            return false;
        } */
   // }
   
}




/* if(usuario == cuentas[1].nombre && contraseña == cuentas[1].contraseña) {
    alert("correcto");
} else if (usuario == cuentas[2].nombre && contraseña == cuentas[2].contraseña){
    alert("correcto");
} else if (usuario == cuentas[3].nombre && contraseña == cuentas[3].contraseña) {
    alert("correcto");
} else {
    alert("Contraseña incorrecta");
}


function obtenerListaUsuarios() {
let listaUsuarios = JSON.parse(localStorage.getItem('listaUsuariosLs'));

if(listaUsuarios == null) {
    listaUsuarios = [
        //id, user, saldo, password
        ['1','Mali','200','helloworld'],
        ['2','Gera','290','133t'],
        ['3','Maui','67','123']
    ]
}
return listaUsuarios;
}

function validarInicio(usuario, contraseña) {
let listaUsuarios = obtenerListaUsuarios();
let acceder = false;
} */