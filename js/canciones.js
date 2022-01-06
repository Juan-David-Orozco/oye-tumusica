$(document).ready(function(){
  // Carga de datos - peticion AJAX
  $.ajax({
    url: "../datos/datos.json"
  }).done(function (respuesta){

    /* PROCESAMIENTO ARRAY CANCIONES */
    var canciones = respuesta.canciones; // Array de objetos (.json)

    inicializarCanciones();

    function inicializarCanciones (){

      var nombresCanciones = [];
      var rutasCanciones = [];
      var iconosCanciones = [];

      var contenedoresNombresCanciones = document.getElementsByClassName("nombresCanciones");
      var contenedoresRutasCanciones = document.getElementsByClassName("rutasCanciones");
      var contenedoresImagenesCanciones = document.getElementsByClassName("iconosCanciones");

      for (var i=0; i<canciones.length; i++){
        
        nombresCanciones[i] = canciones[i].nombre;
        contenedoresNombresCanciones[i].innerHTML = nombresCanciones[i];

        rutasCanciones[i] = canciones[i].ruta;
        contenedoresRutasCanciones[i].setAttribute("src", "."+rutasCanciones[i]);

        iconosCanciones[i] = canciones[i].icono;
        if(iconosCanciones[i]==1){
          contenedoresImagenesCanciones[i].setAttribute("src", "../images/icon_1.svg")
        }
        if(iconosCanciones[i]==2){
          contenedoresImagenesCanciones[i].setAttribute("src", "../images/icon_2.svg")
        }
        if(iconosCanciones[i]==3){
          contenedoresImagenesCanciones[i].setAttribute("src", "../images/icon_3.svg")
        }
        if(iconosCanciones[i]==4){
          contenedoresImagenesCanciones[i].setAttribute("src", "../images/icon_4.svg")
        }

      }

    }
    //  ********  FINNNNN PROCESAMIENTO CANCIONES  ********

    /* PROCESAMIENTO CAMPO DE ENTRDADA ( Busqueda ) */
    var entradaCampoBusqueda = document.getElementById("busqueda");

    /* Array que contiene las cajas (contenedores) donde se inserta 
    el contenido de cada CANCION ( Imagen, Nombre, Audio ) */
    var contenedorCanciones = document.getElementsByClassName("contenedorCanciones");

    /* EVENTO CUANDO SE TECLEA EN EL CAMPO */
    entradaCampoBusqueda.addEventListener("keyup", evento);
    function evento(){
  
      var valorBusqueda = entradaCampoBusqueda.value.trim();
      console.log(valorBusqueda);  // Inicialmente vacio

      function capitalize(x){
        return x.charAt(0).toUpperCase() + x.slice(1).toLowerCase();
      }
      
      // Se procesa el valor de entrada para soportar Mayus y Minus
      valorBusqueda = capitalize(valorBusqueda);

      // Se define la expresion regular como el valor del campo de entrada
      var expReg = new RegExp(valorBusqueda);

      for(var k=0; k<canciones.length; k++){

        if(valorBusqueda == ""){
          contenedorCanciones[k].setAttribute("style","display: block");
        }

        else if(valorBusqueda != ""){

          var validacion = canciones[k].nombre.match(expReg);

          if(validacion == null){
            contenedorCanciones[k].setAttribute("style","display: none");
          }
          else if(validacion.length != 0){
            contenedorCanciones[k].setAttribute("style","display: block");
          }

        }

      }
    }
    /* -------------- FIN FUNCION EVENTO --------------- */
  });
});