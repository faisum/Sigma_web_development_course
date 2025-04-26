console.log("This is Promises");

// let proms1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("Yes I am done")
//         resolve("Harry")
//     }, 3000);
// })
// proms1.then((a) => {
//     console.log(a)
// })

let proms1=new Promise((resolve,reject)=>{
    let a=Math.random();
    if(a<0.5){
        reject("No random number was not supporting you")
    }else{
    setTimeout(() => {
        console.log("Yes i am done")
        resolve("Harry")
    }, 3000);
}
})
proms1.then((a)=>{
    console.log(a)
}).catch((err)=>{
    console.log(err)
})

let proms2=new Promise((resolve,reject)=>{
    let a=Math.random();
    if(a<0.5){
        reject("No random number was not supporting you 2")
    }else{
    setTimeout(() => {
        console.log("Yes i am done 3")
        resolve("Harry 3")
    }, 3000);
}
})
proms1.then((a)=>{
    console.log(a)
}).catch((err)=>{
    console.log(err)
})

let p3=Promise.all((proms1,proms2)=>{
p3.then((a)=>{
    console.log(a)
})
}).catch((err=>{
    console.err
}))



// // // This is the code for changing the number into the k like 10000 to 1k
// // // function numberConverser(num){
// // //     if (num>=1000000){
// // //         return (num/1000000).toFixed(1)+"M";
// // //     }
// // //     else if(num >=1000){
// // //         return (num/1000).toFixed(1)+"K";
// // //     }
// // //     else{
// // //         return (num.toString())
// // //     }
// // // }
// // // console.log(numberConverser(5200))
// // // console.log(numberConverser(5200000))
// // // console.log(numberConverser(520))


