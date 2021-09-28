/// Soal - 01
/// Kita sudah belajar mengenai variable scope yang dimiliki oleh Javascript
/// dan kamu diminta untuk merangkum tentang:
/// - ada berapa banyak jumlah variable scope pada Javascript?
/// - jelaskan secara singkat setiap variable scope yang dimiliki oleh Javascript
/// - buatlah implementasi sederhana dari tiap-tiap variable scope yang dimiliki oleh Javascript

/// WRITE YOUR ANALYSIS HERE
/// - ada 3
/// -   Block, Code yang berada di curly braces, function, looping, dan conditional
///     Global, variabelnya bisa kita akses dimana saja dalam satu file
///     Local, mendeklarasikan variabel di block
/// - Block Scope
{
    let x = 2;
  }
  
  /// - Local Scope
  mobilGue();
  
  function mobilGue() {
    let carName = "Pajero";
    console.log(carName);
  }
  
  console.log(carName);
  
  /// - Global Scope
  let carName = "Pajero";
  mobilGue();
  
  function mobilGue() {
    console.log("Mobil gue adalah" + carName);
  }
  
  /// Soal - 02
  /// Kamu diminta untuk melakukan analisa terhadap baris kode dibawah ini
  /// - apa yang akan tampil didalam comsole.log ?
  /// - apa alasan yang menyebabkan hasil dari console itu bukan nilai dari variable name?
  
  /// WRITE YOUR ANALYSIS HERE
  /// - program tersebut akan menampilkan "Mariah"
  /// - karena variabel name yang diluar fungsi adalah variabel yang tidak bisa diubah nilainya dan scopenya global sedangkan variabel name yang didalam fungsi adalah parameter yang scope nya local hanya bisa diakses didalam fungsi printFirstName()
  const name = "John Watson";
  
  function printFirstName(name) {
    return name.split(" ")[0];
  }
  
  console.log(printFirstName("Mariah Carey"));