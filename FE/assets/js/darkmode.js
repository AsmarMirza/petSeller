const moon=document.getElementById("moon")
const moon1=document.getElementById("moon1")
moon.addEventListener("click",function(){
  darkMode()
  moon1.style.display="block"
  moon.style.display="none"
})
function darkMode(){
  const element=document.body;
  element.classList.toggle("darkmode")
}
moon1.addEventListener("click",function(){
  darkMode()
  moon.style.display="block"
  moon1.style.display="none"
})