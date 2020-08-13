const didForm = document.querySelector(".js-didform"),
  didInput = didForm.querySelector("input"),
  didList = document.querySelector(".js-didlist");


const DID_LS = "dids";

let dids = [];

function deleteDid(event) {
  const btn = event.target,
    li = btn.parentNode; // 내가 클릭한 delBtn // 내가 클릭한 delBtn의 부모 li
  didList.removeChild(li);
  // dids 리스트 중 각 요소의 id와 현재 li의 id와 일치하지 않는 요소만 출력
  // li의 id와 일치하는 요소만 걸러짐
  const cleandids = dids.filter(function (did) {
    return did.id !== parseInt(li.id);
  });
  dids = cleandids; // 제거해서 나온 리스트를 dids 리스트에 저장
  saveDid(); // Local Storage에 제거한 값을 저장
}

function saveDid() {
  localStorage.setItem(DID_LS, JSON.stringify(dids));
}

function paintDid(text) {
  // html 태그 (to do list tag) 만들기
  const li = document.createElement("li"),
    delBtn = document.createElement("button"),
    span = document.createElement("span");
  const newID = dids.length + 1;

  span.innerText = text;
  delBtn.innerText = "❌";
  delBtn.addEventListener("click", deleteDid);
  li.appendChild(delBtn);
  li.appendChild(span);
  li.id = newID;
  didList.appendChild(li);
  // js에서 변수를 선언할 때는 python과는 다르게 항상 앞에 const, let, var를 붙여야 함
  const didObj = {
    text,
    id: newID,
  };
  dids.push(didObj); // dids 배열에 did 오브젝트 추가

  saveDid();
}

function submitDid(event) {
  event.preventDefault();
  text = didInput.value;
  paintDid(text);
  didInput.value = ""; // to do 입력하고 초기화
}

// Local Storage에 있는 to do list 가져오기
function loadDid() {
  const loadedDids = localStorage.getItem(DID_LS);
  if (loadedDids !== null) {
    const parsedDids = JSON.parse(loadedDids);
    parsedDids.forEach(function (did) {
      paintDid(did.text);
    });
  }
}

function init() {
  loadDid();
  didForm.addEventListener("submit", submitDid);
}

init();
