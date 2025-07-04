const btn=document.querySelector('#btn');
function calculator(){
const weight=document.querySelector('#weight');
const height=document.querySelector('#height');
const a = weight.value;
const b = height.value;
const output = Number(a)/(Number(b)*Number(b));

if(!a || !b){
    alert("Please enter valid weight and height...");

}
if(output<18.5){
    document.querySelector("#bmi").innerText="BMI:" + output;
    document.querySelector("#weight-type").innerText="Weight Type : Underweight";
}
else if(output>=18.5 && output<=24.9){
    document.querySelector("#bmi").innerText="BMI:" + output;
    document.querySelector("#weight-type").innerText="Weight Type : Normal weight";
}
else if(output>24.9){
    document.querySelector("#bmi").innerText="BMI:" + output;
    document.querySelector("#weight-type").innerText="Weight Type : Overweight";
}
}
btn.addEventListener("click",calculator);