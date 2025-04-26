console.log("Script is initializing...  ")

let boxes=document.getElementsByClassName("box")
console.log(boxes)

function randColor() {
    let val1= Math.ceil(0 + Math.random()*255)
    let val2= Math.ceil(0 + Math.random()*255)
    let val3= Math.ceil(0 + Math.random()*255)
  return `rgb(${val1},${val2},${val3})`
}
Array.from(boxes).forEach(e => {
    e.style.backgroundColor=randColor()
    e.style.color=randColor()
});


// function getRandom() {
//     let val1=Math.ceil(0 + Math.random()*255)
//     let val2=Math.ceil(0 + Math.random()*255)
//     let val3=Math.ceil(0 + Math.random()*255)
//     return `rgb(${val1}, ${val2}, ${val3})`
// }

// Array.from(boxes).forEach(e=>{
//     e.style.backgroundColor=getRandom()
//     e.style.color=getRandom()
// })