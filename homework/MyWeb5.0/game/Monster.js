let MonsterFlag = 0; MonsterTimer = 0;

let MonsterBlood = 30;

let MonsterDir = true, MonsterAttack = false;

Monster = {
    upgrade: function(){
        MonsterFlag++;

        //alive
        if(MonsterBlood>0)
        {
            //attack
            if(Math.abs(x-Mx) <= 40 && Math.abs(y-My) <= 30 && !MonsterAttack) 
            {
                MonsterFlag = 0;
                MonsterAttack = true;
            }

            if(MonsterAttack && Mx < x) 
            {
                //攻擊圖
                MonsterImg.src = "picture/material/monster/snake/R/attack/"+MonsterFlag+".png";
                //攻擊判定
                if(Math.abs(x-Mx) <= 40 && Math.abs(y-My) <= 30 && MonsterFlag == 7) PlayerBlood -= 6
            }
            else if(MonsterAttack && Mx >= x) 
            {
                //攻擊圖
                MonsterImg.src = "picture/material/monster/snake/L/attack/"+MonsterFlag+".png";
                //攻擊判定
                if(Math.abs(x-Mx) <= 40 && Math.abs(y-My) <= 30 && MonsterFlag == 7) PlayerBlood -= 6;
            }
            //walk
            else if(MonsterDir && !MonsterAttack) //右邊
            {
                if(MonsterTimer==0) MonsterImg.src = "picture/material/monster/snake/R/idle/"+MonsterFlag+".png";
                else
                {
                    Mx += dMx;
                    MonsterImg.src = "picture/material/monster/snake/R/walk/"+MonsterFlag+".png";
                }
            }
                
            else if(!MonsterDir && !MonsterAttack) //左邊
            {
                if(MonsterTimer==0) MonsterImg.src = "picture/material/monster/snake/L/idle/"+MonsterFlag+".png";
                else
                {
                    Mx -= dMx;
                    MonsterImg.src = "picture/material/monster/snake/L/walk/"+MonsterFlag+".png";
                } 

            }
        }
        //death
        else
        {
            if(MonsterDir) MonsterImg.src = "picture/material/monster/snake/R/death/"+MonsterFlag+".png";
            if(!MonsterDir) MonsterImg.src = "picture/material/monster/snake/L/death/"+MonsterFlag+".png";
            if(MonsterFlag==9) MonsterStart=1;
        }

        //判斷
        if(MonsterFlag>=9)
        {
            if(MonsterTimer == 3)
            {
                MonsterTimer = 0;
                MonsterDir = !MonsterDir;
            }
            else MonsterTimer++;
            MonsterAttack = false;
            MonsterFlag = 0;
        }
    },

    draw: function(){
        ctx.drawImage(MonsterImg, Mx, My, 60, 60);
        ctx.fillText("snake", 660, 50, );//字, x, y
        ctx.fillText("HP:", 660, 90, );//字, x, y
        ctx.fillText(MonsterBlood, 730, 90, );
    },
}