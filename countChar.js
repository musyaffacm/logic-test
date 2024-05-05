// Diberikan sebuah paragraf sebagai berikut, hitunglah berapa jumlah setiap karakter/huruf yang ada dalam paragraf tersebut:
// "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

function countChars(str = "") {
  let result = {};

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
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

const exampleString =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
countChars(exampleString);
