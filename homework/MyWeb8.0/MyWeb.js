var canvas, Pcanvas, ctx, Pctx, P1Img, P2Img, SubImg, SubImg2, backImg, MonsterImg, MonsterAttcakImg;


//////////////////////繪畫板////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function PaintBoard() {
  Othernone();
  PBinit();
  document.getElementById("paintBoard").style.display = "block";
  document.getElementById("DrawChooser").style.display = "block";
}
function formTable() {
  Othernone();
  document.getElementById("FormTable").style.display = "block";
}
function Othernone() {
  document.getElementById("paintBoard").style.display = "none";
  document.getElementById("FormTable").style.display = "none";
  document.getElementById("DrawChooser").style.display = "none";
}
//////////////////////調整模式///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function morningMode() {
  document.getElementsByTagName("body")[0].style.background = "rgb(243, 238, 229)";
  document.getElementById("header").style.color = "DimGrey";
  document.getElementById("header").style.background = "rgb(243, 235, 188)";
  document.getElementById("SideOption").style.background = "rgb(243, 235, 188)";
  document.getElementById("SideOption").style.color = "black";
  document.getElementById("night").style.display = "block"
  document.getElementById("morning").style.display = "none"
  document.getElementById("webHeader").innerHTML = 'Website 8.0 （￣￢￣）'
}
function nightMode() {
  document.getElementsByTagName("body")[0].style.background = "DimGrey";
  document.getElementById("header").style.color = "white";
  document.getElementById("header").style.background = "#031927";
  document.getElementById("SideOption").style.background = "#031927";
  document.getElementById("SideOption").style.color = "ivory";
  document.getElementById("night").style.display = "none"
  document.getElementById("morning").style.display = "block"
  document.getElementById("webHeader").innerHTML = 'Website 8.0 \\（￣▽￣）/'
}


