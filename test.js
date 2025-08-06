// const scores = {
//     data1 :{
//         dolphins: [96, 108, 89],
//         koalas: [88, 91, 110]
//     },
//     data2 :{
//         dolphins: [97, 112, 101],
//         koalas: [109, 95, 123]
//     },
//     data3:{
//         dolphins: [97, 112, 101],
//         koalas: [109, 95, 106]
//     }

// };


// function calcAverage(scores) {
//     let sum = 0;
//     for (let i = 0; i < scores.length; i++) {
//         sum = sum + scores[i];
//     }
//     let average = sum / scores.length;
//     return average;
// }


// function determineWinner(dolphinsAvg, koalasAvg) {
//     if (dolphinsAvg > koalasAvg && dolphinsAvg >= 100) {
//         return "Dolphins win (" + dolphinsAvg + " by. " + koalasAvg + ")";
//     } else if (koalasAvg > dolphinsAvg && koalasAvg >= 100) {
//         return "Koalas win (" + koalasAvg + " by. " + dolphinsAvg + ")";
//     } else if (dolphinsAvg === koalasAvg && dolphinsAvg >= 100 && koalasAvg >= 100) {
//         return "It's a draw (" + dolphinsAvg + " by. " + koalasAvg + ")";
//     } else {
//         return "No team wins the trophy (Dolphins: " + dolphinsAvg + ", Koalas: " + koalasAvg + ")";
//     }
// }

// const dolphinsAvg1 = calcAverage(scores.data1.dolphins);
// const koalasAvg1 = calcAverage(scores.data1.koalas);
// console.log("Data1 Result:", determineWinner(dolphinsAvg1.toFixed(2), koalasAvg1.toFixed(2)));

// const dolphinsAvg2 = calcAverage(scores.data2.dolphins);
// const koalasAvg2 = calcAverage(scores.data2.koalas);
// console.log("Data2 Result:", determineWinner(dolphinsAvg2.toFixed(2), koalasAvg2.toFixed(2)));

// const dolphinsAvg3 = calcAverage(scores.data3.dolphins);
// const koalasAvg3 = calcAverage(scores.data3.koalas);
// console.log("Data3 Result:", determineWinner(dolphinsAvg3.toFixed(2), koalasAvg3.toFixed(2)));




const bills = [275, 40, 430];

for (let i = 0; i < bills.length; i++) {
    const bill = bills[i];
  const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
    const total = bill + tip;

 console.log(`The bill was ${bill}, the tip was ${tip}, and the total ${total}`);
}

