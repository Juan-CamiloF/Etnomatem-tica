const respuesta1 = document.getElementById("pregunta1.1");
const respuesta2 = document.getElementById("pregunta1.2");
const respuesta3 = document.getElementById("pregunta2.1");
const respuesta4 = document.getElementById("pregunta2.2");
const respuesta5 = document.getElementById("pregunta3.1");
const respuesta6 = document.getElementById("pregunta3.2");
//Eventos
respuesta1.addEventListener("click", () => {
  swal("Bien hecho!", "La respuesta es correcta.", "success");
});
respuesta2.addEventListener("click", () => {
  swal("Cuidado!", "Recuerda, las variables son cosas que cambian.", "error");
});
respuesta3.addEventListener("click", () => {
  swal(
    "Cuidado!",
    "Recuerda, las constantes son cosas que NO cambian.",
    "error"
  );
});
respuesta4.addEventListener("click", () => {
  swal("Bien hecho!", "La respuesta es correcta.", "success");
});
respuesta5.addEventListener("click", () => {
  swal(
    "Respuesta!",
    "La variable independiente es la cantidad de manillas que Juana y Andrés que hacen, pues esta es la variable sobre la que tienen control.",
    "success"
  );
});
respuesta6.addEventListener("click", () => {
  swal(
    "Respuesta!",
    "La variable dependiente es la cantidad de dinero que gana María al vender las camisas.",
    "success"
  );
});
