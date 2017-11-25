<?php

require_once "src/conexao.php";

$usuario = new Usuario();
$service = new Service($db,$usuario);
$usuarios = $service->listarUsuarios();

echo json_encode($usuarios);