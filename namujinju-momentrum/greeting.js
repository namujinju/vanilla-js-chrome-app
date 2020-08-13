// html 태그 불러오기
const nameForm = document.querySelector(".js-nameform"),
  nameInput = nameForm.querySelector("input"),
  greeting = document.querySelector(".js-greeting"),
  greeting_main = document.querySelector("main");

const headerButton = document.querySelector(".header-button");
const chgNameBtn = document.querySelector(".change-name");

const changeNameText = "이름 바꾸기";
const cancelNameText = "취소";

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
  chgNameBtn.innerText = changeNameText;

  greeting_main.classList.remove(HIDING_CN);
  headerButton.classList.remove(HIDING_CN); // header 이름, 방향 바꾸기 버튼 보여주기
}

function askForName() {
  nameForm.classList.add(SHOWING_CN);
  nameForm.addEventListener("submit", submitName);
}

function changeCancel() {
  chgNameBtn.innerText = cancelNameText;
}

function handleName() {
  greeting.innerText = "";
  nameForm.classList.remove(HIDING_CN);
  askForName();
  changeCancel();
}

function loadName() {
  const currentUser = localStorage.getItem(NAME_LS);

  if (currentUser === null) {
    greeting_main.classList.add(HIDING_CN); // todo, did list hide
    headerButton.classList.add(HIDING_CN); // header 이름, 방향 바꾸기 버튼 삭제

    askForName();
  } else {
    paintGreeting(currentUser);
  }
  chgNameBtn.innerText = changeNameText;
}

function clickedChangeName() {
  if (chgNameBtn.innerText === changeNameText) {
    handleName();
  } else {
    loadName();
  }
}

function changeName() {
  chgNameBtn.addEventListener("click", clickedChangeName);
}

function init() {
  loadName();
  changeName();
}

init();
