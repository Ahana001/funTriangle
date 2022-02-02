const button = document.querySelector("#submit");
const angles = document.querySelectorAll(".angle");
const output = document.querySelector("#output");
let sum = 0;
function calculateSum (){
    for(let i=0; i<angles.length;i++){
        sum = sum + parseInt(angles[i].value);
    }
}
button.addEventListener("click",()=>{
    calculateSum();
    if(sum == 180){
        output.innerText = "Hoorayyy. ! The angles form a triangle 🥳";
    }else{
        output.innerText = "oh no ! The angles don't form a triangle ☹️";
    }
});