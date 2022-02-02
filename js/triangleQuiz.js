const form = document.querySelector(".question");
const buttton = document.querySelector("#answer");
const ourput = document.querySelector("#output");
let answers = ["90","Right Angled","Equilateral"];
let input = [];

function calculateScore(){
    let score = 0;
    let ans = new FormData(form);
    for(let [key , value] of ans){
        input.push(value);
    }
    for(let i=0; i<answers.length;i++){
        if(answers[i] == input[i]){
            score = score + 1;
        }
    }
    return score;
}

buttton.addEventListener('click',()=>{
    let score = calculateScore();
    if(score == 3){
    ourput.innerText = `Your score is ${score} 🚀`;
    }else if(score == 0){
    ourput.innerText = `Your score is ${score} 🤒`;
    }else{
    ourput.innerText = `Your score is ${score}`;
    }
});