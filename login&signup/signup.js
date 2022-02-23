Mobile = localStorage.getItem("mobile")
document.querySelector("#mobile").innerText = Mobile
UserDeta = JSON.parse(localStorage.getItem("UserDetail"))||[]
document.querySelector("#submit").addEventListener("click",signup)
function signup(){
        
        Name = document.getElementById("name").value 
        lastName = document.getElementById("lastname").value
        email = document.getElementById("email").value
        otp=document.getElementById("otp").value
        if(otp=="123456"){
            obj={
                name: Name+" "+lastName,
                email: email,
                mobile:Mobile
            }
            UserDeta.push(obj)
            localStorage.setItem("UserDetail",JSON.stringify(UserDeta))
            localStorage.removeItem("mobile")
            user = UserDeta[UserDeta.length-1]
            arr = JSON.parse(localStorage.getItem("LoginUserDetails"))||[]
            arr.push(user)
            localStorage.setItem("LoginUserDetails",JSON.stringify(arr)) 

           //window.location.href = "../index.html"

        }
        else{
            alert("Plz Enter Valid Otp")
        }
        
}

