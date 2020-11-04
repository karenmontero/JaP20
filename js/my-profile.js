//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.


document.addEventListener("DOMContentLoaded", function (e) {
    document.getElementById("botonGuardar").addEventListener("click",function(){
        guardarPerfil();
    });
});

function guardarPerfil(){
    let nombre = document.getElementById("nombreN").value;
    let apellido = document.getElementById("apellidoN").value;
    let edad = document.getElementById("edadN").value;
    let telefono = document.getElementById("telefonoN").value;
    let correo = document.getElementById("correoN").value;

    
    let datosNuevos=
        {
        Nombre: nombre,
        Apellido: apellido,
        Edad: edad,
        Telefono: telefono,
        Correo: correo
        }
     
    var creandoJson = JSON.stringify(datosNuevos);
    console.log(creandoJson);
    window.localStorage.setItem("nuevosDatos",creandoJson);
    let guardar = JSON.parse(localStorage.getItem("nuevosDatos"));
    console.log(guardar);

    nombreBigHTML = document.getElementById("nombreBig");
    nombreHTML = document.getElementById("nombreNew");
    apellidoHTML = document.getElementById("apellidoNew");
    edadHTML = document.getElementById("edadNew");
    telefonoHTML = document.getElementById("telefonoNew");
    correoHTML= document.getElementById("correoNew");

    nombreBigHTML.innerHTML = guardar.Nombre + " " + guardar.Apellido
    nombreHTML.innerHTML = guardar.Nombre;
    apellidoHTML.innerHTML = guardar.Apellido;
    edadHTML.innerHTML = guardar.Edad + " años";
    telefonoHTML.innerHTML = guardar.Telefono;
    correoHTML.innerHTML = guardar.Correo;
  
 }

 document.addEventListener("DOMContentLoaded",function(e){
     
 });


