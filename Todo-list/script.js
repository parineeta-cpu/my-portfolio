
var main = document.querySelector('.main');
var btn = document.querySelector('#btn');
function added(){
    var a = document.querySelector('#display');
    var para = document.createElement('p');
    var but = document.createElement('button');
    var para2 = document.createElement('p');
    b=a.value;
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
     but.classList.add('cancelbut');  
     para2.addEventListener("click",cut); 
     if(b === ""){
        para.innerText="Please enter something..";
        console.log(para);
        para.style.color="red";
     }
}

btn.addEventListener("click",added);
 