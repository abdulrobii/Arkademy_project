const karakterAcak = (input) => {
      const character = "da2c312dfe804ef5bd318133a342251a 79n89a9mdfe804ef5b18133a342251o";
      const data = input;
      var result = '';
      var results = [];

      for (let i = 0; i < data; i++) {
            // untuk membuat karakter acak
            for (let j = 0; j < 32; j++) {
                  result += character.charAt(Math.random() * 32);
            }

            // untuk melakukan pengecekan
            results.push(result);
            result = "";
      }

      // untuk menampilkan karakter menggunakan perulangan
      for (let i = 0; i < results.length; i++) {
            console.log(results[i]);
      }
}

karakterAcak(2);