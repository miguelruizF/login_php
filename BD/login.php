<?php   
include_once "conexion.php";
$objeto = new Conexion();
$conexion = $objeto->Conectar();

//RECEPCION DE DATOS DESDE AJAX
$usuario = (isset($_POST['usuario'])) ? $_POST['usuario'] : "";
$password = (isset($_POST['password'])) ? $_POST['password'] : "";

$pass = md5($password); //Encripta el password enviada y se compara con la de la base de datos

$consulta = "SELECT * FROM usuarios_oek WHERE usuario = '$usuario' AND password = '$pass'";
$resultado = $conexion -> prepare($consulta);   
$resultado -> execute();

if($resultado->rowCount() >= 1){
    $data =$resultado->fetchAll(PDO::FETCH_ASSOC);
    $_SESION["s_usuario"] = $usuario;
}else{
    $_SESION["s_usuario"] = null;
    $data = null;
}

print json_encode($data);
$conexion = null;