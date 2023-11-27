<?php 
// cek udh login atau blm
session_start();

if (!isset($_SESSION["login"])) {
    header("location: login.php");
    exit;
}


// apakah tombol submit udh di tekan atau blm
require 'function.php';

// ambil data di URL
$id = $_GET["id"];

// query data mahasiswa bedasarkan id
$mhs = query("SELECT * FROM datamahasiswa WHERE id = $id")[0];

if ( isset($_POST["submit"])) {
            // cek apakah data berhasil untuk di tambahkan atau tidak
    if (ubah($_POST) > 0 ) {
        echo "
        <script>
            alert('Data berhasil di ubah!');
            document.location.href = 'index.php'
        </script>            
        ";
    } else {
        echo "
        <script>
            alert('Data gagal di ubah!');
            document.location.href = 'index.php'
        </script>            
        ";
    }
}

?>


<!DOCTYPE html>
<html lang="en">
<head>
    <title>Ubah Data</title>
</head>
<body>
    <h1>Ubah Data Siswa</h1>

    <form action="" method="post"">
        <input type="hidden" name="id" value="<?php echo $mhs["id"];?>">
        <ul>
            <li>
                <label for="LAHIR">Lahir</label>
                <input id="LAHIR" type="text" name="LAHIR" required value="<?= $mhs["LAHIR"]; ?>">
            </li>
            <br>
            <li>
                <label for="NAMA">Nama</label>
                <input id="NAMA" type="text" name="NAMA" required value="<?= $mhs["NAMA"]; ?>">
            </li>
            <br>
            <li>
                <label for="EMAIL">Email</label>
                <input id="EMAIL" type="text" name="EMAIL" required value="<?= $mhs["EMAIL"]; ?>">
            </li>
            <br>
            <li>
                <label for="JURUSAN">Jurusan</label>
                <input id="JURUSAN" type="text" name="JURUSAN" required value="<?= $mhs["JURUSAN"]; ?>">
            </li>
            <br>
            <li>
                <button type="submit" name="submit">Kirim..</button>
            </li>
        </ul>

    </form>

</body>
</html>