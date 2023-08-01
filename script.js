document.addEventListener("DOMContentLoaded", function () {
  const formLatihan = document.getElementById("form-latihan");

  formLatihan.addEventListener("submit", function (event) {
    event.preventDefault();

    const jawaban1 = document.getElementById("soal1").value;
    const jawaban2 = document.getElementById("soal2").value;
    const jawaban3 = document.getElementById("soal3").value;
    
    const jawabanBenar1 = "5";
    const jawabanBenar2 = "12";
    const jawabanBenar3 = "18";

    let jumlahBenar = 0;

    if (jawaban1 === jawabanBenar1) {
      jumlahBenar++;
    }

    if (jawaban2 === jawabanBenar2) {
      jumlahBenar++;
    }

    if (jawaban3 === jawabanBenar3) {
      jumlahBenar++;
    }

    if (jumlahBenar === 3) {
      alert("Selamat! Semua jawaban Anda benar!");
    } else {
      alert(`Anda telah menjawab ${jumlahBenar} dari 3 soal dengan benar. Silakan coba lagi untuk mencapai hasil yang lebih baik!`);
    }

    // Reset formulir setelah mengerjakan soal
    formLatihan.reset();
  });
});
