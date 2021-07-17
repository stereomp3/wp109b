const game = {}

game.html=`
<div class="column">
            <div id="game" style="text-align: center;">

                <i class="fa fa-pause-circle" aria-hidden="true" id="GameStop" 
                onclick="GameStop = true; GameStartId.display = 'block'; GameStopId.display = 'none';
                ctx.fillStyle = 'rgba(0,0,0,0.3)'; ctx.fillRect(0, 0, canvas.width, canvas.height);" ></i>

                <i class="fa fa-play-circle" aria-hidden="true" id="GameStart" 
                onclick="GameStop = false; GameStopId.display = 'block'; GameStartId.display = 'none';" ></i>

                <button onclick="document.getElementById('GameText').style.display ='block'" class="Sidenav"
                style="top: 410px; background-color: rgb(0, 0, 0);">遊戲介紹</button>
                
                <div id="GameInitOptionFrame"></div>
                <img onclick="GameInitOptionShow(); GameInit();" id="GameInitOption3" src="picture/material/background/56.png" alt="error">
                <img onclick="PVM();" id="GameInitOption" src="picture/material/background/55.png" alt="error">
                <img onclick="PVP();" id="GameInitOption2" src="picture/material/background/54.png" alt="error">
                <img onclick="PPVM();" id="GameInitOption4" src="picture/material/background/59.png" alt="error">
                <img onclick="GameBegin(); PlayerChoose[0] = 1;" id="character1" src="picture/material/Character1/R/idle/0.png" alt="error">
                <img onclick="GameBegin(); PlayerChoose[0] = 2;" id="character2" src="picture/material/Character2/R/idle/0.png" alt="error">
                <img onclick="GameBegin(); PlayerChoose[0] = 3;" id="character3" src="picture/material/Character3/R/idle/0.png" alt="error">
                <img onclick="GameInit(); MainGame(); PlayerChoose[1] = 1;" id="P2character1" src="picture/material/Character1/R/idle/0.png" alt="error">
                <img onclick="GameInit(); MainGame(); PlayerChoose[1] = 2;" id="P2character2" src="picture/material/Character2/R/idle/0.png" alt="error">
                <img onclick="GameInit(); MainGame(); PlayerChoose[1] = 3;" id="P2character3" src="picture/material/Character3/R/idle/0.png" alt="error">

                <div id="PlayerLiveBar"></div>
                <div id="Player2LiveBar"></div>
                <div id="MonsterLiveBar"></div>
                
                <canvas id="MyCanvas" width="800" height="550" style="border:0.1px solid rgb(82, 80, 79); width: 100%;  height: auto;">  </canvas>
                
                <div style="display: none;">
                    <!--P1-->
                    <img src="picture/material/Character1/R/move/0.png" alt="error" style="width:273px;height:517px;" id="picture">
                    <img src="picture/material/0.png" alt="error" style="width:273px;height:517px;" id="SubPicture">
                    <!--P2-->
                    <img src="picture/material/Character2/R/move/0.png" alt="error" style="width:273px;height:517px;" id="picture2">
                    <img src="picture/material/0.png" alt="error" style="width:273px;height:517px;" id="SubPicture2">
                    <img src="picture/material/background/0.png" alt="error" style="width:273px;height:517px;" id="background">
                    <img src="picture/material/monster/snake/L/idle/0.png" alt="error" style="width:273px;height:517px;" id="monster">
                    <img src="picture/material/monster/boss/attack/0.png" alt="error" style="width:273px;height:517px;" id="monsterAttack">
                </div>
                <div class="NormalDropdown">
                    <p style="color: #ff3d3d;">資料來源 (hover me!)</p>
                    <div class="DropdownContent">
                        <a href="https://opengameart.org/content/3-cyberpunk-characters"
                            target=_blank;>人物:https://opengameart.org/content/3-cyberpunk-characters</a> <br>
                        <a href="https://opengameart.org/content/city-background-repetitive-3"
                            target=_blank;>背景:https://opengameart.org/content/city-background-repetitive-3</a> <br>
                        <a href="https://opengameart.org/content/animated-snake"
                            target=_blank;>monster:https://opengameart.org/content/animated-snake</a>
                    </div>
                </div>
                <br>

                <h3 style="font-size: 40px;" class="container">
                    <a href="https://github.com/stereomp3/wp109b/tree/main/homework/MyWeb7.0" target=_blank;>git hub<i class="fa fa-github" aria-hidden="true"></i></a>
                    裡面有遊戲程式碼哦!ლ(ﾟдﾟლ) !
                </h3>

            </div>
        </div>

        <!--///////////////遊戲區旁邊的文字////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->

        <div id="GameText">
            <br> <br>
            <i onclick="document.getElementById('GameText').style.display ='none'" class="fa fa-window-close" 
            aria-hidden="true" style="float: right; font-size: 30px; cursor: pointer;"></i>


            <p style="font-size: 30px;">歡迎來到遊戲區!!</p>      
            <pre style="font-size: 20px; overflow:auto">
                Player1                         Player2
角色控制 :                      
            a                   (左)          Arrow Left          (左)    
            d                   (右)          Arrow Left          (右) 
            k                   (跳)          2                   (跳)   
            l                   (加速)        3                   (加速)

技能施放 :                
            j                   (踢)          1                   (踢)
            j + w               (出拳)        1 + Arrow Up        (出拳)
            j + s               (特攻)        1 + Arrow Down      (特攻)  


遊戲暫停 :   可以按右上角的暫停鈕或是按 p
            </pre>
        </div>
`

game.start = function () {
    FakeHash = game
    TopColorIndex = 4
    show(game.html)
    GameInit(); 
}