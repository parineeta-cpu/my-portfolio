const btn = document.querySelector("#calculate");
function calculate(){
const a= document.querySelector("#billValue");
const b=document.querySelector("#tipValue");
if(a.value==="" || b.value==="") {
    alert("Please enter both values..")
}
else{
    const bill = Number(a.value);
    const tip1 = Number(b.value);
    const tip= (bill*tip1)/100;
    const total=bill+tip;
    document.querySelector("#tip").innerText="Tip:"+tip;
    document.querySelector("#total").innerText="Total:"+total;
}
}
btn.addEventListener("click",calculate);