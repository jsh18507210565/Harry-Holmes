﻿//禁用手机默认的触屏滚动行为
document.addEventListener('touchmove', function(event) {
    event.preventDefault();
}, false);


//touchstart事件
function touchSatrtFunc(evt) {
    try {
        //evt.preventDefault(); //阻止触摸时浏览器的缩放、滚动条滚动等
 
        var touch = evt.touches[0]; //获取第一个触点
        var x = Number(touch.pageX); //页面触点X坐标
        var y = Number(touch.pageY); //页面触点Y坐标
        //记录触点初始位置
        startX = x;//不加var 作用域全局
        startY = y;
     
 
    } catch (e) {
        alert('touchSatrtFunc：' + e.message);//try catch 返回错误
    }
}

//touchmove事件，这个事件无法获取坐标
function touchMoveFunc(evt) {
    try { 
        //evt.preventDefault(); //阻止触摸时浏览器的缩放、滚动条滚动等
        var touch = evt.touches[0]; //获取第一个触点
        var x = Number(touch.pageX); //页面触点X坐标
        var y = Number(touch.pageY); //页面触点Y坐标
 
 
//document.getElementById("version").innerHTML = "原:"+startY+"   "+"现:"+y;
        //判断滑动方向 上下
         
        if (y - startY > 100) {
           //你自己的方法 我是用来翻页的一样的
        } else if(y - startY < -100){
           //你自己的方法
        }
    } catch (e) {
        alert('touchMoveFunc：' + e.message);
    }
}

//touchend事件
function touchEndFunc(evt) {
    try {
        //evt.preventDefault(); //阻止触摸时浏览器的缩放、滚动条滚动等
 
 
    } catch (e) {
        alert('touchEndFunc：' + e.message);
    }
}



    //绑定事件

function bindEvent() {
    document.addEventListener('touchstart', touchSatrtFunc, false);
    document.addEventListener('touchmove', touchMoveFunc, false);
    document.addEventListener('touchend', touchEndFunc, false);
}
 
//判断是否支持触摸事件
function isTouchDevice() {
    //document.getElementById("version").innerHTML = navigator.appVersion;
 
    try {
        document.createEvent("TouchEvent");
        //alert("支持TouchEvent事件！");
 
        bindEvent(); //绑定事件
    } catch (e) {
       // alert("不支持TouchEvent事件！" + e.message);
    }
} 

addLoadEvent(isTouchDevice);