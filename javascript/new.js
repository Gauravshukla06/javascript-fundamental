console.log("first console")
const backEndurl = "https://jsonplaceholder.typgfnhf gbd bicode.com/todos"


async function fetchAPI() {
    try{
    const saved = await fetch(backEndurl)
    const data = await saved.json()
    console.log(data)
}catch(error){
    console.log("Error is: ", error);
}}
console.log("last console")

fetchAPI()