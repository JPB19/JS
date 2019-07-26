var elBody = document.querySelector('body');
var i = 1;

elBody.addEventListener('click', function () {
	console.log('Hiciste click encima del body:', i);
	i++;
});

elBody.addEventListener('mousemove', function (e) {
	console.log('Coordenada X:', e.clientX);
	console.log('Coordenada Y:', e.clientY);
});

var elEnlace = document.querySelector('a');

elEnlace.addEventListener('click', function (event) {
	event.preventDefault();
	console.log(event.clientX);
	console.log(event.clientY);
});

var elForm = document.querySelector('form');

elForm.addEventListener('submit', function (e) {
	e.preventDefault();
	console.log('No podés enviar nada!!!');
});

// setTimeout(function () {
// 	console.log('Pasaron 3 segundos (setTimeout)');
// }, 2000);

setTimeout(function () {
	console.log('Esto va primero');
}, 1000);

console.log('Esto va después');

var seg = 0;

var intervalo = setInterval(funcionParaElIntervalo, 500);

function funcionParaElIntervalo () {
	console.log('Pasaron ' + seg + ' segundos');
	seg++;
}

var btnStop = document.querySelector('#stop');
var btnStart = document.querySelector('#start');

btnStop.addEventListener('click', function () {
	clearInterval(intervalo);
});

btnStart.addEventListener('click', function () {
	seg = 0;
	intervalo = setInterval(funcionParaElIntervalo, 500);
});
