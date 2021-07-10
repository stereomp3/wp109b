const sideOption = {}

sideOption.html=`
<div>

            <div class="dropdown">
                <p style="font-size: 45px;">introdution</p>
                <div class="dropdown-content">
                    <div class="side">
                        <p class="form1">
                            姓名:魏仲彥
                        </p>
                        <p class="form1">
                            學歷:高中畢業
                        </p>
                        <p class="form1">
                            興趣:鋼琴，畫畫，在電腦前面耍費
                        </p>
                        <p class="form1">
                            專長:吃飯，睡覺
                        </p>
                        <p class="form1">
                            個人特質:擅長看別人甚麼時候生氣，吃飯絕對不請客
                        </p>
                        <p class="form1">
                            其他:這就要由大家一起來觀察了>0< </p>
                    </div>

                    <div class="side">
                        <img src="picture/boy.jpg" alt="error" style="width:540px;height:360px;">
                    </div>
                </div>
            </div>

            <br>

            <div class="dropdown">
                <p style="font-size: 45px;">information</p>
                <div class="dropdown-content">
                    <div class="side">
                        <a href="https://www.facebook.com/ericjjkk" target=_blank; class="form1">
                            my facebook <i class="fa fa-facebook-official" aria-hidden="true"></i><br><br>
                        </a>
                        <a href="https://github.com/stereomp3/wp109b/wiki" target=_blank; class="form1">
                            My git hub <i class="fa fa-github-square" aria-hidden="true"></i><br><br>
                        </a>
                        <a href="https://www.w3schools.com/" target=_blank; class="form1">
                            learning HTML <br><br>
                        </a>
                    </div>

                    <div class="side">
                        <img src="picture/photo.jpg" alt="error" style="width:610px;height:475px;">
                    </div>
                </div>
            </div>

            <br>

            <div class="dropdown">
                <p style="font-size: 45px;">others</p>
                <div class="dropdown-content">

                    <div class="side">
                        <p class="form1">
                            其他沒其他
                        </p>
                        <p class="form1">
                            我愛鋼琴
                        </p>
                        <p class="form1">
                            也愛睡覺
                        </p>
                        <p class="form1">
                            愛看動漫(刀劍，柯南，入間，航海王)
                        </p>
                        <p class="form1">
                            也愛畫畫
                        </p>
                        <p class="form1">
                            其他沒其他了
                        </p>
                    </div>

                    <div class="side">
                        <img src="picture/others.png" alt="error" style="width:540px;height:360px;">
                    </div>
                </div>
            </div>

            <br>

            <div class="dropdown">
                <p style="font-size: 45px;">game</p>
                <div class="dropdown-content">

                    <div class="side">
                        <p class="form1">
                            遊戲介紹
                        </p>
                        <p class="form1">
                            製作人 : 魏仲彥
                        </p>
                        <p class="form1">
                            繪師 : 魏仲彥
                        </p>
                        <p class="form1">
                            指導老師 : 陳鍾誠老師
                        </p>
                    </div>

                    <div class="side">
                        <img src="picture/GAME.png" alt="error" style="width:540px;height:360px;">
                    </div>
                </div>
            </div>

            <br>

            <div class="dropdown">
                <p style="font-size: 45px;">source</p>
                <div class="dropdown-content">

                    <div class="side" style="width: 100%;">
                        <p class="form1">
                            人物:https://opengameart.org/content/3-cyberpunk-characters
                        </p>
                        <p class="form1">
                            背景:https://opengameart.org/content/city-background-repetitive-3
                        </p>
                        <p class="form1">
                            素材:https://opengameart.org/content/explosion-set-1-m484-games
                            https://opengameart.org/content/meteor-animated-64x64
                            https://opengameart.org/content/explosion
                            https://opengameart.org/content/animated-fireball
                            https://opengameart.org/content/sparks-fire-ice-blood
                        </p>
                        <p class="form1">
                            moster : https://opengameart.org/content/animated-skeleton
                            https://opengameart.org/content/animated-snake
                            https://opengameart.org/content/bosses-and-monsters-spritesheets-ars-notoria
                        </p>
                        <p class="form1">
                            參考版面: https://www.taipeitimes.com/
                            https://www.w3schools.com/css/css_form.asp
                        </p>
                    </div>
                </div>
            </div>

            <br>

            <div class="dropdown">
                <p style="font-size: 45px; height: 800px;"></p>
            </div>
`

sideOption.start = function () {
    openNav(sideOption.html)   
    document.getElementById("SideOption").style.width = "20%"
    document.getElementById("sideOptionClose").style.display = "block";
    document.getElementById("sideOptionOpen").style.display = "none";
}
sideOption.close = function () {
    openNav(``)   
    document.getElementById("SideOption").style.width = "0"
    document.getElementById("sideOptionClose").style.display = "none";
    document.getElementById("sideOptionOpen").style.display = "block";
}