logInUserDetails = JSON.parse(localStorage.getItem("LoginUserDetails"))||[]
if(logInUserDetails!=0){
document.querySelector("#profile").innerText =""
Name = logInUserDetails[0].name
// console.log(Name)
document.querySelector("#profile").innerText = Name
}
logInUserDetails.map(function(ele){
    document.querySelector("#name").innerText =ele.name
    document.querySelector("#email").innerText =ele.email
    document.querySelector("#phone").innerText =ele.mobile
})
document.querySelector("#button").addEventListener("click",signout)
function signout(){
    localStorage.removeItem("LoginUserDetails")
    window.location.href = "../index.html"
}