// html 태그 불러오기
const nameForm = document.querySelector(".js-nameform"),
  nameInput = nameForm.querySelector("input"),
  greeting = document.querySelector(".js-greeting"),
  toDoAll = document.querySelector(".toDoAll");

// 태그를 보여주거나 감출 때 추가하는 class 이름
const SHOWING_CN = "showing",
  HIDING_CN = "hiding";

//Local Storage
const NAME_LS = "currentUser";

function saveName(text) {
  localStorage.setItem(NAME_LS, text);
}

function paintGreeting(text) {
  nameForm.classList.remove(SHOWING_CN);
  nameForm.classList.add(HIDING_CN);
  greeting.innerText = `안녕! ${text}!`;
}

function submitName(event) {
  event.preventDefault();
  nameValue = nameInput.value;
  paintGreeting(nameValue);
  saveName(nameValue);
  toDoAll.classList.remove(HIDING_CN);
}

function askForName() {
  nameForm.classList.add(SHOWING_CN);
  nameForm.addEventListener("submit", submitName);
}

function loadName() {
  const currentUser = localStorage.getItem(NAME_LS);

  if (currentUser === null) {
    toDoAll.classList.add(HIDING_CN);
    console.log(toDoAll);
    askForName();
  } else {
    paintGreeting(currentUser);
  }
}

function init() {
  loadName();
}

init();
