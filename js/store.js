document.addEventListener("DOMContentLoaded", function() {
    const decrementBtns = document.querySelectorAll(".decrement");
    const incrementBtns = document.querySelectorAll(".increment");
    const counters = document.querySelectorAll(".counter");

    decrementBtns.forEach((btn, index) => {
        btn.addEventListener("click", function() {
            let count = parseInt(counters[index].textContent);
            counters[index].textContent = Math.max(0, count - 1);
        });
    });

    incrementBtns.forEach((btn, index) => {
        btn.addEventListener("click", function() {
            let count = parseInt(counters[index].textContent);
            counters[index].textContent = count + 1;
        });
    });
});

// Función para redirigir a la página de inicio de sesión abriendo una nueva ventana
function irAPaginaLogIn() {
    window.open("login.html", "_blank");
}

// Función para redirigir a la página de la tienda abriendo una nueva ventana
function irAPaginaStore() {
    window.open("store.html", "_blank");
}

// Función para redirigir a la página de la tienda abriendo una nueva ventana
function irAPaginaPagos() {
    window.open("pagos.html", "_blank");
}
