const nama = 'Hakim';
const umur = 17;
const kerja = 'Freelance';
const kota = 'sumenep';

let html;

//Dengan tanpa template tring (es5)

html = '<ul><li>Nama :' + nama + '</li><li>Umur: ' + umur + '</li><li>Pekerjaan: ' + kerja + 
'</li><li>Kota: ' + kota + '</li></ul>';

html = '<ul>'+
            '<li>Nama: ' + nama + '</li>'+
            '<li>Umur: ' + umur + '</li>'+
            '<li>Pekerjaan: ' + kerja + '</li>'+
            '<li>Kota: ' + kota + '</li>'+
       '</ul>';

function ok(){
    return 'ok';
}
//Dengan Template String (es6)
html = `
    <ul>
        <li>Nama : ${nama}</li>
        <li>Umur : ${umur}</li>
        <li>Pekerjaan : ${kerja}</li>
        <li>Kota : ${kota}</li>
        <li>${5+2}</li>
        <li>${ok()}</li>
        <li>${umur > 20 ? 'Ya Bro' : 'Terlalu Muda'}</li>
    </ul>   
`;
document.body.innerHTML = html;