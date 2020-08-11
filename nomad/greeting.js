const form = document.querySelector(".js-form"),
  input = form.querySelector("input"),
  greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser", // LocalStorage
  SHOWING_CN = "showing"; // 보여줄 때 붙이는 태그

function saveName(text) {
  localStorage.setItem(USER_LS, text); // USER_LS, 즉 LocalStorage에 text를 저장
}

function handleSubmit(event) {
  event.preventDefault(); // 새로고침 방지
  const currentValue = input.value; // input의 값을 현재 값으로 저장
  paintGreeting(currentValue); // 사용자가 입력한 현재 값으로 인삿말을 보여줌
  saveName(currentValue); // LocalStorage에 사용자가 입력한 값을 저장
}

function askForName() {
  form.classList.add(SHOWING_CN); // form을 보여줌
  form.addEventListener("submit", handleSubmit); // submit 했을 때 LocalStorage에 입력값을 저장하는 함수 호출
}

function paintGreeting(text) {
  form.classList.remove(SHOWING_CN); // form에서 showing 클라스 지우기. form은 display가 none이므로 form은 안보여짐
  greeting.classList.add(SHOWING_CN); // 인삿말이 보여짐
  greeting.innerText = `Hello ${text}`;
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LS); // LocalStorage에 저장되어 있는 값을 불러옴.
  if (currentUser === null) {
    // 없으면 이름을 묻는 form 출력
    askForName();
  } else {
    // 있으면 인삿말 출력
    paintGreeting(currentUser);
  }
}

function init() {
  loadName();
}

init();
