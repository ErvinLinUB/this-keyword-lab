// Exercise 2: The Data Attribute Reader

const swatches = document.querySelectorAll('.swatch');

// Define a function that reads this.dataset.color
// and applies it as this.style.backgroundColor

function changeColor() {
    this.style.backgroundColor = this.dataset.color;
}

// Then attach it to every swatch

swatches.forEach(swatch => {
    swatch.addEventListener('click', changeColor);
});