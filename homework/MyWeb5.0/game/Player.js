let flag = 0, Jflag = 0, Pflag = 0, WPflag = 0, SPflag = 0, timer = 0;

let PlayerBlood = 50;

let dirFlag = true;//左右

Player = {
  upgrade: function () {

    //if(img.width+x>canvas.width && dx>0 && dirFlag) dx = -dx
    //if(x<0 && dx<0 && dirFlag) dx = -dx

    //alive
    if (PlayerBlood > 0) {
      //jump flag == 0 is on the ground
      if (keystate[Jump] || Jflag != 0) {

        if (Jflag >= 6) y += dy;
        else y -= dy

        if (dirFlag) Img.src = "picture/material/R/jump/" + Jflag + ".png"
        if (!dirFlag) Img.src = "picture/material/L/jump/" + Jflag + ".png"
        if (Jflag >= 11) Jflag = 0;
        else Jflag++;

        if (keystate[RightDir]) {
          dirFlag = true;
          x += dx;
        }
        else if (keystate[LeftDir]) {
          dirFlag = false;
          x -= dx;
        }
      }


      if (y == 10) Jflag == 0;

      //attack*3
      if ((keystate[punch] || Pflag != 0 || WPflag != 0 || SPflag != 0)) {
        //攻擊位移
        if (Math.abs(x - Mx) >= 30) {
          if (dirFlag) x += 5;
          if (!dirFlag) x -= 5;
        }
        //J+W
        if ((keystate[UpDir] || WPflag != 0) && Pflag == 0 && SPflag == 0) {
          //攻擊判定
          if (Math.abs(x - Mx) <= 30 && Math.abs(y - My) <= 20 && WPflag == 2) MosterBlood -= 3;
          if (Math.abs(x - Mx) <= 30 && Math.abs(y - My) <= 20 && WPflag == 4) MosterBlood -= 4;
          //攻擊圖
          if (dirFlag) Img.src = "picture/material/R/attackJW/" + WPflag + ".png"
          if (!dirFlag) Img.src = "picture/material/L/attackJW/" + WPflag + ".png"

          //循環判定
          WPflag++;
          if (WPflag > 5) WPflag = 0;
        }
        //J+S
        else if ((keystate[downDir] || SPflag != 0) && WPflag == 0 && Pflag == 0) {
          //攻擊判定
          if (Math.abs(x - Mx) <= 50 && Math.abs(y - My) <= 30 && SPflag == 4) MosterBlood -= 4;
          //攻擊圖
          if (dirFlag) Img.src = "picture/material/R/attackJS/" + SPflag + ".png"
          if (!dirFlag) Img.src = "picture/material/L/attackJS/" + SPflag + ".png"

          //循環判定
          SPflag++;
          if (SPflag > 5) SPflag = 0;
        }
        //J
        else if (WPflag == 0 && SPflag == 0) {
          //攻擊判定
          if (Math.abs(x - Mx) <= 30 && Math.abs(y - My) <= 30 && Pflag == 4) MosterBlood -= 6;
          //攻擊圖
          if (dirFlag) Img.src = "picture/material/R/attackJ/" + Pflag + ".png"
          if (!dirFlag) Img.src = "picture/material/L/attackJ/" + Pflag + ".png"
          //循環判定
          Pflag++;
          if (Pflag > 5) Pflag = 0;
        }
      }

      //shift
      if (keystate[shift] && (keystate[RightDir] || keystate[LeftDir])) {
        if (dirFlag) {
          x += dx; Sx = -20;
          SubImg.src = "picture/material/R/shift/" + timer + ".png"
        }
        if (!dirFlag) {
          x -= dx; Sx = 20;
          SubImg.src = "picture/material/L/shift/" + timer + ".png"
        }
      }
      else {
        SubImg.src = "picture/material/0.png"
        Sx = 0;
      }
      //move //direction Flag = true is right，else is false
      if (keystate[RightDir] && Jflag == 0 && Pflag == 0 && WPflag == 0 && SPflag == 0) {
        dirFlag = true;
        x += dx;
        Img.src = "picture/material/R/move/" + flag + ".png"
        flag++;
      }
      else if (keystate[LeftDir] && Jflag == 0 && Pflag == 0 && WPflag == 0 && SPflag == 0) {
        dirFlag = false;
        x -= dx;
        Img.src = "picture/material/L/move/" + flag + ".png"
        flag++;
      }
      else if (Jflag == 0 && Pflag == 0 && dirFlag && WPflag == 0 && SPflag == 0) {
        Img.src = "picture/material/R/" + loadWord[0] + "/" + flag + ".png"
        flag++;
      }
      else if (Jflag == 0 && Pflag == 0 && !dirFlag && WPflag == 0 && SPflag == 0) {
        Img.src = "picture/material/L/" + loadWord[0] + "/" + flag + ".png"
        flag++;
      }
    }
    //death
    else {
      if (dirFlag) Img.src = "picture/material/R/" + loadWord[8] + "/" + flag + ".png"
      if (!dirFlag) Img.src = "picture/material/L/" + loadWord[8] + "/" + flag + ".png"
      flag++;
      if (flag > 5) GameStart = 0;
    }
    if (flag > 5) flag = 0;
    timer++;
    if (timer > 5) timer = 0;
  },

  draw: function () {
    ctx.drawImage(SubImg, x + Sx, y, 60, 100);
    ctx.drawImage(Img, x, y, 60, 100);//drawImage(img, sx, sy, sw, sh, dx, dy, dw, dh)distent
    ctx.fillText("Player1", 10, 50,);//字, x, y
    ctx.fillText("HP:", 10, 90,);//字, x, y
    ctx.fillText(PlayerBlood, 80, 90,);
  },
}

