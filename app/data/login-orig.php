<?php
/**
 * Created by PhpStorm.
 * User: sonyadimichiel
 * Date: 29/06/2016
 * Time: 7:56 PM
 */
    $postdata = file_get_contents("php://input");
    $request = json_decode($postdata);
    @$username = $request->username;
    @$password = $request->password;
    echo username;
?>