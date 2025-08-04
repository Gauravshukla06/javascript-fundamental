// let count = 0;
// const timer = setInterval(() => {
// console.log(`count:${count}`);
// count++;
// if(count > 10) {
// clearInterval(timer);
// }},2000);

// function greet(callback){
//     console.log("aaja bhaii");
//     callback();
// }
// function sayBye(){
//     console.log("chal nikal");

// }
// greet(sayBye);

//
function sayHello(callback) {
  setTimeout(() => {
    console.log("Hello");
    callback();
  }, 1000);
}

function askHowAreYou(callback) {
  setTimeout(() => {
    console.log("How are you?");
    callback();
  }, 3000);
}

function sayGoodbye(callback) {
  setTimeout(() => {
    console.log("Goodbye");
    callback();
  }, 1000);
}

// Nested callbacks — callback hell
sayHello(() => {
  askHowAreYou(() => {
    sayGoodbye(() => {
      console.log("Conversation ended.");
    });
  });
});