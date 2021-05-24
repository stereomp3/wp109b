var preloadImages = [];
window.onload = dataInit;

function preload() { 
    for (i = 0; i < preload.arguments.length; i++) 
    { 
        preloadImages[i] = new Image(); 
        preloadImages[i].src = preload.arguments[i]; 
    } 
}
// 圖片預載入 var preloadImages = []; function preload() { for (i = 0; i < preload.arguments.length; i++) { preloadImages[i] = new Image(); preloadImages[i].src = preload.arguments[i]; } }
//呼叫例子:
// 呼叫 preload( window.basepath +"/answer_bg1_1.png", window.basepath +"/answer_bg2_1.png" );

