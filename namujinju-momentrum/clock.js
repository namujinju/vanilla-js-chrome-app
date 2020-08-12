const clockJs = document.querySelector(".js-clock");
const clockTitle = clockJs.querySelector("h1");

function makeTimeTwo(time) {
  return `${time < 10 ? `0${time}` : `${time}`}`;
}

function showTime() {
  const nowDate = new Date(); // new 연산자는 사용자 정의 객체 타입 또는 내장 객체 타입의 인스턴스를 생성한다.
  const nowHour = nowDate.getHours();
  const nowMinute = nowDate.getMinutes();
  const nowSeconds = nowDate.getSeconds();

  clockTitle.innerText = `${makeTimeTwo(nowHour)}:${makeTimeTwo(
    nowMinute
  )}:${makeTimeTwo(nowSeconds)}`;
}

function init() {
  showTime();
  setInterval(showTime, 1000);
}

init();
