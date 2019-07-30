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


console.log(parrafos);
var acum = [];
parrafos.forEach(function (unP) {
  if (unP.innerText.match(/ECMA/g)) {
    acum.push(unP.innerText.match(/ECMA/g).join())
  }
})

console.log(acum);
//var resultadomatch = parrafos.innerText.match(/ECMA/g);

// var parrafocompleto = document.querySelectorAll("p");
// var acumuladorp = parrafocompleto.reduce(function(acum , unparrafo){
//   return acum + unparrafo;
// });
//
// console.log(acumuladorp);


//console.log(resultadomatch);
});
