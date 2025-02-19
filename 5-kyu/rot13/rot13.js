function rot13(str)
{
  const ROT = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  let new_str = '';
  for (let i = 0; i < str.length; i ++)
    {
      const j = ROT.indexOf(str[i]);
      if (j != -1)
        {
      if (j < 13 || (j > 25 && j < 39))
          new_str += ROT[j + 13];
      else if ((j > 12 && j < 26) || j > 38)
          new_str += ROT[j - 13];
        }
      else
        new_str += str[i];
    }
  return new_str;
}