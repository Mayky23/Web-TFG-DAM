  // Función para el primer botón
  function irAPaginaLogIn() {
    // Redirige a la página 1
    window.location.href = "login.html";
  }

  // Función para el segundo botón
  function irAPaginaStore() {
    // Redirige a la página 2
    window.location.href = "store.html";
  }

// JavaScript para cambiar la imagen cuando se cambie de página
const carpetaImagenes = "../img/";
const nombresImagenes = ["default.png", "workers.png", "movil.png"];
const imagenMostrada = document.getElementById("imagenMostrada");
const botonesPaginacion = document.querySelectorAll(".splide__pagination__page");

botonesPaginacion.forEach((boton, index) => {
  boton.addEventListener("click", () => {
    // Concatenar la carpeta base con el nombre de la imagen
    const rutaImagen = carpetaImagenes + nombresImagenes[index];
    // Cambiar la imagen mostrada al hacer clic en un botón de paginación
    imagenMostrada.src = rutaImagen;
    imagenMostrada.alt = "Imagen " + (index + 1);
  });
});
