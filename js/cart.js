let arrayArticulos = [];
let subtotaltotal = 0;
let costoEnvio = 0;
//variables direccion
var dCalle = document.getElementById("inputCalle");
var dNum = document.getElementById("inputNum");
var dEsquina = document.getElementById("inputEsquina");
var Depto = document.getElementById("inputDepartamento");
//variables forma de pago
var pagoTrans = document.getElementById("transBanc");
var pagoTarj = document.getElementById("pagoTarj");
//variables de envio
var envio1 = document.getElementById("envio1");
var envio2 = document.getElementById("envio2");
var envio3 = document.getElementById("envio3");
//variables formulario tarjeta y transferencia bancaria
var nCuenta = document.getElementById("validationServer0");
var nombre = document.getElementById("validationServer01");
var apellido = document.getElementById("validationServer02");
var nTargeta = document.getElementById("validationServer03");
var nCvv = document.getElementById("validationServer04");
var tMes = document.getElementById("validationServer05");
var tAnio = document.getElementById("validationServer06");

var validar = document.getElementById("fin");

// Expandir sección dirección de envio
function siguiente() {
    let htmlAdress = ""; //tabla de datos direccion
    {

        htmlAdress += `
         <div>
         <h4 class="mb-3">Dirección de envío</h4>
         <form>
           <div class="form-group mx-sm-3">
               <label for="inputCalle" class="col-sm-2 col-form-label">Calle</label>
               <input type="text" class="form-control" id="inputCalle" placeholder="Calle"></input>
           </div>
           <div class="form-group mx-sm-3">
               <label for="inputNumero" class="col-sm-2 col-form-label">N°</label>
               <input type="number" class="form-control" id="inputNum" placeholder="Número"></input>
           </div>
           <div class="form-group mx-sm-3" class="col-sm-10">
               <label for="inputPuerta3" class="col-sm-2 col-form-label">Esquina</label>
               <input type="text" class="form-control" id="inputEsquina" placeholder="Esquina"></input>
             </div>
             <div class="form-group mx-sm-3">
               <label for="inputDepartamento3" class="col-sm-2 col-form-label">Departamento</label>
               <option value="" disabled selected></option>
               <select name="Departamento" class="browser-default custom-select" id="inputDepartamento">
               <option>Artigas</option>
               <option>Canelones</option>
               <option>Cerro Largo</option>
               <option>Colonia</option>
               <option>Durazno</option>
               <option>Flores</option>
               <option>Florida</option>
               <option>Lavalleja</option>
               <option>Maldonado</option>
               <option>Montevideo</option>
               <option>Paysandú</option>
               <option>Río Negro</option>
               <option>Rivera</option>
               <option>Rocha</option>
               <option>Salto</option>
               <option>San José</option>
               <option>Soriano</option>
               <option>Tacuarembó</option>
               <option>Treinta y tres</option>
             </select>
           </div>
         </div>
     </form>
         `

    }
    document.getElementById("envio").innerHTML = htmlAdress; //añade los datos al html
}




//Calculo del total segun la moneda elegida
function calculoMoneda(count, index) {
    let tcambio = 0;
    if (arrayArticulos[index].currency === "USD") { //si el articulo esta en dólares lo pasa a pesos al tipo de cambio 40.
        tcambio = arrayArticulos[index].unitCost * count * 40;

    } else {
        tcambio = arrayArticulos[index].unitCost * count; // si esta en pesos no lo cambia.
    }
    return tcambio;
}

//Calculo del subtotal del carrito según la cantidad de articulos
function subtotalCart() {
    let subtotalArray = document.getElementsByClassName("qArticle"); //obtiene el subtotal de cada articulo a traves de la clase (qArticle).
    let subtotal = 0;
    for (let i = 0; i < subtotalArray.length; i++) {
        subtotal += calculoMoneda(subtotalArray[i].value, i); //agrega todos los subtotales individuales a la variable global subtotal
    }
    document.getElementById("subtotalT").innerHTML = "UYU " + subtotal; //muestra el subtotal total en el html, en pesos uruguayos.
    subtotaltotal = subtotal;

}
//Costo del envio
envio1.addEventListener("click", function () {
    let envio = subtotaltotal * 0.15;
    document.getElementById("costoEnvio").innerHTML = "UYU " + envio; //muestra el costo de envio en el html, en pesos uruguayos.
    costoEnvio = envio;
    totalFinal();
    siguiente();
})
envio2.addEventListener("click", function () {
    let envio = subtotaltotal * 0.07;
    document.getElementById("costoEnvio").innerHTML = "UYU " + envio; //muestra el costo de envio en el html, en pesos uruguayos.
    costoEnvio = envio;
    totalFinal();
    siguiente();
})
envio3.addEventListener("click", function () {
    let envio = subtotaltotal * 0.05;
    document.getElementById("costoEnvio").innerHTML = "UYU " + envio; //muestra el costo de envio en el html, en pesos uruguayos.
    costoEnvio = envio;
    totalFinal();
    siguiente();
})


//Total del carrito (todos los subtotales de los productos)
function totalFinal() {
    let total = subtotaltotal + costoEnvio;
    document.getElementById("totalCost").innerHTML = "UYU " + total;
}//agregar costo de envio 

//subtotal de cada articulo (cantidad por costo unitario)
function subtotalArticle() {
    let subtotalArray = document.getElementsByClassName("qArticle"); //Llama a la variable subtotalArray para actualizar el subtotal de acuerdo a la cantidad de articulos seleccionada.
    for (let i = 0; i < subtotalArray.length; i++) {
        subtotalArray[i].addEventListener("change", function () {
            document.getElementById("productSubtotal-" + i).innerHTML = arrayArticulos[i].currency + " " +
                subtotalArray[i].value * arrayArticulos[i].unitCost; //calcula y carga el subtotal individual a la tabla.
            subtotalCart(); //actualiza el subtotal del carrito
            totalFinal(); //actualiza el total del carrito
        });

    }


}

//Mostrar carrito, datos de articulos y subtotales unitarios.
function showCarrito(arrayArticulos) {
    let htmlCart = ""; //carga los datos del carrito en la tabla
    for (let i = 0; i < arrayArticulos.length; i++) {

        htmlCart += `
        <tr>
            <td><img src='`+ arrayArticulos[i].src + `' width="160px"></td>
            <td>`+ arrayArticulos[i].name + `</td>
            <td>`+ arrayArticulos[i].currency + " " + arrayArticulos[i].unitCost + `</td>
            <td><input class="form-control qArticle" style="width:60px;" type="number" id="productCount-${i}" value="` + arrayArticulos[i].count + `" min="1"></input></td>
            <td><span id="productSubtotal-${i}" style="font-weight:bold;">${arrayArticulos[i].currency} ${arrayArticulos[i].unitCost * arrayArticulos[i].count}</span></td>
            <td><button type="button" class="btn btn-secondary">Eliminar</button></i></td>
            </tr>
        `

    }
    document.getElementById("containerArticle").innerHTML = htmlCart; //añade los datos al html
    subtotalArticle();
    subtotalCart();
    totalFinal();
}


pagoTrans.addEventListener("click", function () {
    document.getElementById("expand").style.display = "block";
    document.getElementById("expandir").style.display = "none";
})
pagoTarj.addEventListener("click", function () {
    document.getElementById("expandir").style.display = "block";
    document.getElementById("expand").style.display = "none";
})


//Funciones de validación
function validacionEnvio() {
    if (envio1.checked == false && envio2.checked == false && envio3.checked == false) {
        document.getElementById("validar").innerHTML = `<div class="alert alert-danger alert-dismissable" id="alerta">
                <button type="button" class="close" data-dismiss="alert">&times;</button>
                Debe seleccionar un metodo de envio
                 </div>`
    }
}
function validacionDireccion() {
    if (dCalle == "" || dNum == "" || dEsquina == "" || Depto == "") {
        return alert('[ERROR] Debe introducir su dirección');
    }
}

document.getElementById("valid2").addEventListener("click", validacionDireccion);

function validacion() {
    if (pagoTrans.checked) {
        if (nCuenta.length === 0 || nCuenta.value == "") {
            alert('[ERROR] Debe completar los datos de forma de pago');
        } else {
            alert('Compra realizada con exito');
        }
    } else {
        if (pagoTarj.checked) {
            if (nombre.value == ""|| apellido.value == ""|| nTargeta.value == "" || nCvv.value == "" ||tMes.options[tMes.selectedIndex].value==""||tAnio.value == "" ) {
                alert('[ERROR] Debe completar los datos de forma de pago');
            } else {
                alert('Compra realizada con exito');
            }
            // Si el script ha llegado a este punto y todas las condiciones se cumplieron, se devuelve el valor true
        }
    else{
        return alert('Compra realizada con exito');
    }
}
}
//validar.addEventListener("click", validacion);


//Llamado al JSON para extraer los datos que contiene.
document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData("https://japdevdep.github.io/ecommerce-api/cart/654.json").then(function (resultObj) {
        if (resultObj.status === 'ok') {
            arrayArticulos = resultObj.data.articles;
            showCarrito(arrayArticulos);
        }
    });
})