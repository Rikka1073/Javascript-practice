// const num_1 = 10;
// const num_2 = 3;
// const num_3 = 2;
// const num_4 = 10000;

// console.log(`${num_1} + ${num_2} = ${num_1 + num_2}`);
// console.log(`${num_1} - ${num_2} = ${num_1 - num_2}`);
// console.log(`${num_1} * ${num_2} = ${num_1 * num_2}`);
// console.log(`${num_4} / ${num_3} = ${num_4 / num_3}`);
// console.log(`${num_1} % ${num_2} =${num_1} / ${num_2} 余り ${num_1 % num_2}`);
// console.log(`2の2乗 = ${2 ** 2}`);
// console.log(`2の3乗 = ${2 ** 3}`);

// for (let i = 0; i <= 30; i++) {
//   console.log(i);
// }

// for (let i = 1; i <= 25; i++) {
//   if (i % 5 === 0) {
//     console.log(i);
//   }
// }

// const module = (num) => {
//   for (let i = 1; i <= 25; i++) {
//     if (num > 25) {
//       console.log(num);
//     } else if (i % num === 0) {
//       console.log(i);
//     }
//   }
// };

// module(5);
// module(7);
// module(26);

// const checkAlcoholIf = (age) => {
//   const message = age >= 20 ? "OK" : "NG";
//   if (age >= 20) {
//     console.log(`あなたの場合は、お酒げ${message}です`);
//   } else {
//     console.log(`あなたの場合は、お酒げ${message}です`);
//   }
// };

// checkAlcoholIf(10);
// checkAlcoholIf(19);

// const fizzBuzz = (number) => {
//   if (number % 3 === 0) {
//     console.log("Fizz");
//   } else if (number % 5 === 0) {
//     console.log("Buzz");
//   } else if (number % 15 === 0) {
//     console.log("FizzBuzz");
//   } else {
//     console.log("Nothing");
//   }
// };

// const message_1 = fizzBuzz(6);
// console.log(message_1);
// const message_2 = fizzBuzz(10);
// console.log(message_2);
// const message_3 = fizzBuzz(15);
// console.log(message_3);
// const message_4 = fizzBuzz(16);
// console.log(message_4);

// const showSeason = (month) => {
//   switch (month) {
//     case 3:
//     case 4:
//     case 5:
//       console.log("春");
//       break;
//     case 6:
//     case 7:
//     case 8:
//       console.log("夏");
//       break;
//     case 9:
//     case 10:
//     case 11:
//       console.log("秋");
//       break;
//     case 12:
//     case 1:
//     case 2:
//       console.log("冬");
//       break;
//     default:
//       console.log("季節不明");
//       break;
//   }
// };

// showSeason(3);
// showSeason(6);
// showSeason(9);
// showSeason(12);
// showSeason(13);

// const showSeason = (month, country) => {
//   if (country === "japan") {
//     switch (month) {
//       case 3:
//       case 4:
//       case 5:
//         console.log("春");
//         break;
//       case 6:
//       case 7:
//       case 8:
//         console.log("夏");
//         break;
//       case 9:
//       case 10:
//       case 11:
//         console.log("秋");
//         break;
//       case 12:
//       case 1:
//       case 2:
//         console.log("冬");
//         break;
//       default:
//         console.log("季節不明");
//         break;
//     }
//   } else if (country === "ph") {
//     switch (month) {
//       case 6:
//       case 7:
//       case 8:
//       case 9:
//       case 10:
//       case 11:
//         console.log("雨季");
//         break;
//       case 1:
//       case 2:
//       case 3:
//       case 4:
//       case 5:
//       case 13:
//         console.log("乾季");
//         break;
//       default:
//         console.log("季節不明");
//     }
//   }
// };

// showSeason(3, "japan");
// showSeason(6, "japan");
// showSeason(9, "japan");
// showSeason(12, "japan");
// showSeason(5, "ph");
// showSeason(6, "ph");
