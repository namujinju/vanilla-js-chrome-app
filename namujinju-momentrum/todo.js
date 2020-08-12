const toDoForm = document.querySelector(".js-todoform"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".js-todolist");

const TODO_LS = "toDos";
const TODID_LS = "toDids";

let toDos = [];

function saveToDo() {
  localStorage.setItem(TODO_LS, JSON.stringify(toDos));
}

function checkToDo(event) {
  const checkBtn = event.target,
    checkli = checkBtn.parentNode;
  toDoList.removeChild(checkli);
  const checkToDo = toDos.filter(function (todo) {
    return todo.id === parseInt(checkli.id);
  });

  paintDid(checkToDo[0].text);
  toDos = toDos.filter(function (toDo) {
    return toDo.id !== parseInt(checkli.id);
  });
  saveToDo();

  // localStorage.setItem(DID_LS, JSON.stringify(checkToDo));
}

function deleteToDo(event) {
  const btn = event.target,
    li = btn.parentNode; // 내가 클릭한 delBtn // 내가 클릭한 delBtn의 부모 li
  toDoList.removeChild(li);
  // toDos 리스트 중 각 요소의 id와 현재 li의 id와 일치하지 않는 요소만 출력
  // li의 id와 일치하는 요소만 걸러짐
  const cleanToDos = toDos.filter(function (toDo) {
    return toDo.id !== parseInt(li.id);
  });
  toDos = cleanToDos; // 제거해서 나온 리스트를 toDos 리스트에 저장
  saveToDo(); // Local Storage에 제거한 값을 저장
}

function paintTodo(text) {
  // html 태그 (to do list tag) 만들기
  const li = document.createElement("li"),
    delBtn = document.createElement("button"),
    span = document.createElement("span"),
    checkBtn = document.createElement("button");
  const newID = toDos.length + 1;

  span.innerText = text;
  delBtn.innerText = "❌";
  delBtn.addEventListener("click", deleteToDo);
  checkBtn.innerText = "✔️";
  checkBtn.addEventListener("click", checkToDo);

  li.appendChild(delBtn);
  li.appendChild(checkBtn);
  li.appendChild(span);
  li.id = newID;
  toDoList.appendChild(li);
  // js에서 변수를 선언할 때는 python과는 다르게 항상 앞에 const, let, var를 붙여야 함
  const toDoObj = {
    text,
    id: newID,
  };
  toDos.push(toDoObj); // toDos 배열에 toDo 오브젝트 추가

  saveToDo();
}

function submitToDo(event) {
  event.preventDefault();
  text = toDoInput.value;
  paintTodo(text);
  toDoInput.value = ""; // to do 입력하고 초기화
}

// Local Storage에 있는 to do list 가져오기
function loadToDo() {
  const loadedToDos = localStorage.getItem(TODO_LS);
  if (loadedToDos !== null) {
    const parsedToDos = JSON.parse(loadedToDos);
    parsedToDos.forEach(function (toDo) {
      paintTodo(toDo.text);
    });
  }
}

function init() {
  loadToDo();
  toDoForm.addEventListener("submit", submitToDo);
}

init();
