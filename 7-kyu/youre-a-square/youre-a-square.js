var isSquare = function(n)
{
  if (n < 0)
    return (false);
  if (n === 0 || n === 1)
    return (true);
  for (let i = 0; i <= n / 2; i ++)
    {
      if (i * i === n)
        return (true);
    }
  return (false)
}