function sumOfNumbers(num1, num2) {
  console.log("add", num1 + num2);
}

function subOfNumbers(num1, num2) {
  console.log("sub", num1 - num2);
}

function mulOfNumbers(num1, num2) {
  console.log("mul", num1 * num2);
}

function divideOfNumbers(num1, num2) {
  console.log("div", num1 / num2);
}

function calculate(opt, num1, num2) {
  if (num1 && num2) {
    if (opt == "add") {
      console.log("add", num1 + num2);
    } else if (opt == "sub") {
      console.log("sub", num1 - num2);
    } else if (opt == "mul") {
      console.log("mul", num1 * num2);
    } else if (opt == "div") {
      console.log("div", num1 / num2);
    } else {
      console.log("please provide proper operation");
    }
  } else {
    console.log("please provide atleaset two aruguments");
  }
}

function calculateWithSwitch(opt, num1, num2) {
  if (num1 && num2) {
    switch (opt) {
      case "add":
        console.log("add", num1 + num2);
        break;
      case "sub":
        console.log("sub", num1 - num2);
        break;
      case "mul":
        console.log("mul", num1 * num2);
        break;
      case "div":
        console.log("div", num1 / num2);
        break;
      default:
        console.log("please provide proper operation");
    }
  } else {
    console.log("please provide atleast two aruguments");
  }
}

calculate("add", 10, 5);
calculate("sub", 10, 5);
calculate("mul", 10, 5);
calculate("div", 10, 5);
calculate("mod", 10, 5);
calculate("add", 5);
console.log("-----------------------");
calculateWithSwitch("add", 10, 5);
calculateWithSwitch("sub", 10, 5);
calculateWithSwitch("mul", 10, 5);
calculateWithSwitch("div", 10, 5);
calculateWithSwitch("mod", 10, 5);
calculateWithSwitch("add", 10);

for (let i = 0; i <= 5; i++) {
  console.log("for", i);
}

let j = 0;
while (j <= 5) {
  console.log("while", j);
  j++;
}
// security ->
let k = 0;
do {
  console.log("do whie", k);
  k++;
} while (k <= 5);
