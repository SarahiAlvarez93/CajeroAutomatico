const cuentas = [
    {nombre: "Sara", saldo: 200, password: "root"},
    {nombre: "Sarahi", saldo: 290, password: "123"},
    {nombre: "Marcela", saldo: 30, password: "123"}
    
];

const cambio = document.getElementById("login");
const cambiotitle = document.getElementById("tittle");
const oper = document.getElementById("root");
const informacion = document.getElementById("info");

 const templateop = () => `
 <select class="hide" name="operacion" id="operacion">
            <option value="1">Consultar Saldo</option>
            <option value="2">Ingresar Monto</option>
            <option value="3">Retirar Monto</option>
        </select>
        <button  type="submit" >Seleccionar</button>
 `;

login.addEventListener("submit", (event)=>{
    event.preventDefault();
    let user = event.target.usuario.value;
    console.log(user);
    let pass = event.target.contraseña.value;
    console.log(pass);

    const unicoUser = cuentas.some((index)=>index.nombre === user && index.password === pass); //some devuelve true o false de un arreglo en una condicion
    
    console.log(unicoUser);
    alert ("Bienvenid@ usuari@ "+ user);

    if (unicoUser) {  //evalua que sea true
        cambio.innerHTML = "";
        cambiotitle.innerHTML = `<h1>Seleccione Movimientos</h1>`
        oper.innerHTML = templateop();
    }else{
        cambio.textContent = "Datos Incorrectos"
    }
    
    root.addEventListener("submit", (e)=>{
        e.preventDefault();
        let opcion = e.target.operacion.value;
        console.log(opcion);
    
        const unicoUser2 = cuentas.find((index)=>index.nombre === user && index.password === pass);   
        const saldo = () => `
        <h2>Saldo:  ${unicoUser2.saldo} </h2>
        `;
    
        console.log(unicoUser2);
        console.log(unicoUser2.saldo);

        switch (opcion) {
            case "1":{
                informacion.innerHTML = saldo();
                console.log("su saldo es: " + unicoUser2.saldo );
                }
                break;
            case "2":{
                let monto = parseInt(prompt("Ingrese monto:"));
                let control = unicoUser2.saldo + monto;
                
                if (control <= 990) {
                    console.log("El monto ingresado es: " + monto  );
                    unicoUser2.saldo += monto;
                    console.log(unicoUser2.saldo);                   
                    const ingreso = () =>`
                    <h2>El monto ingresado es: ${monto}</h2>
                    <h2>Su nuevo saldo es: ${unicoUser2.saldo}</h2>
                    `;
                    informacion.innerHTML = ingreso();
                    console.log("Su nuevo saldo es: " + unicoUser2.saldo);
                } else {
                    alert ("Error, tu cuenta es limitada a un maximo de $990");
                }
                }
                break;
            case "3":{
                let montoRest = parseInt(prompt("Monto a retirar:"));
                let control = unicoUser2.saldo - montoRest;
                if (control >= 10) {
                    console.log("El monto retirado es: " + montoRest  );
                    
                    unicoUser2.saldo -= montoRest; 
                    const retiro = () =>`
                    <h2>El monto a retirar es: ${montoRest}</h2>
                    <h2>Su nuevo saldo es: ${unicoUser2.saldo}</h2>
                    `;
                    informacion.innerHTML = retiro();
                    console.log("Su nuevo saldo es: " + unicoUser2.saldo);
                    
                } else {
                    alert ("Error, No puedes dejar tu cuenta en menos de 10, sea serio por favor");
                }
            }
                break;
        }
    });
});







 


