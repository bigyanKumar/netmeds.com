tempDeta = JSON.parse(localStorage.getItem("TempProductItem"))||[]
    document.querySelector("#outof").innerText = tempDeta.length
all_deta = JSON.parse(localStorage.getItem("productDetaBase"))||[]
    document.querySelector("#total").innerText = all_deta.length
showDeta()
function showDeta(){
    document.querySelector("#productItem").innerHTML = ""
    tempDeta.map(function(event){

        div1 = document.createElement("div")
        p = document.createElement("p")
        p.innerText = event.dis+"%off"
        img=document.createElement("img")
        img.setAttribute("src",event.img)
        h1 = document.createElement("h1")
        h1.innerText=event.name
        p2 = document.createElement("p")
        p2.innerText = "Mkt :"+ event.mkt
        p3 = document.createElement("p")
        p3.innerText ="Best Price: "+(event.aprice-(event.aprice*event.dis/100))
        p4 = document.createElement("p")
        p4.innerText = "MRP Rs: "+event.aprice
        button = document.createElement("button")
        button.innerText = "ADD TO CART"
        div1.append(p,img,h1,p2,p3,p4,button) 
        console.log(div1)
        document.querySelector("#productItem").append(div1)
    })
}
sortBy = JSON.parse(localStorage.getItem("TempProductItem"))||[]
function sortbyrating(){
    
    console.log("rating")
   rating= tempDeta.sort(function(a,b){
        return b.rat-a.rat;
    })
    console.log(rating)
    showDeta(rating)
}
function hightolow(){
    
    console.log("hightolow")
   htl = tempDeta.sort(function(a,b){
        return b.aprice-a.aprice
    })
    console.log(htl)
    showDeta(htl)

}
function lowtohigh(){
    
    console.log("lowto high")
    lth = tempDeta.sort(function(a,b){
       return a.aprice-b.aprice
    })
    console.log(lth)
    showDeta(lth)
}
function sortbydis(){
    console.log("dis")
    dis = tempDeta.sort(function(a,b){
        return b.dis-a.dis
    })
    console.log(dis)
    showDeta(dis)
}