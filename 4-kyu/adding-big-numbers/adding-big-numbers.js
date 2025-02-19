function add(a, b)
{
  let arr = [];
  let lena = a.length - 1;
  let lenb = b.length - 1;
  let carry = 0;
  while (lena >= 0 || lenb >= 0 || carry)
    {
      const numa = lena >= 0 ? Number(a[lena]) : 0;
      const numb = lenb >= 0 ? Number(b[lenb]) : 0;
      arr.unshift(((numa + numb + carry) % 10))
      carry = numa + numb + carry > 9 ? 1 : 0;
      lena --;
      lenb --;
    }
  return (arr.join(''));
}