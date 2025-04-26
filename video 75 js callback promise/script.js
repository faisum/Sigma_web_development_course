//  //asynchronization
 
//  console.log("the first line")
//  console.log("This is a second line")
//  setTimeout(() => {
//     console.log("the timeout code")
//  }, 0);

//  console.log("the end")


 //callback\
const fn=() => {
  console.log("Nothing")
}


 const callback=(arg,fn) => {
   console.log(arg)
   fn()
 }

 const loadScript =(src,callback) => {
    let sc=document.createElement("script");
    sc.src=src;
    sc.onload=callback("Harry",fn)
    document.head.append(sc)
   
 }
 loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js",callback)

 

