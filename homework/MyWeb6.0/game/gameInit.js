var x = 10, y = 430, dx = 20, dy = 30, Sx = 0, Sy = 0;//玩家位置和速度
var Mx = 300, My = 450, dMx = 5, dMy = 30//怪物位置和速度
var RightDir = "KeyD", LeftDir = "KeyA", UpDir = "KeyW", downDir = "KeyS", Jump = "KeyK", shift = "KeyL", punch = "KeyJ", keystate = [];//wasd, jkl
var GameStart = 1, MonsterStart = 0;//GameStart=0 is gameOver, MonsterStart = 0 is snake

var loadWord = ['idle', 'move', 'jump', 'shift', 'attackJ', 'attackJS', 'attackJW', 'jump', 'death'];
var loadWordM = ['idle', 'walk', 'gesture', 'attack', 'death'];
//矩陣填到矩陣裡
let preloadImage = [];
let preloadImagesR = Array(9).fill().map(() => Array(6));//m列n行Array(m).fill().map(() => Array(n))
let preloadImagesL = Array(9).fill().map(() => Array(6));//m列n行
let preloadSnakeImgsR = Array(5).fill().map(() => Array(10));
let preloadSnakeImgsL = Array(5).fill().map(() => Array(10));
let preloadBossImgs = Array(5).fill().map(() => Array(8));

var fps, fpsInterval, startTime, timestamp = Date.now(), preTimestamp, progress;

let init = 0;//當1時就不進行遊戲

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function preload() {
    //preload img

    //
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

function upgrade() {
    if (MonsterStart == 0) Monster.SnakeUpgrade();
    if (MonsterStart == 1) Monster.BossUpgrade();
    Player.upgrade();
    Backgroumd.upgrade();
}

function draw() {
    preload();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.font = "30px Verdana";//設定字大小
    Backgroumd.draw();
    Player.draw();
    if (MonsterStart == 0) Monster.SnakeDraw();
    if (MonsterStart == 1) Monster.BossDraw();
}

// initialize the timer variables and start the animation

function startAnimating(fps) {
    fpsInterval = 1000 / fps;
    preTimestamp = Date.now();
    startTime = preTimestamp;
}

function MainGame() {
    document.getElementById("GameInitOption").style.display = "none";
    startAnimating(12);//設置fps
    if (init == 1) return;
    
    document.addEventListener("keydown", function (event) {//這裡的evt是接收玩家的鍵盤事件
        keystate[event.code] = true//鍵盤按下
    }, true);
    document.addEventListener("keyup", function (event) {
        keystate[event.code] = false;//放開取消事件，避免短期按太多按件
    }, true);

    var loop = function () {
        timestamp = Date.now();//調整速率
        progress = timestamp - preTimestamp;

        if (progress > fpsInterval) {
            startAnimating(12);
            if (MonsterStart == 2) {
                backImg.src = "picture/material/background/58.png";//win
                ctx.drawImage(backImg, 0, 0, canvas.width, canvas.height);
                document.getElementById("GameInitOption").style.display = "block";
                document.getElementById("GameInitOption").src = "picture/material/background/56.png";
            }
            else if (GameStart == 1)//Game ing
            {
                upgrade();
                draw();
            }
            else {
                backImg.src = "picture/material/background/57.png";//death
                ctx.drawImage(backImg, 0, 0, canvas.width, canvas.height);
                ctx.drawImage(Img, x, y, 60, 100);
                document.getElementById("GameInitOption").style.display = "block";
                document.getElementById("GameInitOption").src = "picture/material/background/56.png";
            }
        }
        window.requestAnimationFrame(loop, canvas);
    }
    window.requestAnimationFrame(loop, canvas);
}

function GameInit() {
    PlayerBlood = 50; MosterBlood = 10;
    x = 10, y = 430;
    Mx = 300, My = 450, dMx = 5, dMy = 30//怪物位置和速度
    GameStart = 1, MonsterStart = 0;

    preload();
    SubImg = document.getElementById("SubPicture");
    Img = document.getElementById("picture");
    backImg = document.getElementById("background");
    MonsterImg = document.getElementById("monster");
    MonsterAttcakImg = document.getElementById("monsterAttack");
    canvas = document.getElementById("MyCanvas");
    ctx = canvas.getContext("2d");
    backImg = document.getElementById("background");
    ctx.drawImage(backImg, 0, 0, canvas.width, canvas.height);
}