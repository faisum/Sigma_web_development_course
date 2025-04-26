let arr=[3,7,5,11,9,15];
let arr2=[7,22,44,33];
// console.log(arr.splice(2,2,22,33))
// console.log(arr.slice(2,4))
// console.log(arr)
// // console.log(arr.concat(arr2))

// console.log(arr)
// console.log(arr.length)
// console.log(arr[5])
// console.log(arr.toString())
// console.log(arr.join(" and "))
// console.log(arr)
// console.log(delete arr[0])
// console.log(arr)
// // console.log("The popped elemnt is " +arr.pop())
// console.log("After popping the element " +arr)
// console.log(arr.shift(arr))
// console.log(arr)

// console.log(arr.unshift(45));
// console.log(arr)
// console.log(arr.push(55))
// console.log(arr)

//classical for loop.
// for (let i = 0; i < arr.length; i++) {
//     //const element = arr[i];
//     console.log(arr[i])
// }

// const fruits = ["Apple", "Banana", "Cherry"];
// for (let i = 0; i < fruits.length; i++) {
// console.log(fruits[i]);
// }

//for each loop 
// arr.forEach(element => {
//     console.log(element)
// });

// let obj={
//     Name:"ayub",
//     Age:17
// }
// for (const key in obj) {
//     if (Object.prototype.hasOwnProperty.call(obj, key)) {
//         const element = obj[key];
//         console.log(element)
        
//     }
// }


//for of loop
// for (const element of arr) {
//     console.log(element)
// }


//Map function

// let newNum=num.map((e)=>{
//     return e*2
// })
// console.log(newNum)

//filter function
// const num=[7,6,5,4,2];
// const greaterthan5=((e)=>{
// return e>5;
// })
// console.log(num.filter(greaterthan5))

let ab=[5,15,25,35,45]
let newab=(a,b)=>{
    return a+b;
}
console.log(ab.reduce(newab))

// Array from
console.log(Array.from("sammy"))