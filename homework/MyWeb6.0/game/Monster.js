let MonsterFlag = 0; MonsterTimer = 0;

let MosterBlood = 30;
let MonsterDir = true, MonsterAttack = false;

let MonsterAttackX = [600, 600, 560, 660, 600, 600, 600, 560, 660, 600, 520, 480, 420, 520, 480, 420, 520, 480, 420, 100]
let MonsterAttackY = [250, 300, 250, 250, 300, 250, 300, 250, 250, 300, 250, 300, 350, 350, 250, 300, 300, 350, 250, 100]

let Mdx = [10, 5, -8, 3, -10, -10, -5, 8, -3, 10, 10, 5, -8, -3, 10, -10, -5, 8, 3, 20]
let Mdy = [10, 5, -8, -3, 10, -10, -5, 8, 3, -10, 10, 5, -8, -3, 10, -10, -5, 8, 3, 20]
Monster = {
    SnakeUpgrade: function () {
        MonsterFlag++;

        //alive
        if (MosterBlood > 0) {
            //attack
            if (Math.abs(x - Mx) <= 40 && Math.abs(y - My) <= 30 && !MonsterAttack) {
                MonsterFlag = 0;
                MonsterAttack = true;
            }

            if (MonsterAttack && Mx < x) {
                //攻擊圖
                MonsterImg.src = "picture/material/monster/snake/R/attack/" + MonsterFlag + ".png";
                //攻擊判定
                if (Math.abs(x - Mx) <= 40 && Math.abs(y - My) <= 30 && MonsterFlag == 7) PlayerBlood -= 6
            }
            else if (MonsterAttack && Mx >= x) {
                //攻擊圖
                MonsterImg.src = "picture/material/monster/snake/L/attack/" + MonsterFlag + ".png";
                //攻擊判定
                if (Math.abs(x - Mx) <= 40 && Math.abs(y - My) <= 30 && MonsterFlag == 7) PlayerBlood -= 6;
            }
            //walk
            else if (MonsterDir && !MonsterAttack) //右邊
            {
                if (MonsterTimer == 0) MonsterImg.src = "picture/material/monster/snake/R/idle/" + MonsterFlag + ".png";
                else {
                    Mx += dMx;
                    MonsterImg.src = "picture/material/monster/snake/R/walk/" + MonsterFlag + ".png";
                }
            }

            else if (!MonsterDir && !MonsterAttack) //左邊
            {
                if (MonsterTimer == 0) MonsterImg.src = "picture/material/monster/snake/L/idle/" + MonsterFlag + ".png";
                else {
                    Mx -= dMx;
                    MonsterImg.src = "picture/material/monster/snake/L/walk/" + MonsterFlag + ".png";
                }

            }
        }
        //death
        else {
            if (MonsterDir) MonsterImg.src = "picture/material/monster/snake/R/death/" + MonsterFlag + ".png";
            if (!MonsterDir) MonsterImg.src = "picture/material/monster/snake/L/death/" + MonsterFlag + ".png";
            if (MonsterFlag == 9) {
                MonsterStart = 1;
                MosterBlood = 50;
            }
        }

        //判斷
        if (MonsterFlag >= 9) {
            if (MonsterTimer == 3) {
                MonsterTimer = 0;
                MonsterDir = !MonsterDir;
            }
            else MonsterTimer++;
            MonsterAttack = false;
            MonsterFlag = 0;
        }
    },

    SnakeDraw: function () {
        ctx.drawImage(MonsterImg, Mx, My, 60, 60);
        ctx.fillText("snake", 660, 50,);//字, x, y
        ctx.fillText("HP:", 660, 90,);//字, x, y
        ctx.fillText(MosterBlood, 730, 90,);
    },

    BossUpgrade: function () {

        MonsterFlag++;

        //alive
        //mode1
        if (MosterBlood > 20) {
            Mx = 700, My = 300//boss location
            MonsterImg.src = "picture/material/monster/boss/idle/" + MonsterFlag + ".png";
            //attack
            MonsterAttcakImg.src = "picture/material/monster/boss/attack/" + MonsterFlag + ".png";
            for (let v = 0; v < 3; v++) {
                if (MonsterAttackX[v] - 20 < x) MonsterAttackX[v] += 3 + 3 * v;
                if (MonsterAttackX[v] - 20 >= x) MonsterAttackX[v] -= 3 + 3 * v;
                if (MonsterAttackY[v] - 40 < y) MonsterAttackY[v] += 3 + 3 * v;
                if (MonsterAttackY[v] - 40 >= y) MonsterAttackY[v] -= 3 + 3 * v;
                if (Math.abs(x - MonsterAttackX[v] + 20) <= 32 && Math.abs(y - MonsterAttackY[v] + 40) <= 32) PlayerBlood -= 1;
            }
        }
        //mode2
        else if (MosterBlood <= 20 && MosterBlood > 0) {
            if (Math.abs(x - Mx) <= 30 && Math.abs(y - My) <= 20 && (WPflag == 5 || SPflag == 5 || Pflag == 5)) {
                Mx = getRandomArbitrary(0, 700), My = getRandomArbitrary(400, 300)
            }
            MonsterImg.src = "picture/material/monster/boss/walk/" + MonsterFlag + ".png";
            //attack     
            MonsterAttcakImg.src = "picture/material/monster/boss/gesture/" + MonsterFlag + ".png";

            for (let i = 0; i < 20; i++) {
                MonsterAttackX[i] += Mdx[i]; MonsterAttackY[i] += Mdy[i];
                if (MonsterAttackX[i] < 0 && Mdx[i] < 0)//撞到左邊的牆且速度(S*X)向左
                    Mdx[i] = -1 * Mdx[i];//變向
                else if (MonsterAttackX[i] + MonsterAttcakImg.width >= canvas.width && Mdx[i] > 0)//撞到右邊的牆且速度(S*X)向右
                    Mdx[i] = -1 * Mdx[i];
                if (MonsterAttackY[i] < 0 && Mdy[i] < 0)//撞到上面的牆且速度(S*X)向上
                    Mdy[i] = -1 * Mdy[i];
                else if (MonsterAttackY[i] + MonsterAttcakImg.height >= canvas.height && Mdy[i] > 0)//撞到下面的牆且速度(S*X)向下
                    Mdy[i] = -1 * Mdy[i];
            }

            for (let z = 0; z < 20; z++) {
                if (Math.abs(x - MonsterAttackX[z] + 20) <= 26 && Math.abs(y - MonsterAttackY[z] + 20) <= 52) PlayerBlood -= 2;
            }
        }
        //death
        else {
            MonsterImg.src = "picture/material/monster/boss/death/" + MonsterFlag + ".png";
            if (MonsterFlag == 7) MonsterStart = 2;
        }
        //判斷
        if (MonsterFlag >= 7) {
            MonsterAttack = false;
            MonsterFlag = 0;
        }
    },

    BossDraw: function () {
        ctx.drawImage(MonsterImg, Mx, My, 87, 110);

        if (MosterBlood > 20) {
            for (let v = 0; v < 3; v++) {
                ctx.drawImage(MonsterAttcakImg, MonsterAttackX[v], MonsterAttackY[v], 32, 32);
            }
        }

        else if (MosterBlood <= 20 && MosterBlood > 0) {
            for (let i = 0; i < 20; i++) {
                ctx.drawImage(MonsterAttcakImg, MonsterAttackX[i], MonsterAttackY[i], 26, 26);
            }
        }
        ctx.fillText("Boss", 660, 50,);//字, x, y
        ctx.fillText("HP:", 660, 90,);//字, x, y
        ctx.fillText(MosterBlood, 730, 90,);
    },
}

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}