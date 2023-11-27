<?php 
session_start();
require 'function.php';

// cek cookie

if (isset($_COOKIE['id']) && isset($_COOKIE['key']) ) {
    $id = $_COOKIE['id'];
    $key = $_COOKIE["key"];

    // ambil username berdasarkan id 

    $result = mysqli_query($conn, "SELECT username FROM data_registrasi WHERE 
            id = $id");
    $row =  mysqli_fetch_assoc($result);

    // cek cookie username
    if ($key === hash('sha256', $row['username'])) {
        $_SESSION["login"] = true;
    }
}


// cek udah login atau blm
if (isset($_SESSION["login"])) {
    header("location: index.php");
    exit;
}


if (isset($_POST["login"])) {
    
    $username = $_POST["username"];
    $password = $_POST["password"];
echo $username;
// exit;
    echo $username;
    $result = mysqli_query($conn, "SELECT * FROM data_registrasi WHERE username = '$username'");

    // cek username
    if (mysqli_num_rows($result) === 1) {
        // cek password
        $row = mysqli_fetch_assoc($result);
        if (password_verify($password, $row["password"]) ) {
            // cek session
            $_SESSION["login"] = true;

            // cek remember me
            if (isset($_POST["remember"])) {
                // buat cookie

                setcookie('id', $row['id'], time()+60);
                setcookie('key', hash('sha256', $row['username']), time()+60);
            }

            header("location: index.php");
            exit;
        }
    }
    $error = true;
}



?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
</head>
<link rel="stylesheet" href="css.css">
<body>
<div class="countener">
    <div class="boxlogin">
        <h1>LOGIN</h1>
        <?php if (isset($error)) : ?>
            <p style="color: red;">Username / Password Salah!</p>
        <?php endif;?>
        <form action="" method="post">
            <label for="username"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
  <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
</svg></label>
            <input type="text" name="username" id="username" placeholder=" Username.." required>
            <!-- <br> -->
            <label for="password" id="password"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-key-fill" viewBox="0 0 16 16">
  <path d="M3.5 11.5a3.5 3.5 0 1 1 3.163-5H14L15.5 8 14 9.5l-1-1-1 1-1-1-1 1-1-1-1 1H6.663a3.5 3.5 0 0 1-3.163 2zM2.5 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
</svg></label>
            <input type="password" name="password" id="password" placeholder=" Password.." required>
            <!-- <br> -->
            <label for="remember" id="remember1">Remember me?</label>
            <input type="checkbox" name="remember" id="remember">
            <!-- <br> -->
            <button type="submit" name="login" id="login" onclick="kirimData">Login</button>
            <a href="registrasi.php" id="Create">Create Account</a>
            
            
        </form>
    </div>

    
</div>
<div class="footer">

<svg class="waves" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"

viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">

<defs>

<path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />

</defs>

<g class="parallax">

<use xlink:href="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7" />

<use xlink:href="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />

<use xlink:href="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />

<use xlink:href="#gentle-wave" x="48" y="7" fill="#fff" />

</g>

</svg>

</div>

<div class="content flex">

<p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
</svg> 2024 | Drayn</p>

</div>
<script>
    function kirimData() {
            var data = document.getElementsByName("username")[0].value;
            var formAction = "halaman2.php"; // Tentukan halaman pertama sebagai default

            // Sesuaikan halaman tujuan berdasarkan kondisi tertentu
            console.log(data);
            // Mengatur action formulir berdasarkan halaman tujuan yang telah diubah
            document.getElementById("myForm").action = formAction;

            // Submit formulir setelah action diubah
            document.getElementById("myForm").submit();
        }
</script>

</body>
</html>