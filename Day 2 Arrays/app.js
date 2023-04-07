// //Arrays in JavaScript
//Travsel of An array

// //normal variable
// var color1="Red"
// var color2="Green"
// var color3="Yellow"
// //Array Can be store more then one datas
// var colors=["red","Green","Yellow"]
// //can be store any type of data also
// var multipleTypeData=["red","Green",22,undefined,true,"Yellow"]
//Index     =              0       1   2       3       4   5
//length 6
//CRUD


// var multipleTypeData =["red","Green","White","Black","Yellow"]
// //showing Complete Arrays
// console.log(multipleTypeData)
// //showing Single Data
// console.log(multipleTypeData[1])
// //showing ArraySize
// console.log(multipleTypeData.length)
// //showing last data 
// console.log(multipleTypeData[multipleTypeData.length-1])


//var multipleTypeData =["red","Green","White","Black","Yellow"]

// //before ECMA6
// // for(i=0;i<multipleTypeData.length;i++){
// //     console.log(multipleTypeData[i])
// // }

// //after ECMA6
// //for showing index
// for (let key in multipleTypeData) {
// console.log(key)
// }
// //for showing values
// for (const iterator of multipleTypeData) {
//     console.log(iterator)
// }
//
// multipleTypeData.forEach((element,index,array) => {
//     //shwoing one array
//     console.log("\n",element)
// //showing array's index
//     console.log("\n",index)
//     //showing one array
//      console.log("\n",array[index])
//      //showing complete arrays
//      console.log("\n",array)
// });


//Seraching and Filter in an Array
// var myFriendNames = ["hasnain","Adam","hasnainadam7","hasnainadam7@gmail.com","1234"];

// console.log(myFriendNames.indexOf("hasnain", 0));
// //                                 value   starting point    
// var myFriendNames = ["vinod","bahadur","thapa","thapatechnical","thapa"];
// //reveses searching
// console.log(myFriendNames.lastIndexOf("thapa",3));
// //                                      value starting point

// var myFriendNames = ["vinod","bahadur","thapa","thapatechnical"];

// console.log(myFriendNames.includes("thapas"));
// Array.prototype.find() 🙋‍♂️

// arr.find(callback(element[, index[, array]])[, thisArg])

// Returns the found element in the array, if some element in the 
// array satisfies the testing function, or undefined if not found.
// Only problem is that it return only one element

// const prices = [200,300,350,400,450,500,600];

// //prices< 400
// const findElem = prices.find((currVal) =>  currVal > 350 );
// console.log(findElem);

//console.log(  prices.find((currVal) => currVal > 1400 )  );
// var myFriendNames = ["vinod","bahadur","thapa","thapatechnical"];
// console.log(myFriendNames.findIndex(value=> value == "thapa"))




// Array.prototype.findIndex() 🙋‍♂️

// Returns the found index in the array, if an element in the 
// array satisfies the testing function, or -1 if not found.


// console.log(  prices.findIndex((currVal) => currVal > 350 )  );




// Array.prototype.filter() 🙋‍♂️

// Returns a new array containing all elements of the calling 
// array for which the provided filtering function returns true.

// const prices = [200,300,350,400,450,500,600];

// // price < 400
// const newPriceTag = prices.filter((elem, index,array) => {
// return  elem > 500 && index >= 2;
   
// })
// console.log(newPriceTag);




// 3️⃣ Array Subsection 3 👉 How to sort an Array

// Array.prototype.sort() 🙋‍♂️

// The sort() method sorts the elements of an array in place and 
//returns the sorted array. The default sort order is ascending, built 
//upon converting the elements into strings, 
// then comparing their sequences of UTF-16 code units values.

// const months = ['March', 'Jan', 'Feb', 'April' , 'Dec', 'Nov'];

// console.log(months.sort());

// const array1 = [1, 30, 4, 21, 100000, 99];
// console.log(array1.sort());







// However, if numbers are sorted as strings, 
// "25" is bigger than "100", because "2" is bigger than "1".

// Because of this, the sort() method will produce an incorrect 
// result when sorting numbers.







// 😀7: challenge Time  🏁

// 1: How to Sort the numbers in the array in ascending (up) and descending (down) order?

// compareFunction      Optional. 
// A function that defines an alternative sort order. The function should return a negative, zero, or positive value, depending on the arguments, like:
// function(a, b){return a-b}

// for asecnding order 
// const months = ['March', 'Jan', 'Feb', 'April' , 'Dec', 'Nov'];
// months.sort(function(a,b){
//     console.log(a,b);
//     if(a>b){
//         return 1;
//         // b comes first and then a 
//     }
//     if(a<b){
//         // a comes first and then b 
//         return -1;
//     }
//     if(a==b){
//         // No changes
//         return 0;
//     }
// });

// for desecnding order 
// array1.sort(function(a,b){
//     console.log(a,b);
//     if(a>b){
//         return -1;
//         // b comes first and then a 
//     }
//     if(a<b){
//         // a comes first and then b 
//         return 1;
//     }
//     if(a==b){
//         // No changes
//         return 0;
//     }
// });

// console.log(array1);







// 2: sort the array in descending order

var fruits = ["Banana", "Orange", "Apple", "Mango"];

 console.log(fruits.reverse(fruits.sort()))

// //Array.prototype.reverse() 🙋‍♂️
// // The reverse() method reverses an array in place. 
// // The first array element becomes the last, and 
// // the last array element becomes the first.




