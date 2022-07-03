let uang = 100000;
let hargaBuku = 200000;
console.log(uang > hargaBuku);

uang += 200000;
console.log(uang > hargaBuku);

let hargaKomik = 100000;
uang -= hargaKomik;
console.log(uang);
console.log(uang > hargaBuku);
console.log(uang == hargaBuku);
console.log(uang >= hargaBuku);

console.log((1 < 0) == (2 < 0));
console.log(true == (2 < 0));
console.log(1 == false);
console.log(1 == '1');
console.log(1 === '1');

let isKtp = true;
let isSim = false;

console.log(isKtp || isSim);
console.log(isSim && isSim);
console.log(!false || true);