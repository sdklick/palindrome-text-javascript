let number = 525;
let stdata;
switch (typeof number) {
  case "number":
    stdata = parseInt(String(number).split("").reverse().join(""));
    break;
  case "string":
    stdata = number.split("").reverse().join("");
    break;
  default:
    console.log("this is not not number or string value");
}
number === stdata
  ? console.log(`${number} is a palindrome`)
  : console.log(`${number} is not palindrome`);
