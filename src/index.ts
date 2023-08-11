class Player {
  constructor() {}

  click() {
    console.log("click done");
  }

  update() {}

  updateUI() {}
}

const player = new Player();

const clickButton = document.getElementById("btn") as HTMLDivElement | null;
if (clickButton) {
  clickButton.addEventListener("click", () => {
    player.click();
  });
}
