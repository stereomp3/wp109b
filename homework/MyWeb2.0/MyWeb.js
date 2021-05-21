var itd = document.getElementById("introduction");
var nti = document.getElementById("notices");
var ifm = document.getElementById("informations");
var gam = document.getElementById("game");
var otr = document.getElementById("others");

function Introduction(){
    none();
    itd.style.display = "block";
}

function Notices(){
    none();
    nti.style.display = "block";
}

function Informations(){
    none();
    ifm.style.display = "block";
}

function Game(){
    none();
    gam.style.display = "block";
}

function Others(){
    none();
    otr.style.display = "block";
}

function none(){
    itd.style.display = "none";
    nti.style.display = "none";
    ifm.style.display = "none";
    gam.style.display = "none";
    otr.style.display = "none";
}

function MainGame(){

}

/*document.addEventListener("keydown", (event) => {
    switch (event.keyCode) {
      case 27:
        game.togglePause();
        break;

      case 32:
        game.init();
        break;

      case 65:
        player.moveLeft();
        break;

      case 87:
        player.moveUp();

        break;

      case 68:
        player.moveRight();

        break;

      case 83:
        player.moveDown();
        break;

      default:
        break;
    }
})*/