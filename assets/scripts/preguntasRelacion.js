const respuesta1 = document.getElementById("pregunta4.1");
const respuesta2 = document.getElementById("pregunta4.2");
respuesta1.addEventListener("click", () => {
    swal(
      "Cuidado!",
      "Recuerda, los elementos del rango son variables dependientes",
      "error"
    );
  });
  respuesta2.addEventListener("click", () => {
    swal("Bien hecho!", "La respuesta es correcta.", "success");
  });
  