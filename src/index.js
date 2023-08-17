var Player = /** @class */ (function () {
    function Player() {
        this.counterNumber = 0;
    }
    Player.prototype.click = function () {
        console.log("click done");
        this.counterNumber++;
        this.update();
    };
    Player.prototype.update = function () {
        this.updateUI();
    };
    Player.prototype.updateUI = function () {
        console.log("updateUI");
        var counter = document.getElementById("counter");
        counter.innerHTML = this.counterNumber.toString();
        console.log(this.counterNumber);
    };
    return Player;
}());
var player = new Player();
var clickButton = document.getElementById("btn");
if (clickButton) {
    clickButton.addEventListener("click", function () {
        player.click();
    });
}
