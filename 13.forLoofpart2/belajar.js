//For cukup ditulis dalam 1 bari code dengan 3 paraameter
//nilai awal, penulisan kondisi terminasi atau berapa kali perulangan dilakukan, dan incement atau decrement

// for (var a = 1; a <= 10; a++){

//     if (a <= 5){
//         console.log(`Hello World no ${a} sedang berjalan`);
//     }else if(a >=7 ){
//         console.log('Hello World no ' + a + ' Sedang Sibuk'  );
//     }
// }

var a = [];

for (var i = 0; i < 10; i++){
    a.push(i);
}

console.log(a);
console.log(`Panjang a = ${a.length} elemen`);

var b = [];
for(var c = 0; c < a.length; c++){
    b.push(a[c] * 2);
}
console.log(b);

var d;

for (var o = 0, len = a.length; o < len; o++){
    if (a[o] === 5){
        d = a[o];
        break;
    }
}
console.log(`Data ${d} di temukan dalam indeks ${o}`);










while (alive){
    eat();
    sleep();
    pray();
    work();
    repeat();
}
