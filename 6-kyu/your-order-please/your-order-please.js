function order(words)
{
  const arr = new Array(words.split(" ").length);
  words.split(" ").forEach(word => arr[Number(word.match(/\d/)) - 1] = word);
  return arr.join(" ");
}