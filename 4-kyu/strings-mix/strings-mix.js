function checkS2(s2, character)
{
  let countStringS2 = '';
  for (let i = 0; i < s2.length; i++)
    {
      if (s2[i] === character)
        countStringS2 += `${character}`;
    }
  return countStringS2;
}
​
function checkLast(s2, arr, used)
{
  for (let i = 0; i < s2.length - 1; i ++)
    {
      if (s2[i] === s2[i].toLowerCase() && s2[i] != s2[i].toUpperCase() && !used.includes(s2[i]))
        {
          let countStringS2 = `${s2[i]}`;
          for (let k = i + 1; k < s2.length; k++)
            {
              if (s2[k] === s2[i])
                countStringS2 += `${s2[i]}`;
            }
          if (countStringS2.length > 1)
            arr.push(`/2:${countStringS2}`)
          used.push(s2[i]);
        }
    }
  return arr;
}
​
function mix(s1, s2) 
{
  let arr = [];
  let used = [];
  for (let i = 0; i < s1.length - 1; i++)
    {
      if (s1[i] === s1[i].toLowerCase() && s1[i] != s1[i].toUpperCase() && !used.includes(s1[i]))
        {
          let countStringS1 = `${s1[i]}`;
          for (let k = i + 1; k < s1.length; k++)
            {
              if (s1[k] === s1[i])
                countStringS1 += `${s1[i]}`;
            }
          let countStringS2 = checkS2(s2, s1[i]);
          if (countStringS1.length > 1 || countStringS2.length > 1)
            {
              if (countStringS1.length > countStringS2.length)