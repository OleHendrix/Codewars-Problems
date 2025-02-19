function topThreeWords(text)
{
  let arr = text.trim().toLowerCase().split(" ").filter(word => word.trim() !== "");
  let i = 0;
  let leng = arr.length;
​
  while (i < leng) {
    for (let j = 0; j < arr[i].length; j++) {
      if (/^[a-zA-Z]$/.test(arr[i][j]) === false && arr[i][j] !== '\'') {
        let arr2 = arr[i].split(arr[i][j]).filter(sub => sub.trim() !== "");
        arr.splice(i, 1);
        arr.splice(i, 0, ...arr2);
        leng = arr.length;
        i = -1;
        break;
      }
    }
    i++;
  }
​
  let words = [];
  for (let k = 0; k < arr.length; k++) {
    let found = false;
    for (let l = 0; l < words.length; l++) {
      if (words[l][0] === arr[k]) {
        words[l].push(arr[k]);
        found = true;
        break;
      }
    }
    if (!found)
      words.push([arr[k]]);
  }
​
  let topwords = words
    .sort((a, b) => {
      if (b.length !== a.length) return b.length - a.length;
      return a[0].localeCompare(b[0]);
    })
    .map((arr) => arr[0])
    .filter(word => word.trim() !== "") 
    .filter(word => !/^'+$/.test(word));
​
  return topwords.slice(0, 3);
}
​