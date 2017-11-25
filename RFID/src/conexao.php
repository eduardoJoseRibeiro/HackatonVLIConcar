<?php

require_once "IConn.php";
require_once "Conn.php";
require_once "IUsuario.php";
require_once "Usuario.php";
require_once "IService.php";
require_once "Service.php";

$db = new Conn("localhost", "BD", "postgres", "Impenetravel3000");