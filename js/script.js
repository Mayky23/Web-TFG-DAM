// Función para redirigir a la página de inicio de sesión abriendo una nueva ventana
function irAPaginaLogIn() {
  window.open("login.html", "_blank");
}

// Función para redirigir a la página de la tienda abriendo una nueva ventana
function irAPaginaStore() {
  window.open("store.html", "_blank");
}

// Función para redirigir a la página index abriendo una nueva ventana
function irAPaginaMain() {
  window.open("index.html", "_blank");
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
