function validarDatos() {
    let nombreValid = document.getElementById("nombre");
    let emailValid = document.getElementById("email");
    let mensajeValid = document.getElementById("mensaje");
  
    nombreValid.classList.remove("error");
  
    let errores = document.getElementById("errores");
    errores.innerHTML = "";
    errores.style.display = "none";
  
    let mensajes = document.getElementById("mensajes");
    let terror = false;
    let terrorMensaje = document.createElement("p");
  
    if (
      nombreValid.value === "" ||
      nombreValid.value === null ||
      emailValid.value === "" ||
      !/^\S+@\S+\.\S+$/.test(emailValid.value) ||
      mensajeValid.value === "" ||
      mensajeValid.value === null
    ) {
      nombreValid.classList.add("error");
      terrorMensaje.textContent = "Debe completar todos los campos.";
      errores.appendChild(terrorMensaje);
      terror = true;
    } else {
      // Mostrar mensaje de éxito
      var successMessage = document.getElementById("successMessage");
      successMessage.style.display = "block";
    }
  
    if (terror) {
      errores.style.display = "initial";
      return false;
    } else {
      let p = document.createElement("p");
      if (emailValid.value !== "") {
        p.innerHTML =
          nombreValid.value +
          " (" +
          emailValid.value +
          ") ha escrito:\n" +
          mensajeValid.value +
          ".";
      } else {
        p.innerHTML = nombreValid.value + " ha escrito:\n" + mensajeValid.value + ".";
      }
      mensajes.appendChild(p);
      document.getElementById("myForm").reset();
      nombreValid.focus();
    }
    return false;
  }
  
  function cerrarMensaje() {
    var successMessage = document.getElementById("successMessage");
    successMessage.style.display = "none";
  }
  