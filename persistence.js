/*Write a function, persistence, that takes in a positive parameter num and returns its 
multiplicative persistence, which is the number of times you must multiply the digits in num until
you reach a single digit. */

function persistence(num) {
  // console.log(num);
  // console.log(num.toString().length);
  let count = 0;
  
  function convertNum(count, num) {
    let input = ("" + num).split("");
    let nInts = [];

    for (i = 0; i < input.length; i++) {
      let temp = Number(input[i]);
      nInts.push(temp);
    }
    if (nInts.length > 1) {
      calculation(nInts);
    } else {
      console.log('its over!!!!');
      console.log(count);
      return count;
    }
  }

  function calculation(nInts) {
    let newNum = 1;
    for (i = 0; i < nInts.length; i++) {
      newNum *= nInts[i];
    }
    count = count + 1;
    convertNum(count, newNum);
  }

  convertNum(count, num);
}

persistence(999);
// solution should be 4; 9*9*9 = 729; 7*2*9 = 126; 1*2*6 = 12, and finally 1*2 = 2;
// persistence(4);
// solution should be 1; 4 is a 1 digit number;
// persistence(39);
// solution should be 3; 3 * 9 => 27; 2 * 7 => 14; 1 * 4 => 4;
