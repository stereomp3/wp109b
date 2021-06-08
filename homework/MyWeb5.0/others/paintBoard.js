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
    document.getElementById('cSketchPadImg').src = null;
}

function changePenColor(){
    p_color = document.getElementById("colorChooser").value
}
function changePenWidth(){
    p_width = document.getElementById("WidthChooser").value;
}

function save(){
    // save canvas image as data url (png format by default)
    var dataURL = Pcanvas.toDataURL();
    // set cSketchPadImg image src to dataURL
    // so it can be saved as an image
    document.getElementById('cSketchPadImg').src = dataURL;
}