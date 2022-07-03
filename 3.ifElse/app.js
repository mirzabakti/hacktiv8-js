let hargaBuku = 200000;
let hargaKomik = 50000;
let uang = 300000;

if (uang >= hargaBuku) {
    console.log('Sukses membeli buku');
} else if (uang >= hargaKomik) {
    console.log('Tidak bisa membeli buku, beli komik saja');
} else {
    console.log('uang tidak cukup');
}