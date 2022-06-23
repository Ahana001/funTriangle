const buttton = document.querySelector("#answer");
const output = document.querySelector("#output");
const form = document.querySelector(".question");
let answers = ["90", "Right Angled", "Equilateral"];

function calculateScore(formData) {
    let score = 0;
    let input = [];
    let ans = new FormData(formData);
    for (let [key, value] of ans) {
        input.push(value);
    }
    for (let i = 0; i < answers.length; i++) {
        if (answers[i] == input[i]) {
            score = score + 1;
        }
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