const num1 = 100;
const num2 = 23;
let val;


// Singgle operator math
val = num1 + num2;
val = num1 * num2;
val = num1 - num2;
val = num1 / num2;
val = num1 % num2; //modulus (nilai hasil bagi)


//Math object
val = Math.PI;
val = Math.E;
val = Math.round(3.4); //pembulatan di atas 0,5
val = Math.ceil(2.4); //pembulatan ke atas
val = Math.floor(2.7); //pembulatan ke bawah
val = Math.sqrt(64); //akar kuadrat
val = Math.abs(-7); //mengubah nilai minus ke positif
val = Math.pow(8, 2); //pemangkatan
val = Math.min(2,3,4,12,15,18,25,90); //nilai minimum
val = Math.max(2,3,4,12,15,18,25,90); //nilai maximum
val = Math.random(); //membuat nilai random

val = Math.floor(Math.random() * 50); //membuat nilai random dengan batasan hingga 50

console.log(val);