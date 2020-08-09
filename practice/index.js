// console.dir(title);

// DOM

// title.innerHTML = "Hello! JS";
// title.style.color = "red";
// document.title = "Changed Title";

// function handleResize(event) {
//   console.log(event);
//   console.log("I have been resized");
// }
// window.addEventListener("resize", handleResize); //handleResize()로 하지 말것. 이건 함수를 즉시 호출한다는 뜻.

// 조건문
const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

function handleClick() {
  //   const hasClass = title.classList.contains(CLICKED_CLASS);
  //   if (hasClass) {
  //     title.classList.remove(CLICKED_CLASS);
  //   } else {
  //     title.classList.add(CLICKED_CLASS);
  //   }

  title.classList.toggle(CLICKED_CLASS);
}

function init() {
  title.addEventListener("click", handleClick);
}

init();
//https://developer.mozilla.org/ko/docs/Web/events
