window.addEventListener("load", function() {

 /*var mydate = new Date();

  console.log(mydate);*/

  var titulo = document.querySelector("h1")
  var mifecha = new Date()
  titulo.innerHTML = mifecha.toDateString()


  var time = mifecha.getTime()
  console.log(time);
  // 25/12/2019
  var navidad =new Date(2019 , 11 , 25)
  console.log(navidad.getTime());
  var faltaparanavidad = navidad.getTime() - time;

  var segundos = faltaparanavidad / 1000
  var minutos = segundos / 60
  var horas = minutos / 60
  var dias = horas / 24
  console.log(segundos, minutos, horas, dias);








})
