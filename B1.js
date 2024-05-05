// 0 1 4 9 16 25 36 49 64 81 100 dst
// Deret dengan selisih bilangan kudrat

function deretKuadrat(n) {
  let result = "";
  let i = 0;
  let num = 0;

  while (i < n) {
    result += num * num + " ";
    num++;
    i++;
  }
  console.log("result", result);
}

deretKuadrat(10);
