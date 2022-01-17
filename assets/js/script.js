var dragMe = document.querySelector(".drag_me")
var chrome = document.querySelector(".main__shortcut-chrome")
  /* o x inicial do drag*/
  dragOfX = 0,
  /* o y inicial do drag */
  dragOfY = 0;

/* ao segurar o elemento */
function dragStart(e) {
  /* define o x inicial do drag */
  dragOfX = e.pageX - dragMe.offsetLeft;
  /* define o y inicial do drag */
  dragOfY = e.pageY - dragMe.offsetTop;

  /* adiciona os eventos */
  addEventListener("mousemove", dragMove);
  addEventListener("mouseup", dragEnd);
}

/* ao ser arrastado */
function dragMove(e) {
  /* atualiza a posição do elemento */
  dragMe.style.left = (e.pageX - dragOfX) + 'px';
  dragMe.style.top = (e.pageY - dragOfY) + 'px';
}

/* ao terminar o drag */
function dragEnd() {
  /* remove os eventos */
  removeEventListener("mousemove", dragMove);
  removeEventListener("mouseup", dragEnd);
}

// chrome1
function start(e) {
  /* define o x inicial do drag */
  dragOfX = e.pageX - chrome.offsetLeft;
  /* define o y inicial do drag */
  dragOfY = e.pageY - chrome.offsetTop;

  /* adiciona os eventos */
  addEventListener("mousemove", move);
  addEventListener("mouseup", end);
}

function move(e) {
  /* atualiza a posição do elemento */
  chrome.style.left = (e.pageX - dragOfX) + 'px';
  chrome.style.top = (e.pageY - dragOfY) + 'px';
}

function end() {
  /* remove os eventos */
  removeEventListener("mousemove", move);
  removeEventListener("mouseup", end);
}

/* adiciona o evento que começa o drag */
dragMe.addEventListener("mousedown", dragStart);
chrome.addEventListener("mousedown", start);
