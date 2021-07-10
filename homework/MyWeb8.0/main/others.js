const others = {}

others.html=`
<div class="column">
<div id="others" style="font-size: 30px;">
                <h2>&nbsp;&nbsp;&nbsp;&nbsp;<i class="fa fa-chevron-circle-up" aria-hidden="true"></i></i>其他補充(others)</h2>
                <button onclick="formTable()" class="Sidenav" style="top: 410px; background-color: rgb(35, 151, 41);">留言板</button>
                <button onclick="PaintBoard()" class="Sidenav" style="top: 480px; background-color: #04AA6D;">繪畫板</button>
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
                            <textarea id="subject" name="subject" placeholder="Write something.."
                                style="height:200px"></textarea>
                        </div>
                    </div>
                    <div class="row">
                        <input type="button" onclick="alert('感謝您提供寶貴的意見，可是這個網站沒有伺服端 இдஇ')" value="繳交">
                    </div>
                </div>
                <!--/////////////////2繪畫版//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->

                <div id="paintBoard" style="display: block; color:ivory; overflow: auto;">
                    <h5 id="DrawChooser">

                        <a onclick="changePenColor(); document.getElementById('colorChooserCheck').style.display = 'none';" 
                        id="colorChooserCheck">confirm color</a> 

                        <i class="fa fa-square-o" aria-hidden="true"></i>
                        選擇顏色 &nbsp;
                        <i class="fa fa-play" aria-hidden="true"></i>&nbsp;&nbsp;             

                        <input type="color" onclick="document.getElementById('colorChooserCheck').style.display = 'block';"
                        id="colorChooser" value="#000000"> <br>
                        

                        <i class="fa fa-square" aria-hidden="true"></i>
                        選擇筆寬 &nbsp;
                        <i class="fa fa-play" aria-hidden="true"></i> &nbsp;
                        <input type="range" id="WidthChooser" value="3" min="1" max="30" onclick="changePenWidth();">&nbsp;&nbsp;
                        <br>

                        <i class="fa fa-genderless" aria-hidden="true"></i>
                        <a onclick="Pctx.fillStyle = 'white'; Pctx.fillRect(0, 0, Pcanvas.width, Pcanvas.height)">clearimg</a>
                        <i class="fa fa-genderless" aria-hidden="true"></i>
                        <a onclick="save()">save img</a>
                        <i class="fa fa-genderless" aria-hidden="true"></i>
                        <a onclick="Delete()">刪掉最新</a>
                        
                        </h3>
                        <canvas id="cSketchPad" width="900" height="400"
                            style="border:0.1px solid rgb(82, 80, 79);"></canvas>
                        <!--不顯示，直到有圖片-->

                        <div id="ImgInsertBefore0">&nbsp;</div>
                </div>

                <h3 style="font-size: 40px;" class="container">
                    參考至canvas裡的05-painter和04-save ٩(๑❛ᴗ❛๑)۶
                    真的沒什麼好補充的了，可以到<a href="https://github.com/stereomp3/wp109b/wiki" target=_blank;>git hub<i class="fa fa-github" aria-hidden="true"></i></a>
                    去看我的精美小筆記 ლ(・ω・ლ)
                </h3>
                <br>
            </div>
        </div>
`

others.start = function () {
    show(others.html)
    PBinit();
}