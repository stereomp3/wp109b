var canvas, Pcanvas, ctx, Pctx, P1Img, P2Img, SubImg, SubImg2, backImg, MonsterImg, MonsterAttcakImg;



/////////////////////////////側邊選單////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function sideOptionOpen() {
  /*document.querySelectorAll(".dropdown").style.display = "block";*/
  for (let i = 0; i <= 5; i++) document.getElementsByClassName("dropdown")[i].style.display = "inline-block";
  document.getElementById("SideOption").style.display = "block";
  document.getElementById("sideOptionClose").style.display = "block";
  document.getElementById("sideOptionOpen").style.display = "none";
}
function sideOptionClose() {
  /*document.querySelectorAll(".dropdown").style.display = "block";*/
  for (let i = 0; i <= 5; i++) document.getElementsByClassName("dropdown")[i].style.display = "none";
  document.getElementById("SideOption").style.display = "none";
  document.getElementById("sideOptionOpen").style.display = "block";
  document.getElementById("sideOptionClose").style.display = "none";
}
/////////////////////////////網站主體////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var itd = document.getElementById("introduction");
var src = document.getElementById("source");
var ifm = document.getElementById("informations");
var gam = document.getElementById("game");
var otr = document.getElementById("others");

function Introduction() {
  none();
  itd.style.display = "block";
  document.getElementsByTagName("button")[4].style.background = "#777474d2"
}

function Source() {
  none();
  src.style.display = "block";
  document.getElementsByTagName("button")[0].style.background = "#777474d2"
}

function Informations() {
  none();
  ifm.style.display = "block";
  document.getElementsByTagName("button")[3].style.background = "#777474d2"
}

function Game() {
  none();
  //if (init == 0) init = 1;//遊戲開一次
  gam.style.display = "block";
  document.getElementsByTagName("button")[2].style.background = "#777474d2"
}

function Others() {
  none();
  otr.style.display = "block";
  document.getElementById("DrawChooser").style.display = "block";
  document.getElementsByTagName("button")[1].style.background = "#777474d2"
}

function none() {
  document.documentElement.scrollTop = 20;
  document.body.style.overflow = "auto"
  itd.style.display = "none";
  src.style.display = "none";
  ifm.style.display = "none";
  gam.style.display = "none";
  otr.style.display = "none";
  for (let i = 0; i <= 4; i++)document.getElementsByTagName("button")[i].style.background = "rgb(239, 239, 239)";
  document.getElementById("GameText").style.display = "none";
  document.getElementById("DrawChooser").style.display = "none";
}
//////////////////////繪畫板////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var PB = document.getElementById("paintBoard");
var FMT = document.getElementById("FormTable");

function PaintBoard() {
  Othernone();
  PBinit();
  PB.style.display = "block";
  document.getElementById("DrawChooser").style.display = "block";
}
function formTable() {
  Othernone();
  FMT.style.display = "block";
}
function Othernone() {
  PB.style.display = "none";
  FMT.style.display = "none";
  document.getElementById("DrawChooser").style.display = "none";
}
//////////////////////調整模式///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function morningMode() {
  document.getElementsByTagName("body")[0].style.background = "rgb(243, 238, 229)";
  document.getElementById("header").style.color = "DimGrey";
  document.getElementById("header").style.background = "rgb(243, 235, 188)";
  document.getElementById("SideOption").style.background = "rgb(243, 235, 188)";
  document.getElementById("DrawChooser").style.color = "black";
  document.getElementById("night").style.display = "block"
  document.getElementById("morning").style.display = "none"
  for(let i=0; i<4 ; i++)document.querySelectorAll("#DrawChooser a")[i].style.background = "ivory"
}
function nightMode() {
  document.getElementsByTagName("body")[0].style.background = "DimGrey";
  document.getElementById("header").style.color = "white";
  document.getElementById("header").style.background = "#d0cfda";
  document.getElementById("SideOption").style.background = "#d0cfda";
  document.getElementById("DrawChooser").style.color = "ivory";
  document.getElementById("night").style.display = "none"
  document.getElementById("morning").style.display = "block"
  for(let i=0; i<4 ; i++)document.querySelectorAll("#DrawChooser a")[i].style.background = "black"
}


