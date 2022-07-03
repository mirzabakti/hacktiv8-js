let studentList = [];
let shoppingList = ['coffee', 'butter', 'sugar'];
let scores = [10, 2322, 12, 0];

// console.log(shoppingList[0]);
// console.log(shoppingList[2]);
shoppingList[3] = 'creamer';
// console.log(shoppingList[3]);
// console.log(shoppingList);
shoppingList.push('tea');
// console.table(shoppingList);
shoppingList.pop();
// console.table(shoppingList);

for(let index = 0; index < shoppingList.length; index++) { // awalan / batasan / proses
    console.log('I need to buy: ' + shoppingList[index]);
}

// index+2?