window.onload = function(){

do {

var bienvenida = window.prompt("ingresa la cantidad de tareas que deseas hacer");

if (isNaN(bienvenida) || bienvenida < 3) {
window.alert("tenes que poner al menos 3 tareas y en numero");
}

} while (isNaN(bienvenida) || bienvenida < 3);



  var confirm =  window.confirm("Es correcta la cantidad de Tareas?");



  if (confirm === false) {
    do {

    var bienvenida = window.prompt("ingresa la cantidad de tareas que deseas hacer");

    if (isNaN(bienvenida) || bienvenida < 3) {
    window.alert("tenes que poner al menos 3 tareas y en numero");
    }

    } while (isNaN(bienvenida) || bienvenida < 3);

  }

  var tareas = [ ];
  for (var i = 0; i < bienvenida; i++) {

    var solicitudtarea = window.prompt ("especifique cada una de las tareas");

    if (solicitudtarea === "") {

      window.alert("ingresa la tarea especificada");
    i--;
  }

  else {
  tareas.push(solicitudtarea);

  }
}

  var lista = document.querySelector("ul");
  var nuevoli = document.createElement("li");
  for (var i = 0; i < tareas; i++) {
  nuevoli.innertext = tareas.push(solicitudtarea)
}
lista.append(nuevoli);
//console.log(tareas);
console.log(nuevoli);








}
