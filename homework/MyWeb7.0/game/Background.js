var BackImgFlag = 0;

Backgroumd = {
    upgrade: function () {
        if (MonsterStart == 0) {
            BackImgFlag == 0;
        }
        
        else {
            if (Player1_x < 100 && BackImgFlag > 0) {
                Player1_x = 100;
                BackImgFlag--;
                if(keystate[shift] && BackImgFlag > 0) BackImgFlag--
            }
            if (Player1_x > 600 && BackImgFlag < 53) {
                Player1_x = 600;
                BackImgFlag++;
                if(keystate[shift] && BackImgFlag < 53) BackImgFlag++
            }
        }
        if (Player1_x <= 0) Player1_x = 0;
        if (Player1_x >= canvas.width - 0.5 * P1Img.width) Player1_x = canvas.width - 0.5 * P1Img.width;
        if (Player1_y < 0) Player1_y = 10;
        if (Player1_y > canvas.height - 0.5 * P1Img.height) Player1_y = canvas.height - 0.5 * P1Img.height;

        if (Player2_x <= 0) Player2_x = 0;
        if (Player2_x >= canvas.width - 0.5 * P1Img.width) Player2_x = canvas.width - 0.5 * P1Img.width;
        if (Player2_y < 0) Player2_y = 10;
        if (Player2_y > canvas.height - 0.5 * P1Img.height) Player2_y = canvas.height - 0.5 * P1Img.height;

        backImg.src = "picture/material/background/" + BackImgFlag + ".png";
    },
    draw: function () {
        ctx.drawImage(backImg, 0, 0, canvas.width, canvas.height);
        if(BackImgFlag < 50 && MonsterStart == 1) ctx.strokeText("走到最底才能打到boss，GO>>>>", 150, 150,);//字, x, y
    }
}