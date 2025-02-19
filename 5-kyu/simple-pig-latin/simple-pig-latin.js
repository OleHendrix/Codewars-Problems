function pigIt(str)
{
  let string = str.split(" ").map(word => {if (/[a-zA-Z]/.test(word)) {return word + (word[0] + 'ay')} else if (word) {return word}});
  string = string.map(word => {if (word && /[a-zA-Z]/.test(word)) {return word.slice(1)} else if (word) {return word}});
  return string.join(" ");
}