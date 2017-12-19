<?php 
	$responses['what is your name'] = "My name is Mo-Pal.";
	// echo "Hello world";
	$responses['tell me about yourself'] = "I am a chatbot. I'm still learning a lot of things so please forgive me if I can't answer you.";

	$responses['m fine'] = "Good";
	$q = $_GET["q"];

	$response = "";

	if ($q != "") {
		# code...
		$q = strtolower($q);
		foreach ($responses as $r => $value) {
			# code...
			if (strpos($r, $q) !== false) {
				# code...
				$response .= $value;
			}
			
		}
	}
	$noresponse = "Sorry I'm still learning. Hence my responses are limited.";
	echo $response === "" ? $noresponse : $response;
?>