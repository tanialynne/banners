<?php

if (isset($_POST['total'])){
$myfile = fopen("debate.js", "w") or die("Unable to open file!");
$txt = $_POST['total'];
fwrite($myfile, $txt);
fclose($myfile);
}

?>