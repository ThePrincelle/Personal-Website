<?php
	//PHP Email Sender
	//Created by Maxime Princelle
	header("Access-Control-Allow-Origin: *");
	$rest_json = file_get_contents("php://input");
	$_POST = json_decode($rest_json, true);

	require 'PHPMailer/src/PHPMailer.php';
	require 'PHPMailer/src/Exception.php';
	require 'PHPMailer/src/SMTP.php';

	use PHPMailer\PHPMailer\PHPMailer;
	use PHPMailer\PHPMailer\Exception;

	if ($_SERVER["REQUEST_METHOD"] == "POST") {

		$sender = 'Formulaire de contact - princelle.org';

		$namexp = $_POST['name'];
		$mailexp = $_POST['email'];
		$subject = $_POST['subject'];
		$message = $_POST['message'];

		//Check if email exists
		function conform_mail(){
			list($user, $domain) = explode('@', $GLOBALS['mailexp']);
			if (checkdnsrr($domain, 'MX')) {
				return true;
			}
			return false;
		}

		//Check URL
		function conform_from(){
			if (strstr($_SERVER['HTTP_REFERER'], 'princelle.org') !== false) {
				return true;
			}
			return false;
		}

		function conform_now(){
			if (strstr($_SERVER['HTTP_HOST'], 'princelle.org') !== false) {
				return true;
			}
			return false;
		}

		//Vérification des champs
		$block_terms_file = "./termsblock.txt";

		$block_terms = explode("\n", file_get_contents($block_terms_file));
		array_pop($block_terms);

		function conform_content(){
			$values = [$GLOBALS['namexp'], $GLOBALS['subject'], $GLOBALS['mailexp']];

			foreach ($block_terms as $term) {
				foreach ($values as $value) {
					if (stripos($value, $term) !== false) { //Match
						return true;
					}
				}
			}

			return false;
		}

		//Récupération de l'adresse IP
		function getRealIpAddr() {  
			if (!empty($_SERVER['HTTP_CLIENT_IP'])) {  //check ip from share internet
				$ip=$_SERVER['HTTP_CLIENT_IP'];
			} 
			elseif (!empty($_SERVER['HTTP_X_FORWARDED_FOR'])) {  //to check ip is pass from proxy
				$ip=$_SERVER['HTTP_X_FORWARDED_FOR'];
			} 
			else {
				$ip=$_SERVER['REMOTE_ADDR'];
			}

			return $ip;
		}

		//Fonction envoi mail
		function sendMail(){

			http_response_code(200);

			$g_namexp = $GLOBALS['namexp'];
			$g_mailexp = $GLOBALS['mailexp'];
			$g_subject = $GLOBALS['subject'];
			$g_message = $GLOBALS['message'];

			$ip = getRealIpAddr();

			$sender = $GLOBALS['sender'];

			if ( ($g_namexp == "" | $g_subject == "" | $g_message == "" | $g_mailexp == "") ) {
				header("Location: ../entry.html");
				exit();
			}

			$to = "princellemaxime@gmail.com";
			$sub = "Msg de $g_namexp : $g_subject";
			$contenu = "<b>Nom expéditeur: </b> $g_namexp <br><br> <b>Email expéditeur: </b> $g_mailexp <br> <b>Adresse IP : </b> $ip <br><br> <b>Sujet: </b> $g_subject <br><br> <b>Message: </b><br> $g_message";

			$mail = new PHPMailer(false);                              // Passing `true` enables exceptions
			try
			{
				//Server settings
				$mail->SMTPDebug = 0;                                 // Enable verbose debug output
				$mail->CharSet = 'UTF-8';
				$mail->Encoding = 'base64';
				$mail->isSendMail();                                      // Set mailer to use SMTP
				$mail->Host = 'auth.smtp.1and1.fr;smtp.ionos.fr';  // Specify main and backup SMTP servers
				$mail->SMTPAuth = true;                               // Enable SMTP authentication
				$mail->Username = 'maxime@princelle.org';                 // SMTP username
				$mail->Password = 'oCsy7r#FAvJ*';                           // SMTP password
				$mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
				$mail->Port = 587;                                    // TCP port to connect to

				//Recipients
				$mail->setFrom('contact@princelle.org', $sender);
				$mail->addAddress($to, 'Contact - Maxime Princelle');
				$mail->AddReplyTo($g_mailexp, $g_namexp);

				//Content
				$mail->isHTML(true);                                  // Set email format to HTML
				$mail->Subject = $sub;

				$mail->Body = $contenu;
				$mail->AltBody = $contenu;

				$mail->send();
				
				echo(json_encode(array("sent" => true)));
				exit();
			}
			catch (Exception $e)
			{
				echo(json_encode(["sent" => false, "message" => "ERROR"]));
				exit();
			}
		}

		function check_conform(){
			if ( conform_mail() && conform_from() && conform_now() ){
				return true;
			}
			return false;
		}

		function spam(){
			echo(json_encode(["sent" => false, "message" => "SPAM"]));
			exit();
		}

		if( check_conform() ){
			sendMail();
		} else {
			spam();
		}
	}
?>
