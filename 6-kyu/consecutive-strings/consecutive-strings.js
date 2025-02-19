function longestConsec(strarr, k)
{
  let size = 0;
  let str = '';
  if (k < 0)
    return str;
  for (let i = 0; (i + k - 1) < strarr.length; i ++)
    {
      const arr = strarr.slice(i, i + k);
      if (arr.join('').length > size)
        {
          str = arr.join('');
          size = str.length;
        }
    }
  return str;
}