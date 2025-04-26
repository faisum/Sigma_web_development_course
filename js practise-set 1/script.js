// first question answer
// let obj={
//     name:"harry",
//     phone_no:"8888777666",
//     "marks of maths":"100"
// }
// console.log(obj)

// // second question answer
// var name="sam";
// console.log(name)

// name=name + " ayub"
// console.log(name)

// //third question answer
// console.log(typeof name)

//fourth question answer
//word meaning dictionary of five word
let wordDictionary={
    "Annoy": "To make someone angry",
    "Calm": "Free of any disturbance",
    "Consequences": "An unpleasant or unwelcome result of an action",
    "Decide": "To choose out of several alternatives",
    "Discover": "To find something unexpectedly or during a search" 
};
function searchMeaning(word){
    const meaning=wordDictionary[word];
    if(meaning){
        console.log(`The meaninig of ${word} is ${meaning}`)
    }else{
        console.log(`The meaning of ${word} is not in dictionary`)
    }
}
searchMeaning("Calm")

