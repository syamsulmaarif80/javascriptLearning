//bisa dipanggil baik setelah atau sebelum fuction dibuat

apakah();

function apakah(){
    console.log('Hello World');
}

//memanggil dengan parameter
function nama(siapa){
    console.log(`Nama Saya adalah ${siapa}`);
}

nama('arik');

//menggunakan return dengan console.log di bawah
function apecoko(ape){
    return `Hai apakabar ${ape}`;
}

console.log(apecoko('Rukin'));