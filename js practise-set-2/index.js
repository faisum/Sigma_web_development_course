//Question 1 answer
let age=15;
if((age>=10) && (age<=20)){
    console.log("the age is lies between 10 and 20");
}else{
    console.log("The age is not lies between 10 and 20");
}

//Question 2 answer
let dayOfWeek = "Monday";
switch (dayOfWeek) {
  case "Monday":
    console.log(`It's ${dayOfWeek}, time for work!`);
    break;
  case "Tuesday":
    console.log(`It's ${dayOfWeek}, let's plan for the week.`);
    break;
  case "Wednesday":
    console.log(`It's ${dayOfWeek}, hump day!`);
    break;
  case "Thursday":
    console.log(`It's ${dayOfWeek}, almost there!`);
    break;
  case "Friday":
    console.log(`It's ${dayOfWeek}, weekend is coming!`);
    break;
  default:
    console.log(`It's a ${dayOfWeek} weekend day!`);
}

//Qustion 3 answer

let number =6;
if((number%2==0)&&(number%3==0)){
    console.log(`The number ${number} is divisible by 2 and 3`);
}else{
    console.log(`The number ${number} is not divisible by 2 and 3`)
}

//Question 4 answer
let numbers =7;
if((numbers%2==0)||(numbers%3==0)){
    console.log(`The number ${numbers} is divisible by  either 2 and 3`);
}else{
    console.log(`The number ${numbers} is not divisible by either 2 and 3`)
}

//Qustion 5 solution
drivingAge=17;
let result=drivingAge>= 18 ? "You can drive" : "You can't drive";
console.log(result)