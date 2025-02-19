function factorial(n)
{
  if (n < 0)
    return null;
  if (n === 0)
    return "1";
  let str = "1";
  for (let i = 1; i <= n; i ++)
    {
      const factor = i.toString();
      let new_str = new Array(str.length + factor.length).fill(0);
      let len1 = factor.length - 1;
      let offset = 0;
      while (len1 >= 0)
        {
          let len3 = new_str.length - 1 - offset;
          let len2 = str.length - 1;
          while (len2 >= 0)
            {
              sum = Number(factor[len1]) * Number(str[len2]);
              const temp = new_str[len3];
              new_str[len3] = (new_str[len3] + sum) % 10;
              new_str[len3 - 1] = new_str[len3 - 1] + Math.floor((temp + sum) / 10);
              len2 --;
              len3 --;
            }
          offset ++;
          len1 --;
        }
      str = new_str.join('').replace(/^0+/, '');
    }
  return (str);
}