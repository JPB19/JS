var linkTag = document.getElementById('mainCSS');
var elDiv = document.querySelector('.alert');
var btnAdd = document.querySelector('#add');
var btnRemove = document.querySelector('#remove');
var btnToggle = document.getElementById('toggle');
var btnContains = document.getElementById('contains');
var btnChangeCss = document.getElementById('changeCss');

btnChangeCss.addEventListener('click', function () {
	linkTag.setAttribute('href', 'css/mi-hoja-de-estilo.css');
});

btnAdd.addEventListener('click', function () {
	if (elDiv.classList.contains('alert-danger')) {
		elDiv.classList.remove('alert-danger');
		elDiv.classList.add('alert-success');
	} else {
		elDiv.classList.remove('alert-success');
		elDiv.classList.add('alert-danger');
	}

	// Otra manera más rápida
	/* elDiv.classList.toggle('alert-danger');
	elDiv.classList.toggle('alert-success'); */
});

btnRemove.addEventListener('click', function () {
	elDiv.classList.remove('alert');
});

btnToggle.addEventListener('click', function () {
	elDiv.classList.toggle('text-center');
});

btnContains.addEventListener('click', function () {
	if (elDiv.classList.contains('text-center')) {
		window.alert('Si, si tiene la clase text-center');
	} else {
		window.alert('No, no tiene la clase text-center');
	}
});
