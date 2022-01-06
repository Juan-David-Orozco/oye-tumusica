var entradaCorreo = document.getElementById("correo");
var entradaContrasena = document.getElementById("contrasena");

var boton = document.getElementById("botonSesion");
boton.addEventListener("click",function(){

  limpiar();

  var valorCorreo = entradaCorreo.value.trim();
  var valorContrasena = entradaContrasena.value.trim();
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if(valorCorreo.length == 0){
    document.getElementById("errorCorreo").innerHTML = "Este campo no puede ser vacio";
    entradaCorreo.focus();
    return false;
  }

  if(!re.test(valorCorreo)){
    document.getElementById("errorCorreo").innerHTML = "No posee una estructura de correo correcta";
    entradaCorreo.focus();
    return false;
  }

  if(valorContrasena.length <= 8){
    document.getElementById("errorContrasena").innerHTML = "Debe ser mayor de 8 caracteres";
    entradaContrasena.focus();
    return false;
  }

  alert("Proceso Finalizado");

  return true;

});

function limpiar(){
  document.getElementById("errorCorreo").innerHTML = "";
  document.getElementById("errorContrasena").innerHTML = "";
}