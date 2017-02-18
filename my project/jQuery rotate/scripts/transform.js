/**
 * Created by YD on 5/7/15.
 * Base on Jquery
 */
var ele ;

//自定义函数
$.fn.extend({
    rotate: function () {
        ele = this ;
        setInterval('singleTransform()',5);
    }
});

//初始角度
var degree = 0;

//单次旋转
function singleTransform() {
    //一次增加50度
    degree = degree + 50 * Math.PI / 180;
    ele.css("transform","rotateY("+degree+"deg)");
}