cartItem = JSON.parse(localStorage.getItem("cartDeta"))||[]
showDeta(cartItem)
function showDeta(cartItem){
totalP = 0
totalDis =0
totalMrp =0
// document.querySelector("#cartitem").innerHTML =""
    cartItem.map(function(ele,ind){
       
        total = ele.aprice-ele.aprice*ele.dis/100
        totalP+=Math.floor(total*ele.qnt)
        totalDis+=Math.floor(ele.aprice*ele.dis/100)*ele.qnt
        totalMrp += Math.floor(ele.aprice*ele.qnt)
    })
    document.querySelector("#mrptotal").innerText = totalMrp+".00"
    document.querySelector("#netdis").innerText = totalDis+".00"
    document.querySelector("#total").innerText = totalP+".00"
    document.querySelector("#Netdis").innerText = totalDis+".00"
    document.querySelector("#netamt").innerText = totalP+".00"
}
document.querySelector("#apply").addEventListener("click", Pay)
function Pay(){
    promo = document.getElementById("promocode").value 
    if(promo=="masai30"){
        document.querySelector("#netamt").innerText = totalP-totalP*30/100+".00"
    }
}
cardDetails = JSON.parse(localStorage.getItem("CardDetails"))||[]
form = document.querySelector("#form")
document.querySelector("#PayNow").addEventListener("click",PayProceed)
function PayProceed(){
    document.querySelector("#Otp").innerHTML =""
    Obj={
        card:form.card.value,
        cardNo:form.cardno.value,
        expdate:form.expirydate.value,
        cardH:form.cardholder.value,
        cvv:form.cvv.value,
    }
    cardDetails.push(Obj)
    localStorage.setItem("CardDetails",JSON.stringify(cardDetails))
    inp =  document.createElement("input")
    inp.setAttribute("id","otp")
    inp.setAttribute("placeholder","OTP")
    document.querySelector("#Otp").append(inp)
}

document.querySelector(".button").addEventListener("click",sucess)
function sucess(){
    Otp = document.getElementById("otp").value
    if(Otp=='123456'){

        localStorage.removeItem("cartDeta")
        alert("Thank You! for Shooping with Our Plateform! Your Order has Been Sucessfully Placed")

        window.location.href ="../index.html"
    }
    else{
        alert("Plz enter Valid Otp")
    }
}