function showTime() {
  clock = document.querySelector(".js-clock");
  nowDate = new Date(); // new 연산자는 사용자 정의 객체 타입 또는 내장 객체 타입의 인스턴스를 생성한다.

  clock.innerText = `${nowDate.getHours()}:${nowDate.getMinutes()}:${nowDate.getSeconds()}`;
}

function init() {
  showTime();
  setInterval(showTime, 1000);
}

init();
