const submitBtn=document.querySelector("#submitbtn");
function form(){
   const nameInput= document.querySelector("#name");
   const emailInput=document.querySelector("#email");
   const passwordInput=document.querySelector("#password");
   const cnfrmPasswordInput=document.querySelector("#cnfrmPassword");
   const numberInput=document.querySelector("#number");
   const genderInput=document.querySelector("#gender");
   const checkbox=document.querySelector("#checkbox");
   if(nameInput.value.length < 3){
    alert("Name must be atleat 3 characters long");
   }
   if(!emailInput.checkValidity()){
    alert("Please enter a valid email");
   }
   if(passwordInput.value.length<6){
    alert("Password must be atleast 6 characters long.")
   }
   if(passwordInput.value!==cnfrmPasswordInput.value){
alert("Passwords do not match");
   }

   if(numberInput.value.length!==10){
    alert("Please enter a valid 10-digit number.")
   }
   if(gender.value===""){
    alert("Please select your gender");
   }
   if(!checkbox.checked){
    alert("Please agree to all Terms&conditions");
   }
   else {
    alert("Form submitted successfully✔");
   }
}
submitBtn.addEventListener("click", form);