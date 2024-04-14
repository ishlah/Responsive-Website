const menuBar = document.getElementById("menuBar");
const btnBurger = document.getElementById("btnBurger");

btnBurger.addEventListener("click", () => {
  menuBar.classList.toggle("hidden");
});
