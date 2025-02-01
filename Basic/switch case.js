// let day = 3;
// let dayName;

// switch (day) {
//   case 1:
//     dayName = "Monday";
//     break;
//   case 2:
//     dayName = "Tuesday";
//     break;
//   case 3:
//     dayName = "Wednesday";
//     break;
//   case 4:
//     dayName = "Thursday";
//     break;
//   case 5:
//     dayName = "Friday";
//     break;
//   case 6:
//     dayName = "Saturday";
//     break;
//   case 7:
//     dayName = "Sunday";
//     break;
//   default:
//     dayName = "Invalid day";
// }

// console.log(dayName); // Output: Wednesday

let day = "Sunday";

switch(day) {
  case "Monday":
    console.log("It's Monday!");
    break;
  case "Tuesday":
    console.log("It's Tuesday!");
    break;
  case "Wednesday":
  case "Thursday": 
    console.log("It's a weekday!"); // Note: Multiple cases can share the same code block
    break;
  case "Friday":
    console.log("TGIF!");
    break;
  case "Saturday":
  case "Sunday":
    console.log("It's the weekend!");
    break;
  default:
    console.log("Invalid day!");
}