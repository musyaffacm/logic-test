// 0 1 1 2 3 5 8 13 21 34 55 dst...
// Deret angka fibonaci

function deretFibonacci(n) {
  let result = "";
  let x = 0;
  let y = 1;

  for (let index = 0; index < n; index++) {
    result += x + " ";
    let temp = x + y;
    x = y;
    y = temp;
  }
  console.log("result", result);
}
deretFibonacci(11)