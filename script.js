let counter = 0;

const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
  btn.addEventListener("click", handleClick);
});

function handleClick(e) {
  const styles = e.currentTarget.classList;
  if (styles.contains("decrease")) {
    counter--;
  }
  if (styles.contains("reset")) {
    counter = 0;
  }
  if (styles.contains("increase")) {
    counter++;
  }
  value.textContent = counter;
}
