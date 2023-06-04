// Array de imágenes
var imagenes = ["images/test-image-640x480.jpg", "images/test-image-2-640x480.jpg", "images/test-image-3-640x480.jpg"];

// Variables de control
var indiceActual = 0;
var totalImagenes = imagenes.length;

// Función para mostrar la imagen actual
function mostrarImagenActual() {
  var imagenActual = document.getElementById("imagenActual");
  imagenActual.src = imagenes[indiceActual];
}

// Función para ir a la imagen siguiente
function irSiguiente() {
  indiceActual++;
  if (indiceActual >= totalImagenes) {
    indiceActual = 0; // Vuelve al inicio si llega al final
  }
  mostrarImagenActual();
}

// Función para ir a la imagen anterior
function irAnterior() {
  indiceActual--;
  if (indiceActual < 0) {
    indiceActual = totalImagenes - 1; // Vuelve al final si está en el inicio
  }
  mostrarImagenActual();
}

// Función para iniciar la rotación automática
function iniciarRotacionAutomatica() {
  setInterval(irSiguiente, 3750); // Cambia la imagen cada 3.75 segundos
}

// Llamada inicial para mostrar la primera imagen
mostrarImagenActual();

// Iniciar rotación automática
iniciarRotacionAutomatica();

// Obtener referencias a los botones de navegación
var btnSiguiente = document.getElementById("btnSiguiente");
var btnAnterior = document.getElementById("btnAnterior");

// Asignar eventos de clic a los botones de navegación
btnSiguiente.addEventListener("click", irSiguiente);
btnAnterior.addEventListener("click", irAnterior);

// Llamada inicial para mostrar la primera imagen
mostrarImagenActual();