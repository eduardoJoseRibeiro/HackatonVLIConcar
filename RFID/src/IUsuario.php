<?php

interface IUsuario
{
    //Getters
    public function getId();
    public function getNome();
    public function getCodigo();

    //Setters
    public function setId($id);
    public function setNome($nome);
    public function setCodigo($codigo);
}