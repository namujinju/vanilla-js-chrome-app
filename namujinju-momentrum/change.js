const chgBtn = document.querySelector(".change-direction");
const toDo = document.querySelector(".js-todolist");
const toDid = document.querySelector(".js-didlist");
const main = document.querySelector("main");

function handleDirection() {
  main.classList.toggle("main__horizontal");
  toDo.classList.toggle("todo-did__list__vertical");
  toDid.classList.toggle("todo-did__list__vertical");
}

function init() {
  chgBtn.addEventListener("click", handleDirection);
}

init();
