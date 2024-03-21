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
