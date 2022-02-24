tempDeta = JSON.parse(localStorage.getItem("TempProductItem"))||[]
    document.querySelector("#productItem").innerText = ""


    tempDeta.map(function(event){

        div1 = document.createElement("div")
        p = document.createElement("p")
        p.innerText = event.dis+"%off"
        img=document.createElement("img")
        h1 = document.createElement("h1")
        h1.innerText=event.name
        p2 = document.createElement("p")
        p2.innerText = "Mkt :"+ event.mkt
        p3 = document.createElement("p")
        p3.innerText ="Best Price: "+(event.aprice*event.dis/100)
        p4 = document.createElement("p")
        p4.innerText = "MRP RS: "+event.aprice
        button = document.createElement("button")
        button.innerText = "ADD TO CART"
        div1.append(p,img,h1,p2,p3,p4,button) 
        console.log(div1)
        document.querySelector("#productItem").append(div1)
    })