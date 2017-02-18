function checkuser() {
/*
var call =  document.getElementById("2");
var mail =  document.getElementById("3");*/
/*
var username = document.getElementById("one");
var usercall = document.getElementById("two");
var usermail = document.getElementById("thr");
var usertext = document.getElementById("four");

if(form.name.value=="")
{
	alert("请输入您的姓名");
	form.name.focus();
	return false;
}

if(form.call.value!="/^1[34578]\d{9}$/")
{
	showcall.style.display="";
	form.name.focus();
	return false;
}

if(form.mail.value!="/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])$/")
{
	showcall.style.display="";
	form.mail.focus();
	return false;
}
document.myform.submit();

*/
var usercall=document.getElementById("two");
var usermail=document.getElementById("thr");
var reg = /^1[34578]\d{9}\b/;
var meg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-]+)\b/
if(       !reg.test(usercall.value) )
{
	alert("请输入正确电话号码");
	return false;
}
if(       !meg.test(usermail.value) )
{
	alert("请输入正确电子邮箱");
	return false;
}


}

/*正则两种方式var re = eval(""),*/