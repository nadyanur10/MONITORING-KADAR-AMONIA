// 1. KEAMANAN: Cek status login
window.onload = function() {
    if (localStorage.getItem("isLoggedIn") !== "true") {
        window.location.href = "login.html";
    }
    // Inisialisasi Grafik saat halaman dimuat
    initChart();
};

// 2. NAVIGASI MENU
function showSection(id) {
    document.getElementById('beranda').style.display = id === 'beranda' ? 'block' : 'none';
    document.getElementById('riwayat').style.display = id === 'riwayat' ? 'block' : 'none';
    
    document.getElementById('link-beranda').classList.toggle('active', id === 'beranda');
    document.getElementById('link-riwayat').classList.toggle('active', id === 'riwayat');
}

// 3. LOGOUT
function logout() {
    if (confirm("Logout dari sistem?")) {
        localStorage.removeItem("isLoggedIn");
        window.location.href = "login.html";
    }
}

// 4. LOGIKA GRAFIK (Chart.js)
let myChart;
function initChart() {
    const ctx = document.getElementById('myChart').getContext('2d');
    myChart = new Chart(ctx, {
        type: 'line', 
        data: {
            labels: [], // Label Waktu (akan diisi dari database)
            datasets: [
                {
                    label: 'pH Air',
                    data: [], // Data pH
                    borderColor: '#10b981',
                    backgroundColor: 'rgba(16, 185, 129, 0.1)',
                    borderWidth: 2,
                    fill: true,
                    tension: 0.4
                },
                {
                    label: 'Suhu (°C)',
                    data: [], // Data Suhu
                    borderColor: '#f59e0b',
                    backgroundColor: 'rgba(245, 158, 11, 0.1)',
                    borderWidth: 2,
                    fill: true,
                    tension: 0.4
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { position: 'bottom' }
            },
            scales: {
                y: { beginAtZero: false },
                x: { grid: { display: false } }
            }
        }
    });
}

/* ========================================================
   FUNGSI INTEGRASI DATABASE (SIAP PAKAI)
   Panggil fungsi ini saat Anda mendapatkan data dari database.
   ======================================================== */
function addDataToChart(label, ph, suhu) {
    // Tambah label waktu
    myChart.data.labels.push(label);
    // Tambah data sensor
    myChart.data.datasets[0].data.push(ph);
    myChart.data.datasets[1].data.push(suhu);
    
    // Batasi grafik hanya menampilkan 10 data terakhir agar tidak sesak di HP
    if(myChart.data.labels.length > 10) {
        myChart.data.labels.shift();
        myChart.data.datasets[0].data.shift();
        myChart.data.datasets[1].data.shift();
    }
    
    myChart.update();
}