
    
    
    UserDeta = JSON.parse(localStorage.getItem("UserDetail"))||[]
     
     document.querySelector("button").addEventListener("click", checkUserDeta)
     function checkUserDeta(){
        mobileNo = document.getElementById("mobileNo").value
         if(mobileNo.length==10)
         {
             user = UserDeta.filter(function(ele,ind){
                  return ele.mobile.includes(mobileNo)
             })
             if(user.length!=0){
                login(user)
                console.log("1")
             }
             else{
                 localStorage.setItem("mobile",mobileNo)
                 window.location.href = "./signup.html"
             }
         }
         else{
             alert("plz fill valid mobile no")
         }
     }

     function login(user){
            otp = document.createElement("input")
            otp.setAttribute("id","OTP")
            btn = document.createElement("button")
            btn.innerText = "Verify Otp"
            btn.setAttribute("id","otpverify")
            document.querySelector("#useotp").append(otp,btn)
            document.querySelector("#otpverify").addEventListener("click",function(){
                otpV= document.querySelector("#OTP").value
                verifyotp(otpV,user)
            })
           

     }
     function verifyotp(){
         if(otpV=="123456"){
            localStorage.setItem("LoginUserDetails",JSON.stringify(user)) 
            window.location.href = "../index.html"
         }
         else{
             console.log(otpV)
             alert("Plz Enter Valid Otp")
         }
     }