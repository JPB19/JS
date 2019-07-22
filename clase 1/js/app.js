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

var numeropoder = Math.random(0 , 2);
console.log(numeropoder);

var numeropoder2= Math.floor(0 ,2);

if (ironMan.getPoder(0)) {
  ironMan.energia -10;
}
if (ironMan.getPoder(1)){
  ironMan.energia - 15;
}

if (ironMan.getPoder(2)){
  ironMan.energia - 25;
}

console.log(ironMan.getPoder(numeropoder));
console.log(ironMan.getPoder(numeropoder2));
console.log(hulk.getPoder(numeropoder));
console.log(hulk.getPoder(numeropoder2));

console.log(ironMan.energia);
