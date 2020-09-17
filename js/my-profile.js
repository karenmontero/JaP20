//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {

});


//Cerrar sesión
function cerrarSesion() {
        localStorage.removeItem(nombre);
        localStorage.removeItem(password);
}