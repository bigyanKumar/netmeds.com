document.querySelector("form").addEventListener("submit", collectData);
var formData = [];
function collectData(e) {
    e.preventDefault();
    var obj = {};
    var fName = document.querySelector("#fName").value;
    var LName = document.querySelector("#lastName").value;
    var pin = document.querySelector("#pin").value;
    var add = document.querySelector("#add").value;
    var landMark = document.querySelector("#landMark").value;
    var mobile = document.querySelector("#mobile").value;
    console.log(fName, LName, pin, add, landMark, mobile);
    obj["fName"] = fName;
    obj["LName"] = LName;
    obj["pin"] = pin;
    obj["add"] = add;
    obj["landMark"] = landMark;

    obj["mobile"] = mobile;
    formData.push(obj)




    console.log(formData)
    localStorage.setItem("formDataSub", JSON.stringify(formData));
    formData = [];
}



cartItem = JSON.parse(localStorage.getItem("cartDeta"))||[]
showDeta(cartItem)
function showDeta(cartItem){
totalP = 0
totalDis =0
totalMrp =0
// document.querySelector("#cartitem").innerHTML =""
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
        // document.querySelector("#cartitem").append(div)
    })
    document.querySelector("#mrptotal").innerText = totalMrp+".00"
    document.querySelector("#netdis").innerText = totalDis+".00"
    document.querySelector("#total").innerText = totalP+".00"
    document.querySelector("#Netdis").innerText = totalDis+".00"
    document.querySelector("#netamt").innerText = totalP+".00"
    
    

    console.log(totalP,totalDis,totalMrp)
}
 

address = JSON.parse(localStorage.getItem("formDataSub"))||[]

document.querySelector("#sub").addEventListener("click", Submit)
function Submit(){
    if(address.length>0){
        window.location.href = "./checkout.html"
    }
    else{
        alert("Please fill Address")
    }
}