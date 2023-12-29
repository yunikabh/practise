console.log('hello')

var fname;
fname='yunika';
var flast;
flast="bhandari";
console.log("hello my name is" + fname+ "and last name is"+flast )

//template literals
var fname="yunika"
var lname="bhandari"
console.log('hello i am ',fname,"and last name is ",lname)
console.log(`hello i am ${fname} and last name is ${lname}`)

//var=> re declared and re assign 
var fullname='ashok'
console.log(fullname)
var fullname='basnet'
console.log(fullname)

//let no redeclared but re assign
let funame='ashok'
console.log(funame)
funame='basnet'
console.log(funame)

//const no declared and no reassign
const llname='poudel'
console.log(llname)



let age=16
console.log(age) //16
if(true){
    let age=14
    console.log(age) //14

}
console.log(age)//16

