let MonsterFlag = 0; MonsterTimer = 0;

var MosterLiveBar = 80, MLiveBarRegister = 50;//use in mode2
let MonsterDir = true, MonsterAttack = false;

let PLiveBarRegister = 100; P2LiveBarRegister = 100//製作受擊特效

let MonsterAttackX = [600, 600, 560, 660, 600, 600, 600, 560, 660, 600, 520, 480, 420, 520, 480, 420, 520, 480, 420, 100]
let MonsterAttackY = [250, 300, 250, 250, 300, 250, 300, 250, 250, 300, 250, 300, 350, 350, 250, 300, 300, 350, 250, 100]
const BossBullet1 = 3, BossBullet2 = 20; //max=20


let Mdx = [10, 5, -8, 3, -10, -10, -5, 8, -3, 10, 10, 5, -8, -3, 10, -10, -5, 8, 3, 20]
let Mdy = [10, 5, -8, -3, 10, -10, -5, 8, 3, -10, 10, 5, -8, -3, 10, -10, -5, 8, 3, 20]
Monster = {
    SnakeUpgrade: function () {
        MonsterFlag++;
        //alive
        if (MosterLiveBar > 0) {
            //attack p1
            if (Math.abs(Player1_x - Monster_x) <= 40 && Math.abs(Player1_y - Monster_y) <= 30 && !MonsterAttack && PlayerLiveBar>0) {
                MonsterFlag = 0;
                MonsterAttack = true;
            }

            if (MonsterAttack && Monster_x < Player1_x && PlayerLiveBar>0) {
                //攻擊圖
                MonsterImg.src = "picture/material/monster/snake/R/attack/" + MonsterFlag + ".png";
                //攻擊判定
                if (Math.abs(Player1_x - Monster_x) <= 40 && Math.abs(Player1_y - Monster_y) <= 30 && MonsterFlag == 7) PlayerLiveBar -= 12
            }
            else if (MonsterAttack && Monster_x >= Player1_x && PlayerLiveBar>0) {
                //攻擊圖
                MonsterImg.src = "picture/material/monster/snake/L/attack/" + MonsterFlag + ".png";
                //攻擊判定
                if (Math.abs(Player1_x - Monster_x) <= 40 && Math.abs(Player1_y - Monster_y) <= 30 && MonsterFlag == 7) PlayerLiveBar -= 12;
            }
            //attack p2
            if (Math.abs(Player2_x - Monster_x) <= 40 && Math.abs(Player2_y - Monster_y) <= 30 && !MonsterAttack && GamePlayMode == 3 && Player2LiveBar>0) {
                MonsterFlag = 0;
                MonsterAttack = true;
            }

            if (MonsterAttack && Monster_x < Player2_x && GamePlayMode == 3 && Player2LiveBar>0) {
                //攻擊圖
                MonsterImg.src = "picture/material/monster/snake/R/attack/" + MonsterFlag + ".png";
                //攻擊判定
                if (Math.abs(Player2_x - Monster_x) <= 40 && Math.abs(Player2_y - Monster_y) <= 30 && MonsterFlag == 7) Player2LiveBar -= 12
            }
            else if (MonsterAttack && Monster_x >= Player1_x && GamePlayMode == 3 && Player2LiveBar>0) {
                //攻擊圖
                MonsterImg.src = "picture/material/monster/snake/L/attack/" + MonsterFlag + ".png";
                //攻擊判定
                if (Math.abs(Player2_x - Monster_x) <= 40 && Math.abs(Player2_y - Monster_y) <= 30 && MonsterFlag == 7) Player2LiveBar -= 12;
            }
            //walk
            else if (MonsterDir && !MonsterAttack) //右邊
            {
                if (MonsterTimer == 0) MonsterImg.src = "picture/material/monster/snake/R/idle/" + MonsterFlag + ".png";
                else {
                    Monster_x += dMonster_x;
                    MonsterImg.src = "picture/material/monster/snake/R/walk/" + MonsterFlag + ".png";
                }
            }

            else if (!MonsterDir && !MonsterAttack) //左邊
            {
                if (MonsterTimer == 0) MonsterImg.src = "picture/material/monster/snake/L/idle/" + MonsterFlag + ".png";
                else {
                    Monster_x -= dMonster_x;
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
                MosterLiveBar = 180;
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
        ctx.drawImage(MonsterImg, Monster_x+20, Monster_y, 60, 60);
        ctx.strokeText("snake", 550, 50,);//字, x, y
        ctx.strokeText("HP:", 550, 90,);//字, x, y

        PIsHurt()

        if (MosterLiveBar >= 0) document.getElementById('MonsterLiveBar').style.width = MosterLiveBar.toString() + "px"
    },

    BossUpgrade: function () {

        MonsterFlag++;

        //alive
        //mode1
        if (MosterLiveBar > 50 && PlayerLiveBar>0) {
            Monster_x = 700, Monster_y = 300//boss location
            MonsterImg.src = "picture/material/monster/boss/idle/" + MonsterFlag + ".png";
            //attack
            MonsterAttcakImg.src = "picture/material/monster/boss/attack/" + MonsterFlag + ".png";
            for (let v = 0; v < BossBullet1; v++) {
                if (MonsterAttackX[v] - 20 < Player1_x) MonsterAttackX[v] += 3 + 3 * v;
                if (MonsterAttackX[v] - 20 >= Player1_x) MonsterAttackX[v] -= 3 + 3 * v;
                if (MonsterAttackY[v] - 40 < Player1_y) MonsterAttackY[v] += 3 + 3 * v;
                if (MonsterAttackY[v] - 40 >= Player1_y) MonsterAttackY[v] -= 3 + 3 * v;
                //玩家扣血
                if (Math.abs(Player1_x - MonsterAttackX[v]+20) <= 32 && Math.abs(Player1_y - MonsterAttackY[v] + 40) <= 32) {
                    PlayerLiveBar -= 1;
                }
                if (Math.abs(Player2_x - MonsterAttackX[v]+20) <= 32 && Math.abs(Player2_y - MonsterAttackY[v] + 40) <= 32 && GamePlayMode == 3) {
                    PlayerLiveBar -= 1;
                }

            }
        }
        else if (MosterLiveBar > 50 && Player2LiveBar>0) {
            Monster_x = 700, Monster_y = 300//boss location
            MonsterImg.src = "picture/material/monster/boss/idle/" + MonsterFlag + ".png";
            MonsterAttcakImg.src = "picture/material/monster/boss/attack/" + MonsterFlag + ".png";
            for (let v = 0; v < BossBullet1; v++) {
                if (MonsterAttackX[v] - 20 < Player2_x) MonsterAttackX[v] += 3 + 3 * v;
                if (MonsterAttackX[v] - 20 >= Player2_x) MonsterAttackX[v] -= 3 + 3 * v;
                if (MonsterAttackY[v] - 40 < Player2_y) MonsterAttackY[v] += 3 + 3 * v;
                if (MonsterAttackY[v] - 40 >= Player2_y) MonsterAttackY[v] -= 3 + 3 * v;
                //玩家扣血
                if (Math.abs(Player1_x - MonsterAttackX[v] + 20) <= 32 && Math.abs(Player1_y - MonsterAttackY[v] + 40) <= 32) {
                    Player2LiveBar -= 1;
                }
                if (Math.abs(Player2_x - MonsterAttackX[v] + 20) <= 32 && Math.abs(Player2_y - MonsterAttackY[v] + 40) <= 32 && GamePlayMode == 3) {
                    Player2LiveBar -= 1;
                }

            }
        }
        //mode2
        else if (MosterLiveBar <= 50 && MosterLiveBar > 0) {
            //被打到順移
            if (MosterLiveBar != MLiveBarRegister) {
                Monster_x = getRandomArbitrary(110, 700), Monster_y = getRandomArbitrary(400, 300)
                MLiveBarRegister = MosterLiveBar
            }
            MonsterImg.src = "picture/material/monster/boss/walk/" + MonsterFlag + ".png";
            //attack     
            MonsterAttcakImg.src = "picture/material/monster/boss/gesture/" + MonsterFlag + ".png";

            for (let i = 0; i < BossBullet2; i++) {
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
            //玩家扣血
            for (let z = 0; z < BossBullet2; z++) {
                if (Math.abs(Player1_x - MonsterAttackX[z] + 20) <= 26 && Math.abs(Player1_y - MonsterAttackY[z] + 20) <= 52) {
                    PlayerLiveBar -= 2;
                }
                if (Math.abs(Player2_x - MonsterAttackX[z] + 20) <= 26 && Math.abs(Player2_y - MonsterAttackY[z] + 20) <= 52 && GamePlayMode == 3) {
                    Player2LiveBar -= 2;
                }
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
        ctx.drawImage(MonsterImg, Monster_x, Monster_y - 20, 87, 110);//boss位置

        if (MosterLiveBar > 50) {
            for (let v = 0; v < BossBullet1; v++) {
                ctx.drawImage(MonsterAttcakImg, MonsterAttackX[v]+20, MonsterAttackY[v], 32, 32);
            }
        }

        else if (MosterLiveBar <= 50 && MosterLiveBar > 0) {
            for (let i = 0; i < BossBullet2; i++) {
                ctx.drawImage(MonsterAttcakImg, MonsterAttackX[i]+20, MonsterAttackY[i], 26, 26);
            }
        }
        ctx.strokeText("Boss", 550, 50);//字, x, y
        ctx.strokeText("HP:", 550, 90);//字, x, y

        PIsHurt()

        if (MosterLiveBar >= 0) document.getElementById('MonsterLiveBar').style.width = MosterLiveBar.toString() + "px"
        else document.getElementById('MonsterLiveBar').style.display = "none"
    },
}

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

function PIsHurt() {//玩家被打到紅屏
    if (PlayerLiveBar != PLiveBarRegister || Player2LiveBar != P2LiveBarRegister) {
        ctx.fillStyle = "rgba(255,0,0,0.3)"//最後一個是透明度
        ctx.fillRect(0, 0, canvas.width, canvas.height)
        PLiveBarRegister = PlayerLiveBar
        P2LiveBarRegister = Player2LiveBar
    }
    else {
        ctx.fillStyle = "rgba(255,0,0,0)"
        ctx.fillRect(0, 0, canvas.width, canvas.height)
    }
}