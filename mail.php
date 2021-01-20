<?php
//get data from form  
$nom = $_POST['nom'];
$mail= $_POST['mail'];
$message= $_POST['message'];
$to = "blandine.francois14@wanadoo.fr";
$subject = "Demande de renseignement";
$txt ="Nom = ". $nom . "\r\n  Email = " . $mail . "\r\n Message =" . $message;
if($mail!=NULL){
    mail($to,$subject,$txt);
}
//redirect
header("Location:thankyou.html");
?>

