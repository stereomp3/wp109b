function openNav(html) {
  document.getElementById("SideOption").innerHTML = html
  //document.getElementById("mySidenav").style.width = "250px";
}
  
function closeNav(html) {
  document.getElementById("SideOption").innerHTML = html
  //document.getElementById("mySidenav").style.width = "0";
}
  
const main = document.querySelector('main')
  
function show(html) {
  main.innerHTML = html  
}
  
function initWeb() {
  introduction.start()
}