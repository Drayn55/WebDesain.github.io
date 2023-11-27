<?php 
// koneksi ke database
$conn = mysqli_connect("localhost", "root", "", "phpdasar");


function query($query) {
    global $conn;
    $result = mysqli_query($conn, $query);
    $rows = [];
    while ( $row = mysqli_fetch_assoc($result) ) {
        $rows[] = $row;
    }
    return $rows;
}


function tambah($data) {
    global $conn;
    // ambil data dari tiap elemen dalam form
    $nama = htmlspecialchars($data["NAMA"]);
    $lahir = htmlspecialchars($data["LAHIR"]);
    $email = htmlspecialchars($data["EMAIL"]);
    $jurusan = htmlspecialchars($data["JURUSAN"]);

    $query = "INSERT INTO datamahasiswa VALUES 
            ('', '$nama', '$lahir', '$email', '$jurusan')";

    mysqli_query($conn, $query);

    return mysqli_affected_rows($conn);
}

function hapus($id) {
    global $conn;
    mysqli_query($conn, "DELETE FROM datamahasiswa WHERE id = $id");
    return mysqli_affected_rows($conn);
}


function ubah($data) {
    global $conn;

     // ambil data dari tiap elemen dalam form
     $id = $data["id"];
     $nama = htmlspecialchars($data["NAMA"]);
     $lahir = htmlspecialchars($data["LAHIR"]);
     $email = htmlspecialchars($data["EMAIL"]);
     $jurusan = htmlspecialchars($data["JURUSAN"]);
 
     $query = "UPDATE datamahasiswa SET 
            NAMA = '$nama', LAHIR = '$lahir', EMAIL = '$email', JURUSAN = '$jurusan'
            WHERE id = $id";
 
     mysqli_query($conn, $query);
 
     return mysqli_affected_rows($conn);
}


function cari($keyword) {
    $query = "SELECT * FROM datamahasiswa 
            WHERE 
            nama LIKE '%$keyword%' OR
            lahir LIKE '%$keyword%' OR
            email LIKE '%$keyword%' OR
            jurusan LIKE '%$keyword%'

            ";
    return query($query);
}

function registrasi($data) {
    global $conn;

    $username = strtolower(stripslashes($data["username"]));

    $password = mysqli_real_escape_string($conn, $data["password"]);

    $password2 = mysqli_real_escape_string($conn, $data["password2"]);

    // cek username udh ada atau blm
    
    $result = mysqli_query($conn, "SELECT username FROM data_registrasi WHERE username = '$username'");

    if (mysqli_fetch_assoc($result)) {
        echo "<script>
            alert('username sudah terdaftar! Harap memilih username yang lain')
        </script>";

        return false;
    }


    // cek konfimasi password
    if ($password !== $password2) {
        echo "<script> 
            alert('Konfirmasi password tidak sesuai');
        </script>";
        
    return false;
    }

    // enkripsi password
    $password = password_hash($password, PASSWORD_DEFAULT);
    // tambahkan userbaru kedatabase
    mysqli_query($conn, "INSERT INTO data_registrasi VALUES('', '$username', '$password')");

    return mysqli_affected_rows($conn);




}




?>