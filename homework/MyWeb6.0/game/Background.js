var BackImgFlag = 0;

Backgroumd = {
    upgrade: function () {
        if (MonsterStart == 0) {
            BackImgFlag == 0;
        }
        
        else {
            if (x < 100 && BackImgFlag > 0) {
                x = 100;
                BackImgFlag--;
                if(keystate[shift] && BackImgFlag > 0) BackImgFlag--
            }
            if (x > 600 && BackImgFlag < 53) {
                x = 600;
                BackImgFlag++;
                if(keystate[shift] && BackImgFlag < 53) BackImgFlag++
            }
        }
        if (x <= 0) x = 0;
        if (x >= canvas.width - 0.5 * Img.width) x = canvas.width - 0.5 * Img.width;
        if (y < 0) y = 10;
        if (y > canvas.height - 0.5 * Img.height) y = canvas.height - 0.5 * Img.height;

        backImg.src = "picture/material/background/" + BackImgFlag + ".png";
    },
    draw: function () {
        ctx.drawImage(backImg, 0, 0, canvas.width, canvas.height);
        if(BackImgFlag < 50 && MonsterStart == 1) ctx.fillText("走到最底才能打到boss，GO->->", 150, 150,);//字, x, y
    }
}