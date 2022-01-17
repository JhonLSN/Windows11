var recycle = document.querySelector(".main__shortcut-recycle")
var chrome = document.querySelector(".main__shortcut-chrome")
var edge = document.querySelector(".main__shortcut-edge")
var folder = document.querySelector(".main__shortcut-folder")
var vscode = document.querySelector(".main__shortcut-vscode")
  /* o x inicial do drag*/
  dragOfX = 0,
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




/* adiciona o evento que começa o drag */
recycle.addEventListener("mousedown", dragStartRecycle);

