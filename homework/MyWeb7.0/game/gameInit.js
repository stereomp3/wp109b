var Player1_x = 10, Player1_y = 430, dPlayer1_x = 20, dPlayre1_y = 30, SupportP1_x = 0, SupportP1_y = 0;//P1玩家位置和速度
var Player2_x = 600, Player2_y = 430, dPlayer2_x = 20, dPlayre2_y = 30, SupportP2_x = 0, SupportP2_y = 0;
var Monster_x = 300, Monster_y = 450, dMonster_x = 5, dMonster_y = 30//怪物位置和速度

//P1:wasd, jkl,; P2:上下左右, 123
var RightDir = "KeyD", LeftDir = "KeyA", UpDir = "KeyW", downDir = "KeyS", Jump = "KeyK", shift = "KeyL", punch = "KeyJ", stop = "KeyP", keystate = [];//player1
var RightDir2 = "ArrowRight", LeftDir2 = "ArrowLeft", UpDir2 = "ArrowUp", downDir2 = "ArrowDown", Jump2 = "Numpad2", shift2 = "Numpad3", punch2 = "Numpad1";//player2

var GameStart = 1, MonsterStart = 0;//GameStart=0 is gameOver, MonsterStart = 0 is snake
var GameStop = false;
var GameStopId = document.getElementById('GameStop').style, GameStartId = document.getElementById('GameStart').style

var loadWord = ['idle', 'move', 'jump', 'shift', 'attackJ', 'attackJS', 'attackJW', 'jump', 'death'];
var loadWordM = ['idle', 'walk', 'gesture', 'attack', 'death'];
//矩陣填到矩陣裡
let preloadImage = [];
let P1preloadImagesR = Array(9).fill().map(() => Array(6));//m列n行Array(m).fill().map(() => Array(n))
let P1preloadImagesL = Array(9).fill().map(() => Array(6));//m列n行
let P2preloadImagesR = Array(9).fill().map(() => Array(6));
let P2preloadImagesL = Array(9).fill().map(() => Array(6));
let P3preloadImagesR = Array(9).fill().map(() => Array(6));
let P3preloadImagesL = Array(9).fill().map(() => Array(6));
let preloadSnakeImgsR = Array(5).fill().map(() => Array(10));
let preloadSnakeImgsL = Array(5).fill().map(() => Array(10));
let preloadBossImgs = Array(5).fill().map(() => Array(8));

var fps, fpsInterval, startTime, timestamp = Date.now(), preTimestamp, progress;

let init = 0;//當1時就不進行遊戲

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


function upgrade() {
    if (MonsterStart == 0 && GamePlayMode != 2) Monster.SnakeUpgrade();
    if (MonsterStart == 1 && GamePlayMode != 2) Monster.BossUpgrade();

    if (GamePlayMode == 2 || GamePlayMode == 3) Player2.upgrade();
    Player.upgrade();
    Backgroumd.upgrade();
}

function draw() {
    preload();
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    Backgroumd.draw();
    Player.draw();
    if (GamePlayMode == 2 || GamePlayMode == 3) Player2.draw();

    if (MonsterStart == 0 && GamePlayMode != 2) Monster.SnakeDraw();
    if (MonsterStart == 1 && GamePlayMode != 2) Monster.BossDraw();

}

function MainGame() {

    document.getElementById("P2character1").style.display = "none";
    document.getElementById("P2character2").style.display = "none";
    document.getElementById("P2character3").style.display = "none";
    document.getElementById("GameInitOptionFrame").style.display = "none";
    //把血條打開
    document.getElementById("PlayerLiveBar").style.display = "block";
    if (GamePlayMode == 2 || GamePlayMode == 3) document.getElementById("Player2LiveBar").style.display = "block";//PVP
    if (GamePlayMode != 2) document.getElementById("MonsterLiveBar").style.display = "block";//PVM

    startAnimating(12);//設置fps
    if (init == 1) return;

    document.addEventListener("keydown", function (event) {//這裡的evt是接收玩家的鍵盤事件
        keystate[event.code] = true//鍵盤按下
        if (keystate[stop]) { GameStop = !GameStop }
    }, true);
    document.addEventListener("keyup", function (event) {
        keystate[event.code] = false;//放開取消事件，避免短期按太多按件
    }, true);

    var loop = function () {
        timestamp = Date.now();//調整速率
        progress = timestamp - preTimestamp;
        if (GameStop) {
            GameStartId.display = "block"
            GameStopId.display = "none"
        }
        else {
            GameStartId.display = "none"
            GameStopId.display = "block"
        }

        if (progress > fpsInterval && !GameStop) {
            startAnimating(12);
            if (GamePlayMode == 2) {//two player mode (2)
                upgrade();
                draw();

                if (GameStart == 0) {
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                    backImg.src = "picture/material/background/0.png";
                    ctx.drawImage(backImg, 0, 0, canvas.width, canvas.height)
                    if (Player2LiveBar <= 0) ctx.strokeText("Player1 win!", 290, 90);
                    if (PlayerLiveBar <= 0) ctx.strokeText("Player2 win!", 290, 90);
                    GameRestart()
                    return
                }
            }
            else if (MonsterStart == 2) {
                backImg.src = "picture/material/background/58.png";//win
                ctx.drawImage(backImg, 0, 0, canvas.width, canvas.height)
                GameRestart()
                return
            }
            else if (GameStart == 1)//Game ing (1,3)
            {
                upgrade();
                draw();
            }
            else {
                backImg.src = "picture/material/background/57.png";//death
                ctx.drawImage(backImg, 0, 0, canvas.width, canvas.height);
                ctx.drawImage(P1Img, Player1_x, Player1_y, 100, 100);
                GameRestart()
                return
            }
        }
        window.requestAnimationFrame(loop, canvas);
    }
    window.requestAnimationFrame(loop, canvas);
}

//設置遊戲參數
function GameInit() {
    PlayerLiveBar = 100; Player2LiveBar = 100; MosterLiveBar = 80;
    Player1_x = 10; Player1_y = 430; Jflag = 0
    Player2_x = 600; Player2_y = 430; Jflag2 = 0;
    if (GamePlayMode == 3) Player2_x = 30;
    Monster_x = 300; Monster_y = 450; dMonster_x = 5; dMonster_y = 30//怪物位置和速度
    GameStart = 1; MonsterStart = 0; BackImgFlag = 0;

    preload();
    SubImg = document.getElementById("SubPicture");
    SubImg2 = document.getElementById("SubPicture2");
    P1Img = document.getElementById("picture");
    P2Img = document.getElementById("picture2");
    backImg = document.getElementById("background");
    MonsterImg = document.getElementById("monster");
    MonsterAttcakImg = document.getElementById("monsterAttack");
    canvas = document.getElementById("MyCanvas");
    ctx = canvas.getContext("2d");

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.drawImage(backImg, 0, 0, canvas.width, canvas.height);
}


// initialize the timer variables and start the animation

function startAnimating(fps) {
    fpsInterval = 1000 / fps;
    preTimestamp = Date.now();
    startTime = preTimestamp;
}



function PVM() {//單人
    GamePlayMode = 1
    ChooseCharacter()
}
function PVP() {//雙人對戰
    GamePlayMode = 2
    ChooseCharacter()
    ctx.strokeText("P1 Choose Character", 230, 190,);
}
function PPVM() {//雙人對戰
    GamePlayMode = 3
    ChooseCharacter()
    ctx.strokeText("P1 Choose Character", 230, 190,);
}

function ChooseCharacter() {//P1 choose
    //lock the scrolling
    document.documentElement.scrollTop = 60;
    document.body.style.overflow = "hidden"
    //close option
    backImg.src = "picture/material/background/0.png";
    GameInitOptionHide()

    //show player
    document.getElementById("character1").style.display = "block";
    document.getElementById("character2").style.display = "block";
    document.getElementById("character3").style.display = "block";

    ctx.font = "30px Verdana";//設定字大小
    ctx.strokeStyle = 'white';
    ctx.strokeText("Click to Choose Character", 205, 150,);
}
function GameBegin() {//單人進入遊戲點
    document.getElementById("character1").style.display = "none";
    document.getElementById("character2").style.display = "none";
    document.getElementById("character3").style.display = "none";

    if (GamePlayMode == 1) {
        GameInit(); MainGame();
    }
    else P2Choose()
}
function P2Choose() {//雙人進入遊戲點(onclick)
    document.getElementById("character1").style.display = "none";
    document.getElementById("character2").style.display = "none";
    document.getElementById("character3").style.display = "none";
    ctx.strokeText("P2 Choose Character", 230, 220,);
    document.getElementById("P2character1").style.display = "block";
    document.getElementById("P2character2").style.display = "block";
    document.getElementById("P2character3").style.display = "block";
}

function GameRestart() {
    document.getElementById("GameInitOption3").style.display = "block";
    document.getElementById("GameInitOptionFrame").style.display = "block";
    //順便把血條關掉
    document.getElementById("PlayerLiveBar").style.display = "none";
    document.getElementById("Player2LiveBar").style.display = "none";
    document.getElementById("MonsterLiveBar").style.display = "none";
    //背景切換到0.png
}

function GameInitOptionShow() {
    //背景切換成0.png
    backImg.src = "picture/material/background/0.png";//death
    ctx.drawImage(backImg, 0, 0, canvas.width, canvas.height);
    //選項打開
    document.getElementById("GameInitOption").style.display = "block";
    document.getElementById("GameInitOption2").style.display = "block";
    document.getElementById("GameInitOption3").style.display = "none";
    document.getElementById("GameInitOption4").style.display = "block";
}
function GameInitOptionHide() {
    document.getElementById("GameInitOption").style.display = "none";
    document.getElementById("GameInitOption2").style.display = "none";
    document.getElementById("GameInitOption4").style.display = "none";
}




function preload() {
    //preload img

    //character1
    for (i = 0; i < 9; i++) {
        if (i == 7)//jump有兩次
        {
            for (a = 6; a < 12; a++) {
                P1preloadImagesR[i][a] = new Image();
                P1preloadImagesL[i][a] = new Image();
                P1preloadImagesR[i][a].src = "picture/material/Character1/R/" + loadWord[i] + "/" + a + ".png";
                P1preloadImagesL[i][a].src = "picture/material/Character1/L/" + loadWord[i] + "/" + a + ".png";
            }
        }
        else {
            for (a = 0; a < 6; a++) {
                P1preloadImagesR[i][a] = new Image();
                P1preloadImagesL[i][a] = new Image();
                P1preloadImagesR[i][a].src = "picture/material/Character1/R/" + loadWord[i] + "/" + a + ".png";
                P1preloadImagesL[i][a].src = "picture/material/Character1/L/" + loadWord[i] + "/" + a + ".png";
            }
        }
    }
    //character2
    for (i = 0; i < 9; i++) {
        if (i == 7)//jump有兩次
        {
            for (a = 6; a < 12; a++) {
                P2preloadImagesR[i][a] = new Image();
                P2preloadImagesL[i][a] = new Image();
                P2preloadImagesR[i][a].src = "picture/material/Character2/R/" + loadWord[i] + "/" + a + ".png";
                P2preloadImagesL[i][a].src = "picture/material/Character2/L/" + loadWord[i] + "/" + a + ".png";
            }
        }
        else {
            for (a = 0; a < 6; a++) {
                P2preloadImagesR[i][a] = new Image();
                P2preloadImagesL[i][a] = new Image();
                P2preloadImagesR[i][a].src = "picture/material/Character2/R/" + loadWord[i] + "/" + a + ".png";
                P2preloadImagesL[i][a].src = "picture/material/Character2/L/" + loadWord[i] + "/" + a + ".png";
            }
        }
    }
    //character3
    for (i = 0; i < 9; i++) {
        if (i == 7)//jump有兩次
        {
            for (a = 6; a < 12; a++) {
                P3preloadImagesR[i][a] = new Image();
                P3preloadImagesL[i][a] = new Image();
                P3preloadImagesR[i][a].src = "picture/material/Character3/R/" + loadWord[i] + "/" + a + ".png";
                P3preloadImagesL[i][a].src = "picture/material/Character3/L/" + loadWord[i] + "/" + a + ".png";
            }
        }
        else {
            for (a = 0; a < 6; a++) {
                P3preloadImagesR[i][a] = new Image();
                P3preloadImagesL[i][a] = new Image();
                P3preloadImagesR[i][a].src = "picture/material/Character3/R/" + loadWord[i] + "/" + a + ".png";
                P3preloadImagesL[i][a].src = "picture/material/Character3/L/" + loadWord[i] + "/" + a + ".png";
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