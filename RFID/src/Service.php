<?php

class Service implements IService
{
    private $db;
    private $usuario;
    private $tabela = 'usuarios';

    public function __construct(IConn $db, IUsuario $usuario)
    {
        $this->db = $db->connect();
        $this->usuario = $usuario;
    }

    public function validaEntrada($codigo)
    {
        $query = "SELECT nome FROM {$this->tabela} WHERE codigo = :codigo";
        $stmt = $this->db->prepare($query);
        $stmt->bindValue(':codigo', $this->usuario->getCodigo());
        $stmt->execute();

        return $stmt->fetch(\PDO::FETCH_ASSOC);
    }

    public function listarUsuarios()
    {
        try
        {
            $query = "Select * from {$this->tabela}";
            $stmt = $this->db->prepare($query);
            $stmt->execute();
            return $stmt->fetchAll(\PDO::FETCH_ASSOC);
        }
        catch(PDOException $e)
        {
            $this->error = $e->getMessage();
            exit;
        }
    }
    public function ultimaEntrada()
    {
        try
        {
            $ultimoEntrada = "select id_usuario FROM public.usuarios_entrada ORDER BY id_entrada DESC LIMIT 1";
            $stmt = $this->db->prepare($ultimoEntrada);
            $stmt->execute();

            $ultimoEntrada = $stmt->fetchAll(PDO::FETCH_ASSOC);

            $valor = explode('"', $ultimoEntrada[0]['id_usuario']);

            $query = "SELECT * FROM public.usuarios WHERE id_usuario = {$valor[0]}";
            $stmt = $this->db->prepare($query);
            $stmt->execute();

            return $stmt->fetchAll(\PDO::FETCH_ASSOC);

        }
        catch(PDOException $e)
        {
            $this->error = $e->getMessage();
            exit;
        }
    }
    public function listarIdHora(){
        $query = "SELECT id_usuario, horario_entrada FROM usuarios_entrada ORDER BY horario_entrada DESC";
        $stmt = $this->db->prepare($query);
        $stmt->execute();

        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }
    public function listarNome($id){
        $query = "SELECT nome FROM usuarios WHERE ID_USUARIO = :id";
        $stmt = $this->db->prepare($query);
        $stmt->bindValue(':id', $id);
        $stmt->execute();

        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }
}