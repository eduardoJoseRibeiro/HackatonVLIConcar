<?php
require_once "src/conexao.php";

$usuario = new Usuario();
$service = new Service($db, $usuario);
$idHora = $service->listarIdHora();
$entrada = [];

for($i = 0; $i < count($idHora); $i++){
    $entrada[$i]['nome'] = $service->listarNome($idHora[$i]['id_usuario']);
    $entrada[$i]['horario_entrada'] = $idHora[$i]['horario_entrada'];
}
echo json_encode($entrada);