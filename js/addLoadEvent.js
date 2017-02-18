function addLoadEvent(func) {
  var oldonload = window.onload;  /*将现有事件处理函数存入变量*/
  if (typeof window.onload != 'function') {
    window.onload = func;         /*如果这个事件处理函数为空，就把新函数给他*/
  } else {
    window.onload = function() {
      oldonload();    /*如果已经有函数，将现有函数加入队尾*/
      func();
    }
  }
}