let point;
let rating = 4;

// if (rating === 1) {
//     point = 10;
// } else if (rating === 2) {
//     point = 20;
// } else if (rating === 3) {
//     point = 50;
// } else if (rating === 4) {
//     point = 100;
// } else if (rating === 5) {
//     point = 200;
// }

// switch (rating) {
//     case 1:
//         point = 10;
//     case 2:
//         point = 20;
//     case 3:
//         point = 50;
// console.log(point);
//     case 4:
//         point = 100;
// console.log(point);
//     case 5:
//         point = 200;
// console.log(point);
// }

switch (rating) {
    case 1:
        point = 10;
        break;
    case 2:
        point = 20;
        break;
    case 3:
        point = 50;
        break;
    case 4:
        point = 100;
        break;
    case 5:
        point = 200;
        break;
    default:
        point = "Tak Terdefinisi"
        break;
}

console.log('poin anda: ' + point);