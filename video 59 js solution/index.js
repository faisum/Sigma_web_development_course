// let random=Math.random();
// let a=prompt("Enter First number");
// let c=prompt("Enter operation");
// let b=prompt("Enter second Number");

// let obj={
//     "+":"-",
//     "*":"+",
//     "-":"/",
//     "/":"**"
// }


// if(random>0.1){
//     alert(`The result is ${eval(`${a} ${c} ${b}`)}`);
    

// }else{
//     c=obj[c]
//     alert(`The result is ${eval(`${a} ${c} ${b}`)}`);
    

// }









// let random=Math.random;
// let a=prompt("The value of a")
// let b=prompt("the value of b")
// let c=prompt("the operation you want to perform")

// let obj={
//     "+":"-",
//     "*":"/",
//     "/":"**",
//     "-":"+"
// }
// c=obj[c]
//     if(random>0.1){
//         if(opration=="+"){
//           console.log(a+b)
        
//         }
//         else if(opration=="-"){
//           console.log(a-b)
//         }
//         else if(opration=="*"){
//           console.log(a**b)
//         }
//         else if(opration=="/"){
//           console.log(a/b)
//         }
        
//       }
//       else {
//         if(opration=="+"){
//           console.log(a-b)
      
//         }
//         else if(opration=="-"){
//           console.log(a/b)
//         }
//         else if(opration=="*"){
//           console.log(a+b)
//         }
//         else if(opration=="/"){
//           console.log(a**b)
//         }
      
        
//       }

const prompt = require("prompt-sync")();
let a =Number(prompt("Enter the first number: "));
let b = Number(prompt("Enter the second number: "));
let opration = prompt("Enter the operator: ");

let random = Math.random();
console.log(random)
if(random>0.1){
  if(opration=="+"){
    console.log(a+b)
  
  }
  else if(opration=="-"){
    console.log(a-b)
  }
  else if(opration=="*"){
    console.log(a**b)
  }
  else if(opration=="/"){
    console.log(a/b)
  }
  
}
else {
  if(opration=="+"){
    console.log(a-b)

  }
  else if(opration=="-"){
    console.log(a/b)
  }
  else if(opration=="*"){
    console.log(a+b)
  }
  else if(opration=="/"){
    console.log(a**b)
  }

  
}