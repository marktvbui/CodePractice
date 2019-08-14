/*Write a function, persistence, that takes in a positive parameter num and returns its 
multiplicative persistence, which is the number of times you must multiply the digits in num until
you reach a single digit. */

function persistence(num) {
  let count = 0;
  let nInts = [];
  let digits = ("" + num).split("");

  function convertNum(count, input) {
    console.log("input: ", input);
    console.log("count: ", count);

    for (i = 0; i < input.length; i++) {
      console.log(input[i]);
      let temp = Number(input[i]);
      nInts.push(temp);
    }
    console.log("nInts: ", nInts);
    if (nInts.length > 1) {
      calculation(nInts);
    } else {
      return count;
    }
  }

  function calculation(nInts) {
    console.log("*******************************");
    console.log(nInts);
    let newNum = 1;
    for (i = 0; i < nInts.length; i++) {
      newNum = newNum * nInts[i];
    }
    count = count + 1;
    console.log("count :", count);
    console.log("new num: ", newNum);
    convertNum(count, newNum);
  }

  convertNum(count, digits);
}

persistence(999);
// solution should be 4; 9*9*9 = 729; 7*2*9 = 126; 1*2*6 = 12, and finally 1*2 = 2;
// persistence(4);
// solution should be 1; 4 is a 1 digit number;
// persistence(39);
// solution should be 3; 3 * 9 => 27; 2 * 7 => 14; 1 * 4 => 4;
