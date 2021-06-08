var canvas, Pcanvas, Img, ctx, Pctx, SubImg, backImg, MonsterImg;

var x=10, y=430, dx=20, dy=30, Sx = 0, Sy = 0;//玩家位置和速度
var Mx=300, My=450, dMx=5, dMy=30//怪物位置和速度
var RightDir = "KeyD", LeftDir = "KeyA", UpDir = "KeyW", downDir = "KeyS",Jump = "KeyK", shift = "KeyL", punch = "KeyJ",keystate = [];//wasd, jkl
var GameStart = 1, MonsterStart = 0;//GameStart=0 is gameOver, MonsterStart = 0 is snake

var loadWord = ['idle','move','jump','shift','attackJ','attackJS','attackJW', 'jump', 'death'];
var loadWordM = ['idle','walk','gesture','attack','death'];
//矩陣填到矩陣裡
let preloadImage = [];
let preloadImagesR = Array(9).fill().map(() => Array(6));//m列n行Array(m).fill().map(() => Array(n))
let preloadImagesL = Array(9).fill().map(() => Array(6));//m列n行
let preloadMonsterImgsR = Array(5).fill().map(() => Array(10));//0~4: snake
let preloadMonsterImgsL = Array(5).fill().map(() => Array(10));

var fps, fpsInterval, startTime, timestamp = Date.now(), preTimestamp, progress;

let init = 0;//當1時就不進行遊戲
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function sideOptionOpen(){
  /*document.querySelectorAll(".dropdown").style.display = "block";*/
  for(let i = 0; i <=5; i++) document.getElementsByClassName("dropdown")[i].style.display = "inline-block";
  document.getElementsByClassName("SideOption")[0].style.display = "block";
  document.getElementById("sideOptionClose").style.display = "block";
  document.getElementById("sideOptionOpen").style.display = "none";
}
function sideOptionClose(){
  /*document.querySelectorAll(".dropdown").style.display = "block";*/
  for(let i = 0; i <=5; i++) document.getElementsByClassName("dropdown")[i].style.display = "none";
  document.getElementsByClassName("SideOption")[0].style.display = "none";
  document.getElementById("sideOptionOpen").style.display = "block";
  document.getElementById("sideOptionClose").style.display = "none";
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var itd = document.getElementById("introduction");
var src = document.getElementById("source");
var ifm = document.getElementById("informations");
var gam = document.getElementById("game");
var otr = document.getElementById("others");

function Introduction(){
    none();
    itd.style.display = "block";
}

function Source(){
    none();
    src.style.display = "block";
}

function Informations(){
    none();
    
    ifm.style.display = "block";
}

function Game(){
    none();
    MainGame();
    if(init==0) init = 1;//遊戲開一次
    gam.style.display = "block";
    document.getElementById("GameText").style.display = "block";
}

function Others(){
    none();
    otr.style.display = "block";
    document.getElementById("DrawChooser").style.display = "block";
}

function none(){
    itd.style.display = "none";
    src.style.display = "none";
    ifm.style.display = "none";
    gam.style.display = "none";
    otr.style.display = "none";
    for(let i = 0; i <= 4; i++)document.getElementsByTagName("button")[i].style.Backgroumd = "rgba(0,0,0,0.24)";
    document.getElementById("GameText").style.display = "none";
    document.getElementById("DrawChooser").style.display = "none";
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var PB = document.getElementById("paintBoard");
var FMT = document.getElementById("FormTable");

function PaintBoard(){
  Othernone();
  PBinit();
  PB.style.display = "block";
  document.getElementById("DrawChooser").style.display = "block";
}
function formTable(){
  Othernone();
  FMT.style.display = "block";
}
function Othernone(){
  PB.style.display = "none";
  FMT.style.display = "none";
  document.getElementById("DrawChooser").style.display = "none";
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function preload() { 
  //preload img

  //character
  for (i = 0; i < 9; i++) 
  { 
      if(i==7)//jump有兩次
      {
        for (a=6 ; a<12; a++)
        {
          preloadImagesR[i][a] = new Image();
          preloadImagesL[i][a] = new Image(); 
          preloadImagesR[i][a].src = "picture/material/R/"+loadWord[i]+"/"+a+".png";
          preloadImagesL[i][a].src = "picture/material/L/"+loadWord[i]+"/"+a+".png";
        }
      }
      else
      {
        for (a=0 ; a<6; a++)
        {
          preloadImagesR[i][a] = new Image();
          preloadImagesL[i][a] = new Image(); 
          preloadImagesR[i][a].src = "picture/material/R/"+loadWord[i]+"/"+a+".png";
          preloadImagesL[i][a].src = "picture/material/L/"+loadWord[i]+"/"+a+".png";
        }
      }
  } 

  //background
  for(i = 0; i < 54 ; i++)
  {
    preloadImagesR[i] = new Image();
    preloadImagesR[i].src = "picture/material/background/"+i+".png";
  }

  //monster 
  //snake
  for(i = 0; i < 5; i++)
  {
    for (a=0 ; a<10; a++)
        {
          preloadMonsterImgsR[i][a] = new Image();
          preloadMonsterImgsL[i][a] = new Image(); 
          preloadMonsterImgsR[i][a].src = "picture/material/monster/snake/R/"+loadWordM[i]+"/"+a+".png";
          preloadMonsterImgsL[i][a].src = "picture/material/monster/snake/L/"+loadWordM[i]+"/"+a+".png";
        }
  }
}

function upgrade(){
    if(MonsterStart==0) Monster.upgrade();
    Player.upgrade();
    Backgroumd.upgrade();
}

function draw(){
    preload();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.font = "30px Verdana";//設定字大小
    Backgroumd.draw();
    Player.draw();
    if(MonsterStart==0) Monster.draw();
}

// initialize the timer variables and start the animation

function startAnimating(fps) {
  fpsInterval = 1000 / fps;
  preTimestamp =  Date.now();
  startTime = preTimestamp;
}

function MainGame(){
    startAnimating(12);//設置fps
    if(init == 1) return;
    SubImg = document.getElementById("SubPicture");
    Img = document.getElementById("picture");
    backImg = document.getElementById("background");
    MonsterImg = document.getElementById("monster");
    canvas = document.getElementById("MyCanvas");
    ctx = canvas.getContext("2d");

    document.addEventListener("keydown", function(event) {//這裡的evt是接收玩家的鍵盤事件
      keystate[event.code] = true//鍵盤按下
    }, true);
    document.addEventListener("keyup", function(event) {
      keystate[event.code] = false;//放開取消事件，避免短期按太多按件
    }, true);

    var loop = function(){ 
      timestamp =  Date.now();//調整速率
      progress = timestamp - preTimestamp;
      
      if (progress > fpsInterval)
      {
        startAnimating(12);
        if(GameStart==1)
        {
          upgrade();
          draw();
        }
        else
        {
          backImg.src = "picture/material/end/0.png";
          ctx.drawImage(backImg, 0, 0, canvas.width, canvas.height);
          ctx.drawImage(Img, x, y, 60, 100);
        }
      }
      window.requestAnimationFrame(loop, canvas);
    }
    window.requestAnimationFrame(loop, canvas);
}

