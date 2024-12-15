// ----------------------------------------Global Scope----------------------------------------

//  var globalVar = " i am var variable"
//     console.log(globalVar)

// var globallet = " i am let variable"

//     console.log(globallet)

// var globalConst = " i am const variable"

//     console.log(globalConst)

// according to above senerio they all varaibles var ,let ,const can be consoled

// var globalVar;
// let globallet;
// const globalConst;
// console.log(globalVar); // undefined
// console.log(globallet);//undefined
// console.log(globalConst);// sytax error:missing initializer in const decleration

//according to above senerio if you declare a variable using var and let and not assign any value so console give undefined
// but if you declare a variable using const and not assign any value so console give syntax error:
//-------------------------------function scope ------------------------------------------------------

//  function fun(){
//     var varData = " i am var variable"
// }
// fun()
// // console.log(varData)// reference error varData is not defined

// function fun(){
//     let letData = " i am var variable"
// }
// fun()
// // console.log(letData)// reference error letData is not defined

// function fun(){
//     const constData = " i am var variable"
// }
// fun()
// console.log(constData)// reference error constData is not defined
// // not defined error mean   variable  names  varData letData constData are not exsists
// //  if a variable using var ,let const , declared inside a function so it can not be consoled  outside the function
// //because these all are function scope

//------------------------------------Block scope --------------------------------------------

// if (true){
//     var varData = " i am var variable"
// }
// console.log(varData)// var is a block scope that's why it can be consoled
// if (true){
//     let letData = " i am var variable"
// }
// console.log(letData)// let is not a block scope that's why it throw refernce error : letData id not defined
// if (true){
//     const constData = " i am var variable"
// }
// console.log(constData)// const is not a block scope that's why it throw refernce error : constData id not defined

// ------------------------------------------------Hoisting  with var---------------------------------------------------------------

// console.log(globalVar)
// var globalVar; //undefined

// console.log(globalVar)//undefined
// var globalVar =" i am var"

//according to above senerio, when you console a variable using var variable with assign or with out assign any value it show undefined
//because var variable can be hoist

// ------------------------------------------------Hoisting  with let and const---------------------------------------------------------------

// console.log(globallet)
// let globallet;  //  reference error : can not access globallet before intialization

// console.log(globallet2)
// let globallet2 =" i am let " // reference error : can not access globallet2 before intialization

// console.log(globalConst)
// const globalConst;// sytax error:missing initializer in const decleration

// console.log(globalConst2)
// const globalConst2 = "i am const "// reference error : can not access globalConst2 before intialization

// when you console a variable using let  with assign or with out assign any value it show reference error: can
//not access globallet before iitialization
//because let variable can not be hoist
// when you console a variable using const variable  with out assign any value it show syntax
//error:missing initializer in const decleration
//because const variable can not be hoist
// when you console a variable using const variable with assign any value it show reference error : can not
//access globalConst2 before iitialization

//-------------------------------------Re-declaration---------------------------------

// var userName = "abc" ;
// var userName = "xyz" ;
// console.log(userName)//xyz

// var userName = "abc" ;

// {var userName = "xyz" };
// console.log(userName)//xyz

//  variable var is a global scope. it can be redeclared.
//  when you re-declare a variable using var it will override the previous value of variable var

// let userName = "abc";
// let userName = "xyz";
// console.log(userName)// syntax error : variable userName has already been declared
// {
//     let userName = "xyz";
//     console.log(userName)//"xyz"
// }
//  variable let is a block scope. it can not be re-declared at the same scope .
//  when you re-declare a variable using let it will throw a syntax error.

// const userName = "abc" ;
// const userName = "xyz" ;
// console.log(userName) //syntax error : variable UserName has already been declared

// const userName = "abc" ;

// {
//     const userName = "xyz"
//     console.log(userName) //xyz
//  };
// console.log(userName)//abc

// variable const is a block scope. it can not be re-declared at the same scope .
// when you re-declare a variable using const it will throw a syntax error.

// -------------------------------------------Re-assignment-------------------------------------
// var userName = "abc" ;
// userName = "xyz";
// console.log(userName)//xyz
// when you re-assign a variable using var it will overwrite the previous value of variable var.

// let userName = "abc" ;
// userName = "xyz"
// console.log(userName)//xyz
// when you re-assign a variable using let it will overwrite the previous value of variable let.

// const userName = "abc";
// userName = "xyz";
// console.log(userName)//type error : assignment to contant variable
// when you re-assign a variable using const it will throw a type error.

//-------------------------------Temporal Dead Zone--------------------------------------------

// {
//     console.log(num)// reference error : can not access num before initiaization// varaible is not ready here
//     let num = 10 ;// variable is ready here
//     console.log(num)// 10
// }
// {
//     console.log(num)// reference error : can not access num before initiaization// varaible is not ready here
//     const num = 10 ;
//     console.log(num)
// }
// temporal dead zone mean no-access zone , when you to try console any variable using let and const before decleration javascript will stop you and

// throw a reference error : can not  be access before initialization,because the variable is in the 'dead zone'
//it means variable exist but is not ready yet.
// ----------------------Write a piece of code to demonstrate a good use case for var , let  and const --------------------------
// using var , as we know that var is a global scope ,can be redeclared and reassigned so it value could be overwrite these all are making different errors using var variable
// as well as var is a function scope ,if we make a variable in side any function it cant not be access out side the function
//  good case of using var variable is to inside a function , a block scope for condition check and console outside the block inside the function scope so it can be access only use var.

// function varExample() {

//     if(true){
//        var  greet ="hello world"
//     }
//     console.log(greet)
//   }
//   varExample();

//   function letExample() {
//     let a  = 0;
//     for (let i = 0; i < 5; i++) {
//          a += i // here a could be updated it self in each iteration
//     }
//     console.log(a)
//   }
//   letExample()
// here let is a good variable  case for code
// becase let could be reassigned it value and also a function scope

//   const num1  = 90

// function result( ) {
//   const num2  = 70

//   return num1 * num2 /100
// }
// console.log(result())
// we can use const variable, where we can value should be constant through out the scope and not changes

//-------------------------------------String Interpolation-----------------------------------------

// const firstName = prompt("first name")
// const lastNmae = prompt("last name")
// const fullName = `Hello my name is ${firstName} ${lastNmae}`
// console.log(fullName)

//------------------------------------ Multi-line Strings------------------------------------------
//  const multiLInes = `
// Welcome to My Website
// This is a multi-line string example using a template literal

// `;
// console.log( multiLInes);

// //-------------------------------------- Simple Expressions:---------------------------------
// const num1 = 10;
// const num2 = 5;

// const sum = num1 + num2;

// console.log(`The sum of ${num1} and ${num2} is ${sum}`);
// // --------------------------------------Function Calls:---------------------------------
// const res =(a,b)=>{
//   return a * b
// }
// const a = 40;
// const b = 20;
// console.log(`the product of ${a} and ${b} is ${a*b}`)

// ---------------------------  Creating a Tagged Template:---------------------------

// function tagFunction(strings, ...values) {
//     console.log("Template Strings:", strings); // Logs the string parts
//     console.log("Substitution Values:", values); // Logs the substitution values
//     return strings.reduce((result, str, i) => result + str + (values[i] || ""), " ");
//   }

//   const name = "saba shakeel";
//   const institute = "Jawan Pakistan";
//   const message = tagFunction`Hello, my name is ${name} and I am student of ${institute}`;

//   console.log("Final Message:", message);
//   A tag function is a special function that allows you to process template literals in a customized way.
//  Instead of simply evaluating a template literal, the tag function gets:

// The static parts of the template string (called strings).
// The dynamic expressions inside ${} (called values or substitutions).
// The tag function then processes these parts in any way you want. It can:

// Modify the string.
// Log details about the template.
// Perform calculations or transformations.

// --------------------------------------Formatting a string by making it uppercase:-------------------------------------------

// function tagFunction(strings, ...values) {
//     console.log("Template Strings:", strings); // Logs the string parts
//     console.log("Substitution Values:", values); // Logs the substitution values
//      let result = strings.reduce((result, str, i) => result + str + (values[i] || ""), " ");
//     return result.toUpperCase()
//   }

//   const name = "saba shakeel";
//   const institute = "Jawan Pakistan";
//   const message = tagFunction`Hello, my name is ${name} and I am student of ${institute}`;

//   console.log("Final Message:", message);

// -----------------------------------------Conditional Logic------------------------------------------------
// const currentHour = new Date().getHours();
// const currentMin = new Date().getMinutes();
// const message = `Good ${currentHour < 12 ? "Morning" : currentHour < 16 ? "Afternoon" : currentHour < 18 ? "evening": "night"}, it's ${currentHour} :${currentMin} o'clock!`;
// console.log( message)
// --------------------------------Loops within Template Literals--------------------------------------------
// const toDoList = ['Finish homework', 'Clean the room', 'Buy groceries', 'Pay bills', 'Exercise'];
// const toDoHtmlList = `
//   <ul>
//     ${toDoList.map(task => `<li>${task}</li>`).join('\n')}
//   </ul>
// `;
// console.log(toDoHtmlList);
// ----------------------------------------Escaping Backticks:------------------------------------------------
// const stringWithBacktick = `This is a \`backtick: \``;
// console.log(stringWithBacktick);
// Backtick Escaping: The backtick character (`) is escaped using a backslash (\), so it can be included in the string.
// Template Literal: Since we're using a template literal (enclosed in backticks), escaping ensures the backtick is treated as a character and not as the closing delimiter.

// const categories = [
//     { category: 'Fruits', items: ['Apple', 'Banana', 'Cherry'] },
//     { category: 'Vegetables', items: ['Carrot', 'Broccoli', 'Spinach'] },
//     { category: 'Dairy', items: ['Milk', 'Cheese', 'Yogurt'] }
//   ];

//   const categorizedHtml = `
//     <div class="categories">
//       ${categories
//         .map(
//           category => `
//           <div class="category">
//             <h2>${category.category}</h2>
//             <ul>
//               ${category.items.map(item => `<li>${item}</li>`).join('')}
//             </ul>
//           </div>
//         `
//         )
//         .join('')}
//     </div>
//   `;
//   console.log(categorizedHtml);
//   -------------------------------------------Simple Condition:---------------------------------------------------------

//   let Age =+prompt("enter your age");

// let check = Age >=18 && Age <=35 ? "YES" : "NO";

// console.log(check);
// ---------------------------------------------Even or Odd:-----------------------------------------------------------

// var num =+prompt("enter any number")
// var check = num % 2 == 0 ? "Even" : "Odd";
// var result = `${num} is an ${check} number`
// console.log(result);

//--------------------------------------------- Grade Evaluation----------------------------------------------
// const score = +prompt("Enter score");
// const res =
//   score >= 90
//     ? "A"
//     : score >= 80
//     ? "B"
//     : score >= 70
//     ? "C"
//     : score >= 60
//     ? "D"
//     : "F";

// console.log(res);
// ------------------------------------------------Login Status----------------------------------------------
// const username = prompt("Enter your username");
// const password = prompt("Enter your password");
// const user = "admin";
// const pass = "1234";

// const isLoggedIn = username === user && password === pass ? "Welcome Back" :username === user && password !== pass ?"enter the correct password":username !== user && password === pass ?"enter the correct username":"please logged in first"
// console.log(isLoggedIn)
// --------------------------------------------Discount Eligibility------------------------------------
// const isMember = true;
// const purchaseAmount = +prompt("enter the amount ");

// const discount =
//   isMember && purchaseAmount > 100 ? (purchaseAmount * 10) / 100 : 0;

// console.log(` The disount you have get is ${discount}`);
//---------------------------Determine Max Value:-----------------------------------------
// function maxValue(a, b) {
//   return a > b ? a : b;
// }
// const num1 = +prompt("enter the first number");
// const num2 = +prompt("enter the first number");
// const max = maxValue(num1, num2);
// console.log(`The larger number is: ${max}`);

// ----------------------------------Greeting Message--------------------------------

// function greet(name) {
//   return name ? `Hello, ${name}!` : "Hello, guest!";
// }

// const userName = prompt("Please enter your name:");

// const greetingMessage = greet(userName);
// console.log(greetingMessage);
//---------------------------------------Mapping Values-------------------------------

// const num = [1,2,3,4,5,6]
//  const newArr = num.map((num)=>{
//     return num % 2 === 0 ? num *2 :num* 3
// })
// console.log(newArr)
// -----------------------------------Filtering Values------------------------------------------------
// const arrString = ["apple","boat","cat","hut","grapes","ice","jacket"]
// const newArrString = arrString.filter((str) => str.length > 3)
// console.log(newArrString)
//--------------------------------- Copying an Array-------------------------------

// const num = [1,2,3,4,5]
// const newArr = [...num]
// console.log(num)
// console.log(newArr)
// console.log(num === newArr)
// it show false because when we use spread operate it can save value of an array into a new array with a new reference
// and if we make same changes into new array the origin array remain same
// --------------------------------Merging Arrays---------------------------------

// const arr1 = [
//     { id: 1, name: "Ali" },
//     { id: 2, name: "Taha" },
// ]
// const arr2 = [
//     {
//         id: 3,
//         name: "umair",
//         }

// ]
// const mergedArray = [...arr1,...arr2]
// console.log(mergedArray)
//---------------------------------- Adding Elements to an Array--------------------------------
// const num = [1,2,3,4,5]
// const newArr = [0,...num,6,7]
// console.log(num)
// console.log(newArr)

// -----------------------------------Copying an Object-------------------------------------------

// const originalObject = {
//     name: "Ali",
//     age: 25,
//     address: "Karachi",

// }
// const copiedObject = {...originalObject}
// copiedObject.name = "Taha"
// copiedObject.age = 22
// copiedObject.address = "lahore"
// console.log(originalObject)
// console.log(copiedObject)

// --------------------------------Merging Objects-------------------------------------

// const obj1 = {
//     name: "Ali",
//     age: 25,
//    course : "MERN Development"

// }
// const obj2 = {
//     name: "Taha",
//     age: 22,
//     city: "lahore",
// }
// const mergedObject = {...obj1,...obj2}
// console.log(mergedObject)
//the same keys value are over lapped

// ----------------------------------------------Updating Object Properties----------------------------------

// const user = {
//     name: "Ali",
//     age: 25,
//     email: "ali@gmail.com",
// }
// const updatedUser = {...user}
// updatedUser.email = "ali123@gmail.com"
// updatedUser.address = "lahore"
// console.log(updatedUser)

//-------------------------------------- Passing Array Elements as Arguments-------------------------------------

// function sum(a,b,c){
//     return a+b+c
// }
// const numbers = [10,20,30]
// const result = sum(...numbers)
// console.log(result)
// -------------------------------------------Combining Multiple Arrays-----------------------------------

// function combineArrays (...array){
//     return [].concat(...array)

// }
// const array1 = [1,2,3]
// const array2 = [4,5,6]
// const array3 = [7,8,9]
// const res = combineArrays(array1,array2,array3)
// console.log(res)
// ---------------------------------Rest Parameter with Spread Operator-------------------------------
// function multiply(number, ...restNum) {
//     return restNum.map(e => e * number);
//   }

//   const result = multiply(5, 2, 3, 4);
//   console.log(result);
// -----------------------------------Spread Operator with Nested Structures-------------------------------------

// const nestedArray = [[1, 2, 3], [4, 5,]]
// const copiedArray = [...nestedArray];
// copiedArray[0][0] = 10
// console.log(nestedArray)
// console.log(copiedArray)
//spread operate create shallow copy so it can not modify nested array element
// -----------------------------------Sum Function-----------------------------

// function sum(...numbers) {
//     return numbers.reduce((total, num) => total + num, 0);
//   }

//   console.log(sum(1, 2, 3))
//   console.log(sum(10, 20, 30, 40))
//    --------------------------Average Function:----------------------------

// function average(...numbers) {
//     const sum = numbers.reduce((total, num) => total + num, 0);
//     return sum / numbers.length;
//   }

//   console.log(average(1, 2, 3));
//   console.log(average(10, 20, 30, 40));
//------------------------------------------- First and Rest--------------------------------

// const numbers = [10, 20, 30, 40, 50];

// const [first, ...rest] = numbers;

// console.log("First:", first);
// console.log("Rest:", rest);

//----------------------------------- Skip and Rest-----------------------------------------

// const color = ["red","blue","green","white","black"]
// const [first, second, ...remainingColors] = color;
// console.log(remainingColors)
// ------------------------------Basic Destructuring-------------------------------------

// const person = {
//     name: "Ali",
//     age: 25,
//     email: "ali@example.com",
//     address: "karachi"
// }
// const {name, email, ...rest} = person;
// console.log(name)
// console.log(email)
// console.log(rest)

// --------------------------------Nested Destructuring---------------------------------
// const student = {
//     id: 1,
//     name: "Ali",
//     grades: [90, 80, 70],
//     info: {
//         age: 25,
//         major: "CS",
//     }
// }
// const {id, name, ...rest} = student;
// const {major, ...info} = rest.info;
// const {grades, ...other} = rest;
// console.log(id)
// console.log(name)
// console.log(major)
// console.log(info)
// console.log(other)
// console.log(grades)
// console.log(rest)
// console.log(student)

//--------------------------------- Filter Even Numbers---------------------------------------

// function filterEven(...numbers){
//     return numbers.filter(num => num % 2 === 0)

// }
// console.log(filterEven(1,2,3,4,5))
// console.log(filterEven(41,90,5))
// ------------------------------------Combine and Sort Arrays---------------------------------------

// function combineAndSort (...numbers){
//     return [...numbers].sort((a,b) => a - b)

// }
// console.log(combineAndSort(50,10,30,20,60))
// -----------------------------------------Basic Destructuring-------------------------------------

// const fruits = ["apple","banana","cherry"]
// const [firstFruit,secondFruit, thirdFruit] = fruits;
// console.log(firstFruit);
// console.log(secondFruit)
// console.log(thirdFruit);

// ---------------------------------------Skipping Elements--------------------------------------

// const colors = ["red", "green", "blue", "yellow"];
// const [primaryColor, , tertiaryColor] = colors;
// console.log(primaryColor);
// console.log(tertiaryColor);
// -------------------------------------------- Rest Operator-------------------------------------

// const num = [1,2,3,4,5]
// const [firstNumber, ...remainingNumbers] = num;
// console.log(firstNumber);
// console.log(remainingNumbers);

// -----------------------------------------Basic Destructuring--------------------------------

// const person = {
//     name: "ali",
//     age: 25,
//     city: "karachi"
// }
// const {name,age,city} = person;
// console.log(name);
// console.log(age);
// console.log(city);
// ------------------------------------------Renaming Variables-------------------------------------

// const car = {
//     make: "Toyota",
//     model: "Camry",
//     year: 2023
//   };

//   const { make: carMake, model: carModel, year: carYear } = car;

//   console.log(carMake);
//   console.log(carModel);
//   console.log(carYear);
// --------------------------------------------Default Values--------------------------------------

// const settings = {
//     theme: "dark",
//     language: ""
// }
// const {theme, language = "English"} = settings;
// console.log(theme);
// console.log(language);
// ----------------------------------------Array of Arrays---------------------------------------------

// const arr = [ [1,2],[3,4],[5,6]];
// const [[a],[b],[c]] = arr;
// console.log(a);
// console.log(b);
// console.log(c);
// --------------------------------------Object within an Object------------------------------------------

// const profile = {
//     username: "Ali",
//     details: {
//         email: "Ali@example.com",
//         address: "karachi"
//     }
// }
// const {username, details: {email, address}} = profile;
// console.log(username);
// console.log(email);
// console.log(address);
// ---------------------------------------Mix of Arrays and Objects----------------------------------------------

// const data ={
//     id: 1,
//     info: [
//         {name: "Ali"},
//         {age: 25}
//     ]
// }
// const {id, info: [{name}, {age}]} = data;
// console.log(id);
// console.log(name);
// console.log(age);
//------------------------------------ Array Parameters----------------------------------

// function printCoordinates([x, y]) {
//     console.log(x);
//     console.log(y);
//      console.log(`The coordinates are: ${x}, ${y}`);
// }
//     printCoordinates([1, 2])
// -------------------------------------Object Parameters----------------------------------------------
// function displayUser({name,age}){
//     console.log(name);
//     console.log(age);

// }
// displayUser({name: "Ali", age: 25});

//------------------------------------------- List Property Names----------------------------------------------

// const book ={
//     title: "Harry Potter",
//     author: "J.K. Rowling",
//     year: 1997
// }
// const keys = Object.keys(book);
// console.log(keys);
// -------------------------------------------Count Properties-----------------------------------------------

// const student = {
//     name: "Ali",
//     age: 20,
//     grade: 10,
//     school: "ABC"

// }
// const keys = Object.keys(student);
// console.log(keys.length);
// -----------------------------------------------Iterate Over Keys------------------------------------

// const product = {
//     name: "samsung",
//     price: 40000,
//     category: "mobile"
// }
// const keys = Object.keys(product);
// for (const key of keys) {
//     console.log(key, product[key]);
// }
// ------------------------------------------------List Property Values-----------------------------------------

// const movie = {
//     title: "Harry Potter",
//     director: "J.K. Rowling",
//     year: 1997,
// }
// const values = Object.values(movie);
// console.log(values);

//-------------------------------------------- Sum Values-----------------------------------------------------

// const scores = {
//     math: 90,
//     science: 80,
//     english: 70
// }
// const values = Object.values(scores);
// const sum = values.reduce((a, b) => {
//     return a + b
// },0);

// console.log(sum)

//------------------------------------------- Iterate Over Values---------------------------------------------

// const user = {
//     username: "ali",
//     email: "ali@example.com",
//     location: "Karachi"
// }
// const values = Object.values(user);
// console.log(values);
// for (const value of values) {
//     console.log(value);
// }
//------------------------------------------- List Entries-----------------------------------------------

// const car = {
//     make: "Toyota",
//     model: "Corolla",
//     year: 2015

// }
// const entery = Object.entries(car)
// console.log(entery)
//---------------------------------- Convert Object to Array-------------------------------------------

// const person = {
//     firstName: "Ali",
//     lastName: "khan",
//     age: 25
// }
// const entries = Object.entries(person);
// console.log(entries);
// ---------------------------------------Iterate Over Entries--------------------------------------------

// const settings = {
//     theme: "dark",
//     notifications: true,
//     privacy: false
// }
// const entries = Object.entries(settings);
// for (const [key, value] of entries) {
//     console.log(key, value);
//     }

// ----------------------------------------------Filter Keys--------------------------------------------

// const inventory =  {
//     apples: 15,
//     bananas: 20,
//     oranges: 5,
//     grapes: 12

// }
// const key = Object.keys(inventory)
// const filteredKeys = key.filter(key => inventory[key] > 10)
// console.log(filteredKeys)

// ---------------------------------------------Transform Values------------------------------------------------

//  const temperatures = {
//     morning: 20,
//     afternoon: 25,
//     evening: 18
//  }
//  const entry = Object.entries(temperatures)
//  console.log(temperatures)

//  const updateTem = entry.map(([key, value]) => [key, value * 9 /5 + 32])
//  console.log(updateTem)
//  const newTemperatures = Object.fromEntries(updateTem)
//  console.log(newTemperatures)

// --------------------------------------------------Key-Value Swap---------------------------------------------------

// const roles = {
//     admin: "superuser",
//     editor: "content creator",
//     viewer: "guest"
// }
// const entries = Object.entries(roles);
// const swappedEntries = entries.map(([key, value]) => [value, key]);
// const newRoles = Object.fromEntries(swappedEntries);
// console.log(newRoles);

// --------------------------------------------------Filter and Map------------------------------------------------

// const arr = [1,2,3,4,5,6,7,8,9,10]
// const filterAndMap = (arr, filterFunc, mapFunc) =>{
//    const filterArrv= arr.filter(filterFunc);
//    const mapArr = filterArrv.map(mapFunc);
//    return mapArr;

// }
// const findOdd = (num)=> num % 2 !== 0
// const squareNum = (num) => num **2
// const result = filterAndMap(arr, findOdd, squareNum)
// console.log(result)

// --------------------------------------------Sort and Reduce--------------------------------------------------

// const arr = ["apple", "banana" ,"cherry","date"]
// const sortAndReduce = (arr, sortFunc, reduceFunc) => {
//     const sortedArr = arr.sort(sortFunc);
//     console.log(sortedArr)
//     const result = sortedArr.reduce(reduceFunc, "");
//     console.log(result)

//     return result;
// }
// const sortWords = (a, b) => a.localeCompare(b);
// const concatenate = (acc, current) => acc + current;
// const result = sortAndReduce(arr, sortWords, concatenate);
// console.log(result);

// ----------------------------------------------Simple Callback----------------------------------------------
// function greet(name, callback) {
//     callback(`Hello, ${name}!`);
// }
// function printGreeting(message) {
//     console.log(message);
// }
// greet("Saba", printGreeting);
//--------------------------------------------- Asynchronous Callback------------------------------------------

// const fetchData =()=>{
//     setTimeout(() => {
//         const data = "Data from server";
//         console.log(data);
//         }, 2000);
//     }
//     const displayData = (data) => {
//         console.log(data);
//         }
//         fetchData(displayData);

// ----------------------------------------------Simple Arrow Function--------------------------------------

// const fun =(a,b)=>{
// return a +b
// }
// console.log(fun(5,7))
// --------------------------------------- Arrow Function with Array Methods-----------------------------------

// const arr = [1,2,3,4,5,]
// const squaredArr = arr.map(num => num ** 2)
// console.log(squaredArr)

// --------------------------------------------------- Variable Scope--------------------------------------------

// const outer = () => {
//   let x = 10;
//   function inner() {
//     console.log(x);
//   }
//   inner();
// };

// outer();

// ------------------------------------------------- Closure-----------------------------------------------

// const createCounter =()=>{
//     let count = 0;
//     return function(){
//         count++;
//         console.log(count);
//         }

// }
// const counter1 = createCounter();
// const counter2 = createCounter();
// counter1();
// counter1();
// counter2();
// counter2();

// ---------------------------------------------Simple Default Parameters--------------------------------------

// function greet(name = "Hunzalah", greeting = "Hello") {
//     console.log(`${greeting} ${name}`);
// }
// greet();
// greet("Saba", "Hi");

// --------------------------------------------- Default Parameters with Other Arguments----------------------------

// const calculateArea = (width=10,height =5)=>{
//    return area = width + height
// }
// console.log(calculateArea());//withoutargument
// console.log(calculateArea( 20,30));//withargument
// ------------------------------------------------Square Numbers-------------------------------------------------

// const numbers = [1, 2, 3, 4, 5];
// const squareNumbers = numbers.map((number) => number ** 2);
// console.log(squareNumbers); 

// ------------------------------------------ Filter Even Numbers--------------------------------
// const numbers = [1, 2, 3, 4, 5, 6]
// const evenNumbers = numbers.filter((number) => number % 2 === 0);
// console.log(evenNumbers); 



// --------------------------------------------- Filter Long Words-------------------------------------.

// const arr = ["apple" , "banana" , "cherry" , "date"]
// const longWords = arr.filter(word => word.length > 5)
// console.log(longWords);
// -------------------------------------------------Log Numbers---------------------------------------------

// const arrNum = [1,2,3,4,5]
// arrNum.forEach(num => console.log(num));



//--------------------------------------------Log Word Lengths--------------------------------------------

// const words = ["apple", "banana", "cherry"]
// words.forEach(word => console.log(word.length));
// ---------------------------------------- Sum of Numbers-----------------------------------------------

// const arr = [1,2,3,4,5,]
// const sum = arr.reduce((acc, current) => {
//     return acc + current
// },0);
// console.log(sum);
//---------------------------------------------- Concatenate Strings---------------------------------------
// const words = ["Hello", "world", "this", "is", "JavaScript"];
// const concatenatedString = words.reduce((acc, current) => {
//     return acc +" " + current
//     }, "");
//     console.log(concatenatedString);
// --------------------------------------------Check for Even Number-------------------------------------------
// const numbers = [1, 3, 5, 7, 8];
// const hasEvenNumber = numbers.some((number) => number % 2 === 0);
// console.log(hasEvenNumber);
// -------------------------------------------- Check for Long Word-------------------------------------
// const words = ["apple", "banana", "cherry", "date"];
// const hasLongWord = fruits.some(word => word.length > 5);
// console.log(hasLongWord);

// -------------------------------- Check All Even Numbers------------------------------------------------
// const numbers = [2, 4, 6, 8, 10];
// const allEven = numbers.every((number) => number % 2 === 0);
// console.log(allEven);
// --------------------------------------- Check All Long Words---------------------------------------

// const words = ["elephant", "giraffe", "hippopotamus"];
// const allLongWords = words.every(word => word.length > 5);  
// console.log(allLongWords);
// ----------------------------------------- Find First Even Number-------------------------------------------

// ● Create an array numbers with values [1, 3, 5, 7, 8].
// ● Use find to get the first even number in the array.
// ● Log the result to the console.
// ----------------------------------------------- Find Long Word---------------------------------------



//  const words = ["apple", "banana","cherry", "date"]
//  const longWord = words.find(word => word.length > 5)
//  console.log(longWord);




// --------------------------------------------- Find Index of First Even Number--------------------------------


// const numbers = [1,3,5,7,8]
// const firstEvenIndex = numbers.findIndex((number) => number % 2 === 0)
// console.log(firstEvenIndex);
//--------------------------------------- Find Index of Long Word----------------------------------------------

// const words = ["apple" , "bananan" ,"cherry" ,"date"]
// const longWordIndex = words.findIndex(word => word.length > 5)
// console.log(longWordIndex);
// ---------------------------------------------Simple Promise----------------------------------------

// ● Write a function delay that returns a promise which resolves after a
// given number of milliseconds.
// ● Use the delay function to log "Hello, world!" to the console after a
// delay of 2 seconds


// -----------------------------------------------Promise Chain--------------------------------

// ● Write a function fetchData that returns a promise which resolves
// with some data (e.g., a simple object).
// ● Chain a .then() method to the fetchData promise to log the data
// to the console.

// // ------------------------------------------Error Handling---------------------------------------------

// ● Write a function fetchUserData that returns a promise which
// resolves with user data (e.g., an object with name and age
// properties).
// ● Modify the function to reject the promise with an error message if the
// user data is missing an age property.
// ● Use a .catch() method to handle the error and log an appropriate
// message to the console.
// //---------------------------------------------- Simulate Network Request---------------------------------

// ● Write a function getWeather that simulates a network request to
// fetch weather data (use setTimeout).
// ● The function should return a promise that resolves with weather data
// after 1 second.
// ● Simulate an error scenario where the promise rejects with an error
// message.
// ● Use .then() and .catch() to handle both success and error
// cases, logging appropriate messages to the console.
// // --------------------------------------------------Simple async Function-----------------------------------

// ● Write an async function sayHello that uses await to call the
// delay function (from Task 1) and logs "Hello, world!" to the console
// after a delay of 2 seconds.
// // ---------------------------------------------------Fetch Data with async/await-------------------------------

// ● Write an async function getUserData that uses await to call the
// fetchUserData function (from Task 2).
// ● Use a try/catch block to handle potential errors and log appropriate
// messages to the console.
// //-------------------------------------------------------- Fetch and Process Data---------------------------------------

// ● Write a function fetchUser that returns a promise which resolves
// with user data (e.g., an object with name and age properties).
// ● Write a function fetchPosts that returns a promise which resolves
// with an array of posts for a given user.
// ● Write an async function getUserAndPosts that uses await to
// fetch user data and then their posts, logging both to
// //----------------------------------------------------- Error Handling in async/await---------------------------------

// ● Modify the fetchUser function to reject the promise with an error if
// the user data is not found.
// ● Write an async function getUserInfo that uses await to call the
// fetchUser function and handles potential errors with a try/catch
// block, logging appropriate messages
// // -----------------------------------------------------Simulate API Calls--------------------------------------------

// ● Write a function apiCall that simulates an API call and returns a
// promise which resolves with data after a random delay (use
// setTimeout and Math.random()).
// ● Write an async function getData that uses await to call apiCall
// three times in sequence, logging each result to the console.
// ● Use try/catch to handle any errors that may occur during the API
// calls.