function positionMessage() {
  if (!document.getElementById) return false;
  if (!document.getElementById("message")) return false;
  var elem = document.getElementById("message");
  elem.style.position = "absolute";
   if (!document.body.clientWidth) return false;
  elem.style.left =(parseInt(document.body.clientWidth)*0.5-110)+ "px";
  elem.style.top = "50px";
   if (!document.body.clientHeight) return false;
  var y =(parseInt(document.body.clientHeight)*0.5-35);
  moveElement("message",y,20);}
addLoadEvent(positionMessage);