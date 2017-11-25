<?php

class Usuario implements IUsuario
{
    //Atributos
    private $id, $nome, $codigo;

    //Getters
    public function getId()
    {
        return $this->id;
    }
    public function getNome()
    {
        return $this->nome;
    }
    public function getCodigo()
    {
        return $this->codigo;
    }

    //Setters
    public function setId($id)
    {
        $this->id = $id;
        return $this;
    }
    public function setNome($nome)
    {
        $this->nome = $nome;
        return $this;
    }
    public function setCodigo($codigo)
    {
        $this->codigo = $codigo;
        return $this;
    }

}