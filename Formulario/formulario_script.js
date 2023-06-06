function validar() {
  var nombreInput = document.getElementById('nombre');
  var emailInput = document.getElementById('email');
  var mensajeInput = document.getElementById('mensaje');

  var nombre = nombreInput.value.trim();
  var email = emailInput.value.trim();
  var mensaje = mensajeInput.value.trim();

  // Validación de campos obligatorios
  if (nombre === '' || email === '' || mensaje === '') {
    agregarError('Por favor, complete todos los campos.');
    return false;
  }

  // Validación de expresión regular para el formato de email
  var emailRegex = /^\S+@\S+\.\S+$/;
  if (!emailRegex.test(email)) {
    agregarError('Por favor, ingrese un email válido.');
    return false;
  }

  // Validación de longitud máxima para el campo de mensaje
  var mensajeMaxLength = 5000;
  if (mensaje.length > mensajeMaxLength) {
    agregarError('El mensaje excede la longitud máxima permitida.');
    return false;
  }

  // Limpiar campos
  nombreInput.value = '';
  emailInput.value = '';
  mensajeInput.value = '';

  // Mostrar datos enviados en la página
  mostrarDatosEnviados(nombre, email, mensaje);

  return false;
}

function agregarError(mensaje) {
  var errorList = document.getElementById('errorList');
  var errorItem = document.createElement('li');
  errorItem.className = 'error';
  errorItem.textContent = mensaje;
  errorList.appendChild(errorItem);
}

function limpiarErrores() {
  var errorList = document.getElementById('errorList');
  errorList.innerHTML = '';
}

function mostrarDatosEnviados(nombre, email, mensaje) {
  var datosEnviadosDiv = document.getElementById('datosEnviados');
  datosEnviadosDiv.innerHTML = '';

  var nombreParrafo = document.createElement('p');
  nombreParrafo.textContent = 'Nombre: ' + nombre;
  datosEnviadosDiv.appendChild(nombreParrafo);

  var emailParrafo = document.createElement('p');
  emailParrafo.textContent = 'Email: ' + email;
  datosEnviadosDiv.appendChild(emailParrafo);

  var mensajeParrafo = document.createElement('p');
  mensajeParrafo.textContent = 'Mensaje: ' + mensaje;
  datosEnviadosDiv.appendChild(mensajeParrafo);
}

window.onload = function() {
  document.getElementById('nombre').focus();
};


  
  