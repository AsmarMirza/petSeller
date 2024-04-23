const mode=document.querySelector(".mode")

const local=JSON.parse(localStorage.getItem("mode"))? document.body.classList.add("darkmode"):null



mode.addEventListener("click",function(){
  if (document.body.classList.contains("darkmode")) {
    document.body.classList.remove("darkmode")
   localStorage.setItem("mode",false)
    mode.textContent="🌙"
    
  }
  else{
    document.body.classList.add("darkmode")
    mode.textContent="🌞"
    localStorage.setItem("mode",true) 
   
  }
})
