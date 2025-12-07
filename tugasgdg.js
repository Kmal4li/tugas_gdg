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
    rl.question("Masukkan jumlah uang: ", (moneyInput) => {
      const money = Number(moneyInput);

      if (money < 500000) {
        console.log(`Maaf ${name}, uang kamu cuma ${money.toLocaleString()} rupiah, datang lagi lain kali`);
      } else {
        console.log(`Selamat datang ${name}`);
      }

      rl.close();
    });
  });
});

