<?php 
require 'function.php';

if (isset($_POST["register"])) {
    if (registrasi($_POST) > 0) {
        echo "<script>
            alert('terimakasih telah register!');
        </script>";

    } else {
        echo mysqli_error($conn);
    }
    
}

?>



<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>registrasi</title>
</head>
<link rel="stylesheet" href="css.css">
<body>
<div class="contenerregis">
    <div class="logo">
    </div>
    <div class="boxregis">
        <h1>REGISTRASI</h1>
        <a href="login.php" id="Sebelum">&#8249; Sebelum</a>
        <form action="" method="post">
            <label for="username">Username :</label>
            <input type="text" name="username" id="username" placeholder="User Baru...">
                        
            <label for="password">Password :</label>
            <input type="password" name="password" id="password" placeholder="Password Baru...">

            <label for="password2">Konfirasi Password :</label>
            <input type="password" name="password2" id="password2" placeholder="Tulis Sekali Lagi...">

            <button type="submit" name="register" id="register">Kirim..</button>

        </form>
    </div>
</div>

</body>
</html>