let Meowza = {
    name: 'Meowza',
    gender: 'male',
    height: 196,
    active: true,
    talk: () => { // function ()
        return 'Meow meow!'
    },
    friends:['Garfield', 'Puss in Boots', 'Miko'],
    bio: {
        skinColor: 'brown',
        weight: 64
    }
};

let Miawza = {
    name: 'Miawza',
    gender: 'female',
    height: 169
};

let studentList = [Meowza, Miawza];

console.table(studentList);
console.log(studentList[1].height);



// console.log(5 + '2'); //52
// console.log(5 - '2'); //3

// //console.log(student['name']);
// console.log(student.name);
// console.log(student.gender);
// console.log(student.height);
// console.log(student);
// console.log(student.talk());
// console.log(student.friends[1]);
// console.log(student.bio.weight);