// console.log(window.location.href);
// var confirma = window.confirm('¿Seguro querés irte?');

// if (confirma) {
// 	window.location.href = 'http://instagram.com';
// 	window.location.replace('http://instagram.com');
// }

// Callback

function sumar (n1, n2, n3) {
	return n1 + n2 + n3;
}

function operacionMatematica (n1, n2, n3, operacion) {
	return operacion(n1, n2, n3);
}

console.log(sumar(10, 20, 30));
console.log(operacionMatematica(5, 5, 5, sumar));

var alumnos = ['Juana', 'Martina', 'Pablo'];

console.log('==== for ====');

for (var i = 0; i < alumnos.length; i++) {
	console.log(alumnos[i]);
}

console.log('==== for of ====');
for (var alumno of alumnos) {
	if (alumno !== 'Juana') {
		console.log(alumno);
	}
}

var mostrarEnConsola = function (alumno) {
	console.log(alumno);
};

console.log('==== forEach ====');

// forEach
alumnos.forEach(mostrarEnConsola);

// filter
console.log('==== filter ====');

function laQueVaDentroDelFilter (name) {
	return name !== 'Pablo';
}

var alumnosSinPablo = alumnos.filter(laQueVaDentroDelFilter);
console.log(alumnosSinPablo);

// reduce
console.log('==== reduce ====');
var todosEnString = alumnos.reduce(function (acum, elem) {
	return acum + ' ' + elem;
});

console.log(todosEnString);

// map
console.log('==== map ====');
var nuevosAlumnos = alumnos.map(function (elem) {
	return elem + ' Sin Apellido';
});
console.log(nuevosAlumnos);

var enlacesNav = document.querySelectorAll('.nav a');

enlacesNav.forEach(function (cadaEnlace) {
	cadaEnlace.parentElement.style.border = 'solid 1px red';
	cadaEnlace.innerHTML = '<i>Lo voy a cambiar</i>';
	console.log(cadaEnlace.innerHTML);
});
