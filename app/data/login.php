<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$data = file_get_contents("php://input");

if ($data == FALSE ) {
    echo("No data!");
} else {
    $postData = json_decode($data);
    $username = $postData->username;

    $dbh = new PDO('mysql:host=crud-box-1;dbname=tutub', 'tutub', 'password');
    $select = $dbh->prepare("SELECT username, password FROM customers WHERE username = '$username'");
    $select->execute();

    $outp = "";
    while ( $row = $select->fetch(PDO::FETCH_ASSOC)) {
       if ($outp != "") {$outp .= ",";}
       $outp .= '{"Username":"'  . $row["username"] . '",';
       $outp .= '"Password":"'. $row["password"]     . '"}';
    }

    $outp ='{"records":['.$outp.']}';
    $dbh = null;

    echo($outp);
}
?>