let val;

//Mengubah number ke string
val = String(1980);
val = String(5+5);

//boolean ke string
val = true; //menjadi val = String(true);

//date ke string
val = String(new Date());

//array ke String
val = String([1,2,3,4,5,6]);

//Bisa jua menggunakan toString
val = (5).toString();
val = (true).toString();


//String to Number
val = Number('51.57');

//Boolean to Number
val = Number(true);
val = Number(false);

//Null to Number
val = Number('Halo');

//Array to Number
val = Number([1,2,3]);

//Float atau Desimal ke Number atau Int
val = parseInt('100.32');
val = parseFloat('400.78');

// console.log(val);
// console.log(typeof val);
// console.log(val.length); //menghitung panjang data yang hanya bisa dibaca untuk type data string
// console.log(val.toFixed(3));

const val1 = 5;
const val2 = 6;
const sum = val1 + val2;

console.log(sum);
console.log(typeof sum);

//Contoh Soal
var a = true;
var b = false;
var c = false;
var d = true;
console.log(a || b && !c && !d)
