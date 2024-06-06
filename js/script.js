
  var allproducts = document.querySelectorAll(".list1 li")

 var content = document.querySelector("#content")

  var btn = document.querySelector("#btn1")

  var total = document.querySelector("#totalprice")

 var totalprice = 0

  allproducts.forEach(function(item){
     item.onclick =function () {
         content.innerHTML += item.textContent + "- "
         totalprice += +(item.getAttribute("price"))
         if (content.innerHTML !=" ") {
             btn.style.display="block"
         }

     }
    
  })
  btn.onclick=function () {
    total.style.display = "block"
    console.log(totalprice)
     document.getElementById("totalprice").innerHTML =totalprice;
  }
    
  
    
  
 



