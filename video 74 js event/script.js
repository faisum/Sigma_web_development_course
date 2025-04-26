let button=document.getElementById("btn")

// button.addEventListener("dblclick",()=>{
//    alert("you have been double clicked")
   
// })


// button.addEventListener("contextmenu",()=>{
//    document.querySelector(".box").innerHTML="changed by click"
// })

// document.addEventListener("keydown",(e)=>{
//    console.log(e,e.key,e.keyCode);
// })

//Event bubbeling

// document.querySelector(".container").addEventListener("click",()=>{
//    alert("Container is clicked")
// })

// document.querySelector(".box").addEventListener("click",()=>{
//    alert("box is clicked")
// })


// document.querySelector(".child").addEventListener("click",(e)=>{
//    e.stopPropagation();
//    alert("Child is clicked")
// })


//SetInterval 

let a =setInterval(() => {
   document.querySelector(".box").style.background=randColor()
   console.log(a)
}, 1000);

 SetTimeout
let b =setTimeout(() => {
   document.querySelector(".box").style.background=randColor()
   console.log(b)
}, 5000);



function randColor() {
   let val1= Math.ceil(0 + Math.random()*255)
   let val2= Math.ceil(0 + Math.random()*255)
   let val3= Math.ceil(0 + Math.random()*255)
 return `rgb(${val1},${val2},${val3})`
}