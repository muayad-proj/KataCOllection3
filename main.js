//console.log("kjhk")
let bodyElement = document.querySelector("body")
let finalArray =[]
for ( let i = 1; i <=20; i = i + 1){
    finalArray.push(i)

}
let finalString = finalArray.join(", ")
creatAppendHeader ("Kata 1")

let newDiv = document.createElement('div')
newDiv.append(finalString)
bodyElement.append(newDiv)

function creatAppendHeader(headerText){
    let newHeader = document.createElement('h1')
    newHeader.append(headerText)
    bodyElement.append(newHeader)
 }

 creatAppendHeader("kata 2")
 let finalArray2 =[]
for ( let i = 2; i <=20; i = i + 2){
    finalArray2.push(i)

}
let finalString2 = finalArray2.join(", ")
console.log (finalString2)

let newDiv2 = document.createElement('div')
newDiv2.append(finalString2)
bodyElement.append(newDiv2)


creatAppendHeader("kata 3")

let finalArray3 =[]
for ( let i = 1; i <=20; i = i + 2){
    finalArray3.push(i)
   
}
let finalString3 = finalArray3.join(", ")


let newDiv3 = document.createElement('div')
newDiv3.append(finalString3)
bodyElement.append(newDiv3)
creatAppendHeader("kata 4")
let finalArray4 =[]
for ( let i = 5; i <=100; i = i + 5){
    finalArray4.push(i)
   
}
let finalString4 = finalArray4.join(", ")


let newDiv4 = document.createElement('div')
newDiv4.append(finalString4)
bodyElement.append(newDiv4)

creatAppendHeader("kata 5")
let finalArray5 =[]
for ( let i = 1; i <=10; i = i + 1){
    let x = Math.pow(i,2)
    finalArray5.push(x)

   
}
let finalString5 = finalArray5.join(", ")


let newDiv5 = document.createElement('div')
newDiv5.append(finalString5)
bodyElement.append(newDiv5)
creatAppendHeader("kata 6")


let finalArray6 = []
for (let i = 20; i >= 1; i = i - 1) {

    finalArray6.push(i)


}
let finalString6 = finalArray6.join(", ")


let newDiv6 = document.createElement('div')
newDiv6.append(finalString6)
bodyElement.append(newDiv6)



creatAppendHeader("kata 7")

let finalArray7 = []
for (let i = 20; i >= 1; i = i - 2) {

    finalArray7.push(i)


}
let finalString7 = finalArray7.join(", ")


let newDiv7 = document.createElement('div')
newDiv7.append(finalString7)
bodyElement.append(newDiv7)


creatAppendHeader("kata 8")

let finalArray8 = []
for (let i = 19; i >= 1; i = i - 2) {

    finalArray8.push(i)


}
let finalString8 = finalArray8.join(", ")


let newDiv8 = document.createElement('div')
newDiv8.append(finalString8)
bodyElement.append(newDiv8)
creatAppendHeader("kata 9")


let finalArray9 = []
for (let i = 100; i >= 1; i = i - 5) {

    finalArray9.push(i)


}
let finalString9 = finalArray9.join(", ")


let newDiv9 = document.createElement('div')
newDiv9.append(finalString9)
bodyElement.append(newDiv9)
creatAppendHeader("kata 10")


let finalArray10 = []
for (let i = 10; i >= 1; i = i - 1) {
    let x = Math.pow(i, 2)
    finalArray10.push(x)

}
let finalString10 = finalArray10.join(", ")


let newDiv10 = document.createElement('div')
newDiv10.append(finalString10)
bodyElement.append(newDiv10)


creatAppendHeader("kata 11")
let finalArray11 = [
    469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 
    456, 21, 398, 339, 882, 848, 179, 535, 940, 472,
]; 
let newDiv11 = document.createElement('div')
newDiv11.append(finalArray11)
bodyElement.append(newDiv11)
creatAppendHeader("kata 12")
var finalArray12 = []

for (let i = 0; i <= 20; i++) {
    let evenNumber = finalArray11[i]
    if (evenNumber % 2 === 0) {
        finalArray12.push(evenNumber)
    }
}
let newDiv12 = document.createElement('div')
newDiv12.append(finalArray12)
bodyElement.append(newDiv12)

creatAppendHeader("kata 13")
var finalArray13 = []

for (let i = 0; i < 20; i++) {
    let evenNumber = finalArray11[i]
if (evenNumber % 2 !== 0) {
        finalArray13.push(evenNumber)
    }
}
let newDiv13 = document.createElement('div')
newDiv13.append(finalArray13)
bodyElement.append(newDiv13)
creatAppendHeader("kata 14")
var finalArray14 = []

for (let i = 0; i < 20; i++) {
    let squareNumber = Math.pow(finalArray11[i],2)
        finalArray14.push(squareNumber)
    }

let newDiv14 = document.createElement('div')
newDiv14.append(finalArray14)
bodyElement.append(newDiv14)


creatAppendHeader("kata 15")
let sum = 0
for (let i = 0; i < 20; i++) {
        sum = sum + finalArray11[i]
       
    }

let newDiv15 = document.createElement('div')
newDiv15.append(sum)
bodyElement.append(newDiv15)

creatAppendHeader("kata 16")
let sum1 = 0
for (let i = 0; i < 20; i++) {
    sum1 = sum1 + finalArray11[i]

}

let newDiv16 = document.createElement('div')
newDiv16.append(sum1)
bodyElement.append(newDiv16)

creatAppendHeader("kata 17")
let smallestNumber = finalArray11[0]
for (let i = 0; i < 20; i++) {
    let currentNumber = finalArray11[i]
    if (currentNumber<=smallestNumber) {
        smallestNumber=currentNumber

    }
   

}

let newDiv17 = document.createElement('div')
newDiv17.append(smallestNumber)
bodyElement.append(newDiv17)


creatAppendHeader("kata 18")
let biggestNumber = finalArray11[0]


for (let i = 0; i < 20; i++) {
    let currentNumber = finalArray11[i]
    if (currentNumber>=biggestNumber) {
        biggestNumber=currentNumber

    }
   

}

let newDiv18 = document.createElement('div')
newDiv18.append(biggestNumber)
bodyElement.append(newDiv18)

creatAppendHeader("kata 19")

for ( let i = 0; i < 20; i++){
    let newDiv19 = document.createElement('div')
    newDiv19.style.height= '20px';
    newDiv19.style.backgroundColor = 'gray';
    newDiv19.style.marginTop = '5px';
    bodyElement.append(newDiv19)
    
}
creatAppendHeader("kata 20")
for ( let i = 105; i < 200; i=i+5){
    let newDiv20 = document.createElement('div')
    newDiv20.style.height= '20px'
    newDiv20.style.backgroundColor='red'
    newDiv20.style.marginTop = '5px';

    newDiv20.style.width = i +'px'
    bodyElement.append(newDiv20)
}
creatAppendHeader("kata 21")
const sampleArray = [
    469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 
    456, 21, 398, 339, 882, 848, 179, 535, 940, 472,
];

for (let k = 0; k < 20; k = k + 1) {
    //sampleArray.push(k)
    let newDiv21 = document.createElement('div')
    newDiv21.style.width = sampleArray[k] + 'px';
    newDiv21.style.height = '20px';
    newDiv21.style.backgroundColor = 'gray';
    newDiv21.style.marginTop = '5px';
    bodyElement.append(newDiv21)

}
creatAppendHeader("kata 22")

for (let k = 0; k < 20; k = k + 1) {
   // sampleArray.push(k)
    let newDiv22 = document.createElement('div')
    newDiv22.style.width = sampleArray[k] + 'px';
    newDiv22.style.height = '20px';
    if (k % 2 === 0) {
        newDiv22.style.backgroundColor = 'red'
    }
    else {
        newDiv22.style.backgroundColor = 'gray'
    }

    newDiv22.style.marginTop = '5px';
    bodyElement.append(newDiv22)
}
creatAppendHeader("kata 23")

for (let k = 0; k < 20; k = k + 1) {
    
    let newDiv23 = document.createElement('div')
    newDiv23.style.width = sampleArray[k] + 'px';
    newDiv23.style.height = '20px';
    if (sampleArray[k] % 2 === 0) {
        newDiv23.style.backgroundColor = 'red'
    }
    else {
        newDiv23.style.backgroundColor = 'gray'
    }

    newDiv23.style.marginTop = '5px';
    bodyElement.append(newDiv23)
}












