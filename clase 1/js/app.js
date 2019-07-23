window.onload = function() {

  var string = "hola";
  var number = 25;
  var boolean = true;

  console.log(string);
  console.log(number);
  console.log(boolean);

  var ironMan = {

    nombre: "IronMan",
    equipo: "avengers",
    poderes:["volar", "disparar misiles" , "laser"],
    energia: 100,
    getPoder : function(number){
      return ironMan.poderes[number];
    }
  }

  var hulk = {

    nombre: "Hulk",
    equipo: "avengers",
    poderes:["aplastar", "gritar" , "golpear"],
    energia: 100,
    getPoder : function(number){
      return hulk.poderes[number];
    }
  }


  //console.log(ironMan.getPoder(0));
  console.log(hulk);
  // console.log(hulk.getPoder(numeropoder));

  do {
    var numeropoder = Math.floor(Math.random() * 3);
    console.log("salió el número:", numeropoder);

    if (numeropoder == 0) {
      console.log("Poder:", ironMan.getPoder(0));
      console.log("Descuenta:", 10);
      console.log("Energia actual:", ironMan.energia);

      ironMan.energia = ironMan.energia - 10;
      console.log("Energia final:", ironMan.energia);
    }
    if (numeropoder == 1){
      console.log("Poder:", ironMan.getPoder(1));
      console.log("Descuenta:", 15);
      console.log("Energia actual:", ironMan.energia);

      ironMan.energia = ironMan.energia - 15;
      console.log("Energia final:", ironMan.energia);
    }

    if (numeropoder == 2){
      console.log("Poder:", ironMan.getPoder(0));
      console.log("Descuenta:", 25);
      console.log("Energia actual:", ironMan.energia);

      ironMan.energia = ironMan.energia - 25;
      console.log("Energia final:", ironMan.energia);
    }

  } while (ironMan.energia > 0);



  do {
    var numeropoder = Math.floor(Math.random() * 3);
    console.log("salió el número:", numeropoder);

    if (numeropoder == 0) {
      console.log("Poder:", hulk.getPoder(0));
      console.log("Descuenta:", 5);
      console.log("Energia actual:", hulk.energia);

      hulk.energia = hulk.energia - 5;
      console.log("Energia final:", hulk.energia);
    }
    if (numeropoder == 1){
      console.log("Poder:", hulk.getPoder(1));
      console.log("Descuenta:", 25);
      console.log("Energia actual:", hulk.energia);

      hulk.energia = hulk.energia - 25;
      console.log("Energia final:", hulk.energia);
    }

    if (numeropoder == 2){
      console.log("Poder:", hulk.getPoder(0));
      console.log("Descuenta:", 10);
      console.log("Energia actual:", hulk.energia);

      hulk.energia = hulk.energia - 10;
      console.log("Energia final:", hulk.energia);
    }

  } while (hulk.energia > 0);


  var misDatos= {
    nombre: "Julian",
    apellido: "Boschi",
    dni: 34983375,
    comidafavorita: "asado",
    edad: 29,
    saludar: function(){
      console.log("Hola mi nombre es " + this.nombre + " " + this.apellido + "  y tengo " +this.edad + " años.");
    }
  }




  for (var datos in misDatos) {
      console.log(datos + ":" + misDatos[datos]);var string = "hola";
  var number = 25;
  var boolean = true;

  console.log(string);
  console.log(number);
  console.log(boolean);

  var ironMan = {

    nombre: "IronMan",
    equipo: "avengers",
    poderes:["volar", "disparar misiles" , "laser"],
    energia: 100,
    getPoder : function(number){
      return ironMan.poderes[number];
    }
  }

  var hulk = {

    nombre: "Hulk",
    equipo: "avengers",
    poderes:["aplastar", "gritar" , "golpear"],
    energia: 100,
    getPoder : function(number){
      return hulk.poderes[number];
    }
  }


  //console.log(ironMan.getPoder(0));
  console.log(hulk);
  // console.log(hulk.getPoder(numeropoder));

  do {
    var numeropoder = Math.floor(Math.random() * 3);
    console.log("salió el número:", numeropoder);

    if (numeropoder == 0) {
      console.log("Poder:", ironMan.getPoder(0));
      console.log("Descuenta:", 10);
      console.log("Energia actual:", ironMan.energia);

      ironMan.energia = ironMan.energia - 10;
      console.log("Energia final:", ironMan.energia);
    }
    if (numeropoder == 1){
      console.log("Poder:", ironMan.getPoder(1));
      console.log("Descuenta:", 15);
      console.log("Energia actual:", ironMan.energia);

      ironMan.energia = ironMan.energia - 15;
      console.log("Energia final:", ironMan.energia);
    }

    if (numeropoder == 2){
      console.log("Poder:", ironMan.getPoder(0));
      console.log("Descuenta:", 25);
      console.log("Energia actual:", ironMan.energia);

      ironMan.energia = ironMan.energia - 25;
      console.log("Energia final:", ironMan.energia);
    }

  } while (ironMan.energia > 0);



  do {
    var numeropoder = Math.floor(Math.random() * 3);
    console.log("salió el número:", numeropoder);

    if (numeropoder == 0) {
      console.log("Poder:", hulk.getPoder(0));
      console.log("Descuenta:", 5);
      console.log("Energia actual:", hulk.energia);

      hulk.energia = hulk.energia - 5;
      console.log("Energia final:", hulk.energia);
    }
    if (numeropoder == 1){
      console.log("Poder:", hulk.getPoder(1));
      console.log("Descuenta:", 25);
      console.log("Energia actual:", hulk.energia);

      hulk.energia = hulk.energia - 25;
      console.log("Energia final:", hulk.energia);
    }

    if (numeropoder == 2){
      console.log("Poder:", hulk.getPoder(0));
      console.log("Descuenta:", 10);
      console.log("Energia actual:", hulk.energia);

      hulk.energia = hulk.energia - 10;
      console.log("Energia final:", hulk.energia);
    }

  } while (hulk.energia > 0);


  var misDatos= {
    nombre: "Julian",
    apellido: "Boschi",
    dni: 34983375,
    comidafavorita: "asado",
    edad: 29,
    saludar: function(){
      console.log("Hola mi nombre es " + this.nombre + " " + this.apellido + "  y tengo " +this.edad + " años.");
    }
  }




  for (var datos in misDatos) {
      console.log(datos + ":" + misDatos[datos]);


  }


  console.log(misDatos.saludar());






  var botonPrueba = document.getElementById('miBoton');

  botonPrueba.onclick = function(){alert("Testeando el click")};


  }
}
