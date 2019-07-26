var usuario = window.prompt('Decime tu nombre');

var elBody = document.querySelector('body');

var titular = document.createElement('h1');
titular.setAttribute('class', 'red');
titular.innerHTML = 'Hola <i>' + usuario + '</i>. Bienvenido';

elBody.append(titular);
