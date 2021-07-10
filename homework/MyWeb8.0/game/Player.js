let flag = 0, Jflag = 0, Pflag = 0, WPflag = 0, SPflag = 0, timer = 0;
let flag2 = 0, Jflag2 = 0, Pflag2 = 0, WPflag2 = 0, SPflag2 = 0;

let PlayerLiveBar = 100, Player2LiveBar = 100;
var PlayerChoose = [1, 1], GamePlayMode = 1;//1是單人，2是雙人對戰，3是雙人合作
let dirFlag = true, dirFlag2 = false;//左右

Player = {
  upgrade: function () {

    //if(img.width+x>canvas.width && dx>0 && dirFlag) dx = -dx
    //if(x<0 && dx<0 && dirFlag) dx = -dx

    //alive
    if (PlayerLiveBar > 0) {
      //jump flag == 0 is on the ground
      if (keystate[Jump] || Jflag != 0) {

        if (Jflag >= 6) Player1_y += dPlayre1_y;
        else Player1_y -= dPlayre1_y

        if (dirFlag) P1Img.src = "picture/material/Character"+PlayerChoose[0]+"/R/jump/" + Jflag + ".png"
        if (!dirFlag) P1Img.src = "picture/material/Character"+PlayerChoose[0]+"/L/jump/" + Jflag + ".png"
        if (Jflag >= 11) Jflag = 0;
        else Jflag++;

        if (keystate[RightDir]) {
          dirFlag = true;
          Player1_x += dPlayer1_x;
        }
        else if (keystate[LeftDir]) {
          dirFlag = false;
          Player1_x -= dPlayer1_x;
        }
      }


      if (Player1_y == 10) Jflag == 0;

      //attack*3
      if ((keystate[punch] || Pflag != 0 || WPflag != 0 || SPflag != 0)) {
        //攻擊位移
        if (Math.abs(Player1_x - Monster_x) >= 30 && GamePlayMode == 1) {//單人
          if (dirFlag) Player1_x += 5;
          if (!dirFlag) Player1_x -= 5;
        }
        if(Math.abs(Player1_x - Player2_x) >= 30 && GamePlayMode == 2){//雙人
          if (dirFlag) Player1_x += 5;
          if (!dirFlag) Player1_x -= 5;
        }
        //J+W
        if ((keystate[UpDir] || WPflag != 0) && Pflag == 0 && SPflag == 0) {
          //攻擊判定
          if (Math.abs(Player1_x - Monster_x) <= 40 && Math.abs(Player1_y - Monster_y) <= 30 && WPflag == 2 && GamePlayMode != 2) MosterLiveBar -= 7;
          if (Math.abs(Player1_x - Monster_x) <= 40 && Math.abs(Player1_y - Monster_y) <= 30 && WPflag == 4 && GamePlayMode != 2) MosterLiveBar -= 8;

          if (Math.abs(Player1_x - Player2_x) <= 40 && Math.abs(Player1_y - Player2_y) <= 30 && WPflag == 2 && GamePlayMode == 2) Player2LiveBar -= 7;
          if (Math.abs(Player1_x - Player2_x) <= 40 && Math.abs(Player1_y - Player2_y) <= 30 && WPflag == 4 && GamePlayMode == 2) Player2LiveBar -= 8;
          //攻擊圖
          if (dirFlag) P1Img.src = "picture/material/Character"+PlayerChoose[0]+"/R/attackJW/" + WPflag + ".png"
          if (!dirFlag) P1Img.src = "picture/material/Character"+PlayerChoose[0]+"/L/attackJW/" + WPflag + ".png"

          //循環判定
          WPflag++;
          if (WPflag > 5) WPflag = 0;
        }
        //J+S
        else if ((keystate[downDir] || SPflag != 0) && WPflag == 0 && Pflag == 0) {
          //攻擊判定
          if (Math.abs(Player1_x - Monster_x) <= 60 && Math.abs(Player1_y - Monster_y) <= 40 && SPflag == 4 && GamePlayMode != 2) MosterLiveBar -= 12;

          if (Math.abs(Player1_x - Player2_x) <= 60 && Math.abs(Player1_y - Player2_y) <= 40 && SPflag == 4 && GamePlayMode == 2) Player2LiveBar -= 12;
          //攻擊圖
          if (dirFlag) P1Img.src = "picture/material/Character"+PlayerChoose[0]+"/R/attackJS/" + SPflag + ".png"
          if (!dirFlag) P1Img.src = "picture/material/Character"+PlayerChoose[0]+"/L/attackJS/" + SPflag + ".png"

          //循環判定
          SPflag++;
          if (SPflag > 5) SPflag = 0;
        }
        //J
        else if (WPflag == 0 && SPflag == 0) {
          //攻擊判定
          if (Math.abs(Player1_x - Monster_x) <= 40 && Math.abs(Player1_y - Monster_y) <= 40 && Pflag == 5 && GamePlayMode != 2) MosterLiveBar -= 10;

          if (Math.abs(Player1_x - Player2_x) <= 40 && Math.abs(Player1_y - Player2_y) <= 40 && Pflag == 5 && GamePlayMode == 2) Player2LiveBar -= 10;
          //攻擊圖
          if (dirFlag) P1Img.src = "picture/material/Character"+PlayerChoose[0]+"/R/attackJ/" + Pflag + ".png"
          if (!dirFlag) P1Img.src = "picture/material/Character"+PlayerChoose[0]+"/L/attackJ/" + Pflag + ".png"
          //循環判定
          Pflag++;
          if (Pflag > 5) Pflag = 0;
        }
      }

      //shift
      if (keystate[shift] && (keystate[RightDir] || keystate[LeftDir])) {
        if (dirFlag) {
          Player1_x += dPlayer1_x; SupportP1_x = -20;
          SubImg.src = "picture/material/Character"+PlayerChoose[0]+"/R/shift/" + timer + ".png"
        }
        if (!dirFlag) {
          Player1_x -= dPlayer1_x; SupportP1_x = 60;
          SubImg.src = "picture/material/Character"+PlayerChoose[0]+"/L/shift/" + timer + ".png"
        }
      }
      else {
        SubImg.src = "picture/material/0.png"
        SupportP1_x = 0;
      }
      //move //direction Flag = true is right，else is false
      if (keystate[RightDir] && Jflag == 0 && Pflag == 0 && WPflag == 0 && SPflag == 0) {
        dirFlag = true;
        Player1_x += dPlayer1_x;
        P1Img.src = "picture/material/Character"+PlayerChoose[0]+"/R/move/" + flag + ".png"
        flag++;
      }
      else if (keystate[LeftDir] && Jflag == 0 && Pflag == 0 && WPflag == 0 && SPflag == 0) {
        dirFlag = false;
        Player1_x -= dPlayer1_x;
        P1Img.src = "picture/material/Character"+PlayerChoose[0]+"/L/move/" + flag + ".png"
        flag++;
      }
      else if (Jflag == 0 && Pflag == 0 && dirFlag && WPflag == 0 && SPflag == 0) {
        P1Img.src = "picture/material/Character"+PlayerChoose[0]+"/R/" + loadWord[0] + "/" + flag + ".png"
        flag++;
      }
      else if (Jflag == 0 && Pflag == 0 && !dirFlag && WPflag == 0 && SPflag == 0) {
        P1Img.src = "picture/material/Character"+PlayerChoose[0]+"/L/" + loadWord[0] + "/" + flag + ".png"
        flag++;
      }
    }
    //death
    else if(GamePlayMode!=3 && PlayerLiveBar <= 0){
      if (dirFlag) P1Img.src = "picture/material/Character"+PlayerChoose[0]+"/R/" + loadWord[8] + "/" + flag + ".png"
      if (!dirFlag) P1Img.src = "picture/material/Character"+PlayerChoose[0]+"/L/" + loadWord[8] + "/" + flag + ".png"
      flag++;
      if (flag > 5) GameStart = 0;
    }
    else if(GamePlayMode==3 && PlayerLiveBar <= 0){
      if(PlayerLiveBar<=0 && Player2LiveBar<=0) GameStart = 0;
      if (dirFlag) P1Img.src = "picture/material/Character"+PlayerChoose[0]+"/R/" + loadWord[8] + "/5.png"
      if (!dirFlag) P1Img.src = "picture/material/Character"+PlayerChoose[0]+"/L/" + loadWord[8] + "/5.png"
    }
    if (flag > 5) flag = 0;
    timer++;
    if (timer > 5) timer = 0;
  },

  draw: function () {
    ctx.drawImage(SubImg, Player1_x + SupportP1_x, Player1_y, 60, 100);//L
    if(!dirFlag)ctx.drawImage(P1Img, Player1_x-20, Player1_y-20, 100, 100);//drawImage(img, sx, sy, sw, sh, dx, dy, dw, dh)distent
    else ctx.drawImage(P1Img, Player1_x+20, Player1_y-20, 100, 100);
    ctx.strokeText("Player1", 10, 50,);//字, x, y
    ctx.strokeText("HP:", 10, 90,);//字, x, y
    
    if(PlayerLiveBar>=0)document.getElementById("PlayerLiveBar").style.width = PlayerLiveBar.toString()+"px"
    else document.getElementById("PlayerLiveBar").style.display = "none"
  },
  
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

Player2 = {
  upgrade: function () {
    //alive
    if (Player2LiveBar > 0) {
      //jump flag == 0 is on the ground
      if (keystate[Jump2] || Jflag2 != 0) {

        if (Jflag2 >= 6) Player2_y += dPlayre2_y;
        else Player2_y -= dPlayre2_y

        if (dirFlag2) P2Img.src = "picture/material/Character"+PlayerChoose[1]+"/R/jump/" + Jflag2 + ".png"
        if (!dirFlag2) P2Img.src = "picture/material/Character"+PlayerChoose[1]+"/L/jump/" + Jflag2 + ".png"
        if (Jflag2 >= 11) Jflag2 = 0;
        else Jflag2++;

        if (keystate[RightDir2]) {
          dirFlag2 = true;
          Player2_x += dPlayer2_x;
        }
        else if (keystate[LeftDir2]) {
          dirFlag2 = false;
          Player2_x -= dPlayer2_x;
        }
      }


      if (Player2_y == 10) Jflag2 == 0;

      //attack*3
      if ((keystate[punch2] || Pflag2 != 0 || WPflag2 != 0 || SPflag2 != 0)) {
        //攻擊位移
        if (Math.abs(Player2_x - Monster_x) >= 30 && GamePlayMode != 2) {//單人
          if (dirFlag2) Player2_x += 5;
          if (!dirFlag2) Player2_x -= 5;
        }
        if(Math.abs(Player1_x - Player2_x) >= 30 && GamePlayMode == 2){//雙人
          if (dirFlag2) Player2_x += 5;
          if (!dirFlag2) Player2_x -= 5;
        }
        //J+W
        if ((keystate[UpDir2] || WPflag2 != 0) && Pflag2 == 0 && SPflag2 == 0) {
          //攻擊判定
          if (Math.abs(Player2_x - Monster_x) <= 40 && Math.abs(Player2_y - Monster_y) <= 30 && WPflag2 == 2 && GamePlayMode != 2) MosterLiveBar -= 7;
          if (Math.abs(Player2_x - Monster_x) <= 40 && Math.abs(Player2_y - Monster_y) <= 30 && WPflag2 == 4 && GamePlayMode != 2) MosterLiveBar -= 8;

          if (Math.abs(Player1_x - Player2_x) <= 40 && Math.abs(Player1_y - Player2_y) <= 30 && WPflag2 == 2 && GamePlayMode == 2) PlayerLiveBar -= 7;
          if (Math.abs(Player1_x - Player2_x) <= 40 && Math.abs(Player1_y - Player2_y) <= 30 && WPflag2 == 4 && GamePlayMode == 2) PlayerLiveBar -= 8;
          //攻擊圖
          if (dirFlag2) P2Img.src = "picture/material/Character"+PlayerChoose[1]+"/R/attackJW/" + WPflag2 + ".png"
          if (!dirFlag2) P2Img.src = "picture/material/Character"+PlayerChoose[1]+"/L/attackJW/" + WPflag2 + ".png"

          //循環判定
          WPflag2++;
          if (WPflag2 > 5) WPflag2 = 0;
        }
        //J+S
        else if ((keystate[downDir2] || SPflag2 != 0) && WPflag2 == 0 && Pflag2 == 0) {
          //攻擊判定
          if (Math.abs(Player2_x - Monster_x) <= 60 && Math.abs(Player2_y - Monster_y) <= 40 && SPflag2 == 4 && GamePlayMode != 2) MosterLiveBar -= 12;

          if (Math.abs(Player1_x - Player2_x) <= 60 && Math.abs(Player1_y - Player2_y) <= 40 && SPflag2 == 4 && GamePlayMode == 2) PlayerLiveBar -= 12;
          //攻擊圖
          if (dirFlag2) P2Img.src = "picture/material/Character"+PlayerChoose[1]+"/R/attackJS/" + SPflag2 + ".png"
          if (!dirFlag2) P2Img.src = "picture/material/Character"+PlayerChoose[1]+"/L/attackJS/" + SPflag2 + ".png"

          //循環判定
          SPflag2++;
          if (SPflag2 > 5) SPflag2 = 0;
        }
        //J
        else if (WPflag2 == 0 && SPflag2 == 0) {
          //攻擊判定
          if (Math.abs(Player2_x - Monster_x) <= 40 && Math.abs(Player2_y - Monster_y) <= 40 && Pflag2 == 5 && GamePlayMode != 2) MosterLiveBar -= 10;

          if (Math.abs(Player1_x - Player2_x) <= 40 && Math.abs(Player1_y - Player2_y) <= 40 && Pflag2 == 5 && GamePlayMode == 2) PlayerLiveBar -= 10;
          //攻擊圖
          if (dirFlag2) P2Img.src = "picture/material/Character"+PlayerChoose[1]+"/R/attackJ/" + Pflag2 + ".png"
          if (!dirFlag2) P2Img.src = "picture/material/Character"+PlayerChoose[1]+"/L/attackJ/" + Pflag2 + ".png"
          //循環判定
          Pflag2++;
          if (Pflag2 > 5) Pflag2 = 0;
        }
      }

      //shift
      if (keystate[shift2] && (keystate[RightDir2] || keystate[LeftDir2])) {
        if (dirFlag2) {
          Player2_x += dPlayer2_x; SupportP2_x = -20;
          SubImg2.src = "picture/material/Character"+PlayerChoose[1]+"/R/shift/" + timer + ".png"
        }
        if (!dirFlag2) {
          Player2_x -= dPlayer2_x; SupportP2_x = 60;
          SubImg2.src = "picture/material/Character"+PlayerChoose[1]+"/L/shift/" + timer + ".png"
        }
      }
      else {
        SubImg2.src = "picture/material/0.png"
        SupportP2_x = 0;
      }
      //move //direction Flag = true is right，else is false
      if (keystate[RightDir2] && Jflag2 == 0 && Pflag2 == 0 && WPflag2 == 0 && SPflag2 == 0) {
        dirFlag2 = true;
        Player2_x += dPlayer2_x;
        P2Img.src = "picture/material/Character"+PlayerChoose[1]+"/R/move/" + flag2 + ".png"
        flag2++;
      }
      else if (keystate[LeftDir2] && Jflag2 == 0 && Pflag2 == 0 && WPflag2 == 0 && SPflag2 == 0) {
        dirFlag2 = false;
        Player2_x -= dPlayer2_x;
        P2Img.src = "picture/material/Character"+PlayerChoose[1]+"/L/move/" + flag2 + ".png"
        flag2++;
      }
      else if (Jflag2 == 0 && Pflag2 == 0 && dirFlag2 && WPflag2 == 0 && SPflag2 == 0) {
        P2Img.src = "picture/material/Character"+PlayerChoose[1]+"/R/" + loadWord[0] + "/" + flag2 + ".png"
        flag2++;
      }
      else if (Jflag2 == 0 && Pflag2 == 0 && !dirFlag2 && WPflag2 == 0 && SPflag2 == 0) {
        P2Img.src = "picture/material/Character"+PlayerChoose[1]+"/L/" + loadWord[0] + "/" + flag2 + ".png"
        flag2++;
      }
    }
    //death
    else if(GamePlayMode!=3 && Player2LiveBar <= 0){
      if (dirFlag2) P2Img.src = "picture/material/Character"+PlayerChoose[1]+"/R/" + loadWord[8] + "/" + flag2 + ".png"
      if (!dirFlag2) P2Img.src = "picture/material/Character"+PlayerChoose[1]+"/L/" + loadWord[8] + "/" + flag2 + ".png"
      flag2++;
      if (flag2 > 5) GameStart = 0;
    }
    else if(GamePlayMode==3 && Player2LiveBar <= 0){
      if(PlayerLiveBar<=0 && Player2LiveBar<=0) GameStart = 0;
      if (dirFlag2) P2Img.src = "picture/material/Character"+PlayerChoose[1]+"/R/" + loadWord[8] + "/5.png"
      if (!dirFlag2) P2Img.src = "picture/material/Character"+PlayerChoose[1]+"/L/" + loadWord[8] + "/5.png"
    }
    if (flag2 > 5) flag2 = 0;
    timer++;
    if (timer > 5) timer = 0;
  },

  draw: function () {
    ctx.drawImage(SubImg2, Player2_x + SupportP2_x, Player2_y, 60, 100);
    if(dirFlag2)ctx.drawImage(P2Img, Player2_x+20, Player2_y-20, 100, 100);//drawImage(img, sx, sy, sw, sh, dx, dy, dw, dh)distent
    else ctx.drawImage(P2Img, Player2_x-20, Player2_y-20, 100, 100);

    ctx.strokeText("Player2", 250, 50);//字, x, y
    ctx.strokeText("HP:", 250, 90);//字, x, y
    
    if(Player2LiveBar>=0) document.getElementById("Player2LiveBar").style.width = Player2LiveBar.toString()+"px"
    else document.getElementById("Player2LiveBar").style.display = "none"
  },
}


