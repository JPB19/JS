window.addEventListener("load" , function() {

var parrafos = document.querySelectorAll("p");
parrafos.length;

console.log(parrafos);

var textos;
var parrafomaslargo;

for (var i = 0; i < parrafos.length; i++) {
  console.log(parrafos[i].innerText.length);
  textos = parrafos.push;

  if (i == 0 || parrafos[i].innerText.length > parrafomaslargo.innerText.length) {
    parrafomaslargo = parrafos[i]
  }
}

console.log(parrafomaslargo);

});
