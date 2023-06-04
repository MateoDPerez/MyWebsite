function validar() {
    var nombreInput = document.getElementById('nombre');
    var emailInput = document.getElementById('email');
    var mensajeInput = document.getElementById('mensaje');
  
    var nombre = nombreInput.value.trim();
    var email = emailInput.value.trim();
    var mensaje = mensajeInput.value.trim();
  
    if (nombre === '' || email === '' || mensaje === '') {
      agregarError('Por favor, complete todos los campos.');
      return false; // Detener el envío del formulario si hay errores
    }
  
    // Limpiar campos
    nombreInput.value = '';
    emailInput.value = '';
    mensajeInput.value = '';
  
    return false;
  }
  
  function agregarError(mensaje) {
    var errorList = document.getElementById('errorList');
    var errorItem = document.createElement('li');
    errorItem.className = 'error';
    errorItem.textContent = mensaje;
    errorList.appendChild(errorItem);
  }
  
  // Hacer foco en el primer input al iniciar el documento
  window.onload = function() {
    document.getElementById('nombre').focus();
  };
  
  
  