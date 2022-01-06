
function validar(formulario){

  limpiarErrores();

  if (formulario.email.value.trim().length == 0) {
    document.getElementById("errorCorreo").innerHTML = "Correo obligatorio"; 
    formulario.email.focus();
    return false;
  }

  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if(!re.test(formulario.email.value)){
    document.getElementById("errorCorreo").innerHTML = "Estructura incorrecta";
    formulario.email.focus();
    return false;
  }
  
  if(formulario.contrasena.value.trim().length <= 8){
    document.getElementById("errorContrasena").innerHTML = "Mayor de 8 caracteres";
    formulario.contrasena.focus();
    return false;
  }

  if(formulario.contrasena.value.trim() != formulario.confirmacion.value.trim()){
    document.getElementById("errorConfirmacion").innerHTML = "No coincide con la contraseña";
    formulario.confirmacion.focus();
    return false;
  }

  if(formulario.musical.value == ""){
    document.getElementById("errorGenero").innerHTML = "Seleccione alguna opción";
    formulario.musical.focus();
    return false;
  }

  if (formulario.edades.value == "") {
    document.getElementById("errorEdad").innerText = "Debe seleccionar algun rango";
    return false;
  }

  if (!formulario.terminos.checked) {
    document.getElementById("errorTerminos").innerText = "Debe aceptar los términos y condiciones";
    formulario.terminos.focus();
    return false;
  }

  alert("Proceso Finalizado");

  return true;

}

function limpiarErrores(){
  var errores = document.getElementsByClassName("errores");
  for(var i=0; i<errores.length; i++){
    errores[i].innerHTML = "";
  }
}