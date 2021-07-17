const introduction = {}

introduction.html = `
<div class="column">
<div id="introduction">
                
                <h2>&nbsp;&nbsp;&nbsp;&nbsp;<i class="fa fa-chevron-circle-up" aria-hidden="true"></i>歡迎到網站簡介(Introduction)</h2>
                <h3 style="font-size: 40px;" class="container">
                    (￣▽￣)~*可以到<a href="https://github.com/stereomp3/wp109b/wiki" target=_blank;>git hub<i class="fa fa-github" aria-hidden="true"></i></a> 去看我的課堂筆記呦~~
                </h3>
                <table style="width:100%;">
                    <tr>
                        <th>網站介紹</th>
                        <td>
                            <strong>!![大推]點擊game可以玩精心製作的小遊戲(有夠難做இдஇ)!!</strong> <br>
                            左邊的 &#9776 可以看到隱藏的選單 <br>
                            點擊information可以看到我的資訊 <br> 
                            點擊information可以看到我的資訊 <br>
                            點擊oters可以看到其他有的沒的 <br>
                            點擊soure可以看到資料參考和圖片來源 <br>
                            Website 右邊有月亮可以點及切換介面顏色呦 <br>
                        </td>
                        <td>重要度: &#10031&#10031</td>
                    </tr>
                    <tr>
                        <th>資訊介紹</th>
                        <td> 
                            有用沒用的資訊都在這大概 <br>
                            這裡還有我的網頁進化史喔，可以看到網頁成長過程 <br>
                        </td>
                        <td>重要度: &#10031&#10031&#10031</td>
                    </tr>
                    <tr>
                        <th>遊戲</th>
                        <td>
                            我只能說，遊戲真的很難做，做完才知道體諒遊戲製造商 <br>
                            寫邏輯真的難 (ఠ్ఠ ˓̭ ఠ్ఠ) <br>
                            我寫的遊戲沒有用框架，完全純手工打造~~ <br>
                            只有圖片是外面來的spirtsheet，資料來源遊戲下面和source

                        </td>
                        <td>重要度: &#10031&#10031&#10031&#10031&#10031&#10031&#10031</td>
                    </tr>
                    <tr>
                        <th>其他</th>
                        <td>
                            這裡有其他的東西(≖‿ゝ≖)✧
                            像是繪畫版(功能完整!!)，留言板(0.0)
                        </td>
                        <td>重要度: &#10031&#10031&#10031&#10031</td>
                    </tr>
                    <tr>
                        <th>參考資料</th>
                        <td>裡面的網站配置我都是看看再作改編，做得太醜請見諒(￣口￣)!!</td>
                        <td>重要度: &#10031&#10031&#10031&#10031</td>
                    </tr>
                </table>
                <br>
</div>
</div>
`
introduction.start = function () {
    FakeHash = introduction
    TopColorIndex = 6
    show(introduction.html)
}
