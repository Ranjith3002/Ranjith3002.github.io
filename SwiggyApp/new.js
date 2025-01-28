let a=1 
b=3
c=a+b
console.log(c)

// document.getElementById('vishwa').style.color ='red'



function firstfun(){
    // console.log('vishwanath')
    document.getElementById('vishwa').style.color ='red'
    document.getElementById('red').innerHTML= 'clicked red color'


}

function firstfun1(){
    document.getElementById('vishwa').style.color ='green'
    document.getElementById('green').innerHTML= 'clicked green color'
}

// Box color changecolor
function changecolor(){
    document.getElementById('box').style.backgroundColor='red'
}
   
function changecolor1(){
document.getElementById('box').style.backgroundColor='green'
}



function sub(){
    var a= document.getElementById('intvalues').value
     console.log(a)

     console.log(a.trim().length)
     
    //  var showResult = document.getElementById('result')

     if(a.trim().length == 0){
        document.getElementById('result').innerHTML ="Empty space are not allowed"
    }
     else if(a % 2 == 0){
        document.getElementById('result').innerHTML=`The given number ${a} is even number`
     }
    else{
        document.getElementById('result').innerHTML=`The given number ${a} is odd number`
    }
}


    // if(a%2==0){
    //     //    comsole.log('it is even number')
    //        document.getElementById('try').innerHTML=`the given ${a}is even number`
    // }
    // else{
           
    //     // console.log('it is odd nmber')
    //      document.getElementById('try').innerHTML=`the given ${a}is odd number`
    // }

// IF ELSE CONDITION

let xValue = 5
newName = 'some'
if(xValue >= 10){
    console.log(`the value ${newName} is greater than 10` )
}
else if(xValue == 10){
    console.log(`same value ten`)
}
else{
    console.log('Try again');
     
    }

    function addFun(a,b){
        // console.log('HOISTING')
        console.log('200')
        console.log('300')
    }
    addFun()



// arithmetic operator

let x= '1'
let y = 3
let z = 4
console.log(x+y+z)

let xString = 'added'
let yString = 'values'
console.log(xString+' '+yString)

// Array

let xArray = [1,2,'3',5,'vishwa',8,9,'harini']

// Object
let yObject = {name:'vishwa.kh',age:23,location:'chennai'}


var cValue = 'some'
console.log(cValue)

// string methods

// 1.Length

let myString = ' ab cde '

console.log(myString.length)

// 2.Trim
let trimRest = myString.trim()
console.log(trimRest.length)

// 3.TRIM START

let tStart = myString.trimStart()
console.log( tStart.length)

// 4.TRIM END

let tEnd = myString.trimEnd()
console.log( tEnd.length)

// UPPER/LOWER CASE
let v = 'APPle'
console.log(v.toLocaleLowerCase())
console.log( v.toLocaleUpperCase())


// CONCAT
let h ='added'
let i ='values'
console.log(h.concat(i))

// SPLIT
let stringValues = 'ab-cd-ef'
console.log(stringValues.split('-'))
let changeToArray = (stringValues.split('-'))

// TO CHANGE Array
let backString = changeToArray.join('@')
console.log(backString)

// SLICE
let zValue = 'vishwanath'
console.log(zValue.slice(6))

// REPLACE
let Values = 'some of some goog words'
let repValues = Values.replace('some','another')
console.log(repValues)
// REPLACE ALL
let allValue = Values.replaceAll('some','another')
console.log(allValue)


// Array
let arrayValues = ['person 1','person 2','personn 3','person 4','person 5']

// ARRAY METHOD:
// LENGTH
let str = 'abcde'
console.log(arrayValues.length)


for(let x = 0; x>=0;x--) {
    if(x %2 ==0)
        console.log(x)
}

for(x =0; x<arrayValues.length; x++){
    console.log(arrayValues[x])
}
// print0 to 10;
for( let x=0; x<=10; x++){
    console.log(x)
}
// PUSH[to add at end]
let number = [1,2,3,4,5]
console.log(number)
number.push(100)
console.log(number)

// POP[delete end value]
number.pop()
console.log(number)

//UNSHIFT[add value at start]
number.unshift(101)
console.log(number)

// SHIFT[remove first value]
number.shift()
console.log(number)

// SLICE
let arrayNum = [1,2,3,4,5,6,7]
resNum = arrayNum.slice(0,3)
console.log(resNum)

// SPLICE
// arrayNum(add index,remove count,add value)
resSplice = arrayNum.splice(3,1,99)
console.log(resSplice)

// MAP
// let listArray = [10,20,30,40,50]
// let resArray = listArray.map((value,index,array)=>{
//      console.log(value)
//      console.log(index)
//      console.log(array)
//      return value*2
  
// }  )
// console.log(resArray)

let arr= [1,2,5,2,3,40,7,1,6,8]

let maxarr = arr.sort((a,b)=>{
    return a-b
})

console.log(maxarr[maxarr.length-1])




// REVERSE

let revArray = [1,2,3,4,5]

let resRev = revArray.reverse()
console.log('Reverse value is ='+ resRev)

// REDUCER
let sumRes = revArray.reduce((accumulator,currentValue)=>{

    return accumulator+currentValue
},100)
console.log(sumRes)

// // SORT
// let sortOrder = [5,10,3,20,1,5,30,50]
// let sortsResult = sortOrder.sort((a,b)=>{
// return a-b

// })
// console.log(sortsResult[sortsResult.length -1])




const arryValues =  [2,3,40,30,20,10,1,2,5];
const largeList = (position,array) =>{

    let newArray = array;
    const filtered = newArray.filter((value,index,array) => index === array.indexOf(value))
    .sort((a,b) => b-a);


if (position > filtered.length || position < 0)
    return 'index is ......';
    return filtered[position-1];
};

console.log('Largest Number is : ', largeList(1,arrayValues));












// const output = [];

// function removeArray(arr){
//     let output = arr.filter(function(v,i,self) {

//         return i == self.indexOf(v);

//     });
//        return output;
// }

// console.log(removeArray(vishwa));

// SET METHOD
// const resVishwa = [...new Set(vishwa)];
// console.log(resVishwa);




// for(let j=0;j<=Vishwa.length;j++){

//     for(let k=j;k<=Vishwa.length;k++){

//         if(Vishwa[j]>Vishwa[k]){

//             // swap
//             let swap = Vishwa[j]
//             Vishwa[j]=Vishwa[k]
//             Vishwa[k]= swap
//         }

//     }
// }
//   console.log(Vishwa)   




// AND

let age = 30
let num = 10

if(age>29 && num>9){
    console.log('CONDITION PASS')
}
else{
    console.group('TRY AGAIN')
}

// NOT
if(!true){
    console.log('CONDITION PASS')
}
else{
    console.group('TRY AGAIN')
}

// OR FUNCTION
if(age>29 | num>9){
    console.log('CONDITION PASS')
}
else{
    console.group('TRY AGAIN')
}

// OBJECT METHOD

let obj ={a:'added',b:'Values',c:'banned'}
console.log(Object.keys(obj))
console.log(Object.values(obj))

let obj1 = {h:'harini'}

// SPREAD OPERATOR(...)TO JOIN THE OBJECT
let joinArray = {...obj,...obj1}
console.log(joinArray)

// DELETE(THAT DELETE ANY OBJECT)
delete joinArray.b
console.log(joinArray)


// DEEP COPY
// SHALLOW COPY


let mainClass = 5
let subClass = mainClass
console.log(subClass)

mainClass = 10
console.log(subClass) 



// CALLBACK FUNCTION

function parentFun(a,b){
  return a+b
}
// console.log(parentFun(5,5))

// ----
function parentFun(a,b){
const result = a+20
return b(result)
  }
  function childFun(a){
    return a+100
  }
  console.log(parentFun(5,childFun))    



// PROMISE METHOD
// TO USE RESOLVE

let H1 = new Promise((resolve,reject)=>{

    resolve('success')
})

H1.then(console.log)

// TO USE REJECT
let V1 = new Promise((resolve,reject)=>{

    reject('failure')
})

V1.catch(console.log)


// CALL FUNC USE TO OVERCOE CALLBACK

          


//ALL
// ALL SETTLE
// RACE

let p1 = new Promise((resolve,reject)=>{

    reject('harinivishwa')
})

let p2 = new Promise((resolve,reject)=>{
    resolve('failure')
})

Promise.all([p1,p2]).catch(console.log)
Promise.allSettled([p1,p2]).then(console.log)
Promise.race([p1,p2]).catch(console.log) 

// example

function talktime(){
    return new Promise((resolve, reject) => {
        let bookingsucess = true
        if(bookingsucess){
            resolve()
        }
        else{
            reject()
        }
    })
}
talktime().then(()=>console.log('congrats you are successful booking'))
.catch(()=>console.log('sorry you are rejected'))


let reachingA = new Promise((resolve, reject) => {
    let reached = true
    if(reached){
        setTimeout(resolve,3000,'vidhya is reached')
    }
    else{
        reject('Vidhya not reached')
    }
})
let reachingB  = new Promise((resolve,reject)=>{
    let reached = true
    if(reached){
        setTimeout(resolve,5000,'ramya is reached')
    }
    else{
        reject('ramya not reached')
    }

})
let reachingC  = new Promise((resolve,reject)=>{
    let reached = true
    if(reached){
        setTimeout(resolve,1000,'harini is reached')
    }
    else{
        reject('harini not reached')
    }

})
Promise.race([reachingA,reachingB,reachingC]).then(console.log)
// Promise.allSettled([reachingA,reachingB,reachingC]).then(console.log)















// ASSYNC AND AWAIT

async function vishwa() {
           return 'harini'
    
}
console.log(vishwa())


// test questions
// ques 9
let karan = [5,6,7,8,10]
karan.push(20)
console.log(karan)

// ques 14

let karan1 = [5,6,7,8,10]
karan1.unshift(20)
console.log(karan1)

// ques 15
let harini = [5,6,7,8,10]
 harini.splice(1,0,20)
console.log(harini)

// ques 16
let vishwaharini = [1,2,3,4,5]
let resVishwa = vishwaharini.map((value)=>{
    return value*10
})
console.log(resVishwa)

// ques 17

let fruits = "Aplle,Banana,Kiwi,Orange,Grapes"
const changeArrray = fruits.split(',')
console.log(changeArrray)

changeArrray.splice(3,2)
 console.log(changeArrray)

// quess24

let arrvishwa = [10,20,30,40,50]
let funArray = function(arrvishwa){
    let sum = 0;
    for(let value of arrvishwa){
        sum = sum+value
    }
    return sum
}
console.log(funArray(arrvishwa))



// PRACTISE JS PROGRAMS

var factor = "vijay"
var fmovie = "Anbea Sivam"
var fheroine = "Harini"




function actor(){
    console.log("Favourite actor:" +factor)
    console.log("Favourite Actor:"+fmovie)  
    console.log("Favourite Actor:"+fheroine)        


}
actor()

// return practse wok

function addNumbers(a,b){

    return(a*b)
}
var total = addNumbers(10,10)
console.log(total)

// if else practise work

var work = false
if(work){
    console.log("great job")
}
else{
    console.log("finish your homework")
}

// and /or/not

var climate = "autum"

if(climate == "spring"){
    console.log("Njoy the brooming")
}

if(climate == "autum"){
    console.log("Have fun the sun")
}

if(climate == "winter"){
    console.log("Enjoy the winter")
}

// for(balue = 10; balue<=20; balue++){
//     console.log(balue)
// }