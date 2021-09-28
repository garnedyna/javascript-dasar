/// Soal - 01
/// Kamu diminta untuk menjelaskan apa perbedaan antara
/// - Type Error
/// - Reference Error
/// - Range Error
/// - Syntax Error

/// WRITE YOUR ANALYSIS HERE
/// - Type Error : terjadi kesalahan tipe variabel
/// - Reference Error : terjadi referensi ilegal (terdapat variabel yang belum dideklarasikan)
/// - Range Error : terdapat angkat di luar jangkauan
/// - Syntax Error : terjadi kesalahan syntax

/// Soal - 02
/// Kamu diminta untuk melakukan analisa terhadap baris kode dibawah dengan instruksi detail sebagai berikut:
/// - apabila kita menjalankan baris kode dibawah apa yang akan terjadi?
/// - apabila terjadi error, termasuk dalam kategori manakah error tersebut?
/// - apabila terjadi error, jelaskan mengapa hal tersebut bisa terjadi

/// WRITE YOUR ANALYSIS HERE
/// - akan muncul error di bagian console.log(salaryWithConst) sedangkan console.log(salaryWithVar) menampilkan  pesan undefined
/// - reference error
/// - karena variabel belum dideklarasikan 
console.log(salaryWithVar);
console.log(salaryWithConst);

var salaryWithVar = 15000000;
const salaryWithConst = 15000000;