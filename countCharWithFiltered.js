// Diberikan sebuah paragraf sebagai berikut, hitunglah berapa jumlah setiap karakter/huruf yang ada dalam paragraf tersebut: 
// "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." 

// Sintaks ini dibuat karena kalimat "karakter/huruf" di soal sedikit ambigu
// Spasi dan tanda baca sudah pasti karakter dalam pemrograman
// Namun di beberapa sumber Spasi dan tanda baca tidak termasuk huruf

function countChars(str = "") {
  let result = {};
  const filteredString = filterString(str);

  for (let i = 0; i < filteredString.length; i++) {
    let char = filteredString[i];
    if (result[char]) {
      result[char]++;
    } else {
      result[char] = 1;
    }
  }

  for (let keyChar in result) {
    console.log(keyChar, ":", result[keyChar]);
  }
}

function filterString(str) {
  const char = "abcdefghijklmnopqrstuvwxyz";
  const lowercasedChar = str.toLowerCase();
  let result = "";

  for (let i = 0; i < lowercasedChar.length; i++) {
    for (let x = 0; x < char.length; x++) {
      if (lowercasedChar[i] === char[x]) {
        result = result + lowercasedChar[i];
      }
    }
  }

  return result;
}

const exampleString =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
countChars(exampleString);
