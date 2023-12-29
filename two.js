//data types primitive data(string,number,boolean,null,undefined,symbol(unique banaune kam garxa),bigINt,non-primit)

var a='sajan'
console.log(typeof a)

var b=2
console.log(typeof b)

var c=false
console.log(typeof c)

var d=null
console.log(typeof d)

var e;
console.log(typeof e)
 
console.log(Symbol('sajan')=='sajan')

var fruits=['mango','mango' ,'mango',2,true]
console.log(typeof fruits)

var obj={
    id:1,name:"sajan" ,ph:1111
}
console.log(typeof obj)


//Arithmetic operators
var a,b;
a=3
b=4
console.log("a+b=" ,a+b)
console.log(`a+b= ${a+b}`)
console.log(`a+b= ${a-b}`)
console.log(`a+b= ${a*b}`)
console.log(`a+b= ${a/b}`)
console.log(`a+b=${a%b}`)
console.log(a++)//a=a+1
console.log(a--)//a=a-1
console.log(a)

//Assignment operators
var a,b
a=3
b=4

console.log(a+=b)//a=a+b//3+4
console.log(a-=b)//a=a-b//7-4
console.log(a*=b)//a=12
console.log(a/=b)//a=a/b//12/4 //3
console.log(a%=b)//a=a%b //3%4

//comparision operators
var x=3;var y=4;var z='3'
console.log(x==z)//true
console.log(x===z)//false
console.log(4>1)
console.log(4<1)
console.log(4>=4)

//logical operators
console.log(('admin'=='admin')&&('pass'=='pass'))
console.log(('admin'=='admin1') || ('pass'=='pass'))
console.log(!true)
