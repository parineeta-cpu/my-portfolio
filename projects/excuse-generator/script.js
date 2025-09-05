 const btn = document.querySelector(".btn");
 const container = document.querySelector(".container");
        const main = document.querySelector(".options");
       const output = document.querySelector(".output");
      
        fetch("./excuse.json").then((res)=>{
            return res.json();
        }).then((data)=>{ 
           
             let count = 0;
             
            function excuses(){
                 const value = main.options[main.selectedIndex].value;
                 if(!value || value==="default"){
                    alert("Please choose a valid reason..");
                 }
             for(let i=0;i<1;i++){
                count++;
                output.innerText=data[value][count];
               
        }
         if(count>9){
                output.innerText="⚠ No more excuses available!"
               }
    }

    main.addEventListener("change",()=>{
        count=0;
    });
    btn.addEventListener("click",excuses);
    }).catch((error)=>{
            alert(error);
        })
        
    ;
        