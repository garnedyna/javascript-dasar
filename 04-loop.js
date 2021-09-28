/// Soal - 01
/// Kamu diminta untuk membuat sebuah perulangan menggunakan for loop, untuk mencetak angka prima dari 1 ~ 100
/// EDIT HERE
let Prima = 0;

for (let i = 2; i <= 100; i++) {
  for (let j = 1; j <= i; j++) {
    if (i % j == 0) {
      Prima++;
    }
  }

  if (Prima == 2) {
    // console.log(i)
  }
  Prima = 0;
}

/// Soal - 02
/// Kamu diminta untuk menemukan bilangan prima ke-50, temukan bilangan tersebut menggunakan while loop
let PrimaCounter = 0;
let fiftithPrima = 50;

/// EDIT HERE
let i = 2;
let fiftithNumberOfPrima;

while (PrimaCounter < fiftithPrima) {
  for (let j = 1; j <= i; j++) {
    if (i % j == 0) {
      Prima ++;
    }
  }

  if (Prima == 2) {
    fiftithNumberOfPrima = i;
    PrimaCounter++;
  }
  Prima = 0;
  i++;
}

console.log(fiftithNumberOfPrima);

/// Soal - 03
/// Kamu diminta untuk menemukan bilangan ganjil ke-50, temukan bilangan tersebut menggunakan do while loop
let ganjilCounter = 0;
let fiftithganjil = 50;

/// EDIT HERE
let fiftithNumberOfganjil;
i = 0;

do {
  if (i % 2 !== 0) {
    fiftithNumberOfganjil = i;
    ganjilCounter++;
  }
  i++;
} while (ganjilCounter < fiftithganjil);

console.log(fiftithNumberOfganjil);
