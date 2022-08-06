const button = document.querySelector("#submit");
const output = document.querySelector("#output");
const baseHeight = document.querySelectorAll(".input");

function calculateArea() {
    let oneSide = parseInt(baseHeight[0].value);
    let secondSide = parseInt(baseHeight[1].value);
    if (oneSide < 0 || secondSide < 0 || !oneSide || !secondSide) {
        return "Enter valid Input";
    }
    let area = oneSide * secondSide;
    area = Math.floor(area / 2);
    return `Area = ${area}`;
}
button.addEventListener('click', () => {
    let area = calculateArea();
    output.innerText = area;
});