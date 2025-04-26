let boxes = document.getElementsByClassName("box")
console.log(boxes)

boxes[2].style.backgroundColor="red"

document.getElementById("redbox").style.backgroundColor="yellow"
document.querySelector(".box").style.backgroundColor="green"
// document.querySelectorAll(".box").forEach(e=>{
//     e.style.backgroundColor="pink"
// }
// )

// e= document.getElementsByName("div")
// // NodeList []length: 0[[Prototype]]: NodeList
// e[4].matches("redbox")
// // VM232:1 Uncaught TypeError: Cannot read properties of undefined (reading 'matches')
//     // at <anonymous>:1:6
// // (anonymous) @ VM232:1Understand this error
// e = document.getElementsByTagName("div")
// // HTMLCollection(6) [div.container, div.box, div.box, div.box, div#redbox.box, div.box, redbox: div#redbox.box]
// e[4].ma
// // undefined
// e[4].matches("redbox")
// // false
// e[3].closest("container")
// null
// e[3].closest(".container")
// {/* <div class=​"container">​…​</div>​ */}