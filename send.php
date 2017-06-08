<?php
//Принимаем данные с поста
$name = $_POST['name'];
$phone = $_POST['phone'];
$what = $_POST['what'];
//Указываем на какой E-mail отправлять письмо
$to = "RomaLytar@gmail.com" ;
//Тема и само сообщения
$subject = "Заявления с сайта Жалюзи";
$massage = "
Письмо отправленно оз моей формы. <br />
Пользеватель хочет!: ".htmlspecialchars($what)."<br / >
Имя: ".htmlspecialchars($name)."<br />
Телефон: ".htmlspecialchars($phone);
$headers = "From: mysite.ru <site-email@maysite.ru\r\nContent-type: text/html;
charset=UTF-8 \r\n";
mail ($to, $subject, $massage, $headers);
header('Lication: thanks.html');
exit();
?>