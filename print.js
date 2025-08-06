// const billValue1 = 275;
// const billValue2 = 40;
// const billValue3 = 430;

// const tip1 = billValue1 >= 50 && billValue1 <= 300 ? billValue1 * 15/100 :  billValue1 * 20/100;
// const tip2 = billValue2 >= 50 && billValue2 <= 300 ? billValue2 * 15/100 :  billValue2 * 20/100;
// const tip3 = billValue3 >= 50 && billValue3 <= 300 ? billValue3 * 15/100 :  billValue3 * 20/100;

// console.log(`BILL Value : ${billValue1}
//              TIP : ${tip1}
//              TOTAL PRICE : ${billValue1+tip1}`)

// function tipCalculator(a, b, c) {
//     const bills = [a, b, c];

//     for (let i = 0; i < bills.length; i++) {
//         const bill = bills[i];
//         const tip = bill >= 50 && bill <= 300 ? bill * 15/100 : bill * 20/100;
//         const total = bill + tip;

//         console.log(`The bill was ${bill}, the tip was ${tip}, and the total ${total}`);
//     }
// }
// tipCalculator(275, 40, 430);

// function printForecast(arr) {
//     const result = arr.map((num, i) => `${num}°C in ${i + 1} days`).join(" ... ");

//     console.log(result);
// }
// printForecast([17, 21, 23]);
// printForecast([12, 5, -5, 0, 4]);

// function checkDogs(dogsJulia, dogsKate) {

//   const correctedJulia = dogsJulia.slice(1, -2);

//   const allDogs = correctedJulia.concat(dogsKate);

//   allDogs.forEach((age, i) => {
//     if (age >= 3) {
//       console.log(
//         `Dog number ${i + 1} is an adult, and is ${age} years old 🐕`
//       );
//     } else {
//       console.log(`Dog number ${i + 1} is still a puppy 🐶`);
//     }
//   });
// }
// const dogsJulia = [3, 5, 2, 12, 7];
// const dogsKate = [4, 1, 15, 8, 3];
// checkDogs(dogsJulia, dogsKate);

