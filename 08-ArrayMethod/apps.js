//Membuat Tipe data Array
const number = [3,67,12,5,19,9,20,56,89]; //Cara Pertama
const number2 = new Array(9,5,3,10,210,39); //Cara ke2
const buah = ['Anggur','Buah Naga','Jeruk', 'Mangga'];
const mix = ['Anggur', 70, true, undefined, null, {a:2, b:7}, new Date];


let val;

//Get Length
val = number.length;

//Check is Array
val = Array.isArray(number2);

//Get Singgle Value atau memanggil nilai index
val = buah[3];

//Insert into Array
buah[2] = 'Pepaya';

//Mencari Index Value
val = mix.indexOf(undefined);

//mengubah nilai pada akhir Array
number.push(1980);

//menambah nilai pada awal array
number.unshift(15);

//menghapus nilai akhir array dengan Pop
number.pop();

//menghapus nilai awal array dengan shift
number.shift();

//menghapus beberapa nilai index dengan splice
number.splice(1,1); //parameter pertama adalah awalan dan diakhiri dengan parameter 2

//mengubah urutan Array
buah.reverse();

console.log(number); 
console.log(buah);
console.log(val);