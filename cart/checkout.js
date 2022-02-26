var address= JSON.parse(localStorage.getItem("FormDataSub"))||[]

showdata(address)
function showdata(address){
    document.querySelector("#addressdrtails").innerHTML =""

    address.map(function(ele,ind){
        var topdiv =document.createElement("div")
        topdiv.setAttribute("class","topdivaddress")
        
        var deliveryadd= document.createElement("p")
        deliveryadd.innerText= "DELIVERY ADDRESS"

        var change = document.createElement("p")
        change.innerText="CHANGE"
        topdiv.append(deliveryadd,change)

        var secdiv =document.createElement("div")
        secdiv.setAttribute("class","secdivaddress")

        var name=document.createElement("h3")
        name.innerText=ele.fName+" "+ele.LName

        var addr=document.createElement("p")
        addr.innerText=ele.add

        var landmark=document.createElement("p")
        landmark.innerText=ele.landMark

        var city_pincode_state=document.createElement("p")
        city_pincode_state.innerText=ele.pin

        var phonenum= document.createElement("p")
        phonenum.innerText=ele.mobile

        secdiv.append(name,addr,landmark,city_pincode_state,phonenum)

        document.querySelector("#addressdrtails").append(topdiv,secdiv)
    })
}

document.querySelector(".button").addEventListener("click", payment)
function payment(){
    if(address!=0){
        window.location.href ="payment.html"
    }else{
        alert("Please provide address!")
    }
}
