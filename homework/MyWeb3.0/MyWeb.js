var itd = document.getElementById("introduction");
var nti = document.getElementById("notices");
var ifm = document.getElementById("informations");
var gam = document.getElementById("game");
var otr = document.getElementById("others");

var canvas, Img, ctx, SubImg, backImg; 
var loadWord = ['idle','move','jump','shift','attackJ','attackJS','attackJW', 'jump'];
//矩陣填到矩陣裡
var preloadImagesR = Array(8).fill().map(() => Array(6));//m列n行
var preloadImagesL = Array(8).fill().map(() => Array(6));//m列n行

var flag = 0, Jflag = 0, Pflag = 0, WPflag = 0, SPflag = 0, timer = 0; 

var x=10, y=10, dx=20, dy=30, Sx = 0, Sy = 0;//玩家位置和速度
var dirFlag = true;//左右
var init = 0;//當1時就不進行遊戲
var RightDir = 68, LeftDir = 65, UpDir = 87, downDir = 83,Jump = 75, shift = 76, punch = 74,keystate=[];//wasd, jkl

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

Player = {
  upgrade: function(){

      //if(img.width+x>canvas.width && dx>0 && dirFlag) dx = -dx
      //if(x<0 && dx<0 && dirFlag) dx = -dx
    
    if(timer == 10)
    {
      //jump flag == 0 is on the ground
      if(keystate[Jump] || Jflag!=0)
      {
        if(Jflag>=6) y += dy;
        else y -= dy

        if(Jflag>=11) Jflag=0;
        else Jflag++;

        if(keystate[RightDir]) 
        {
          dirFlag = true;
          x += dx;
        }
        else if(keystate[LeftDir]) 
        {
          dirFlag = false;
          x -= dx;
        }

        if(dirFlag) Img.src = "picture/material/R/jump/"+Jflag+".png"
        if(!dirFlag) Img.src = "picture/material/L/jump/"+Jflag+".png"
      }


      if(y==10) Jflag==0;
      
      //attack*3
      if(keystate[punch] || Pflag!=0 || WPflag!=0 || SPflag!=0)
      {
        if((keystate[UpDir] || WPflag!=0) && Pflag==0 && SPflag==0)
        {
          if(WPflag>=5) WPflag=0;
          else WPflag++;

          if(dirFlag) Img.src = "picture/material/R/attackJW/"+WPflag+".png"
          if(!dirFlag) Img.src = "picture/material/L/attackJW/"+WPflag+".png"
        }
        else if((keystate[downDir] || SPflag!=0) && WPflag==0 && Pflag==0)
        {
          if(SPflag>=5) SPflag=0;
          else SPflag++;

          if(dirFlag) Img.src = "picture/material/R/attackJS/"+SPflag+".png"
          if(!dirFlag) Img.src = "picture/material/L/attackJS/"+SPflag+".png"
        }
        else if(WPflag==0 && SPflag==0)
        {
          if(Pflag>=5) Pflag=0;
          else Pflag++;

          if(dirFlag) Img.src = "picture/material/R/attackJ/"+Pflag+".png"
          if(!dirFlag) Img.src = "picture/material/L/attackJ/"+Pflag+".png"
        }
      }

      //shift
      if(keystate[shift])
      {      
        if(dirFlag) 
        {
          x += dx; Sx = -20;
          SubImg.src = "picture/material/R/shift/0.png"
        }
        if(!dirFlag) 
        {
          x -= dx; Sx = 20;
          SubImg.src = "picture/material/L/shift/0.png"
        }
      }
      else 
      {
        SubImg.src = "picture/material/0.png"
        Sx = 0;
      }
      //move //direction Flag = true is right，else is false
      if(keystate[RightDir] && Jflag==0 && Pflag==0 && WPflag==0 && SPflag==0)  
      {
        dirFlag = true;
        x += dx;
        flag++;
        Img.src = "picture/material/R/move/"+flag+".png"
      }
      else if(keystate[LeftDir] && Jflag==0 && Pflag==0 && WPflag==0 && SPflag==0) 
      {
        dirFlag = false;
        x -= dx;
        flag++;
        Img.src = "picture/material/L/move/"+flag+".png"
      }
      else if(Jflag==0 && Pflag==0 && dirFlag && WPflag==0 && SPflag==0)
      {
        flag++;
        Img.src = "picture/material/R/"+loadWord[0]+"/"+flag+".png"
      }
      else if(Jflag==0 && Pflag==0 && !dirFlag && WPflag==0 && SPflag==0)
      {
        flag++;
        Img.src = "picture/material/L/"+loadWord[0]+"/"+flag+".png"
      }
      if(flag>=5) flag = 0;
      timer = 0;
    }
    else timer++; 

    if(x<0) x=10;
    if(x>canvas.width-0.5*Img.width) x = canvas.width-0.5*Img.width;
    if(y+400<0) y=10;
    if(y+400>canvas.height-0.5*Img.height) y = canvas.height-0.5*Img.height;
  },

  draw: function(){
    ctx.drawImage(SubImg, x+Sx, y+400, 60, 100);
    ctx.drawImage(Img, x, y+400, 60, 100);
  }
}

Backgroumd = {
  draw: function(){
    ctx.drawImage(backImg, 0, 0, canvas.width, canvas.height);
  }
}

function preload() { 
  //preload img
  for (i = 0; i < 8; i++) 
  { 
      if(i==7)
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
}

function upgrade(){
    Player.upgrade();
}

function draw(){
    preload();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    Backgroumd.draw();
    Player.draw();
}

function MainGame(){
    if(init == 1) return;
    SubImg = document.getElementById("SubPicture");
    Img = document.getElementById("picture");
    backImg = document.getElementById("background");
    canvas = document.getElementById("MyCanvas");
    ctx = canvas.getContext("2d");

    document.addEventListener("keydown", function(evt) {//這裡的evt是接收玩家的鍵盤事件
      keystate[evt.keyCode] = true;//鍵盤按下
    });
    document.addEventListener("keyup", function(evt) {
      delete keystate[evt.keyCode];//放開取消事件，避免短期按太多按件
    });

    var loop = function(){
        upgrade();
        draw();
        window.requestAnimationFrame(loop, canvas);
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