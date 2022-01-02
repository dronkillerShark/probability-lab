const flip = document.querySelector(".flip");
const dice = document.querySelector(".dice");

flip.addEventListener("click", () => {
    dice.src = `img/Dice ${Math.trunc(Math.random() * 6) + 1}.png`;
})