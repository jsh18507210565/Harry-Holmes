function scroll(){
if (!document.getElementById) return false;
  if (!document.getElementById("pageonedown")) return false;
  var pageone = document.getElementById("pageonedown");
  var pagetwo = document.getElementById("pagetwodown");
  var pagethree = document.getElementById("pagethreedown");
  var pagefour = document.getElementById("pagefourdown");
  var pagefive = document.getElementById("pagefiveup");

  var distaance = document.getElementById("welcome-page");
   
    pageone.onclick =function(){
     	window.scrollTo(0,distaance.clientHeight);
     }

    pagetwo.onclick =function(){
     	window.scrollTo(0,2*distaance.clientHeight);
     }

     pagethree.onclick =function(){
     	window.scrollTo(0,3*distaance.clientHeight);
     }

     pagefour.onclick =function(){
     	window.scrollTo(0,4*distaance.clientHeight);
     }


    pagefive.onclick =function(){
     	window.scrollTo(0,0);
     }


   }
addLoadEvent(scroll);