const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Masukkan nama: ", (name) => {
  rl.question("Masukkan umur: ", (ageInput) => {
    const age = Number(ageInput);

    if (age < 21) {
      console.log(`Maaf ${name}, umur kamu kurang ${21 - age} tahun lagi`);
      rl.close();
      return;
    }

    console.log(`Selamat ${name}, kamu sudah cukup umur`);
    rl.close();
  });
});

