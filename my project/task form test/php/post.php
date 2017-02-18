<html>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<body>

<?php
echo "欢迎您的登陆<br>";
echo "您的输入信息如下<br>";
echo "姓名:".$_POST['name']."<br>";
echo "联系方式:".$_POST['call']."<br>";
echo "电子邮箱:".$_POST['mail']."<br>";
echo "您的建议:".$_POST['problem']."<br>";

$host="localhost";
$user="root";
$pass="458046505";

$con=mysql_connect("localhost","root","458046505");
if(!$con)
{die("could not connect:".mysql_error());
}
/*if(mysql_query("CREATE DATABASE my_db",$con))
	{echo "Database created"."<br>";}
else
    { echo "Error creating database".mysql_error()."<br>";}
*/
/*mysql_select_db("my_db",$con);*/

mysql_select_db("my_db",$con);



$sql = "INSERT INTO Suggestion (Name,Phone,Mail,Problem) VALUES
('$_POST[name]','$_POST[call]','$_POST[mail]','$_POST[problem]')";
if  (!mysql_query($sql,$con))
{die ('Error:'.mysql_error());}
echo "Your suggestion added";
/*
$sql="CREATE TABLE Suggestion
(Name nvarchar(15),
Phone int(15),
Mail varchar(50),
Problem nvarchar(1200),
)";
*/


mysql_close($con);
?>




</body>
</html>