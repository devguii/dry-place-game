var Player = /** @class */ (function () {
    function Player() {
    }
    Player.prototype.click = function () {
        console.log("click done");
    };
    Player.prototype.update = function () { };
    Player.prototype.updateUI = function () { };
    return Player;
}());
var player = new Player();
var clickButton = document.getElementById("btn");
if (clickButton) {
    clickButton.addEventListener("click", function () {
        player.click();
    });
}
