module.exports = function check(str, bracketsConfig) {
    // create obj where keys are open brackets and values are closed brackets
  const bracketsObj = bracketsConfig.reduce((acc, curr) => {
    return {
        ...acc,
        [curr[0]]: curr[1],
    }
  }, {});
  // create hash for opened brackets
  let openBrackets = [];

  function validClosedBracket() {
    return bracketsObj[openBrackets.at(-1)]
  }

  for (let i = 0; i < str.length; i++) {
    // check if current element of str is valid closed bracket
    if (validClosedBracket() === str[i]) {
        openBrackets.pop();
    // checl if current element of str is open bracket
    } else if(str[i] in bracketsObj) {
        openBrackets.push(str[i]);
    } else {
        return false;
    }
  }
    // check if all brackets are closed
    if (openBrackets.length) {
        return false;
    } else {
        return true;
    }
}


