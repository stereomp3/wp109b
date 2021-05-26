var itd = document.getElementById("introduction");
var nti = document.getElementById("notices");
var ifm = document.getElementById("informations");
var gam = document.getElementById("game");
var otr = document.getElementById("others");

var canvas, Img, ctx, SubImg, backImg, MonsterImg;

var x=10, y=430, dx=20, dy=30, Sx = 0, Sy = 0;//玩家位置和速度
var Mx=300, My=450, dMx=5, dMy=30//怪物位置和速度
var RightDir = 68, LeftDir = 65, UpDir = 87, downDir = 83,Jump = 75, shift = 76, punch = 74,keystate=[];//wasd, jkl
var GameStart = 1, MonsterStart = 0;//GameStart=0 is gameOver, MonsterStart = 0 is snake

var loadWord = ['idle','move','jump','shift','attackJ','attackJS','attackJW', 'jump', 'death'];
var loadWordM = ['idle','walk','gesture','attack','death'];
//矩陣填到矩陣裡
let preloadImage = [];
let preloadImagesR = Array(9).fill().map(() => Array(6));//m列n行Array(m).fill().map(() => Array(n))
let preloadImagesL = Array(9).fill().map(() => Array(6));//m列n行
let preloadMonsterImgsR = Array(5).fill().map(() => Array(10));//0~4: snake
let preloadMonsterImgsL = Array(5).fill().map(() => Array(10));

let init = 0;//當1時就不進行遊戲

function Introduction(){
    none();
    itd.style.display = "block";
}

function Notices(){
    none();
    nti.style.display = "block";
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
}

function none(){
    itd.style.display = "none";
    nti.style.display = "none";
    ifm.style.display = "none";
    gam.style.display = "none";
    otr.style.display = "none";
    document.getElementById("GameText").style.display = "none";
}

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

function MainGame(){
    if(init == 1) return;
    SubImg = document.getElementById("SubPicture");
    Img = document.getElementById("picture");
    backImg = document.getElementById("background");
    MonsterImg = document.getElementById("monster");
    canvas = document.getElementById("MyCanvas");
    ctx = canvas.getContext("2d");

    document.addEventListener("keydown", function(evt) {//這裡的evt是接收玩家的鍵盤事件
      keystate[evt.keyCode] = true;//鍵盤按下
    });
    document.addEventListener("keyup", function(evt) {
      delete keystate[evt.keyCode];//放開取消事件，避免短期按太多按件
    });

    var loop = function(){
      if(GameStart==1)
      {
        upgrade();
        draw();
        window.requestAnimationFrame(loop, canvas);
      }
      else
      {
        backImg.src = "picture/material/end/0.png";
        ctx.drawImage(backImg, 0, 0, canvas.width, canvas.height);
        ctx.drawImage(Img, x, y, 60, 100);
        window.requestAnimationFrame(loop, canvas);
      }
    }

    window.requestAnimationFrame(loop, canvas);
}

/*document.addEventListener("keydown", (event) => {
    switch (event.keyCode) {
      case 27:
        game.togglePause();
        break;

      case 32:
        game.init();
        break;

      case 65:
        player.moveLeft();
        break;

      case 87:
        player.moveUp();

        break;

      case 68:
        player.moveRight();

        break;

      case 83:
        player.moveDown();
        break;

      default:
        break;
    }
})*/