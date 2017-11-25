<?php

require_once "src/conexao.php";

$usuario = new Usuario();
$service = new Service($db, $usuario);
$usuario = $service->ultimaEntrada();

echo json_encode($usuario);
