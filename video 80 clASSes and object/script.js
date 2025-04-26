// let obj={
//     a:1,
//     b:"harry"
// }
// console.log(obj)

class Animal {
    constructor(name) {
        this.name=name;
        console.log("The object is created")
    }
    jump(){
        console.log("kood rha hoon")
    }
    eat(){
        console.log("kha rha hoon")
    }
}
class Lion extends Animal {
    constructor(name) {
        super(name);
        console.log("The object is created and he is a lion ....")
    }
    eat(){
        console.log("kha rha hoon insaaono ko")
    }
    

}

let a=new Animal("shera");
console.log(a)
 
let l=new Lion("champak");
console.log(l)