## 來源和用途

* main: <br>
參考網址： https://www.taipeitimes.com/ <br>
https://www.w3schools.com/css/css_form.asp <br>
**版面配置沒有使用套版** <br>

* game: <br>
遊戲圖片來源： <br>
人物: <br>
https://opengameart.org/content/3-cyberpunk-characters <br>
背景: <br>
https://opengameart.org/content/city-background-repetitive-3 <br>
素材: <br>
https://opengameart.org/content/explosion-set-1-m484-games
https://opengameart.org/content/meteor-animated-64x64
https://opengameart.org/content/explosion
https://opengameart.org/content/animated-fireball
https://opengameart.org/content/sparks-fire-ice-blood <br>
moster : <br>
https://opengameart.org/content/animated-skeleton
https://opengameart.org/content/animated-snake
https://opengameart.org/content/bosses-and-monsters-spritesheets-ars-notoria<br>
**遊戲完全純手工打造** 

* other: <br>
  1. 留言板: https://www.w3schools.com/css/tryit.asp?filename=trycss_form_responsive <br>
  2. 繪畫板: https://gitlab.com/ccc109/wp 08-canvas裡的05-painter和04-save <br>
  3. 彩蛋: https://codepen.io/dr5274/pen/mvmeOL <br>

<hr>

## 介紹功能和大綱

* main <br>

1. 按下不同按鈕顯示不同頁面 <br>
2. 按下右上角圖示可改變版面風格 <br>
3. 左上的按鈕可以顯示隱藏內容 <br>
4. 選項按鈕固定在螢幕最上端 <br>
5. 整體大小會隨著視窗改變而變化 <br>

**版面配置沒有使用套版**

* game: <br>

1. 遊戲預載入圖片 <br>
2. 遊戲fps控制 <br>
3. 角色利用keycode控制 <br>
4. 角色和怪物模組化，分開呼叫 <br>
5. 利用canvas畫出圖片 <br>
6. 在canvas上面加入HTML元素 <br>

**遊戲完全純手工打造** <br>
-> [遊戲技術說明](https://github.com/stereomp3/wp109b/tree/main/homework/MyWeb6.0/game) <br>
* other:

  1. 留言板: <br>
-> 可以在裡面留言，但因為沒有伺服器所以無法上傳 <br>

  2. 繪畫板: <br>
-> 使用者可以選定筆粗和顏色 <br>
-> 可以使用 <br>

  3. 彩蛋: <br>
-> 按了會把部分網頁吃掉 <br>
-> [彩蛋技術說明](https://github.com/stereomp3/wp109b/tree/main/homework/MyWeb6.0/others) <br>

<hr>

## 技術手段

* main: <br>

1. 按下不同按鈕顯示不同頁面 <br> 
說明: 取得id把其他的關閉(none())，再把要顯示的block出來。 <br>
source: [MyWeb.js](https://github.com/stereomp3/wp109b/blob/main/homework/MyWeb6.0/MyWeb.js) <br>
```
var itd = document.getElementById("introduction");
var src = document.getElementById("source");
var ifm = document.getElementById("informations");
var gam = document.getElementById("game");
var otr = document.getElementById("others");

function Introduction() {
  none();
  itd.style.display = "block";
  document.getElementsByTagName("button")[4].style.background = "#777474d2"
}
function Source() {
  none();
  src.style.display = "block";
  document.getElementsByTagName("button")[0].style.background = "#777474d2"
}
function Informations() {
  none();
  ifm.style.display = "block";
  document.getElementsByTagName("button")[3].style.background = "#777474d2"
}

function Game() {
  none();
  GameInit();
  //if (init == 0) init = 1;//遊戲開一次
  gam.style.display = "block";
  document.getElementById("GameText").style.display = "block";
  document.getElementsByTagName("button")[2].style.background = "#777474d2"
}

function Others() {
  none();
  otr.style.display = "block";
  document.getElementById("DrawChooser").style.display = "block";
  document.getElementsByTagName("button")[1].style.background = "#777474d2"
}

function none() { //關閉全部顯示畫面
  itd.style.display = "none";
  src.style.display = "none";
  ifm.style.display = "none";
  gam.style.display = "none";
  otr.style.display = "none";
  for (let i = 0; i <= 4; i++)document.getElementsByTagName("button")[i].style.background = "rgb(239, 239, 239)";
  document.getElementById("GameText").style.display = "none";
  document.getElementById("DrawChooser").style.display = "none";
}
```

2. 按下右上角圖示可改變版面風格 <br>
說明: 按下按鈕後，取得body和有關屬性值，做出顏色調整。 <br>
source: [MyWeb.js](https://github.com/stereomp3/wp109b/blob/main/homework/MyWeb6.0/MyWeb.js) <br>

```
function morningMode() {
  document.getElementsByTagName("body")[0].style.background = "rgb(243, 238, 229)";
  document.getElementById("header").style.color = "DimGrey";
  document.getElementById("header").style.background = "rgb(243, 235, 188)";
  document.getElementById("SideOption").style.background = "rgb(243, 235, 188)";
  document.getElementById("GameText").style.color = "black";
  document.getElementById("DrawChooser").style.color = "black";
}
function nightMode() {
  document.getElementsByTagName("body")[0].style.background = "DimGrey";
  document.getElementById("header").style.color = "white";
  document.getElementById("header").style.background = "#d0cfda";
  document.getElementById("SideOption").style.background = "#d0cfda";
  document.getElementById("GameText").style.color = "rgb(255, 255, 255);";
  document.getElementById("DrawChooser").style.color = "white";
}
```
3. 左上的按鈕可以顯示隱藏內容 <br>
說明: 跟前面的1.很像，但這裡用迴圈的方式(document.getElementsByClassName("dropdown")[i])改變他們的屬性值。 <br>
source: [MyWeb.js](https://github.com/stereomp3/wp109b/blob/main/homework/MyWeb6.0/MyWeb.js) <br>

```
function sideOptionOpen() {
  /*document.querySelectorAll(".dropdown").style.display = "block";*/
  for (let i = 0; i <= 5; i++) document.getElementsByClassName("dropdown")[i].style.display = "inline-block";
  document.getElementById("SideOption").style.display = "block";
  document.getElementById("sideOptionClose").style.display = "block";
  document.getElementById("sideOptionOpen").style.display = "none";
}
function sideOptionClose() {
  /*document.querySelectorAll(".dropdown").style.display = "block";*/
  for (let i = 0; i <= 5; i++) document.getElementsByClassName("dropdown")[i].style.display = "none";
  document.getElementById("SideOption").style.display = "none";
  document.getElementById("sideOptionOpen").style.display = "block";
  document.getElementById("sideOptionClose").style.display = "none";
}
```
4. 選項按鈕固定在螢幕最上端 <br>
說明: 看到https://www.taipeitimes.com/，https://www.w3schools.com/css/css_form.asp。兩個網站的選項都會固定，所以就查到下面的功能。 <br>
source: [MyWeb.html](https://github.com/stereomp3/wp109b/blob/main/homework/MyWeb6.0/MyWeb.html) <br>

```
這個是參考http://www.eion.com.tw/Blogger/?Pid=1154
<script>//下滑改變屬型  
        function getScrollTop() {   
            var bodyTop = 0;
            if (typeof window.pageYOffset != "undefined") {
                bodyTop = window.pageYOffset;

            } else if (typeof document.compatMode != "undefined"
                && document.compatMode != "BackCompat") {
                bodyTop = document.documentElement.scrollTop;

            } else if (typeof document.body != "undefined") {
                bodyTop = document.body.scrollTop;
            }
            //顯示出捲動後的高度值
            //document.getElementById("jsScrollTop").innerHTML = bodyTop;
            if (bodyTop >= 80) document.getElementById("TopMenu").style.position = "fixed";
            else document.getElementById("TopMenu").style.position = "relative";
            window.requestAnimationFrame(getScrollTop);
        }
        window.requestAnimationFrame(getScrollTop);
</script>
```
5. 整體大小會隨著視窗改變而變化 <br>
說明: 利用@media only screen and (max-width: value px)在寬度是1200px和600px做改變。 <br>
source: [MyWeb.css](https://github.com/stereomp3/wp109b/blob/main/homework/MyWeb6.0/MyWeb.css) <br>

```
利用CSS去做修改
  @media only screen and (max-width:1200px){
    /*Main Control*/
    #LeftSideSpace{display: none;}
    .column{
        float: right;
        width: 80%;
    }
    #SideOption{ width: 100%;}
    #TopMenu a {
        width: 100%;
        color: rgb(239, 239, 239); 
        background: DimGrey;
    }
    #TopMenu button{
        width: 20%;
        padding: 15px 22px;
        font-size: 15px;
    }
    //....
  }
  @media only screen and (max-width:600px) {
    /*Main Control*/
    #TopMenu button{ font-size: 8px;}
    .column{
        width: 100%;
    }
    /*Game*/
    #GameText{ visibility: hidden;}
    /*other*/
    #others button{ width: 25%;}
    #DrawChooser{ color: rgb(15, 15, 15);}
  }
```

* game: <br>
參考另一篇README <br>
-> [遊戲技術說明](https://github.com/stereomp3/wp109b/tree/main/homework/MyWeb6.0/game)

* other: <br>
裡面使用的顯示隱藏技術和前面的Main_1.一樣，在此不贅述。 <br>

1. 留言板: <br>
技術說明: 利用CSS進行排版(row, container)，再用select做出下拉選單，option做出選項，再用textarea讓使用者可以在裡面打字，本來input裡面的type要用submit，但因為沒有伺服器，所以這裡設置成button。 <br>
source: [MyWeb.html](https://github.com/stereomp3/wp109b/blob/main/homework/MyWeb6.0/MyWeb.html) <br>

```
<div class="container" id="FormTable" style="display: none;"> 
  <div class="row"> 
    <div> 
      <label for="Qution">你覺得這個網站哪個地方最吸引你?</label> 
    </div> 
    <div> 
      <select id="Qution" name="Qution"> 
        <option>精心設計的文字內容</option> 
        <option>充滿特色的版面設計</option> 
        <option>製作人的名字</option> 
        <option>指導老師的名字</option> 
        <option>我覺得是好吃的滷肉飯</option> 
        <option>我覺得是好吃的牛排</option> 
      </select> 
    </div> 
  </div> 
  
  <div class="row"> 
    <div> 
      <label for="subject">對網站的意見和看法?</label> 
    </div> 
    <div> 
      <textarea id="subject" name="subject" placeholder="Write something.." style="height:200px">
      </textarea> 
    </div> 
  </div> 
  
  <div class="row"> 
    <input type="button" onclick="alert('感謝您提供寶貴的意見，可是這個網站沒有伺服端 இдஇ')" value="繳交"> 
  </div> 
</div>
```

2. 繪畫板: <br>

繪畫說明: 這邊設置2個function: changePenColor()和changePenWidth()對應到button上的onclick，可以讓選到的顏色和筆寬放入Pctx.strokeStyle和Pctx.lineWidth裡面。 <br>
source: [paintBoard.js](https://github.com/stereomp3/wp109b/blob/main/homework/MyWeb6.0/others/paintBoard.js) <br>

```
var p_color = "#000000";
var p_width = 3;
function PBinit() {
    //取得canvas context
    Pcanvas = document.getElementById("cSketchPad");
    Pctx = Pcanvas.getContext("2d");
    Pctx.lineCap = "round";
    Pctx.fillStyle = "white"; //整個canvas塗上白色背景避免PNG的透明底色效果
    Pctx.fillRect(0, 0, Pcanvas.width, Pcanvas.height)
    var drawMode = false;
    //canvas點選、移動、放開按鍵事件時進行繪圖動作
    Pcanvas.onmousedown = function (e) {
        Pctx.beginPath();
        Pctx.strokeStyle = p_color;
        Pctx.lineWidth = p_width;
        Pctx.moveTo(e.offsetX, e.offsetY);
        drawMode = true;
    }
    Pcanvas.onmousemove = function (e) {
        if (drawMode) {
            Pctx.lineTo(e.offsetX, e.offsetY);
            Pctx.stroke();
        }
    }
    Pcanvas.onmouseup = function (e) {
        drawMode = false;
    }
    document.getElementById('cSketchPadImg').src = '';
}

function changePenColor() {
    p_color = document.getElementById("colorChooser").value
}
function changePenWidth() {
    p_width = document.getElementById("WidthChooser").value;
}
```

儲存說明: 利用canvas裡面的toDataURL()存取Pcanvas裡面的圖，再把它放入<img>裡面顯示。 <br>
source: [paintBoard.js](https://github.com/stereomp3/wp109b/blob/main/homework/MyWeb6.0/others/paintBoard.js) <br>

```
function save() {
    // save canvas image as data url (png format by default)
    var dataURL = Pcanvas.toDataURL();
    // set cSketchPadImg image src to dataURL
    // so it can be saved as an image
    document.getElementById('cSketchPadImg').src = dataURL;
}
```

3. 彩蛋: <br>
參考另一篇README <br>
-> [彩蛋技術說明](https://github.com/stereomp3/wp109b/tree/main/homework/MyWeb6.0/others)

