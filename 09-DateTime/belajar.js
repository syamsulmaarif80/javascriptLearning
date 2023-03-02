let val;

const today = new Date();
let birthday = new Date('9-9-1990 10:25:59');
birthday = new Date('Augustus 18 1980');
birthday = new Date('7/12/98');

val = today.getFullYear();
val = today.getMonth();
val = today.getTime();


birthday.setDate(20); //men-set tanggal yang sudah ada

console.log(birthday);