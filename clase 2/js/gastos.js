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


//var gastos;

//var consultanombreygasto = window.prompt("Nombre y gastos de los integrantes");
  //for (var i = 0; i < consultaflia ; i++) {

  do {
    for (var i = 0; i < consultaflia ; i++){
    var nombre = window.prompt("ingresa nombre del integrante");
    if (nombre == "" || typeof nombre !== "string") {
      window.alert("no puede estar vacio y tiene que ser en letras");
      continue;
    }
    var gastos = window.prompt("ingresa gasto del integrante");
    if (gastos == "" || isNaN(gastos)){
      window.alert("no puede estar vacio y tiene que ser un numero");
    }
  }
  }
     while (nombre != "" && typeof nombre == "string" && gastos != "" && !isNaN(gastos));


//}




  }
