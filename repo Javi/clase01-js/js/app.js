document.querySelector('body').style.filter = 'grayscale(1)';

var titulares = document.querySelectorAll('h2');

console.log(typeof titulares);

for (var unTitular of titulares) {
	unTitular.style.color = 'white';
	unTitular.style.backgroundColor = 'red';
	unTitular.style.textAlign = 'center';
}

var elBoton = document.querySelector('button');
var laImagen = document.querySelector('img');

elBoton.onclick = function () {
	laImagen.style.display = 'block';
	this.innerText = 'Ocultar imagen';
};

function Celular (marca, modelo, precio, colores) {
	this.marca = marca;
	this.modelo = modelo;
	this.precio = precio;
	this.colores = colores;
	this.timbrar = function () {
		return 'Ringggg';
	};
}

var iPhone = new Celular('Apple', 'XR Plus', 45367, ['Blanco', 'Negro']);

console.log(iPhone.timbrar());

for (var key in iPhone) {
	// if (key !== 'timbrar') {
	// 	console.log(iPhone[key]);
	// }
	if (typeof iPhone[key] !== 'function') {
		console.log(iPhone[key]);
	}
}

var miArray = ['Hola', 'Chau', 'Hola de nuevo'];

for (var elemento of miArray) {
	console.log(elemento);
}
