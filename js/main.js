$(document).ready(function(){
  // Carga de datos - peticion AJAX
  $.ajax({
    url: "./datos/datos.json"
  }).done(function (respuesta){
    // Almacena los datos en variables
    var canciones = respuesta.canciones; // Array de objetos
    // Se ordenan las canciones de mayor a menor
    canciones = canciones.sort(function(a,b){
    if (a.reproducciones > b.reproducciones){
      return -1;
    }
    if (a.reproducciones < b.reproducciones){
      return 1;
    }
      return 0;
    })
    // Se despliegan en el HTML las 3 primeras canciones manipulando el DOM
    var nombresCanciones = document.getElementsByClassName("nombresCanciones");
    var rutasCanciones = document.getElementsByClassName("rutasCanciones");

    for(var m=0; m<nombresCanciones.length; m++){

      var nombreCancion = canciones[m].nombre;
      nombresCanciones[m].innerHTML = nombreCancion;

      var rutaCancion = canciones[m].ruta;
      rutasCanciones[m].setAttribute('src',rutaCancion);
      rutasCanciones[m].setAttribute('controls','controls');
    
    }
  });
});