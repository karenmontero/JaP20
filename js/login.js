//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){

});

//Guardar nombre de usuario
function guardarDatos(datos) {
    if (datos != undefined && datos !=""){
    localStorage.nombre = datos;
    window.location.href="home.html"
    }else{
        window.location.href="index.html"
    }
}

