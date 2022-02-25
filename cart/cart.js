logInUserDetails = JSON.parse(localStorage.getItem("LoginUserDetails"))||[]
if(logInUserDetails!=0){
document.querySelector("#profile").innerText =""
Name = logInUserDetails[0].name
console.log(Name)
document.querySelector("#profile").innerText = Name
}
document.querySelector("#login").addEventListener("click",logincheck)
logindetails = JSON.parse(localStorage.getItem("LoginUserDetails"))||[]
function logincheck(){
    console.log("1")
    if (logindetails.length!=null)
    {
        
        window.location.href = "../login&signup/login&signup.html"
    }
    else{

    }
}