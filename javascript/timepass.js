// let num=null?? 10;
// console.log(num);

// let num=undefined ?? 10;
// console.log(num);


// function printgreeting(name){
//     return`Hello how are you ${name}`;
// }
// console.log(printgreeting("bot"));
// (printgreeting("noob"));
// (printgreeting("boo"));
// (printgreeting("boyttt"));


// function addNum(num1,num2){
//     let n1=Number(num1);
//     let n2=Number(num2);

//     return n1+n2;
// }
// console.log(addNum(10,"20"));


// function addNum(num1,num2){
//     let n1=Number(num1);
//     let n2=Number(num2);

//     if(isNaN(n1) || isNaN(n2)){
//         return ("Enter proper number");
//     }
//     return n1+n2;
// }
// console.log(addNum(10,"20abc"));

// let string1="gaurav";
// let string2=new String("gaurav shukla")
// console.log(typeof string1);
// console.log(typeof string2);

                            // ----------------//
// let user = "BOOMRAH";
// console.log(user.length)

// console.log(user.toUpperCase());
// console.log(user.toLowerCase());

// console.log(user.charAt(5));
// console.log(user.indexOf('BOOM'));

// // user.replace(oldVs1.newVal1);
// console.log(user.replace("M","O"));
// console.log(user);

// let userName = "sai%deep%noob%gaurav"
// console.log(userName.split('%'));

// let user_2 = "saideep"
// console.log(user_2.substring("4,6"));
// console.log(user_2.slice(-2,3));
// console.log(user_2.substring(-2,3));
// console.log(user_2.slice(4,6));

// console.log(user.substring(4,2));
// console.log(user.slice(4,2));

// substring vs slice
//negative index behaviour (possible in slice)
//swaping index (possible in substring)
// let user = "ganesh";
// for (const element of user)
// {
//     console.log(element);
// }

//for.. of loop
//it givees value
//it is applicable for string,array,map
//not applicable for object
// let user1="saideep"
// console.log(user1=[10,20,30,40]);
// console.log(Array.isArray(user1));

//araayOf
// let num=10;
// let num1=20;
// let num2=30;
// let num3=40;
// console.log(Array.of(num,num1,num2,num3));


// const user=[10,20,30,40,50];
// console.log("before",user);
// const newuser=user.splice(0,3);
// console.log("newuser",newuser);
// console.log("after",user);

//for ..Of array
// const user=[10,20,30,40,50];
// for(const value of user){
//     console.log(value);
// }

//funcion
// const person ={
//     userName: "GAURAV",
//     age: 17,
//     greet: function greetings(){
//         console.log(this)
//         return(`hello ${this.userName}`);

//     }
// }
// console.log(person.greet());

// 29/7

// const formdata={
//     name:"ram",
//     email:"ram@gmail.com",
//     age:25
// };

// const googledata={
//     email:"saideep@gmail.com",
//     profilepic:"https://example.com/profile.jpg",
//     googleId:"123456789"
// };

// const googledata1={
//     name:"ganesh",
//     age:20
// };

// const completeuserprofile=Object.assign(googledata1,googledata,formdata)

// console.log(completeuserprofile);

// const{name,email,age}=formdata
//     console.log(age)
//     console.log(name)

//reduce function

// const fruits = ['apple','banana','apple','orange','banana'];
// const count = fruits.reduce((acc, fruit) => {
//     acc[fruit] = (acc[fruit] || 0) + 1;
//     console.log(acc);
//     return acc;
// }, {});

// console.log(count);

//reduce ()
// const num=[10,20,30,40,50];
// const sum =num.reduce((acc,num)=>
//     acc+num,0);
//     console.log(sum);

//

