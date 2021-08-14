//Converting OBJECT To JSON
//json.stringfy is a method that convert object into json
var objSimple= { key1:"some text",key2:true,key3:5};
console.log(objSimple)
var jsonObj=JSON.stringify(objSimple)
console.log(jsonObj)
//converting json to object we use json.parse
var jsonToObj =JSON.parse(jsonObj)
console.log(jsonToObj)