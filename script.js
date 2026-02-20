/* =====================================
   DATA USER TERSIMPAN (PROTOTYPE)
   ===================================== */
const USERNAME_BENAR = "admin";
const PASSWORD_BENAR = "12345";

/* =====================================
   CEK STATUS LOGIN SAAT HALAMAN DIBUKA
   ===================================== */
window.onload = function() {
    if (localStorage.getItem("isLogin") === "true") {
        showDashboard(); 
    } else {
        showLoginPage(); 
    }
};

/* =====================================
   FUNGSI LOGIN
   ===================================== */
const loginForm = document.getElementById("loginForm");
if(loginForm) {
    loginForm.addEventListener("submit", function(e) {
        e.preventDefault(); 
        
        const username = document.getElementById("username").value.trim();
        const password = document.getElementById("password").value.trim();
        const errorMsg = document.getElementById("error-msg");

        if (errorMsg) {
            errorMsg.style.color = "red";
            errorMsg.innerHTML = "";
        }

        if (username === USERNAME_BENAR && password === PASSWORD_BENAR) {
            if (errorMsg) {
                errorMsg.style.color = "green";
                errorMsg.innerHTML = "✅ Login berhasil...";
            }
            localStorage.setItem("isLogin", "true");
            setTimeout(function () {
                showDashboard(); 
            }, 800);
        } else {
            if (errorMsg) {
                errorMsg.innerHTML = "❌ Username atau Password salah!";
            } else {
                alert("❌ Username atau Password salah!");
            }
        }
    });
}

/* =====================================
   FUNGSI NAVIGASI TAMPILAN
   ===================================== */
function showDashboard() {
    document.getElementById("login-page").style.display = "none";
    document.getElementById("app").style.display = "block";
}

function showLoginPage() {
    document.getElementById("login-page").style.display = "flex";
    document.getElementById("app").style.display = "none";
}

function handleLogout() {
    localStorage.removeItem("isLogin");
    location.reload(); 
}

function showSection(sectionId) {
    document.getElementById("beranda").style.display = "none";
    document.getElementById("riwayat").style.display = "none";
    document.getElementById(sectionId).style.display = "block";

    document.getElementById("link-beranda").classList.remove("active");
    document.getElementById("link-riwayat").classList.remove("active");
    document.getElementById("link-" + sectionId).classList.add("active");
}

/* ============================================================
   TAMBAHKAN KODE DI BAWAH INI (INISIALISASI GRAFIK)
   ============================================================ */
const ctx = document.getElementById('chartAir').getContext('2d');
const chartAir = new Chart(ctx, {
    type: 'line',
    data: {
        labels: [], // Label waktu akan muncul di sini
        datasets: [
            {
                label: 'Amonia (ppm)',
                data: [],
                borderColor: '#0ea5e9',
                backgroundColor: 'rgba(14, 165, 233, 0.1)',
                fill: true,
                tension: 0.3
            },
            {
                label: 'pH Air',
                data: [],
                borderColor: '#22c55e',
                backgroundColor: 'rgba(34, 197, 94, 0.1)',
                fill: true,
                tension: 0.3
            }
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true,
                title: { display: true, text: 'Nilai Parameter' }
            },
            x: {
                title: { display: true, text: 'Waktu Pengukuran' }
            }
        }
    }
});