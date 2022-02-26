var address= JSON.parse(localStorage.getItem("formDataSub"))||[]

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
    if(address.length!=0){
        window.location.href ="payment.html"
    }else{
        alert("Please provide address!")
    }
}

cartItem = JSON.parse(localStorage.getItem("cartDeta"))||[]
showDeta(cartItem)
function showDeta(cartItem){
totalP = 0
totalDis =0
totalMrp =0
document.querySelector("#cartitem").innerHTML =""
if(cartItem.length!=0){
    cartItem.map(function(ele,ind){
        div = document.createElement("div")
        img = document.createElement("img")
        img.setAttribute("src",ele.img)
        nameContainer = document.createElement("div")
        nameContainer.style.width = "400px"
        Name = document.createElement("p")
        Name.innerText = ele.name
        mkt = document.createElement("p")
        mkt.innerText = ele.mkt
        qnt = document.createElement("p")
        qnt.innerText = "Qnt "+ele.qnt
        qnt.style.color="green"
        total = ele.aprice-ele.aprice*ele.dis/100
        price = document.createElement("p")
        totalP+=Math.floor(total*ele.qnt)
        totalDis+=Math.floor(ele.aprice*ele.dis/100)*ele.qnt
        totalMrp += Math.floor(ele.aprice*ele.qnt)
        price.innerText = "MRP:- "+(Math.floor(total*ele.qnt))
        price.style.color="green"
        nameContainer.append(Name,mkt,qnt,price)
        box = document.createElement("div")
        box.setAttribute("class","BOX")
        box.style.display = "flex"
        sum =document.createElement("p")
        sum.innerText ="+"
        sum.addEventListener("click",function(){
            checkSum(ind)
        })
        subs =document.createElement("p")
        subs.innerText ="-"
        subs.addEventListener("click",function(){
            checkSubs(ind)
        })
        box.append(sum,subs)
        div.style.display = "flex"
        div.append(img,nameContainer,box)
        console.log(div)
        document.querySelector("#cartitem").append(div)
    })
    document.querySelector("#mrptotal").innerText = totalMrp+".00"
    document.querySelector("#netdis").innerText = totalDis+".00"
    document.querySelector("#total").innerText = totalP+".00"
    document.querySelector("#Netdis").innerText = totalDis+".00"
    document.querySelector("#netamt").innerText = totalP+".00"
    
    

    console.log(totalP,totalDis,totalMrp)

}
else{
    document.querySelector("#main").innerHTML =""
    alert("there is No Item")
    
}
}