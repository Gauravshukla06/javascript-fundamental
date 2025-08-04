// let greet = new Promise((resolve,reject)=>{
//   console.log("aaja bhai");
//   resolve();

// });

// greet.then(()=>{
//   console.log("tu jaa re");
// });

//
const loggedInStatus=new Promise((resolve,reject) =>{
    setTimeout(()=>{
        let isLoggedIn=true;

        if (isLoggedIn){
            console.log("user is logged");
            resolve();
        }
        else{;
        console.log("user is not logged");
        reject();
        }
    },3000)
})
loggedInStatus.then((user)=>{
    console.log(user);
}).catch((err) => {
    console.log(err)
})   

