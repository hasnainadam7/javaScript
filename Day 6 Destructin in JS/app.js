//aray Destructring

//this is structing
// const data=["Hasnain",20,"Student"]


//use them as individuals
// let name =data[0]
// let age=data[1]
// let status=data[2]

// console.log(name)
//in this position matters allot

// let [name,age,status]=data
// console.log(name)

//we can add another values also

// let [name,age,status,degree="BSCS"]=data
// console.log(data)

//object Destructuring

// const data={
//     name:'Hasnain',
//     father:'Adam',
//     age:21

// }

// // let aName=data.name;
// // let aFather=data.father
// // let aAge=data.age
// // console.log(aName,aFather,aAge)

// let {name,father,age,degree="BS-CS"}=data;

// console.log(name,father,degree,age)





//obje Properties

//Dynamic Property

// var Name="Hasnain"

// const data={
//     [Name]: "Hello How Are U",
//     [16+5]:"is my Age"


// } 
// console.log(data)

// //Spread Operator(...) 
//  const days =["monday","tuesday","wednesday","thursday"]

//  const newDays=[...days,"friday","saturday","sunday"]
//  console.log(newDays)