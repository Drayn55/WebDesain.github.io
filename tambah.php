<?php 
// cek udah login atau blm
session_start();

if (!isset($_SESSION["login"])) {
    header("location: login.php");
    exit;
}
// apakah tombol submit udh di tekan atau blm
require 'function.php';

if ( isset($_POST["submit"])) {
            // cek apakah data berhasil untuk di tambahkan atau tidak
    if (tambah($_POST) > 0 ) {
        echo "
        <script>
            alert('Data berhasil di tambahkan!');
            document.location.href = 'index.php'
        </script>            
        ";
    } else {
        echo "
        <script>
            alert('Data gagal di tambahkan!');
            document.location.href = 'index.php'
        </script>            
        ";
    }




}

?>


<!DOCTYPE html>
<html lang="en">
<head>
    <title>Tambah Data</title>
</head>
<body>
    <h1>Tambah Data Siswa</h1>

    <form action="" method="post"">
        <ul>
            <li>
                <label for="LAHIR">Lahir</label>
                <input id="LAHIR" type="text" name="LAHIR" required>
            </li>
            <br>
            <li>
                <label for="NAMA">Nama</label>
                <input id="NAMA" type="text" name="NAMA" required>
            </li>
            <br>
            <li>
                <label for="EMAIL">Email</label>
                <input id="EMAIL" type="text" name="EMAIL" required>
            </li>
            <br>
            <li>
                <label for="JURUSAN">Jurusan</label>
                <input id="JURUSAN" type="text" name="JURUSAN" required>
            </li>
            <br>
            <li>
                <button type="submit" name="submit">Kirim..</button>
            </li>
        </ul>

    </form>

</body>
</html>