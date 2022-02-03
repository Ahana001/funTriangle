const button = document.querySelector("#submit");
const output = document.querySelector("#output");
function calculateArea(baseHeight){
    let area = parseInt(baseHeight[0].value)*parseInt(baseHeight[1].value);
    area = Math.floor(area/2);
    return area;
}

button.addEventListener('click',()=>{
    const input = document.querySelectorAll(".input");
    let area = calculateArea(input);
    if(isNaN(area)){
    output.innerText = `Enter valid Height and base 😡`;
    }else{
    output.innerText = `Area = ${area}`;
    }
});