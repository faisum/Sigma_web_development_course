let a=prompt("Enter first Number")

let b=prompt("Enter second Number")

let sum=parseInt(a) + parseInt(b);
if(isNaN(a) || isNaN(b)){
    throw SyntaxError ("Sorry this is not allowed")
}


function main(){
    let x=1;
try {
    console.log("The sum is " ,sum*x)
    return true;
} catch (error) {
    console.log("Error aa gya bhai")
    return false;
}finally{
    console.log("Files are being closed and db connection is closed")
}

}
let c=main();