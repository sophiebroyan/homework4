// string includes

function includes(text, word) {
    let subString = '';
    for (let i in text) {
      if (text[i] !== ' ') {
        subString += text[i];
      } else {
        if (subString === word) {
          return true;
        }
        subString = '';
      }
      if (i == text.length - 1 && subString === word) {
        return true;
      }
    }
    return false;
  }
  console.log(includes('', ''));
  