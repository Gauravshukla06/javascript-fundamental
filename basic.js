const number=10;

console.log("before block scope",number);

{
const number=30;
    console.log("inside block scope",number);

}

console.log("after block scope",number);