console.log("hello this is answer test logic")

//!=========> soal no 1 <==========
function coupleArray(arr) {
  const counterPair = arr.reduce((res, item) => {
    if (res[item] !== undefined) {
      res[item]++;
    } else {
      res[item] = 1;
    }
    return res;
  }, {});


  const totalPairSoid = Object.keys(counterPair).reduce((res, item) => {
    if (counterPair[item] / 2 >= 1) {
      return res + Math.floor(counterPair[item] / 2);
    }
    return res;
  }, 0)

  console.log(totalPairSoid)
}

const couple1 = [10, 20, 20, 10, 10, 30, 50, 10, 20] //output 3
const couple2 = [6, 5, 2, 3, 5, 2, 2, 1, 1, 5, 1, 3, 3, 3, 5] //output 6
const couple3 = [1, 1, 3, 1, 2, 1, 3, 3, 3, 3] //output 4

coupleArray(couple1);
coupleArray(couple2);
coupleArray(couple3);

// coupleArray(couple2);
// coupleArray(couple3);
console.log('\n');



//! =======> soal nomer 2 <=============
function countString(str) {

  const kata1 = str.split(" ")
  const ubahKata = str.replace(/[^a-zA-Z0-9,.?\-  ]/g, "")
  const kata2 = ubahKata.split(" ")
  let jumlah = 0;
  for (let i = 0; i < kata2.length; i++) {
    if (kata1[i] === kata2[i]) {
      jumlah++
    }
  }

  return jumlah;
}

const string1 = "Saat meng*ecat tembok, Agung dib_antu oleh Raihan"
const string2 = "Berapa u(mur minimal[ untuk !mengurus ktp?"
const string3 = "Masing-masing anak mendap(atkan uang jajan ya=ng be&rbeda."

console.log(countString(string1))
console.log(countString(string2))
console.log(countString(string3))
