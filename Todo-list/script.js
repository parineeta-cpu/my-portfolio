
var main = document.querySelector('.main');
var btn = document.querySelector('#btn');
function added(){
    var a = document.querySelector('#display');
    var para = document.createElement('p');
    var but = document.createElement('button');
    b=a.value;
    para.innerText=b;
    a.value="";
    main.appendChild(para);
    but.innerText="❌";
    function remove(){
        para.remove();
    }
    function cut(){
        para.style.textDecoration="line-through";
        para.style.opacity="0.8";
    }
    but.addEventListener("click",remove);
     para.appendChild(but); 
     but.classList.add('cancelbut');  
     para.addEventListener("click",cut); 
     
}

btn.addEventListener("click",added);
 