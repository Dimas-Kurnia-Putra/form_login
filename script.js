function logout() {
    // Redirect user to the login page or perform logout actions here
    window.location.href = "index.html";
}

// Data username dan password yang valid
// Cek apakah ada data validUsers di sessionStorage, jika tidak buat data awal
const validUsers = JSON.parse(sessionStorage.getItem('validUsers')) || [
    { username: "user123", password: "password123" },
    { username: "admin01", password: "adminpass01" },
    { username: "guest001", password: "guestpass001" },
    { username: "user456", password: "password456" },
    { username: "testuser", password: "testpass" },
    { username: "johndoe", password: "john123" },
    { username: "janedoe", password: "jane456" },
    { username: "user789", password: "password789" },
    { username: "manager01", password: "managerpass" },
    { username: "employee123", password: "emppass123" }
];

// Fungsi untuk cek login
function checkLogin(event) {
    event.preventDefault(); // Mencegah form dari reload halaman

    // Ambil nilai input dari form login
    const usernameInput = document.getElementById("username").value;
    const passwordInput = document.getElementById("password").value;

    // Cek apakah ada pasangan username dan password yang cocok
    const user = validUsers.find(user => user.username === usernameInput && user.password === passwordInput);

    if (user) {
        // Login berhasil, arahkan ke halaman home
        window.location.href = "home.html";
    } else {
        // Login gagal, tampilkan pesan alert
        alert("Username atau password salah. Silakan coba lagi.");
    }
}

// Fungsi untuk menangani signup (registrasi)
function signup(event) {
    event.preventDefault(); // Mencegah form dari reload halaman

    // Ambil nilai input dari form signup
    const usernameInput = document.getElementById("username").value;
    const emailInput = document.getElementById("email").value;
    const passwordInput = document.getElementById("password").value;
    const confirmPasswordInput = document.getElementById("confirm-password").value;

    // Cek apakah username sudah ada
    const userExists = validUsers.some(user => user.username === usernameInput);
    if (userExists) {
        alert("Username sudah terdaftar. Silakan pilih username lain.");
        return;
    }

    // Cek apakah password dan confirm password sesuai
    if (passwordInput !== confirmPasswordInput) {
        alert("Password dan Confirm Password tidak cocok.");
        return;
    }

    // Cek apakah input valid (email dan password tidak kosong)
    if (!usernameInput || !emailInput || !passwordInput) {
        alert("Semua field harus diisi.");
        return;
    }

    // Tambahkan pengguna baru ke validUsers
    validUsers.push({
        username: usernameInput,
        password: passwordInput
    });

    // Simpan data validUsers yang sudah diperbarui ke sessionStorage
    sessionStorage.setItem('validUsers', JSON.stringify(validUsers));

    // Setelah registrasi sukses, beri tahu pengguna dan arahkan ke login
    alert("Pendaftaran berhasil! Silakan login.");
    window.location.href = "index.html"; // Kembali ke halaman login
}

