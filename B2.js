// 1 2 5 10 17 26 37 50 65 82 dst... 
// deret dengan selisih angka ganjil
function deretPola1(n) {
  let result = "";
  let num = 1;
  let diff = 1;

  for (let index = 0; index < n; index++) {
    result += num + " ";
    num += diff;
    diff += 2;
  }
  console.log("result", result);
}

deretPola1(10);
