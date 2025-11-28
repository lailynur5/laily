// ====== JAM REALTIME ======
function updateClock() {
    const now = new Date();
    const waktu = now.toLocaleTimeString("id-ID", { hour12: false });
    const elemen = document.getElementById("jamRealtime");

    if (elemen) {
        elemen.textContent = waktu;
    }
}
setInterval(updateClock, 1000);
updateClock();


// ====== VALIDASI FORM ABSENSI ======
function validateAbsen() {
    const nama = document.querySelector("input[name='nama']");
    const tanggal = document.querySelector("input[name='tanggal']");
    const masuk = document.querySelector("input[name='masuk']");

    if (!nama.value || !tanggal.value || !masuk.value) {
        alert("Harap isi semua data penting: Nama, Tanggal, dan Jam Masuk.");
        return false;
    }

    return true;
}

// Jika halaman punya form absensi, pasang event listener
const formAbsen = document.querySelector("form[action='proses_absen.php']");
if (formAbsen) {
    formAbsen.addEventListener("submit", function(e) {
        if (!validateAbsen()) {
            e.preventDefault();
        }
    });
}


// ====== POPUP NOTIFIKASI JIKA SUBMIT BERHASIL ======
if (window.location.href.includes("riwayat.php?success=1")) {
    alert("Absensi berhasil disimpan!");
}
