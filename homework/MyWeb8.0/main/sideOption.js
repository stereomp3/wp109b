const sideOption = {}
const AboutMe = {}
const MyInformation = {}
const MyInterest = {}
const MobileSide = {}
const MobileOption = {}

sideOption.html = `
    <div>
        <a onclick = "AboutMe.start()">About me</a>
        <br>
        <a onclick = "MyInformation.start()">My information</a>
        <br>
        <a onclick = "MyInterest.start()">My interest</a>
        <br>
        <a  onclick="EggHatch()" id="Zerg_egg_show">Zerg egg</a>
        <a onclick="EggHide()" id="Zerg_egg_hide" style="display: none;">recovery</a>
        <br>
    <div class="dropdown">
        <p style="font-size: 45px; height: 800px;"></p>
    </div>
`
MobileOption.html = `
    <div>
        <a onclick="introduction.start()">Introduction</a>
        <br>
        <a onclick="information.start()" >Informations</a>
        <br>
        <a onclick="game.start()" >game</a>
        <br>
        <a onclick="others.start()" >others</a>
        <br>
        <a onclick="source.start()" >source</a>
        <br>
        <br>
        
        <a onclick = "AboutMe.start(); sideOption.close()">About me</a>
        <br>
        <a onclick = "MyInformation.start(); sideOption.close()">My information</a>
        <br>
        <a onclick = "MyInterest.start(); sideOption.close()">My interest</a>
        <br>
        <br>

        <a  onclick="EggHatch()" id="Zerg_egg_show">Zerg egg</a>
        <a onclick="EggHide()" id="Zerg_egg_hide" style="display: none;">recovery</a>
        <br>
    <div class="dropdown">
        <p style="font-size: 45px; height: 800px;"></p>
    </div>
`
AboutMe.html = `   
    <div class="AboutMe-grid">
        <div style="margin-top: 80px" class = "grid_odd">姓名</div>
        <div style="margin-top: 80px" class = "grid_odd">魏仲彥</div>  
        <div class = "grid_even">學歷</div>
        <div class = "grid_even">高中畢業</div>
        <div class = "grid_odd">興趣</div>  
        <div class = "grid_odd">跑步、畫畫</div>
        <div class = "grid_even">專長</div>
        <div class = "grid_even">Coding、鋼琴</div>
        <div style="margin-bottom: 20px" class = "grid_odd">個人特質</div>
        <div style="margin-bottom: 20px" class = "grid_odd">積極、樂觀、正向，可以很快融入團體中!</div>
    </div>
`
MyInformation.html = `
    <div class="MyInformation-grid">

        <pre style="margin: 10% 0 5% 5%">


   <a href="https://www.facebook.com/ericjjkk" style="text-decoration: none; color: black;" target=_blank;><i class="fa fa-facebook-square" aria-hidden="true"></i></a>   <a href="https://github.com/stereomp3/wp109b/wiki" style="text-decoration: none; color: black;" target=_blank;><i class="fa fa-github" aria-hidden="true"></i></a>   <a href="https://store.steampowered.com/" style="text-decoration: none; color: black;" target=_blank;><i class="fa fa-steam" aria-hidden="true"></i></a>   <a href="https://www.youtube.com/" style="text-decoration: none; color: black;" target=_blank;><i class="fa fa-youtube-play" aria-hidden="true"></i></a>
        </pre>      
    </div>
`
MyInterest.html = `
    <div class="MyInterest-grid">

        <div style="margin-top: 50px" class ="grid_odd" >
        &#127929 <br>
            我喜歡鋼琴，其實在國小學習階段時還蠻討厭的XD，但越學到後面就覺得彈鋼琴是一種紓壓，尤其是彈即興，可以自由自在地彈出想要彈的，在自己的音樂中暢遊!
        </div>

        <div class = "grid_even">
        &#128214<br>
            看書一直是我很好的休閒，每本書都會有它想說的故事，和作者想表達的世界觀。 <br>
            每次有新的想法和新的世界進來，就會讓我的心不停地顫抖，猶如身歷其境。 <br>
            我對新事物都會想去一探究竟，這也是我喜歡書的一個原因吧。
        </div>  

        <div class = "grid_odd">
        &#128397 <br>
            我喜歡畫畫，畫畫可以把我內心所想呈現出來，而且當做完一件作品時，那種成就感，令人回味無窮!
        </div>

        <div class = "grid_even">
        &#129342<br>
            我愛運動，在所有運動裡，我比較喜歡打籃球和慢跑，慢跑可以沉澱心靈，可以整理一天的思緒，我非常喜歡。<br>
            而籃球當然是要和朋友打摟，可以互相切磋，互相配合。
        </div>

        <div style="margin-bottom: 50px" class = "grid_odd">
        &#127929 <br>
            現在大學又多了一個喜歡的事物，就是打Code。
            把本來是0的程式碼，慢慢打上去，就和玩樂高一樣!
        </div>
    </div>
        
`
MobileSide.innerHTML = `
    <a onclick="source.start()" >source</a>
    <a onclick="others.start()" >others</a>
    <a onclick="game.start()" >game</a>
    <a onclick="information.start()" >Informations</a>
    <a onclick="introduction.start()">Introduction</a>
    <button onclick="sideOption.start()" id="sideOptionOpen">
        <i class="fa fa-bars" aria-hidden="true"></i>
    </button>
    <button onclick="sideOption.close()" id="sideOptionClose" style="display: none;">
        <i class="fa fa-times" aria-hidden="true"></i>
    </button>
`


sideOption.start = function () {
    if(document.body.clientWidth >= 1200) openNav(sideOption.html)
    else MobileOpenNav(MobileOption.html)
}
sideOption.close = function () {

    if(document.body.clientWidth >= 1200)
    {
        closeNav('')
        show(FakeHash.html)
    }
    MobileCloseNav(``)
    document.getElementById('MobileOptionOpen').style.display = '' 
    document.getElementById('MobileOptionClose').style.display = 'none'
}

AboutMe.start = function () {
    showContent(AboutMe.html)
    document.querySelector("main").style.background = "url(picture/boy.jpg)";
}
MyInformation.start = function () {
    showContent(MyInformation.html)
    document.querySelector("main").style.background = "url(picture/photo.jpg)";
}
MyInterest.start = function () {
    showContent(MyInterest.html)
    document.querySelector("main").style.background = "url(picture/others.png)";
    document.querySelector("main").style.backgroundSize = "cover" // 設定圖片填滿
    document.querySelector("main").style.backgroundPositionX = "center"
}
function showContent(html) { 
    document.getElementById('LeftSideSpace').style.marginLeft = "38%";
    document.documentElement.scrollTop = 0
    main.innerHTML = html 
}