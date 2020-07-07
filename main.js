/******************
 * YOUR CODE HERE *
 ******************/
const onlyOdds = function (arr) {
  let result = [];
  for (const num of arr) {
    if (num % 2 !== 0) {
      result.push(num);
    }
  }

  return result;
};

//2
//even no
const onlyEvens = function (arr) {
  let result = [];
  for (const num of arr) {
    if (num % 2 === 0) {
      result.push(num);
    }
  }

  return result;
};

//3
//names with less than 7 char
const shortNamesOnly = function (arrOfNames) {
  let result = [];
  for (const names of arrOfNames) {
    if (names.length < 7) {
      result.push(names);
    }
  }

  return result;
};

//4
//names starting with d or D
const dNames = function (arrOfNames) {
  let result = [];
  for (const name of arrOfNames) {
    if (name[0] === "d" || name[0] === "D") {
      result.push(name);
    }
  }

  return result;
};
// dNames(["dena", "hamp", "Demmy"]);

/*********************************
 * OUR CODE BELOW; DO NOT TOUCH! *
 *********************************/

if (typeof onlyOdds === "undefined") {
  onlyOdds = undefined;
}

if (typeof onlyEvens === "undefined") {
  onlyEvens = undefined;
}

if (typeof shortNamesOnly === "undefined") {
  shortNamesOnly = undefined;
}

if (typeof dNames === "undefined") {
  dNames = undefined;
}

module.exports = {
  onlyOdds,
  onlyEvens,
  shortNamesOnly,
  dNames,
};
