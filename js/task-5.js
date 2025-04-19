function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}



const body = document.querySelector("body");
const text = document.querySelector(".color");
const btn = document.querySelector("button");
btn.addEventListener("click", evt => {
  const randomColor = getRandomHexColor();
  body.style.backgroundColor = randomColor;
  text.textContent = randomColor;
})