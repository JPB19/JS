window.onload = function(){

var validacioninicio = window.confirm("Quieres iniciar el reporte?");

if (validacioninicio == true) {
  console.log("bienvenido");
}
else {
  window.alert("gracias por haber venido");
  window.location.href = "https://www.netflix.com";
}

var consultaflia = window.prompt("Cuantos integrantes tiene tu familia??");

if (isNaN(consultaflia) || (consultaflia < 3 )) {
  window.alert("ingrese un numero mayor a 3");
  window.prompt("Cuantos integrantes tiene tu familia??");
}


var gastos;

/*var consultanombreygasto = window.prompt("Nombre y gastos de los integrantes");
for (var i = 0; i <consultaflia ; i++) {
  window.prompt("ingresa nombre de los integrantes");
  if (true) {

  }*/

  var consultanombre = window.prompt("nombe de los integrantes");
  for (var i = 0; i < consultaflia; i++) {
    if (consultanombre >consultaflia) {
      window.prompt("ingresa otro integrante");
    var nombre = i;
    }

  }
}
