logInUserDetails = JSON.parse(localStorage.getItem("LoginUserDetails"))||[]
if(logInUserDetails.length==0){
  window.location.href = "../login&signup/login&signup.html"
}

// logindetails = JSON.parse(localStorage.getItem("LoginUserDetails"))||[]
// document.querySelector("#profile").addEventListener("click", logincheck)
// function logincheck(){
//     console.log("1")
//     if (logindetails.length==0)
//     {
        
//         window.location.href = "../login&signup/login&signup.html"
//     }
// }


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

function checkSum(ind){
    cartItem[ind].qnt++
    //console.log(cartItem)
    localStorage.setItem("cartDeta",JSON.stringify(cartItem))
    showDeta(cartItem)

}
function checkSubs(ind){
    cartItem[ind].qnt--
    //console.log(cartItem)
    localStorage.setItem("cartDeta",JSON.stringify(cartItem))
    showDeta(cartItem)
}



// after this

document.querySelector("#proceed").addEventListener("click",next)
function next(){
    if(cartItem.length>0){
        window.location.href = "./address.html"
    }
    else{
        window.location.href = "../product/product.html"
    }
}
