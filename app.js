// Exercise 1
const foods = [];  

//console.log('Exercise 1 result:', foods);

// Exercise 2
foods.push("pizza","cheeseburger")
// console.log('Exercise 2 result:', foods);

// Exercise 3
foods.unshift("taco")
//console.log('Exercise 3 result:', foods);

//Exercise 4
const favFood = foods;
// console.log('Exercise 4 result:', favFood);
//              
// Exercise 5  v value can only be 1/0 i think
foods.splice(2,0,"tofu")
// console.log('Exercise 5 result:', foods);

// Exercise 6
foods.splice(1,1,"sushi","cupcake")
// console.log('Exercise 6 result:', foods);

// Exercise 7
const yummy = foods.slice(1, 3); // some values dont start at 0 i think
// console.log('Exercise 7 result:', yummy);

//Exercise 8
const soyIdx = foods.indexOf("tofu")
// console.log('Exercise 8 result:', soyIdx);

// Exercise 9
const allFoods = foods.join(' -> ')
// console.log('Exercise 9 result:', allFoods);

// Exercise 10
const hasSoup = foods.includes("soup"); // returns false
// console.log('Exercise 10 result:', hasSoup); 

// Exercise 11
const nums = [100, 5, 23, 15, 21, 72, 9, 45, 66, 7, 81, 90];
for (let i = 0; i < nums.length; i++) {
    let odds = (i/2 === 0)
    let fizz = (i/3 === 0)
    let buzz = (i/5 === 0)
    let fizzbuzz = (i/3 && i/5 === 0) // Exercise 12
    // console.log('Exercise 11 result:', odds)
    // console.log('  fizz:', fizz);
    // console.log('  buzz:', buzz);
    // console.log('  fizzbuzz:', fizzbuzz);
}

//Exercise 13
const numArrays = [
	[100, 5, 23],
	[15, 21, 72, 9],
	[45, 66],
	[7, 81, 90]
];
const numList = numArrays[3][2]
// console.log('Exercise 13 result:', numList);

//Exercise 14
const num = numArrays[2][1]
// console.log('Exercise 14 result:', num);

// Exercise 15 // I dont know.
for (let i = 0; i < numArrays.length; i++)
    const total = 