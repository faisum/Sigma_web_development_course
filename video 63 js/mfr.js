let arr= [5,9,7,12,11,4];

//using classsical for loop
// let newArr= []
// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     newArr.push(element**2)
// }
// console.log(newArr)

//using map
let newArr=arr.map((e,value,array)=>{
    return e**2
})
console.log(newArr)

let arrr=(a,b)=>{
    return a+b;
}

//filter
//1st way
// const greaterThanSeven = (e)=>{
//     if(e>7){
//         return true
//     }
//     return false
// }
// console.log(arr.filter(greaterThanSeven))

//2nd way
// console.log(arr.filter((e)=>{
//     if(e>7){
//         return true
//     }
//     return false
// }))

let arr2 =[1,2,3,4,5,6]
const red = (a,b)=>{
    return a*b
}
console.log(arr2.reduce(red))