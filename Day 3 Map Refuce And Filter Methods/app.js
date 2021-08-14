//Map and Filter Method
//const arra1=[1,2,3,4,5,6,7,8,9,10]

// //num>4
// let newArr = arra1.map((currentELement,index,arr)=>{
//     var a =index
//     var b =currentELement
//     var c=arr
//     var d ="index no"+a+ "element "+ b + "Array "+ c;
//     return d; 
// })
// console.log(newArr)

//Challenge Finding Square Root

// const arra1=[1,4,9,16,25,36,49,64,81,100]
// const sqArr= arra1.map( (currentvalue)=> Math.sqrt(currentvalue) )
// console.log(sqArr)

//Challenge 2//

// const arra1=[1,2,3,4,5,6,7,8,9,10]
//  const arr2=arra1.map((current)=> current *2 ).filter( (current)=> current > 10 )
//  console.log(arr2)


//Reduce mehtod
//its merge all values of aray (according to your conditions) and make it one

//its add sums divide and product the aaray  
//for add
// const arra1=[1,2,3,4,5,6,7,8,9,10,20]
// const sum=arra1.reduce((accumlator,currentElem,index,arr)=> accumlator +=currentElem)
// const mult =arra1.reduce((accumlator,curValue)=> accumlator *=curValue)

// console.log(sum)
// console.log(mult)
// //concotenation of arrays
// var arrStr=["My", "Name","is","Hasnain"]
// const conct= arrStr.reduce((accumlator,currentElem)=> accumlator += currentElem)
// console.log(conct)

// //chainable methods in one line
// const arr2=arra1.map((current)=> current *2 ).filter( (current)=> current > 20 ).reduce((accumlator,currentElem,index,arr)=> accumlator +=currentElem)
// console.log(arr2)
// //if we add to new value in accumlator wil will do this steps
// const arra1=[1,2,3,4,5,6,7,8,9,10,20]
// const addnewvalue =arra1.reduce((accumlator,curValue)=>{
//      return accumlator +=curValue
//     },8)
// console.log(addnewvalue)


//This is use for converting multidimensinal array to one   array
const dimensionalArr = [
    ["zone1", "zone2"],
    ["zone3", "zone4"],
    ["zone5", "zone6"],
    ["zone7", "zone8"],
    ["zone9", "zone10"]
]
const oneDimArray = dimensionalArr.reduce(
    (acc, ele) => {

        return acc.concat(ele)
    }

)
console.log(oneDimArray)