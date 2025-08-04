// function greet(){
//     return new Promise((resolve,reject)=>{
//         resolve("hello world");
//     })
// }
// console.log(greet());


// nextt

// async function hello(){
//     return "hello world";
// }
// console.log(hello()); 

//nexttt
const userLoggedInStatus = new Promise((resolve, reject) => {
  setTimeout(() => {
    let isUserLoggedIn = true; // condition is true

    if (isUserLoggedIn) {

      console.log("user is logged in !!!!!!");
      resolve({userName: "Gaurav", age: 17});
      // Resolve the promise with user data

    } else {

      console.log("user logged in error");
      reject("something went wrong");
      // Reject the promise with an error message

    }
  }, 3000);
});


async function testPromise(){
   try{
    let userstatus=await userLoggedInStatus;
    return 
   }catch(error){

   }}