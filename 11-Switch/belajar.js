// const color = 'blue';

// switch(color){
//     case 'red':
//         console.log('color is red');
//         break;
//     case 'yellow':
//         console.log('color is yellow');
//         break;
//     case 'green':
//         console.log('color is green');
//         break;
//     default:
//         console.log('Warnanya Lain Cok');
//         break;
// }

// let day;

// // day = new Date().getDay();

// switch(new Date().getDay()){
//     case 0:
//         day = 'Ahad';
//         break;
//     case 1:
//         day = 'Senin';
//         break;
//     case 2:
//         day = 'Selasa';
//         break;
//     case 3:
//         day = 'Rabu';            
//         break;
//     case 4:
//         day = 'Kamis';
//         break;
//     case 5:
//         day = 'Jum/at';
//         break;
//     case 6:
//         day = 'Sabtu';
//         break;
// }

// console.log(day);


function checkType(n){
    console.log('----------------');
    var status;
    var t = typeof n;
    switch(t){
        case 'string':
            status = 'Anda memasukkan string';
            break;
        case 'number':
            status = 'Anda memasukkan Nummber';
            break;
        default:
            status = 'Anda memasukkan objek';
    }
    console.log(status);
}

checkType('a');
checkType([1,2,'ok',null,]);
checkType(6+7+8);