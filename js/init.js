const CATEGORIES_URL = "https://japdevdep.github.io/ecommerce-api/category/all.json";
const PUBLISH_PRODUCT_URL = "https://japdevdep.github.io/ecommerce-api/product/publish.json";
const CATEGORY_INFO_URL = "https://japdevdep.github.io/ecommerce-api/category/1234.json";
const PRODUCTS_URL = "https://japdevdep.github.io/ecommerce-api/product/all.json";
const PRODUCT_INFO_URL = "https://japdevdep.github.io/ecommerce-api/product/5678.json";
const PRODUCT_INFO_COMMENTS_URL = "https://japdevdep.github.io/ecommerce-api/product/5678-comments.json";
const CART_INFO_URL = "https://japdevdep.github.io/ecommerce-api/cart/654.json";
const CART_BUY_URL = "https://japdevdep.github.io/ecommerce-api/cart/buy.json";

//Mustra spinner al cargr
var showSpinner = function(){
  document.getElementById("spinner-wrapper").style.display = "block";
}

//saca el spinner cuando temrina de cargar
var hideSpinner = function(){
  document.getElementById("spinner-wrapper").style.display = "none";
}

var getJSONData = function(url){
    var result = {};
    showSpinner();
    return fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      }else{
        throw Error(response.statusText);
      }
    })
    .then(function(response) {
          result.status = 'ok';
          result.data = response;
          hideSpinner();
          return result;
    })
    .catch(function(error) {
        result.status = 'error';
        result.data = error;
        hideSpinner();
        return result;
    });
}

//Aviso de que no estan los datos del login completos
function recuperarDatos() {
  if ((localStorage.nombre != undefined) && (localStorage.password != undefined)) {
      document.getElementsByClassName("username").innerHTML = "Nombre: " + localStorage.nombre;
      document.getElementsByClassName("password").innerHTML= " Password: " + localStorage.password;
  } else {
      document.getElementsByClassName("password").innerHTML = "No has introducido tu contraseña";
  }
}

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){

//Añade el nombre de usuario al nav.
let nombreUsuario = '<a class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" class="btn btn-light btn-lg btn-block"  class="py-2 d-none d-md-inline-block" role="button" class="btn btn-secondary btn-sm dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">' + localStorage.getItem("nombre"); + '</a>'
document.getElementById("nombreUsuario").innerHTML += nombreUsuario;
console.log(nombreUsuario)
});

//Cerrar sesión
function cerrarSesion() {
  if ((localStorage.nombre != undefined)) {
    localStorage.removeItem('nombre');
    window.location.href="index.html"
  }else{
    alert("No has iniciado sesión");
}
}