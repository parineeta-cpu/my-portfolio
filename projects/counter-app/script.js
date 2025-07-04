const counter= document.querySelector('#counter');
const incBtn =document.querySelector('#incButton');
const decBtn =document.querySelector('#decButton');
const resetBtn =document.querySelector('#resetButton');

let count=0;
function updateCounter(){
  counter.textContent=count;
}

incBtn.addEventListener("click", function(){
  count++;
  updateCounter();
})
decBtn.addEventListener("click",function(){
  count--;
  updateCounter();
})
resetBtn.addEventListener("click",function(){
  count=0;
  updateCounter();
})