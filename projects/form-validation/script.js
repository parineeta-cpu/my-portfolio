const submitBtn=document.querySelector("#submitbtn");

function form(){
  event.preventDefault();
   const nameInput= document.querySelector("#name");
   const emailInput=document.querySelector("#email");
   const passwordInput=document.querySelector("#password");
   const cnfrmPasswordInput=document.querySelector("#cnfrmPassword");
   const numberInput=document.querySelector("#number");
   const genderInput=document.querySelector("#gender");
   const checkbox=document.querySelector("#checkbox");
   if(nameInput.value.length < 3){
    alert("Name must be atleat 3 characters long");
    return;
   }
   if(!emailInput.checkValidity()){
    alert("Please enter a valid email");
     return;
   }
  
   if(passwordInput.value.length<6){
    alert("Password must be atleast 6 characters long.")
     return;
   }
   if(passwordInput.value!==cnfrmPasswordInput.value){
alert("Passwords do not match");
 return;
   }

   if(numberInput.value.length!==10){
    alert("Please enter a valid 10-digit number.")
     return;
   }
   if(genderInput.value===""){
    alert("Please select your gender");
     return;
   }
   if(!checkbox.checked){
    alert("Please agree to all Terms&conditions");
     return;
   }
   else {
    alert("Form submitted successfully✔");
   }
}
submitBtn.addEventListener("click", form);
