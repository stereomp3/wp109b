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
}

function changePenColor() {
    p_color = document.getElementById("colorChooser").value
}
function changePenWidth() {
    p_width = document.getElementById("WidthChooser").value;
}

var newImg, newImgCounter = 0;
function save() {
    if (newImgCounter < 4) {//最多4張圖
        // save canvas image as data url (png format by default)
        var dataURL = Pcanvas.toDataURL();
        // set cSketchPadImg image src to dataURL
        // so it can be saved as an image

        //創造節點，增加class
        newImg = document.createElement('img');
        newImg.className = "PaintImg"
        newImg.appendChild(document.createTextNode(newImgCounter.toString()));

        //放到ID為ImgInsertBefore0的前面
        let imgInsertBefore0 = document.getElementById("ImgInsertBefore0")
        document.getElementById("paintBoard").insertBefore(newImg, imgInsertBefore0);

        //把圖片放入節點
        if (imgInsertBefore0.firstChild) document.querySelectorAll("#paintBoard img")[newImgCounter].src = dataURL;   
        newImgCounter++; 
    }
}
function Delete() {
    if(newImgCounter>0 )newImgCounter--; 
    let paintBoardImg = document.querySelectorAll("#paintBoard img")[newImgCounter]
    if (paintBoardImg) {
        paintBoardImg.parentNode.removeChild(paintBoardImg);
    }      
}