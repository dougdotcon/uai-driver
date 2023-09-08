<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nome = $_POST['nome'];
    $email = $_POST['email'];
    $mensagem = $_POST['mensagem'];

    $to = "uaidriveroficial@gmail.com";
    $subject = "Mensagem de $nome";
    $headers = "From: $email";

    mail($to, $subject, $mensagem, $headers);
    header('Location: ./index.html?sent=true'); // Redireciona de volta para a página de contato
}
?>
