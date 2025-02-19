function findEvenIndex(arr)
{
  for (let i = 0; i < arr.length; i ++)
    {
      let suml = 0, sumr = 0;
      
      for (let j = 0; j < i; j ++)
        {
          suml += arr[j];
        }
      for (let k = i + 1; k < arr.length; k ++)
        {
          sumr += arr[k];
        }
      if (suml == sumr)
        {
        return (i);
        }
    }
  return (-1);
}