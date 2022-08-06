const buttton = document.querySelector("#answer");
const output = document.querySelector("#output");
const form = document.querySelector(".question");
let answers = ["90", "Right Angled", "Equilateral"];
const click = document.querySelector('#click');
const labelMenubar = document.querySelector("#menubar");

labelMenubar.addEventListener('click', () => {
    if (click.checked == true) {
        form.style.display = "block";
    } else {
        form.style.display = "none";
    }
})
function calculateScore(formData) {
    let score = 0;
    let index = 0;
    let ans = new FormData(formData);
    for (let [key, value] of ans) {
        if (answers[index] === value) {
            score = score + 1;
        }
        index = index + 1;
    }
    //console.log(input);
    return score;
}

buttton.addEventListener('click', () => {
    let score = calculateScore(form);
    if (score == 3) {
        output.innerText = `Your score is ${score} 🚀`;
    } else if (score == 0) {
        output.innerText = `Your score is ${score} 🤒`;
    } else {
        output.innerText = `Your score is ${score}`;
    }
});