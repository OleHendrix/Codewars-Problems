function checkLeft(results, i, j) {
  const color = results[i][j];
  for (let k = 1; k < 4; k++) {
    if (i - k < 0 || j < 0 || j >= results[i - k].length) return false;
    if (results[i - k][j] != color) return false;
  }
  return true;
}
​
function checkRight(results, i, j) {
  const color = results[i][j];
  for (let k = 1; k < 4; k++) {
    if (i + k >= results.length || j < 0 || j >= results[i + k].length) return false;
    if (results[i + k][j] != color) return false;
  }
  return true;
}
​
function checkLeftDiagonal(results, i, j) {
  const color = results[i][j];
  for (let k = 1; k < 4; k++) {
    if (i - k < 0 || j + k >= results[i - k].length) return false;
    if (results[i - k][j + k] != color) return false;
  }
  return true;
}
​
function checkRightDiagonal(results, i, j) {
  const color = results[i][j];
  for (let k = 1; k < 4; k++) {
    if (i + k >= results.length || j + k >= results[i + k].length) return false;
    if (results[i + k][j + k] != color) return false;
  }
  return true;
}
​
function checkUp(results, i, j) {
  const color = results[i][j];
  for (let k = 1; k < 4; k++) {
    if (j + k >= results[i].length) return false;
    if (results[i][j + k] != color) return false;
  }
  return true;
}
​
function checkResults(results) {
  for (let i = 0; i < 7; i++) {
    for (let j = 0; j < results[i].length; j++) {
      if (