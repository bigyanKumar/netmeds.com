
document.querySelector("#covid").addEventListener("click", covid)
document.querySelector("#diabetes").addEventListener("click",diabetes)
document.querySelector("#eyewear").addEventListener("click",eyewear)
document.querySelector("#ayush").addEventListener("click",ayush)
document.querySelector("#fitness").addEventListener("click",fitness)
document.querySelector("#mom").addEventListener("click",mom)
document.querySelector("#devices").addEventListener("click",devices)
document.querySelector("#surgicals").addEventListener("click",surgicals)
document.querySelector("#sexual").addEventListener("click",sexual)
document.querySelector("#treatments").addEventListener("click",treatments)

ProductDetaBase = JSON.parse(localStorage.getItem("productDetaBase"))||[]
function covid(){
localStorage.removeItem("TempProductItem")
deta = "covid"
 sortDeta = ProductDetaBase.filter(function(ele){
    return ele.cat.includes(deta)
    
}) 
localStorage.setItem("TempProductItem",JSON.stringify(sortDeta))
window.location.href = "./product/product.html"
}
function diabetes(){
    localStorage.removeItem("TempProductItem")
    deta = "diabetes"
    sortDeta = ProductDetaBase.filter(function(ele){
        return ele.cat.includes(deta)
        
    }) 
    localStorage.setItem("TempProductItem",JSON.stringify(sortDeta))
    window.location.href = "./product/product.html"
   // console.log("diabetes")
}
function eyewear(){
    localStorage.removeItem("TempProductItem")
    deta = "eyewear"
    sortDeta = ProductDetaBase.filter(function(ele){
        return ele.cat.includes(deta)
        
    }) 
    localStorage.setItem("TempProductItem",JSON.stringify(sortDeta))
    window.location.href = "./product/product.html"
 // console.log("eyewear")  
}
function ayush(){
  console.log("1")
    localStorage.removeItem("TempProductItem")
    deta = "ayush"
    sortDeta = ProductDetaBase.filter(function(ele){
        return ele.cat.includes(deta)
        
    }) 
    localStorage.setItem("TempProductItem",JSON.stringify(sortDeta))
    window.location.href = "./product/product.html"
    //console.log("ayush")  
  }
  function fitness(){
    localStorage.removeItem("TempProductItem")
    deta = "fitness"
    sortDeta = ProductDetaBase.filter(function(ele){
        return ele.cat.includes(deta)
        
    }) 
    localStorage.setItem("TempProductItem",JSON.stringify(sortDeta))
    window.location.href = "./product/product.html"
    //console.log("fitness")  
  }
  function mom(){
    localStorage.removeItem("TempProductItem")
    deta = "mom" 
    sortDeta = ProductDetaBase.filter(function(ele){
        return ele.cat.includes(deta)
        
    }) 
    localStorage.setItem("TempProductItem",JSON.stringify(sortDeta))
    window.location.href = "./product/product.html"
    // console.log("mom")  
  }
  function surgicals(){
    localStorage.removeItem("TempProductItem")
    deta = "surgicals" 
    sortDeta = ProductDetaBase.filter(function(ele){
        return ele.cat.includes(deta)
        
    }) 
    localStorage.setItem("TempProductItem",JSON.stringify(sortDeta))
    window.location.href = "./product/product.html"
    // console.log("surgicals")  
  }
  function sexual(){
    localStorage.removeItem("TempProductItem")
    deta = "sexual" 
    sortDeta = ProductDetaBase.filter(function(ele){
        return ele.cat.includes(deta)
        
    }) 
    localStorage.setItem("TempProductItem",JSON.stringify(sortDeta))
    window.location.href = "./product/product.html"
    // console.log("sexual")  
  }
  function treatments(){
    localStorage.removeItem("TempProductItem")
    deta = "treatments" 
    sortDeta = ProductDetaBase.filter(function(ele){
        return ele.cat.includes(deta)
        
    }) 
    localStorage.setItem("TempProductItem",JSON.stringify(sortDeta))
    window.location.href = "./product/product.html"

    // console.log("treatments")  
  }
  function devices(){
    localStorage.removeItem("TempProductItem")
    deta = "diveces" 
    sortDeta = ProductDetaBase.filter(function(ele){
        return ele.cat.includes(deta)
        
    }) 
    localStorage.setItem("TempProductItem",JSON.stringify(sortDeta))
    window.location.href = "./product/product.html"

  }