const button = document.querySelector("#submit");
const output = document.querySelector("#output");

function calculateHypotenuse(lenghts){
    let hypotenuse = 0;
    for(let i=0; i<lenghts.length ; i++){
        if(lenghts[i].value == "" || parseInt(lenghts[i].value)<0){
            hypotenuse = 0;
            break;
        }else{
        hypotenuse = hypotenuse + (parseInt((lenghts[i].value)**2));
        }
    }
    hypotenuse = Math.trunc(Math.sqrt(hypotenuse));
    return hypotenuse;
}
button.addEventListener('click',()=>{
    const input = document.querySelectorAll(".input");
    let hypotenuse = calculateHypotenuse(input);
   if(hypotenuse == 0){
    output.innerText = `Enter valid length of sides 😡`;

   }else{
    output.innerText = `Hypotenuse is 📐 ${hypotenuse}`;
   }
});