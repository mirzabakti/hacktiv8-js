console.log(false == 0);
console.log(0 == '');
console.log(false == '');
console.log(false == 'a');
console.log(1 == true);
console.log(1 === true);

let value = 'something';

// (value == true) = (value)
if (value == true) {
    console.log('there is SOMETHING inside the value.');
} else {
    console.log('there is NOTHING inside the value.');
}

// Menghindari bugs
let nilai = 'something';

if (nilai !== '') {
    console.log('there is SOMETHING inside the value.');
} else {
    console.log('there is NOTHING inside the value.');
}