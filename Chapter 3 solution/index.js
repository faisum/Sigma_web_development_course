// //Problem 1 
// let marks={
//     Harry:85,
//     Rohan:70,
//     Aakash:50
// }
// for(let i=0;i<Object.keys(marks).length;i++){
//     console.log("The marks of " + Object.keys(marks)[i] + " are " +marks[Object.keys(marks)[i]] )
// }


// // Problem 2 have to print all element of this array 
// let obj={"harry" : 98, "rohan": 70,"aakash": 7};
// for (let key in obj)  {
//         console.log("Name is "+ key +" marks is ",  +obj[key])
    
// }



// problem 3
// const prompt=require('prompt-sync')();
// let cn=3;
// let i
// while(i!=cn){
    
//     i=prompt("Enter a number")
//     console.log("Try again")

// }
// console.log("YOu have entered a correct number")


// problem 4 // to find the mean of 5 number
let mean=(a,b,c,d,e)=>{
    return (a+b+c+d+e)/5;
}
console.log(mean(5,6,7,8,9))
