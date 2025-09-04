const main = document.querySelector('#main');
const info = document.querySelectorAll('.info');
const generateBtn = document.querySelector('#generateBtn');
const image = document.querySelector("#image");
if(!dateSelector){
    dateSelector=new Date().toISOString().split("T")[0];
}
function generate(){
    let dateSelector = document.querySelector('#dateSelector').value;
const apiKey="b8OWmaTHWutzcBntD71u84F1IEIb1zdq5VChCQbK";
const link = fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${dateSelector}`);
link.then((res)=>{
return res.json();
}).then((data)=>{
info[0].innerHTML = `<h2>Title:${data.title}</h2>`
info[1].innerText = `Date:${data.date}`
info[2].innerText = `Description:${data.explanation}`
image.src=data.url;
}).catch((error)=>{
alert("Something Went Wrong");
})
console.log(dateSelector);
}
generate();
generateBtn.addEventListener("click",generate);
