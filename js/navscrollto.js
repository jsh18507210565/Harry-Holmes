var currentPosition,timer;  
function GoTop(){  
        timer=setInterval("runToTop()",1);/*在制定周期内，按固定间隔调用函数，单位毫秒*/  
    }  
function runToTop(){  
        currentPosition=document.documentElement.scrollTop || document.body.scrollTop; /*浏览器被卷起的高度*/  
        currentPosition-=5;  /*浏览器被卷起高度自减10*/
        if(currentPosition>0)  
        {  
            window.scrollTo(0,currentPosition);  
        }  
        else  
        {  
            window.scrollTo(0,0);  
            clearInterval(timer);  /*清楚由setInterval设置的timeout*/
        }  
    }  


function GoTwo(){
        timer=setInterval("runToTwo()",1);
   }
function runToTwo(){
        currentPosition=document.documentElement.scrollTop || document.body.scrollTop;
    var distaance = document.getElementById("welcome-page");   
        if(currentPosition>distaance.clientHeight){
        	currentPosition-=5; 
        }else{
        	 currentPosition+=5;
        }
        if(currentPosition-distaance.clientHeight<-5||currentPosition-distaance.clientHeight>5) 
        	{  
            window.scrollTo(0,currentPosition);  
            }else  
        {  
            window.scrollTo(0,distaance.clientHeight);  
            clearInterval(timer);  /*清楚由setInterval设置的timeout*/
        }  
}

function GoThree(){
        timer=setInterval("runToThree()",1);
   }
function runToThree(){
        currentPosition=document.documentElement.scrollTop || document.body.scrollTop;
    var distaance = document.getElementById("welcome-page");   
        if(currentPosition>2*distaance.clientHeight){
        	currentPosition-=5; 
        }else{
        	 currentPosition+=5;
        }
        if(currentPosition-2*distaance.clientHeight<-5||currentPosition-2*distaance.clientHeight>5) 
        	{  
            window.scrollTo(0,currentPosition);  
            }else  
        {  
            window.scrollTo(0,2*distaance.clientHeight);  
            clearInterval(timer);  /*清楚由setInterval设置的timeout*/
        }  
}   

function GoFour(){
        timer=setInterval("runToFour()",1);
   }
function runToFour(){
        currentPosition=document.documentElement.scrollTop || document.body.scrollTop;
    var distaance = document.getElementById("welcome-page");   
        if(currentPosition>3*distaance.clientHeight){
        	currentPosition-=5; 
        }else{
        	 currentPosition+=5;
        }
        if(currentPosition-3*distaance.clientHeight<-5||currentPosition-3*distaance.clientHeight>5) 
        	{  
            window.scrollTo(0,currentPosition);  
            }else  
        {  
            window.scrollTo(0,3*distaance.clientHeight);  
            clearInterval(timer);  /*清楚由setInterval设置的timeout*/
        }  
}      

function GoBottom(){  
        timer=setInterval("runToBottom()",1);/*在制定周期内，按固定间隔调用函数，单位毫秒*/  
    }  
function runToBottom(){  
        currentPosition=document.documentElement.scrollTop || document.body.scrollTop; /*浏览器被卷起的高度*/  
        var distaance = document.getElementById("welcome-page");
        currentPosition+=5;  /*浏览器被卷起高度自减10*/
        if(currentPosition-4*distaance.clientHeight<0)  
        {  
            window.scrollTo(0,currentPosition);  
        }  
        else  
        {  
            window.scrollTo(0,4*distaance.clientHeight);  
            clearInterval(timer);  /*清楚由setInterval设置的timeout*/
        }  
    }  