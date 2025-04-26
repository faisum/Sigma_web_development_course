
// //Question 1 answer
// const obj = { sam: 98, ayub: 85, rahil: 93 };
// for (let student in obj) {
//     console.log(`${student}: ${obj[student]}`);
// }


// //Qustion 2 answer using for in loop
// const obj = { sam: 98, ayub: 85, rahil: 93 };
// for (const key in obj) {
//     console.log("The marks of " + key + " is " + obj[key])
// }

// Question 3 solution 
//npm install prompt-sync

// const prompt = require('prompt-sync')();

// let cn=7;
// let i;
// while(i != cn){
//     console.log("Try again")
//     i = prompt("Enter a number ");
// }
// console.log("You entered a correct number")



//Question 4 solution : Mean of the 5 number
function mean(a,b,c,d,e){
    return (a+b+c+d+e)/5;
    
}
console.log("The mean of the following number is : "+mean(10,5,5,20,5));
