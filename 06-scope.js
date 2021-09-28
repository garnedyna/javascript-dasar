/// Soal - 01
/// Kita sudah belajar mengenai variable scope yang dimiliki oleh Javascript
/// dan kamu diminta untuk merangkum tentang:
/// - ada berapa banyak jumlah variable scope pada Javascript?
/// - jelaskan secara singkat setiap variable scope yang dimiliki oleh Javascript
/// - buatlah implementasi sederhana dari tiap-tiap variable scope yang dimiliki oleh Javascript

/// WRITE YOUR ANALYSIS HERE
/// -  ada 2
/// - Global : scope paling luar, yang dapat diakses dimanapun
/// - Local : variabel yang ada di dalam function

  /// - Global Scope
  var myIdol = "WannaOne";
    function myIdol() {
      return myIdol;

    }

  /// Local Scope
  function myIdol(){ 
    var myIdol = "WannaOne";
    return myIdol;
  }    

  console.log (myIdol)
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
