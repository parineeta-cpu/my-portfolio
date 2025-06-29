
var main = document.querySelector('.main');
var btn = document.querySelector('#btn');
function added(){
    var a = document.querySelector('#display');
      b=a.value;
        if(b===""){
            alert("Please enter something..")
            return;
        }
        else{
            var a = document.querySelector('#display');
      b=a.value;
    var para = document.createElement('p');
    var but = document.createElement('button');
    var para2 = document.createElement('p');
    
  
    para2.innerText=b;
    a.value="";
    main.appendChild(para);
    
    para.appendChild(para2);
    but.innerText="❌";
    
    function remove(){
        para.remove();
    }

    function cut(){
        para2.style.textDecoration="line-through";
        para2.style.opacity="0.8";
    }
    but.addEventListener("click",remove);
     para.appendChild(but); 
     para.classList.add('para');
     but.classList.add('cancelbut');  
     para2.addEventListener("click",cut);  
}   
}

    
btn.addEventListener("click",added);
 