const buttton = document.querySelector("#answer");
const ourput = document.querySelector("#output");
let answers = ["90","Right Angled","Equilateral"];

function calculateScore(formData){
    let score = 0;
    let input = [];
    let ans = new FormData(formData);
    for(let [key , value] of ans){
        input.push(value);
    }
    for(let i=0; i<answers.length;i++){
        if(answers[i] == input[i]){
            score = score + 1;
        }
    }
    console.log(input);
    return score;
}

buttton.addEventListener('click',()=>{
    const form = document.querySelector(".question");
    let score = calculateScore(form);
    if(score == 3){
    ourput.innerText = `Your score is ${score} 🚀`;
    }else if(score == 0){
    ourput.innerText = `Your score is ${score} 🤒`;
    }else{
    ourput.innerText = `Your score is ${score}`;
    }
});