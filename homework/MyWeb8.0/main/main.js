var FakeHash = introduction
var TopColorIndex = 2


function openNav(html) {
  document.getElementById("SideOption").innerHTML = html

  document.getElementById("SideOption").style.width = "20%" //控制一般選項main裡的左位移
  document.getElementById('LeftSideSpace').style.marginLeft = "5%"; //控制左側選項main裡的左位移
  document.getElementById("sideOptionClose").style.display = "block";
  document.getElementById("sideOptionOpen").style.display = "none";
}

function closeNav(html) {
  document.getElementById("SideOption").innerHTML = html

  document.getElementById("SideOption").style.width = "0"
  document.getElementById('LeftSideSpace').style.marginLeft = "0";
  document.getElementById("sideOptionClose").style.display = "none";
  document.getElementById("sideOptionOpen").style.display = "block";
}

function MobileOpenNav(html) {
  document.getElementById("SideOption").innerHTML = html

  document.getElementById("SideOption").style.width = "100%"
  document.getElementById("sideOptionClose").style.display = "block";
  document.getElementById("sideOptionOpen").style.display = "none";
}
function MobileCloseNav(html) {
  document.getElementById("SideOption").innerHTML = html

  document.getElementById("SideOption").style.width = "0"
  document.getElementById('LeftSideSpace').style.marginLeft = "0";
  document.getElementById("sideOptionClose").style.display = "none";
  document.getElementById("sideOptionOpen").style.display = "block";
}

const main = document.querySelector('main')

function show(html) {
  TopColorChange()
  document.querySelector("main").style.background = " ";

  document.documentElement.scrollTop = 0

  main.innerHTML = html //填入內容
  if (document.getElementById("sideOptionClose").style.display == "block") sideOption.close()

  if (FakeHash == game || FakeHash == others) document.getElementById("sideOptionOpen").style.display = "none";
  else document.getElementById("sideOptionOpen").style.display = "block";
}

function initWeb() {
  introduction.start()
}

function TopColorChange() {
  for (let i = 2; i < 7; i++) {
    document.getElementsByTagName("a")[i].style.background = "rgb(239, 239, 239)";
    document.getElementsByTagName("a")[i].style.color = "black";
  }
  document.getElementsByTagName("a")[TopColorIndex].style.background = "rgb(225, 225, 225)";
  document.getElementsByTagName("a")[TopColorIndex].style.color = "rgb(16, 4, 187)";
}





