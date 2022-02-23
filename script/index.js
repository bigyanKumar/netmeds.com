document.querySelector("#first-nav>div:nth-child(2)>div:nth-child(1) p").addEventListener("click",popbox)
count=1
function popbox(){
    count++
    box = document.getElementById("box")
    if(count%2==0)
    {
        box.style.display = "block"
    }
    else{
        box.style.display = ""
    }
   
}
//  auto slide 
var slideIndex = 0;
showSlides();

function showSlides() {
  var slides = document.getElementsByClassName("slide")
  bullet = document.getElementById("bullet-slide")
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; 
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 12 seconds
}


// slider part
const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})
// slider end
logInUserDetails = JSON.parse(localStorage.getItem("LoginUserDetails"))||[]
if(logInUserDetails!=0){
document.querySelector("#profile").innerText =""
Name = logInUserDetails[0].name
console.log(Name)
document.querySelector("#profile").innerText =Name
}
document.querySelector("#profile").addEventListener("click",checkDetails)
function checkDetails(){
    if(logInUserDetails==0){
        window.location.href="./login&signup/login&signup.html"
    }
    else{
        
    }
}