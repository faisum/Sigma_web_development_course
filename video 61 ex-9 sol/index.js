// Have to generate the faulty calculator using javascript
// The Faulty calculator does the following:
//  takes two number from the user as a input 
//   perform following operation as follow

//  +----> -
//  * ----> +
//  - ---> /
//  / ---> **

let random=Math.random()
console.log(random)
let a=prompt("Enter First Number")
let c=prompt("Enter operation")
let b=prompt("Enter Second number")

let obj={
    "+":"-",
    "*":"+",
    "-":"/",
     "/":"**",
}

if (random>0.1) {
    //perform correct operation
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
    
}else{
    //perform wrong information
    c=obj[c]
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
    
}