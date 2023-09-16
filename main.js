const myFigures = document.querySelectorAll(".figure");

myFigures.forEach(figure => {
    figure.addEventListener("click", () => figure.classList.toggle("move"))
})