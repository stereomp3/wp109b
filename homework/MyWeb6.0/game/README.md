## 技術手段

1. 遊戲fps控制 <br>
   * 說明: 這裡使用window.requestAnimationFrame製作動畫，但是速度無法控制，所以就自訂函數startAnimating(fps)，首先，讀入fpsInterval(想要的禎數)， **preTimestap(紀錄時間)** ，再通過window.requestAnimationFrame(loop, canvas);呼叫loop，這時， **preTimestap(紀錄時間)** 會不動，但 **timestamp(紀錄目前時間)** 會因為在loop裡，而一直增加，最後，用progress計算時間差，時間差要大於想要的禎數才會進入主遊戲動畫，這樣就完成fps控制了。

```
function startAnimating(fps) {
    fpsInterval = 1000 / fps;
    preTimestamp = Date.now();
    startTime = preTimestamp;
}

function MainGame() {
    startAnimating(12);//設置fps
    var loop = function () {
        timestamp = Date.now();//調整速率
        progress = timestamp - preTimestamp;

        if (progress > fpsInterval) {
            startAnimating(12);
            //game
        }
        window.requestAnimationFrame(loop, canvas);
    }
    window.requestAnimationFrame(loop, canvas);
}
```
2. 角色利用keycode控制 <br>
說明: 在遊戲一開始時，加入整個文件(網頁)的事件，再利用自訂矩陣keystate[event.code]存取每個按鍵的布林值，在角色控制時，利用if(keystate[LeftDir])判斷按鍵，向這個就是按下A鍵(遊戲中人物向左) <br>

```
var RightDir = "KeyD", LeftDir = "KeyA", UpDir = "KeyW", downDir = "KeyS", Jump = "KeyK", shift = "KeyL", punch = "KeyJ", keystate = [];//wasd, jkl

function MainGame() {   
    document.addEventListener("keydown", function (event) {//這裡的evt是接收玩家的鍵盤事件
        keystate[event.code] = true//鍵盤按下
    }, true);
    document.addEventListener("keyup", function (event) {
        keystate[event.code] = false;//放開取消事件，避免短期按太多按件
    }, true);
}
```

3. 角色和怪物模組化，分開呼叫 <br>
   * 角色說明: 裡面主要是用flag去判斷是要放哪張角色圖片，如果是攻擊就是Pflag++，如果是一般情況就是flag++，如果是跳就是Jflag++，dirFlag主要是定方向，if(dirFlag)就是方向為右。玩家和怪物的攻擊判定是用Math.abs(x - Mx)絕對值去做判斷，所以有時候圖片明明沒打到還是有傷害，頭疼。 <br>

```
let flag = 0, Jflag = 0, Pflag = 0, WPflag = 0, SPflag = 0, timer = 0;
let PlayerBlood = 50;
let dirFlag = true;//左右

Player = {
  upgrade: function () {
        //....程式碼又多又醜，有興趣看下面的source
  },

  draw: function () {
    ctx.drawImage(SubImg, x + Sx, y, 60, 100);
    ctx.drawImage(Img, x, y, 60, 100);//drawImage(img, sx, sy, sw, sh, dx, dy, dw, dh)distent
    ctx.fillText("Player1", 10, 50,);//字, x, y
    ctx.fillText("HP:", 10, 90,);//字, x, y
    ctx.fillText(PlayerBlood, 80, 90,);
  },
}
```

   * 怪物說明: 怪物基本上跟玩家差不多，只不過是把它設成ai，讓子彈追蹤玩家，讓怪獸徘徊，讓子彈反彈，但程式碼很長，有興趣可以看最下面的source。 <br>

```
let MonsterFlag = 0; MonsterTimer = 0;

let MosterBlood = 30;
let MonsterDir = true, MonsterAttack = false;

let MonsterAttackX = [600, 600, 560, 660, 600, 600, 600, 560, 660, 600]
let MonsterAttackY = [250, 300, 250, 250, 300, 250, 300, 250, 250, 300]

let Mdx = [10, 5, -8, 3, -10, -10, -5, 8, -3, 10]
let Mdy = [10, 5, -8, -3, 10, -10, -5, 8, 3, -10]
Monster = {
    SnakeUpgrade: function () {
        MonsterFlag++;
        //...
    },

    SnakeDraw: function () {
        ctx.drawImage(MonsterImg, Mx, My, 60, 60);
        ctx.fillText("snake", 660, 50,);//字, x, y
        ctx.fillText("HP:", 660, 90,);//字, x, y
        ctx.fillText(MosterBlood, 730, 90,);
    },

    BossUpgrade: function () {
        Mx = 700, My = 300//boss location
        MonsterFlag++;
        //...
    },

    BossDraw: function () {
        ctx.drawImage(MonsterImg, Mx, My, 87, 110);
        //...
        ctx.fillText("Boss", 660, 50,);//字, x, y
        ctx.fillText("HP:", 660, 90,);//字, x, y
        ctx.fillText(MosterBlood, 730, 90,);
    },
}
```

   * 背景說明: 判定人物碰到canvas的邊界會讓BackImgFlag++或--，而改變背景。 <br>

```
var BackImgFlag = 0;

Backgroumd = {
    upgrade: function () {
        if (MonsterStart == 0) {
            BackImgFlag == 0;
        }
        else {
            if (x < 100 && BackImgFlag > 0) {
                x = 100;
                BackImgFlag--;
            }
            if (x > 600 && BackImgFlag < 53) {
                x = 600;
                BackImgFlag++;
            }
        }
        if (x <= 0) x = 0;
        if (x >= canvas.width - 0.5 * Img.width) x = canvas.width - 0.5 * Img.width;
        if (y < 0) y = 10;
        if (y > canvas.height - 0.5 * Img.height) y = canvas.height - 0.5 * Img.height;
        backImg.src = "picture/material/background/" + BackImgFlag + ".png";
    },
    draw: function () {
        ctx.drawImage(backImg, 0, 0, canvas.width, canvas.height);
    }
}
```

   * source: [角色](https://github.com/stereomp3/wp109b/blob/main/homework/MyWeb6.0/game/Player.js)， [怪物](https://github.com/stereomp3/wp109b/blob/main/homework/MyWeb6.0/game/Monster.js)， [背景](https://github.com/stereomp3/wp109b/blob/main/homework/MyWeb6.0/game/Background.js)

4. 利用canvas畫出圖片 <br>
   * 說明: 如下方表示

```
var canvas, Pcanvas, ctx, Pctx, Img, SubImg, backImg, MonsterImg, MonsterAttcakImg;

function GameInit() {
    //...
    SubImg = document.getElementById("SubPicture"); //取得人物特效(L)
    Img = document.getElementById("picture"); //取得人物
    backImg = document.getElementById("background"); //取得背景
    MonsterImg = document.getElementById("monster"); //取得怪物圖片
    MonsterAttcakImg = document.getElementById("monsterAttack"); //取得攻擊物件
    canvas = document.getElementById("MyCanvas"); //取得canvas
    ctx = canvas.getContext("2d"); //宣告繪畫2d
    ctx.drawImage(backImg, 0, 0, canvas.width, canvas.height); //背景畫滿整個canvas 
}

function draw() {
    preload();
    ctx.clearRect(0, 0, canvas.width, canvas.height); // 畫前先清空畫板
    ctx.font = "30px Verdana"; //設定字大小
    
    //呼叫3.裡面的物件
    Backgroumd.draw(); 
    Player.draw(); 
    if (MonsterStart == 0) Monster.SnakeDraw(); //畫怪物
    if (MonsterStart == 1) Monster.BossDraw();
}
```

5. 在canvas上面加入HTML元素 <br>
   * 說明: 利用style裡面的z-index，把要放在canvas上的html元素z-index設大一點，再用margin控制它的位置。

```
這是在canvas上面的button
#GameInitOption{
    width: 30%;
    height: auto;
    position: absolute; 
    z-index: 2; 
    cursor: pointer;
    margin-top: 140px;
    margin-left: 15%;
}
```
6. 遊戲預載入圖片 <br>
   * 說明: 如果圖片沒有載入，會導致螢幕閃爍，這裡用很多矩陣去存取所有的圖片，並讓他們保持讀取狀態

```
let preloadImage = [];
let preloadImagesR = Array(9).fill().map(() => Array(6));//m列n行Array(m).fill().map(() => Array(n))
let preloadImagesL = Array(9).fill().map(() => Array(6));//m列n行
let preloadSnakeImgsR = Array(5).fill().map(() => Array(10));
let preloadSnakeImgsL = Array(5).fill().map(() => Array(10));
let preloadBossImgs = Array(5).fill().map(() => Array(8));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function preload() {
    //preload img
    //character
    for (i = 0; i < 9; i++) {
        if (i == 7)//jump有兩次
        {
            for (a = 6; a < 12; a++) {
                preloadImagesR[i][a] = new Image();
                preloadImagesL[i][a] = new Image();
                preloadImagesR[i][a].src = "picture/material/R/" + loadWord[i] + "/" + a + ".png";
                preloadImagesL[i][a].src = "picture/material/L/" + loadWord[i] + "/" + a + ".png";
            }
        }
        else {
            for (a = 0; a < 6; a++) {
                preloadImagesR[i][a] = new Image();
                preloadImagesL[i][a] = new Image();
                preloadImagesR[i][a].src = "picture/material/R/" + loadWord[i] + "/" + a + ".png";
                preloadImagesL[i][a].src = "picture/material/L/" + loadWord[i] + "/" + a + ".png";
            }
        }
    }

    //background
    for (i = 0; i < 59; i++) {
        preloadImage[i] = new Image();
        preloadImage[i].src = "picture/material/background/" + i + ".png";
    }

    //monster 
    //snake
    for (i = 0; i < 5; i++) {
        for (a = 0; a < 10; a++) {
            preloadSnakeImgsR[i][a] = new Image();
            preloadSnakeImgsL[i][a] = new Image();
            preloadSnakeImgsR[i][a].src = "picture/material/monster/snake/R/" + loadWordM[i] + "/" + a + ".png";
            preloadSnakeImgsL[i][a].src = "picture/material/monster/snake/L/" + loadWordM[i] + "/" + a + ".png";
        }
    }
    //boss
    for (i = 0; i < 5; i++) {
        for (a = 0; a < 8; a++) {
            preloadBossImgs[i][a] = new Image();
            preloadBossImgs[i][a].src = "picture/material/monster/boss/" + loadWordM[i] + "/" + a + ".png";
        }
    }
}
```
