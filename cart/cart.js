logInUserDetails = JSON.parse(localStorage.getItem("LoginUserDetails"))||[]
if(logInUserDetails!=0){
document.querySelector("#profile").innerText =""
Name = logInUserDetails[0].name
console.log(Name)
document.querySelector("#profile").innerText = Name
}