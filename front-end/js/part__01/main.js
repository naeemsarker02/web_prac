// let score = '100';

// console.log(score);
// console.log(typeof(score));

// newVal = Number(score);
// console.log(typeof(newVal));

// *********** stack & heap ***********/

// stack - memory allocation for primitive data types(like number, string, boolean, null, undefined, symbol)
// heap - memory allocation for reference data types (like object, array, function)

// let userOne = {
//     name: 'Naeem Sarker',
//     age: 22,
// }

// let userTwo = userOne;

// userTwo.name = 'Nafiz Shorker';
// userTwo.age = 12;

// console.log(userOne.name);
// console.log(userTwo.name);


//********** string in js ************/
// const name = 'Naeem';
// const age = 22;

// console.log(`hey hello, this is ${name} Sarker and i am ${age} years old`);
// console.log(name.length);
// console.log(name[4]);
// console.log(name.indexOf(('a')));

//******** normal prac ******//

// let sum = 0;
// for(let i=9; i>0; i--){
//     console.log(i);
//     sum = sum + i;
// }
// console.log('sum: ',sum);

//**********num & maths *//
// const score = 100;
// console.log(score + 1);

// const balance = new Number(500);
// console.log(balance+1);
// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

// const nums = 123.7899;
// console.log(nums.toPrecision(5));

// const num = 12.745456;  //floor, ceilling
// console.log(Math.round(num));
// console.log(Math.floor(4.9));
// console.log(Math.ceil(4.1));



// const usd = 10000000;
// console.log(usd.toLocaleString('en-BD'));


//********** date & time *//
// let newDate = new Date();
// console.log(newDate);
// console.log(" hello !!!");


//********** if else **********//
// let color = 'green';

// if(color === 'red'){
//     console.log('stop');
//     }else if(color === "yellow"){
//         console.log('go slowly');
//     }else{
//         console.log('go');
//     }

//********** switch */

// alert("welcome to trafic lighting system : ");
// let color = prompt("enter a color : ");

// let color = 'red';

// switch(color){

//     case "red" : 
//     console.log("stop");
//     break;
//     case "yellow" : 
//     console.log("slow");
//     break;
//     case "green" :
//     console.log("go");
//     break;
//     default:
//         console.log("broken light");
    
// }

//*********** ARRAY ********/

// const arr = [1,2,3,4,5,6];
// console.log(arr[4]);

// arr.push(7);
// arr.pop();
// arr.push(8)
// console.log(arr[6]);

// console.log(arr);

// let newArr = arr.join();  //join() is conterting array into string
// console.log(newArr);
// console.log(typeof newArr);

// // ****************** OBJECT *******************    

// const user = {
//     name : "Naeem",
//     age : 23,
//     address : "uttara",
//     phone : 1629753788,
//     email : "naeem@gmail.com",
// }
// console.log(user);
// console.log("Name : ",user.name , "\nage : ",user.age, "\nadress : ",user.address, "\nphone : ",user.phone, "\nemail : ",user.email); 


//better->
// console.log(`Name : ${user.name} \nAge : ${user.age} \naddress : ${user.address} \nphone : ${user.phone} \nemail : ${user.email}`);


// user.func = function(){
//     console.log("Hello!!",this.name);
// }

// console.log(user.func());


// const {phone} = user;  //destructuring
// console.log("phone number is : ",phone);

// const {email} = user;
// console.log("email is : ",email);

// // ******* function ***********
// function saySomething(){
//     console.log("Hello!!");
// }

// saySomething(); 

// function add(a,b){
//     console.log(a+b);
// }
// add(6,3);

// function notification(userName)
// {
//     console.log(`${userName} has just logged in`);
// }
// notification("Naeem");

// function rest(...num1){ //using rest operator by ...
//     return num1;
// }
// console.log(rest(200, 400, 800, 1600, 2001));
// function rest1(v1,v2,...num1){ //using rest operator by ...
//     return num1;
// }
// console.log(rest1(200, 400, 800, 1600, 2001));
// const user = {
//     name : "Naeem",
//     age: 23,
//     address : "Dhaka",
// }
// function handleObj(user){
//     console.log(`my name is ${user.name} and i am ${user.age} years old and adress is ${user.address}`);
    
// }
// handleObj(user);    

// function add(a,b){
//     console.log(a+b);
// }
// add(5,7);

/***********arrow function */
const obj = {
    name : "Naeem",
    age : 23,
    notification : function() {
        console.log(`my name is ${this.name}`);
    }
}
obj.notification();