document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const user = document.getElementById("username").value.trim();
    const pass = document.getElementById("password").value.trim();
    const alertBox = document.getElementById("alert-box");

    // Data akun yang benar
    const validUser = "nadya";
    const validPass = "22142";

    // Reset tampilan alert setiap kali tombol ditekan
    alertBox.className = "alert-hidden";

    // --- LOGIKA VALIDASI ---

    // 1. Jika Keduanya Kosong
    if (user === "" && pass === "") {
        tampilkanPesan("Harap masukkan password dan username");
    } 
    // 2. Jika Username Kosong
    else if (user === "") {
        tampilkanPesan("Harap username dimasukkan");
    } 
    // 3. Jika Password Kosong
    else if (pass === "") {
        tampilkanPesan("Harap masukkan password");
    }
    // 4. Jika Keduanya Salah
    else if (user !== validUser && pass !== validPass) {
        tampilkanPesan("Password dan username yang anda masukkan salah");
    } 
    // 5. Jika Hanya Username Salah
    else if (user !== validUser) {
        tampilkanPesan("Username yang anda masukkan salah");
    } 
    // 6. Jika Hanya Password Salah
    else if (pass !== validPass) {
        tampilkanPesan("Password yang anda masukkan salah");
    } 
    // 7. Jika Semuanya Benar
    else {
        localStorage.setItem("isLoggedIn", "true");
        window.location.href = "beranda.html";
    }
});

function tampilkanPesan(pesan) {
    const alertBox = document.getElementById("alert-box");
    alertBox.innerText = pesan;
    alertBox.className = "alert-visible";
}