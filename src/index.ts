class Player {
  constructor() {}

  counterNumber = 0;

  click() {
    console.log("click done");
    this.update();
  }

  update() {
    this.updateUI();
    this.counterNumber++;
  }

  updateUI() {
    console.log("updateUI");
    const counter = document.getElementById("counter") as HTMLElement;

    counter.innerHTML = this.counterNumber.toString();
    console.log(this.counterNumber);
  }
}

const player = new Player();

const clickButton = document.getElementById("btn") as HTMLButtonElement | null;
if (clickButton) {
  clickButton.addEventListener("click", () => {
    player.click();
  });
}
