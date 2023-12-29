//conditional operatos

// var aa=prompt(parseInt("enter number"))
// if(aa>=40){
//     console.log("u have passed exam")
// }
// else{
//     console.log("u have failed")
// }

var c=4
switch(c){
    case 1:console.log("today is sunday");break;
    case 2:console.log("today is monday");break;
    case 3:console.log("today is wedday");break;
default:console.log("error")
}

//ternary operator

var a=2
console.log(a>1? "it is true":"it is false")

//for,while,do while,for of,for in

console.log("loop start")
for(ab=0;ab<10;ab++){
    if(ab==3){
   console.log("3")
    continue
    }
    console.log("for loop",ab)
}

console.log("loop end")

var b=0;
while(b<10){
    console.log("while loop" ,b)
    b++
}

var d=10;
do{
    console.log("do while",c)
    c++
}while(c<10)


