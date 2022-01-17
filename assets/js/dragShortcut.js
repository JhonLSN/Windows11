var recycle = document.querySelector(".main__shortcut-recycle")
var chrome = document.querySelector(".main__shortcut-chrome")
var edge = document.querySelector(".main__shortcut-edge")
var folder = document.querySelector(".main__shortcut-folder")
var vscode = document.querySelector(".main__shortcut-vscode")

/* o x inicial do drag*/
dragOfX = 0;
/* o y inicial do drag */
dragOfY = 0;

/* ao segurar o elemento */
function dragStartRecycle(e) {
  /* define o x inicial do drag */
  dragOfX = e.pageX - recycle.offsetLeft;
  /* define o y inicial do drag */
  dragOfY = e.pageY - recycle.offsetTop;

  /* adiciona os eventos */
  addEventListener("mousemove", dragMoveRecycle);
  addEventListener("mouseup", dragEndRecycle);
}

/* ao ser arrastado */
function dragMoveRecycle(e) {
  /* atualiza a posição do elemento */
  recycle.style.left = (e.pageX - dragOfX) + 'px';
  recycle.style.top = (e.pageY - dragOfY) + 'px';
}

/* ao terminar o drag */
function dragEndRecycle() {
  /* remove os eventos */
  removeEventListener("mousemove", dragMoveRecycle);
  removeEventListener("mouseup", dragEndRecycle);
}

// Chrome
function dragStartChrome(e) {
  dragOfX = e.pageX - chrome.offsetLeft;
  dragOfY = e.pageY - chrome.offsetTop;

  addEventListener("mousemove", dragMoveChrome);
  addEventListener("mouseup", dragEndChrome);
}


function dragMoveChrome(e) {
  chrome.style.left = (e.pageX - dragOfX) + 'px';
  chrome.style.top = (e.pageY - dragOfY) + 'px';
}


function dragEndChrome() {
  removeEventListener("mousemove", dragMoveChrome);
  removeEventListener("mouseup", dragEndChrome);
}

// Edge
function dragStartEdge(e) {
  dragOfX = e.pageX - edge.offsetLeft;
  dragOfY = e.pageY - edge.offsetTop;

  addEventListener("mousemove", dragMoveEdge);
  addEventListener("mouseup", dragEndEdge);
}


function dragMoveEdge(e) {
  edge.style.left = (e.pageX - dragOfX) + 'px';
  edge.style.top = (e.pageY - dragOfY) + 'px';
}


function dragEndEdge() {
  removeEventListener("mousemove", dragMoveEdge);
  removeEventListener("mouseup", dragEndEdge);
}

// Folder
function dragStartFolder(e) {
  dragOfX = e.pageX - folder.offsetLeft;
  dragOfY = e.pageY - folder.offsetTop;

  addEventListener("mousemove", dragMoveFolder);
  addEventListener("mouseup", dragEndFolder);
}


function dragMoveFolder(e) {
  folder.style.left = (e.pageX - dragOfX) + 'px';
  folder.style.top = (e.pageY - dragOfY) + 'px';
}


function dragEndFolder() {
  removeEventListener("mousemove", dragMoveFolder);
  removeEventListener("mouseup", dragEndFolder);
}

// VsCode
function dragStartVsCode(e) {
  dragOfX = e.pageX - vscode.offsetLeft;
  dragOfY = e.pageY - vscode.offsetTop;

  addEventListener("mousemove", dragMoveVsCode);
  addEventListener("mouseup", dragEndVsCode);
}


function dragMoveVsCode(e) {
  vscode.style.left = (e.pageX - dragOfX) + 'px';
  vscode.style.top = (e.pageY - dragOfY) + 'px';
}


function dragEndVsCode() {
  removeEventListener("mousemove", dragMoveVsCode);
  removeEventListener("mouseup", dragEndVsCode);
}




/* adiciona o evento que começa o drag */
recycle.addEventListener("mousedown", dragStartRecycle);
chrome.addEventListener("mousedown", dragStartChrome);
edge.addEventListener("mousedown", dragStartEdge);
folder.addEventListener("mousedown", dragStartFolder);
vscode.addEventListener("mousedown", dragStartVsCode);

