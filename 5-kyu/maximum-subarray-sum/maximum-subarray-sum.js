function maxSequence(arr)
{
  let positive = false; 
  if (!arr.length)
    return (0)
  let size = arr[0];
  for (let i = 0; i < arr.length; i ++)
    {
      let total = 0;
      for (let j = i; j < arr.length; j ++)
        {
          if (arr[j] >= 0)
            positive = true;
          total = total + arr[j];
          if (total > size)
              size = total;
        }
    }
  return !positive ? 0 : size;
}