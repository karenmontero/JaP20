//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){

});
function guardarDatos() {
    localStorage.nombre = document.getElementsByClassName("input username").value;
    localStorage.password = document.getElementsByClassName("input password").value;
}

function recuperarDatos() {
    if ((localStorage.nombre != undefined) && (localStorage.password != undefined)) {
        document.getElementsByClassName("input username").innerHTML = "Nombre: " + localStorage.nombre;
        document.getElementsByClassName("input password").innerHTML= " Password: " + localStorage.password;
    } else {
        document.getElementsByClassName("input password").innerHTML = "No has introducido tu contraseña";
    }
}