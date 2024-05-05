// 0 0 1 2 4 7 12 20 33 54
// Deret dengan selisih angka fibonacci

function fibonacci(n) {
  let x = 0;
  let y = 1;
  let diff = 0;

  for (let index = 0; index < n; index++) {
    diff = x + y;
    x = y;
    y = diff;
  }
  return x;
}

function deret(n) {
  let num = 0;
  let result = "";
  for (let index = 0; index < n; index++) {
    result += num + " ";
    num += fibonacci(index);
  }
  console.log("result", result);
}

deret(10);
