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
           /* console.log(user + " esta loggeado");
            console.log(pass +" ha sido introducido");
            alert("Bienvenido cliente "+ user);*/
            location.href="index.html";
        } else {
            alert("El pasword es incorrecto");
        }

    }
}


