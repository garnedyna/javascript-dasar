/// Soal - 01
/// Kamu diminta untuk menjelaskan apa perbedaan antara
/// - Type Error
/// - Reference Error
/// - Range Error
/// - Syntax Error

/// WRITE YOUR ANALYSIS HERE
/// - Type Error, kesalahan ketika operasi tidak dapat dilakukan, biasanya (tetapi tidak secara eksklusif) ketika nilai bukan dari tipe yang diharapkan.
/// - Reference Error, kesalahan ketika variabel yang tidak ada direferensikan
/// - Range Error, kesalahan ketika nilai tidak dalam set atau rentang nilai yang diizinkan.
/// - Syntax Error, kesalahan saat mencoba menafsirkan kode yang tidak valid secara sintaksis

/// Soal - 02
/// Kamu diminta untuk melakukan analisa terhadap baris kode dibawah dengan instruksi detail sebagai berikut:
/// - apabila kita menjalankan baris kode dibawah apa yang akan terjadi?
/// - apabila terjadi error, termasuk dalam kategori manakah error tersebut?
/// - apabila terjadi error, jelaskan mengapa hal tersebut bisa terjadi

/// WRITE YOUR ANALYSIS HERE
/// - akan muncul error di bagian console.log(salaryWithConst) sedangkan console.log(salaryWithVar) menampilkan  pesan undefined
/// - reference error
/// - karena variabel dideklarasikan dibawah
console.log(salaryWithVar);
console.log(salaryWithConst);

var salaryWithVar = 15000000;
const salaryWithConst = 15000000;