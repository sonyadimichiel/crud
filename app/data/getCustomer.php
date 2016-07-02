<?php
/**
 * Created by PhpStorm.
 * User: sonyadimichiel
 * Date: 29/06/2016
 * Time: 6:08 PM
 */

namespace Customer;

class Customer
{
    protected $username;
    protected $password;

    function __construct(){

    }

    public function setUsername($username) {
        $this->username = $username;
    }
    public function getUsername()
    {
        return $this->username;
    }

    public function setPassword($password) {
        $this->password = $password;
    }

    public function getPassword() {
        return $this->password;
    }
}

$myUser = new Customer();
$myUser->setUsername('sonyadimichiel@gmail.com.au');
$myUser->setPassword('password');

print $myUser->getUsername();
print $myUser->getPassword();
